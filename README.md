# Cusco Travel Helper

Herramienta independiente de asistencia para viajes y traslados privados en Cusco, Peru.

**Version actual:** MVP v0.2

## Proposito

Cusco Travel Helper es un MVP estatico, mobile-first y bilingue (EN/ES) disenado para ayudar a turistas en Cusco a solicitar cotizaciones de transporte privado por WhatsApp. Tambien ofrece revision de itinerarios y asistencia logistica para Machu Picchu como linea secundaria.

Este proyecto es una herramienta de validacion de demanda. No es un marketplace, ni una agencia turistica, ni un sistema de reservas confirmadas, ni una plataforma de pagos.

## Estructura de archivos

```
/
  index.html          Pagina principal unica
  styles.css          Estilos premium, mobile-first
  script.js           Logica de cotizador, traduccion, WhatsApp, GA4
  data/
    routes.json       Rutas populares con datos logisticos
    products.json     Productos de revision de itinerario
    rules.json        Reglas del cotizador
  README.md           Este archivo
```

## Numero de WhatsApp

El numero configurado actualmente es: **+51 986128511**

Para cambiarlo:

1. Abre `script.js`
2. Busca la linea:
   ```js
   const WHATSAPP_NUMBER = "51986128511";
   ```
3. Reemplaza `51986128511` con tu numero de WhatsApp completo, incluyendo codigo de pais sin el signo +.
   Ejemplo: `"51987654321"`
4. El numero se usa automaticamente en todos los botones y mensajes del sitio.

Tambien actualiza el numero visible en `index.html`:
- Linea del boton de WhatsApp en el header
- Linea del footer (texto visible y enlace)

## Como cambiar el ID de Google Analytics 4

1. Abre `index.html`
2. Busca las dos lineas que contienen:
   ```
   G-XXXXXXXXXX
   ```
3. Reemplaza `G-XXXXXXXXXX` con tu ID de medicion de GA4.
   Ejemplo: `G-ABC123DEF0`
4. Reemplaza en ambos lugares: la URL del script async y la llamada a `gtag('config', ...)`.

El sitio funciona correctamente aunque GA4 no este configurado. La funcion `trackEvent` solo envia eventos si `gtag` esta disponible.

## MVP v0.2 — Novedades

### Nuevos productos de Trip Checks

Se agregaron 3 productos secundarios para capturar turistas que ya tienen entradas o paquetes:

1. **Machu Picchu Logistics Check** (US$19)
   - Revision de entrada, circuito, tren, bus, guia, equipaje y retorno
   - Mensaje de WhatsApp especifico con campos predefinidos

2. **Tour Package Sanity Check** (US$19)
   - Revision de paquete turistico ya comprado
   - Incluye espacio para pegar el itinerario

3. **Full Cusco Plan** (Desde US$39)
   - Plan personalizado dia por dia
   - Basado en fechas, ritmo, intereses y logistica

Cada producto tiene:
- Su propio mensaje de WhatsApp predefinido
- CTAs independientes (primario y secundario)
- Evento GA4 especifico

### Campo "Trip type" en el cotizador

Se agrego un campo opcional: "What best describes your trip?"
- Opciones: Necesito un traslado / Ya compre Machu Picchu / Ya compre un paquete / Aun estoy planificando / No estoy seguro
- Se incluye en el mensaje de WhatsApp
- Dispara evento GA4: `trip_type_selected`

### Visuales SVG

Se agregaron visuales inline en SVG (no dependencias externas):

- **Hero**: Mapa de ruta abstracto con Cusco, aeropuerto, Valle Sagrado y Ollantaytambo
- **Trip Checks**: Ilustracion de checklist + ruta
- **Route cards**: Decoracion sutil en gradiente (CSS)

Todos los visuales son inline en el HTML. No se requieren archivos de imagen externos.

Para modificar los visuales, edita los elementos `<svg>` directamente en `index.html`.

### IDs de seccion preparados para futuras paginas

Las secciones usan IDs que podrian convertirse en rutas independientes:

- `#transfer-quote` → futura `/transfer-quote`
- `#routes` → futura `/routes`
- `#trip-checks` → futura `/trip-checks`
- `#machu-picchu-logistics` → futura `/machu-picchu-logistics`
- `#faq` → futura `/faq`

Rutas que aun no tienen seccion pero estan previstas:
- `/package-check`
- `/altitude-check`
- `/circuit-finder`

### Correcciones de espanol (v0.2)

Todo el contenido en espanol fue revisado y corregido:
- Tildes: cotizacion, logistica, vehiculo, preocupacion, numero, estacion, etc.
- Enes: senor → senor, manana → manana (contexto), annos → annos
- Signos de apertura: ¿ y ¡ en preguntas y exclamaciones
- Gramatica y naturalidad del texto

### Eventos GA4 disponibles

Eventos configurados en v0.2:

| Evento | Cuando se dispara |
|---|---|
| `language_changed` | Cambio de idioma EN/ES |
| `transfer_quote_started` | Clic en CTA principal de cotizacion |
| `transfer_quote_completed` | Envio exitoso del formulario |
| `whatsapp_click` | Clic en cualquier boton de WhatsApp |
| `route_selected` | Clic en una tarjeta de ruta popular |
| `trip_type_selected` | Cambio en el campo "tipo de viaje" |
| `itinerary_check_clicked` | Clic en "Check my itinerary" |
| `machu_picchu_check_clicked` | Clic en revision de Machu Picchu |
| `package_check_clicked` | Clic en revision de paquete |
| `full_plan_clicked` | Clic en plan completo |

## Como editar products.json

El archivo `data/products.json` contiene los productos de revision de itinerario. Cada producto tiene:

- `id`: identificador unico
- `name_en`, `name_es`: nombre del servicio
- `price`: precio visible (ej: `"US$19"` o `"From US$39"`)
- `description_en`, `description_es`: descripcion del servicio
- `includes_en`, `includes_es`: array con los items incluidos
- `cta_en`, `cta_es`: texto del boton principal
- `cta_secondary_en`, `cta_secondary_es`: texto del boton secundario
- `whatsapp_message_en`, `whatsapp_message_es`: mensaje completo para WhatsApp

Para cambiar un mensaje de WhatsApp de producto, edita `whatsapp_message_en` o `whatsapp_message_es`.

## Como editar routes.json

El archivo `data/routes.json` contiene las rutas populares. Cada ruta es un objeto con estos campos:

- `id`: identificador unico (sin espacios, usa guiones)
- `origin`: punto de origen (debe coincidir con las opciones del formulario)
- `destination`: punto de destino (debe coincidir con las opciones del formulario)
- `name_en`, `name_es`: nombre visible en cada idioma
- `estimated_time_en`, `estimated_time_es`: tiempo estimado del trayecto
- `logistics_level`: nivel de complejidad (`easy`, `moderate`, `high`)
- `suggested_vehicle_en`, `suggested_vehicle_es`: vehiculo recomendado
- `warning_en`, `warning_es`: advertencia logistica breve
- `tags`: array de etiquetas para uso futuro

Para agregar una ruta nueva, copia un objeto existente, cambia los valores y asegurate de que `origin` y `destination` existan en los select del formulario en `index.html`.

## Como editar rules.json

El archivo `data/rules.json` contiene las reglas que el cotizador evalua automaticamente. Cada regla tiene:

- `id`: identificador unico
- `conditions`: array de condiciones, cada una con `field` y `value`
- `logic`: actualmente se usa `"OR"` (si alguna condicion coincide, la regla se activa)
- `severity`: `"info"` o `"warning"`
- `message_en`, `message_es`: texto que aparece en el resultado

Las condiciones comparan el valor del campo del formulario. Campos disponibles: `origin`, `destination`, `travelers`, `luggage`, `vehicle`, `stops`, `pickup`, `concern`, `trip_date`, `trip_time`.

Para `travelers`, si el valor es numerico, la regla se activa cuando los viajeros son iguales o mayores al numero indicado.

Para `trip_time`, si el valor es `"early"`, la regla se activa cuando la hora es antes de las 6:00 AM.

## Como desplegar en Cloudflare Pages

1. Comprime todos los archivos en un archivo `.zip`:
   ```
   zip -r cusco-travel-helper.zip index.html styles.css script.js data/ README.md
   ```
   O en Windows, selecciona todos los archivos y carpetas y comprime.

2. Ve a [dash.cloudflare.com](https://dash.cloudflare.com) e inicia sesion.

3. Navega a "Pages" en el menu lateral.

4. Haz clic en "Create a project".

5. Selecciona "Upload assets" (opcion de carga directa).

6. Sube el archivo `.zip`.

7. Establece el nombre del proyecto, por ejemplo: `cuscotravelhelper`.

8. En "Build settings", selecciona **"None"** como framework preset. No necesitas comando de build.

9. El directorio de salida (output directory) dejalo vacio o como `/` (raiz).

10. Haz clic en "Save and Deploy".

11. Una vez desplegado, Cloudflare Pages te dara una URL como:
    `https://cuscotravelhelper.pages.dev`

12. Si tienes un dominio propio, configuralo en la seccion "Custom domains" del proyecto.

## Como probar el link de WhatsApp

1. Abre `index.html` localmente en tu navegador (doble clic en el archivo).

2. Completa el formulario de cotizacion y haz clic en "Generate my quote request".

3. En la tarjeta de resultado, haz clic en "Send request by WhatsApp".

4. El enlace debe abrir WhatsApp Web o la app de WhatsApp con el mensaje prellenado dirigido a +51 986128511.

5. Tambien puedes probar los botones de WhatsApp de las cards de productos en la seccion Trip Checks.

**Nota:** El numero de destino debe tener una cuenta de WhatsApp activa para que el enlace funcione. El prefijo `51` corresponde a Peru.

## Limitaciones del MVP

Este proyecto es intencionalmente limitado para validar demanda antes de construir funcionalidades mas complejas:

- **No hay pagos:** No se integran PayPal, Stripe, Culqi, Yape ni ningun otro sistema de pago.
- **No es un marketplace:** No hay listado comparativo de operadores ni calificaciones.
- **No hay reservas confirmadas:** Toda solicitud es una cotizacion por WhatsApp, no una reserva garantizada.
- **No hay proveedores verificados todavia:** Estamos en proceso de validacion de proveedores locales.
- **No vende tickets oficiales:** No se venden entradas a Machu Picchu, tickets de tren ni servicios confirmados.
- **No hay backend ni base de datos:** Toda la logica es frontend con archivos JSON estaticos.
- **No hay login ni cuentas de usuario:** El sitio es completamente anonimo.
- **No hay chatbot IA autonomo:** La comunicacion es directa por WhatsApp con una persona.
- **No hay app nativa:** Es una web estatica responsive.
- **No hay disponibilidad garantizada:** Toda disponibilidad debe confirmarse directamente con el proveedor.

## Notas tecnicas

- El sitio usa solo HTML, CSS y JavaScript puro. No requiere frameworks ni pasos de build.
- Funciona abriendo `index.html` directamente en cualquier navegador moderno.
- Compatible con Chrome, Firefox, Safari y Edge en versiones recientes.
- Disenado mobile-first con media queries para tablet y desktop.
- Los datos de rutas, productos y reglas se cargan via `fetch()` desde archivos JSON estaticos, con fallback inline para uso local (`file://`).
- El switch de idioma guarda la preferencia en `localStorage`.
- La funcion `trackEvent` envia eventos a GA4 solo si esta disponible, sin causar errores si no esta configurado.
- Los visuales son SVG inline, no requieren archivos externos ni dependencias.
- Todos los textos visibles estan traducidos via el objeto `translations` en `script.js`.
