# deleFOCO — Locaciones (Empresas + Particulares)

Esta entrega contiene **dos páginas HTML independientes**, ambas con todas las funciones de la landing original:

- `empresas.html` — versión exclusiva para Empresas.
- `particulares.html` — versión exclusiva para Particulares.
- `styles.css` — estilos compartidos.
- `script.js` — funcionalidades compartidas.

## Cambio entre audiencias

Los botones **Empresas / Particulares** siguen visibles en ambas páginas, pero ahora funcionan como navegación entre páginas independientes:

- Desde `empresas.html`, Particulares abre `particulares.html`.
- Desde `particulares.html`, Empresas abre `empresas.html`.

La página no cambia de audiencia internamente; cada URL tiene su propio contenido y estado.

## Funciones conservadas en ambas páginas

- Español / Inglés.
- Catálogo de locaciones.
- Filtros por tipo: Natural, Urbano, Interior, Industrial e Histórico.
- Modal de cada locación.
- Formulario con validación.
- Generación de solicitud y apertura de WhatsApp.
- Cambio de tema claro / oscuro.
- Diseño responsive.
- Accesibilidad y estados visuales.
- Navegación interna por Servicios, Locaciones, Proceso y Contacto.

## Tema

Ambas páginas **inician directamente en modo oscuro**, sin depender de una preferencia anterior.

El botón de tema permite cambiar a claro y volver a oscuro.

## Ejecución

No requiere Node ni instalación. Abrí `empresas.html` o `particulares.html` directamente en Chrome, Edge, Firefox o Safari.

Las imágenes del catálogo siguen utilizando las URLs remotas originales de `delefoco.com`.
