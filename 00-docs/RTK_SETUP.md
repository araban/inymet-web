# RTK — Guía de instalación y configuración para el equipo

**RTK (Rust Token Killer)** es un proxy de CLI que intercepta los comandos Bash antes de que lleguen al contexto del LLM, filtrando ruido y comprimiendo la salida. El resultado práctico: **60–90% menos tokens** en operaciones comunes de desarrollo (`git diff`, `npm run build`, `tsc`, etc.) sin cambiar ningún flujo de trabajo.

**Versión documentada:** v0.37.2  
**Repositorio:** https://github.com/rtk-ai/rtk  

---

## Índice

1. [Cómo funciona](#1-cómo-funciona)
2. [Prerequisitos](#2-prerequisitos)
3. [Instalación — macOS / Linux](#3-instalación--macos--linux)
4. [Instalación — Windows](#4-instalación--windows)
5. [Configurar el hook en Claude Code](#5-configurar-el-hook-en-claude-code)
6. [Verificar que todo funciona](#6-verificar-que-todo-funciona)
7. [Comandos de uso diario](#7-comandos-de-uso-diario)
8. [Filtros personalizados](#8-filtros-personalizados)
9. [Desinstalación](#9-desinstalación)
10. [Solución de problemas](#10-solución-de-problemas)

---

## 1. Cómo funciona

RTK se integra mediante un **hook `PreToolUse`** de Claude Code. Cada vez que Claude ejecuta un comando Bash, el hook intercepta la llamada, la pasa por RTK para comprimir la salida, y le devuelve a Claude solo la información relevante. El proceso es completamente transparente: ni Claude ni tú ven la reescritura.

```
Claude decide ejecutar: git status
        ↓
Hook PreToolUse intercepta
        ↓
RTK recibe la salida completa de git status
        ↓
RTK filtra ruido, agrupa, deduplica
        ↓
Claude recibe salida comprimida (–75% tokens)
```

RTK no modifica ningún archivo ni comportamiento del proyecto. Solo actúa sobre la **salida de los comandos** antes de que entren al contexto del modelo.

---

## 2. Prerequisitos

- **Claude Code** instalado y funcionando (CLI o app de escritorio)
- **Git** instalado (para `gh` en la instalación de Windows)
- **GitHub CLI (`gh`)** instalado — solo necesario en Windows para descargar el binario
- Acceso de escritura a `~/.claude/settings.json`

No se requiere Rust ni ninguna dependencia adicional. RTK es un binario estático sin dependencias.

---

## 3. Instalación — macOS / Linux

### Opción A — Script de instalación (recomendada)

```bash
curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh
```

El script detecta el sistema operativo y la arquitectura, descarga el binario correcto y lo coloca en `~/.local/bin/`. Si ese directorio no está en tu PATH, el script lo indica al final. En ese caso, agrega esta línea a tu `~/.bashrc` o `~/.zshrc`:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

Luego recarga el shell:

```bash
source ~/.bashrc    # bash
source ~/.zshrc     # zsh
```

### Opción B — Homebrew (macOS)

```bash
brew install rtk
```

### Opción C — Cargo (Rust)

Si tienes Rust instalado:

```bash
cargo install --git https://github.com/rtk-ai/rtk
```

---

## 4. Instalación — Windows

> El script `install.sh` **no funciona en Windows**. El proceso requiere descargar manualmente el binario `.exe` desde los releases de GitHub.

### Paso 4.1 — Crear directorio `~/bin` si no existe

Abre **PowerShell** (no hace falta modo administrador):

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\bin"
```

### Paso 4.2 — Agregar `~/bin` al PATH del sistema (si aún no está)

Verifica si ya está en tu PATH:

```powershell
$env:PATH -split ";" | Select-String "\\bin$"
```

Si no aparece `C:\Users\<TuUsuario>\bin`, agrégalo permanentemente:

```powershell
$currentPath = [Environment]::GetEnvironmentVariable("PATH", "User")
$newPath = "$currentPath;$env:USERPROFILE\bin"
[Environment]::SetEnvironmentVariable("PATH", $newPath, "User")
```

**Cierra y vuelve a abrir la terminal** para que el nuevo PATH tome efecto.

### Paso 4.3 — Descargar el binario de Windows

Con GitHub CLI instalado, ejecuta desde **Git Bash** o **PowerShell**:

```bash
# Git Bash
gh release download v0.37.2 --repo rtk-ai/rtk --pattern "rtk-x86_64-pc-windows-msvc.zip" --dir /tmp
unzip -o /tmp/rtk-x86_64-pc-windows-msvc.zip rtk.exe -d ~/bin/
```

```powershell
# PowerShell
gh release download v0.37.2 --repo rtk-ai/rtk --pattern "rtk-x86_64-pc-windows-msvc.zip" --dir "$env:TEMP"
Expand-Archive -Path "$env:TEMP\rtk-x86_64-pc-windows-msvc.zip" -DestinationPath "$env:USERPROFILE\bin" -Force
```

> **Nota sobre versiones:** Sustituye `v0.37.2` por la última versión estable. Consulta los releases disponibles con:
> ```bash
> gh release list --repo rtk-ai/rtk --limit 5
> ```

### Paso 4.4 — Verificar que el binario responde

Abre una **nueva terminal** (para que el PATH actualizado esté activo):

```bash
rtk --version
# Salida esperada: rtk 0.37.2
```

Si obtienes `command not found`, revisa el Paso 4.2 y confirma que la terminal fue reabierta.

---

## 5. Configurar el hook en Claude Code

Una vez que el binario está instalado y accesible desde PATH, hay dos opciones para configurar el hook.

### Opción A — Automática con `rtk init` (recomendada)

```bash
rtk init -g --auto-patch
```

Este comando hace tres cosas:
1. Crea `~/.claude/RTK.md` con instrucciones de uso para Claude
2. Agrega `@RTK.md` al final de `~/.claude/CLAUDE.md` (instrucciones globales)
3. Escribe el hook en `~/.claude/settings.json`

El flag `--auto-patch` es importante: sin él, en entornos no-interactivos (como terminales de CI o scripts), el comando pide confirmación y no modifica el archivo.

### Opción B — Manual (si el auto-patch falla)

Abre `~/.claude/settings.json` en cualquier editor. Si el archivo no existe, créalo. Agrega o fusiona el bloque `hooks`:

```json
{
  "autoUpdatesChannel": "latest",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "rtk hook claude"
          }
        ]
      }
    ]
  }
}
```

> Si ya tienes otras entradas en `PreToolUse`, **agrega el objeto RTK al array existente**, no reemplaces el array completo.

### Paso final — Reiniciar Claude Code

El hook solo toma efecto después de reiniciar Claude Code completamente (cierra y vuelve a abrir la app o la sesión del CLI).

---

## 6. Verificar que todo funciona

Ejecuta estos tres comandos en orden:

```bash
# 1. Confirmar versión del binario
rtk --version

# 2. Verificar integridad del hook
rtk verify

# 3. Confirmar que el tracking de ahorro funciona
rtk gain
```

Salida esperada de `rtk verify`:

```
PASS  native binary hook registered in settings.json
      command: rtk hook claude
145/145 tests passed
```

Si `rtk verify` pasa y `rtk gain` responde (aunque con 0% al inicio), el setup es correcto. Los ahorros empiezan a acumularse con el uso.

---

## 7. Comandos de uso diario

Todos estos comandos se ejecutan directamente en la terminal. No es necesario invocarlos desde Claude — el hook los activa automáticamente cuando Claude usa Bash.

### Analítica de ahorro

```bash
# Resumen global de tokens ahorrados
rtk gain

# Historial detallado por comando
rtk gain --history

# Ahorro desglosado por sesión de Claude Code
rtk session

# Detectar comandos que NO están pasando por RTK (oportunidades perdidas)
rtk discover

# Analizar solo el proyecto actual (últimos 30 días)
rtk discover --since 30

# Analizar todos los proyectos
rtk discover --all
```

### Diagnóstico

```bash
# Verificar integridad del hook y pasar todos los tests internos
rtk verify

# Ver cómo RTK reescribiría un comando específico (sin ejecutarlo)
rtk rewrite "git diff HEAD~1"

# Ejecutar un comando SIN filtrado (para comparar salida original vs comprimida)
rtk proxy git log --oneline -20

# Ver configuración activa
rtk config
```

### Comandos explícitos (sin hook)

Aunque el hook los invoca automáticamente, también puedes llamarlos directo:

```bash
rtk git status
rtk tsc
rtk next build
rtk prisma migrate status
rtk npm run build
rtk lint
rtk test -- --run
```

---

## 8. Filtros personalizados

RTK permite definir filtros adicionales para comandos propios del proyecto o herramientas que no están en su lista por defecto.

### Filtros globales (aplican a todos tus proyectos)

Archivo: `%APPDATA%\rtk\filters.toml` (Windows) o `~/.config/rtk/filters.toml` (Linux/macOS)

```toml
schema_version = 1

[filters.inymet-dev]
description = "Suprimir output de Next.js dev server en comandos de build"
match_command = "^next\\b"
strip_ansi = true
strip_lines_matching = [
  "^\\s*$",
  "^- Local:",
  "^- Network:",
  "^Ready in"
]
max_lines = 50
```

### Filtros locales por proyecto

Crea `.rtk/filters.toml` en la raíz del proyecto. Los filtros locales tienen prioridad sobre los globales.

```bash
# Dentro del proyecto, autorizar los filtros locales (medida de seguridad de RTK)
rtk trust
```

### Estructura de un filtro

```toml
[filters.nombre-unico]
description  = "Descripción legible"
match_command = "^comando-regex\\b"   # regex contra el comando completo
strip_ansi   = true                   # eliminar códigos de color ANSI
strip_lines_matching = ["^patrón1", "^patrón2"]  # líneas a eliminar (regex)
max_lines    = 100                    # truncar si supera N líneas
deduplicate  = true                   # colapsar líneas repetidas con conteo
```

---

## 9. Desinstalación

```bash
# Eliminar hook, RTK.md y referencia en CLAUDE.md
rtk init -g --uninstall

# Eliminar el binario (Windows Git Bash)
rm ~/bin/rtk.exe

# Eliminar el binario (macOS/Linux)
rm ~/.local/bin/rtk

# Eliminar configuración y filtros (Windows PowerShell)
Remove-Item -Recurse "$env:APPDATA\rtk"

# Eliminar configuración y filtros (macOS/Linux)
rm -rf ~/.config/rtk
```

---

## 10. Solución de problemas

### `rtk: command not found` después de instalar

1. Confirma que el binario está en la ruta correcta:
   ```bash
   ls ~/bin/rtk.exe          # Windows
   ls ~/.local/bin/rtk       # Linux/macOS
   ```
2. Confirma que ese directorio está en PATH:
   ```bash
   echo $PATH | tr ':' '\n' | grep bin
   ```
3. Si falta, abre una nueva terminal o ejecuta `source ~/.bashrc`.

---

### `rtk gain` falla con error sobre `reachingforthejack/rtk`

Existe otro paquete npm llamado `rtk` (Rust Type Kit). Si lo tienes instalado, hay un conflicto de nombres.

```bash
# Verificar qué rtk se está ejecutando
which rtk
rtk --version   # debe decir "rtk X.Y.Z", no algo de TypeScript

# Si es el incorrecto, verifica el orden de tu PATH
# El directorio con rtk-ai/rtk debe aparecer ANTES que node_modules/.bin
```

---

### `rtk verify` falla: hook no registrado

El `settings.json` no tiene el hook o tiene un error de sintaxis. Abre el archivo y verifica que el JSON es válido:

```bash
# Validar JSON (requiere Node.js)
node -e "JSON.parse(require('fs').readFileSync(require('os').homedir() + '/.claude/settings.json', 'utf8')); console.log('JSON válido')"
```

Si hay error, revisa que no falten comas ni corchetes. Luego vuelve a ejecutar:

```bash
rtk init -g --auto-patch
```

---

### El hook existe pero los tokens no disminuyen

1. Confirma que reiniciaste Claude Code después de modificar `settings.json`.
2. Ejecuta `rtk discover` para ver si los comandos están pasando por el hook.
3. Ejecuta un comando de prueba desde Claude y luego `rtk gain --history` para ver si apareció.

---

### En Windows: el binario descargado no ejecuta

Si Windows Defender bloquea el `.exe`:

1. Ve a **Configuración → Seguridad de Windows → Protección contra virus y amenazas → Historial de protección**
2. Busca la alerta sobre `rtk.exe` y selecciona **Permitir**
3. O agrega una exclusión para `%USERPROFILE%\bin\rtk.exe`

Alternativamente, verifica la firma del binario en los `checksums.txt` del release:

```powershell
gh release download v0.37.2 --repo rtk-ai/rtk --pattern "checksums.txt" --dir "$env:TEMP"
Get-Content "$env:TEMP\checksums.txt" | Select-String "windows"
(Get-FileHash "$env:USERPROFILE\bin\rtk.exe" -Algorithm SHA256).Hash
```

Ambos hashes deben coincidir.
