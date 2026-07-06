# Guía — Atender el chat del sitio desde el celular (HubSpot)
**Fecha:** 2026-07-06
**Contexto:** el chat en vivo de inymet.com.mx es el de HubSpot (portal 2870195). Esta guía cubre (A) automatizar la captura para que NO haga falta una persona en línea, y (B) atender conversaciones desde el celular cuando sí haya alguien.

---

## A. Que el chat se atienda solo (sin persona conectada)

### A.1 Opciones de IA — cuál aplica

| Opción | Qué es | Costo / requisito |
|---|---|---|
| **Breeze Customer Agent** (IA de HubSpot) | Agente de IA que responde con base en tu sitio y knowledge base | Requiere plan de pago + créditos Breeze. Verificar disponibilidad en tu portal: menú **Breeze** (o Automations → AI Agents). Si el plan es Free/Starter, normalmente no está incluido |
| **Bot de reglas de HubSpot** (chatflow) | Menús y preguntas predefinidas: captura nombre, correo y necesidad, y crea el contacto en el CRM. No es IA, pero atiende 24/7 | ✅ **Gratis** — disponible en todos los planes. Recomendado activarlo YA |
| **Eve** (chatbot propio con Claude, ya construido) | IA real con el conocimiento de INyMET (11 laboratorios, acreditación, folios) | Ya está desarrollado en el sitio; costo = centavos por conversación (API). Pendiente: guía de conocimiento validada + token HubSpot + rate limiting (ver PENDIENTES_PRODUCCION.md). **Es el plan a mediano plazo** |

**Recomendación:** activar hoy el bot de reglas (A.2) como red de seguridad 24/7, y migrar a Eve cuando la guía de conocimiento esté validada. Breeze solo si ya pagan un plan Pro (revisar en Account & Billing).

### A.2 Configurar el bot de captura (15 min, una vez — desde la web)
1. HubSpot → **Automations → Chatflows** (o Conversations → Chatflows).
2. Edita el chatflow del sitio web (el que muestra "¿Busca cotizar...?").
3. En **Build**, agrega pasos del bot:
   - Pregunta 1: "¿En qué le podemos ayudar?" con opciones: *Cotización de calibración* / *Venta de instrumentos* / *Estado de mi equipo* / *Otro*.
   - Pregunta 2: "¿Cuál es su nombre y empresa?" (captura a propiedad).
   - Pregunta 3: "¿Su correo electrónico?" (captura a `email` — esto **crea el contacto en el CRM automáticamente**).
   - Pregunta 4: "¿Su teléfono?" (captura a `phone`).
   - Mensaje final: "¡Gracias! Un especialista le contactará en menos de 24 horas hábiles. Si es urgente: (55) 5754-3087."
4. En **Target**: todas las páginas.
5. En **Display**, configura el comportamiento fuera de horario (ver A.3).

### A.3 Horario y mensaje de ausencia
1. HubSpot → **Conversations → Inbox → ⚙️ Inbox Settings → Channels → Chat**.
2. **Availability**: horario "Lun–Vie 8:00–18:00" (zona horaria: cambiarla — el portal está en US/Eastern, ponerla en America/Mexico_City).
3. **Away message**: "Nuestro horario es Lun–Vie 8:00–18:00. Déjenos sus datos y le contactamos mañana a primera hora."
4. Así el visitante SIEMPRE recibe respuesta y deja sus datos, haya o no alguien conectado.

---

## B. Atender el chat desde el celular

### B.1 Instalación (una vez)
1. Instala la app **HubSpot** (App Store / Google Play — es gratis).
2. Inicia sesión con tu usuario del portal INyMET.
3. Al entrar: permite **notificaciones push** cuando lo pida.
4. Verifica en la app: **Menú → Settings → Notifications** → activa "Conversations" (nuevo chat asignado, nuevo mensaje, visitante esperando).

### B.2 Flujo de atención diario
1. Te llega push: "Nuevo mensaje de chat en el sitio web".
2. Abre la notificación → caes directo en la conversación (pestaña **Inbox** de la app).
3. Si nadie la tiene asignada: toca **Assign → tú** (evita que dos personas respondan a la vez).
4. Responde como en cualquier mensajería. El visitante lo ve al instante en el sitio.
5. Al terminar: **✓ Close conversation** — si el bot capturó el correo, el contacto ya quedó en el CRM; agrega una nota si hubo compromiso ("enviar cotización de 3 multímetros").
6. Si el visitante dejó de responder: ciérrala igualmente; si dejó correo, dale seguimiento por email desde la misma conversación.

### B.3 Buenas prácticas
- **Primeros 5 minutos**: la probabilidad de conversión de un chat cae drásticamente después de 5 min sin respuesta — por eso las notificaciones push son clave.
- Estado personal: en la app puedes ponerte **Away** cuando no puedas atender (Inbox → tu avatar) — el chat pasa al flujo de ausencia en vez de dejar al visitante esperando.
- Mínimo 2 personas con la app instalada (mismo principio que los admins de LinkedIn: nunca una sola persona como punto de falla).
- Frases guardadas (**snippets**, se crean en la web): "#cotizacion" → "Con gusto. ¿Me comparte tipo de instrumento, cantidad y su correo?...", agilizan mucho desde el celular.

---

## Checklist
- [ ] Bot de captura configurado en el chatflow (A.2)
- [ ] Zona horaria del inbox en America/Mexico_City + horario + away message (A.3)
- [ ] App HubSpot instalada con push activo en ≥2 celulares (B.1)
- [ ] Snippets de respuestas frecuentes creados
- [ ] Decisión sobre IA: bot de reglas hoy → Eve al validar la guía de conocimiento (largo plazo)
