# Cusco Travel Helper

Herramienta independiente de asistencia para viajes y traslados privados en Cusco, Peru.

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

## Como cambiar el numero de WhatsApp

1. Abre `script.js`
2. Busca la linea:
   ```js
   const WHATSAPP_NUMBER = "51XXXXXXXXX";
   ```
3. Reemplaza `51XXXXXXXXX` con tu numero de WhatsApp completo, incluyendo codigo de pais.
   Ejemplo: `"51987654321"`
4. El numero se usa automaticamente en todos los botones y mensajes del sitio.

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

## Como editar products.json

El archivo `data/products.json` contiene los productos de revision de itinerario. Cada producto tiene:

- `id`: identificador unico
- `name_en`, `name_es`: nombre del servicio
- `price`: precio visible (ej: `"US$19"` o `"From US$39"`)
- `description_en`, `description_es`: descripcion del servicio
- `includes_en`, `includes_es`: array con los items incluidos
- `whatsapp_intent_en`, `whatsapp_intent_es`: mensaje base para WhatsApp cuando el usuario muestra interes

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

1. Cambia `WHATSAPP_NUMBER` en `script.js` por un numero real de WhatsApp.

2. Abre `index.html` localmente en tu navegador (doble clic en el archivo).

3. Completa el formulario de cotizacion y haz clic en "Generate my quote request".

4. En la tarjeta de resultado, haz clic en "Send request by WhatsApp".

5. El enlace debe abrir WhatsApp Web o la app de WhatsApp con el mensaje prellenado.

6. Tambien puedes hacer clic en cualquier boton de WhatsApp de las cards de rutas o productos.

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
- Los datos de rutas, productos y reglas se cargan via `fetch()` desde archivos JSON estaticos.
- El switch de idioma guarda la preferencia en `localStorage`.
- La funcion `trackEvent` envia eventos a GA4 solo si esta disponible, sin causar errores si no esta configurado.
