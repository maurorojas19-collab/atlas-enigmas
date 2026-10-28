# TELLUS | EL ATLAS

Museo digital de exploración histórica, arqueología, ciencia y lugares extraordinarios. **TELLUS** es el nombre público del proyecto; **EL ATLAS**, su experiencia de exploración. Lema: **La Tierra guarda historias.**

## Sitio publicado
https://tellus-atlas.onrender.com

- **Dirección oficial:** `https://tellus-atlas.onrender.com` (servicio de Render `tellus-atlas`).
- **Servicio anterior:** `https://tellus-uolq.onrender.com` (provisional, aún conservado).
- **Respaldo:** https://atlas-enigmas.onrender.com (servicio conservado como `atlas-enigmas-respaldo`).

- **Repositorio:** maurorojas19-collab/atlas-enigmas
- **Rama de publicación:** main
- **Hosting:** Render Static Site, publicación automática desde main
- **Versión inicial:** 0.2, publicada el 28 de octubre de 2026

## Funciones
- Globo interactivo con marcadores y vista de respaldo.
- Sombreado de día/noche geográfico calculado mediante la posición aproximada del Sol.
- Reloj de Santiago y hora local de los destinos.
- Quince destinos iniciales, buscador y filtros.
- Artículos históricos y fuentes iniciales.
- Favoritos, visitados y apartado personal “Mi huella en este lugar”.
- Fotos personales en IndexedDB, notas y fechas en localStorage: **solo en este navegador**, no se sincronizan con cuentas ni se publican al servidor.
- Personalización local del rótulo en la biblioteca clásica; la marca pública oficial es TELLUS.

## Privacidad
Aunque esta web tenga una dirección pública, los recuerdos y fotografías añadidos en cada navegador permanecen en ese navegador. No hay cuentas ni copia de seguridad en la nube. Limpiar los datos del navegador o cambiar de dispositivo puede borrar los recuerdos. Para utilizarla como archivo permanente hay que incorporar autenticación, almacenamiento privado y exportación de respaldo antes de confiarle fotografías importantes.

## Estructura
La versión 0.2 está desplegada como **index.html autocontenido** para simplificar la publicación inicial. Contiene el CSS, datos editoriales, lógica de interfaz e imagen ilustrada de respaldo. MapLibre y los mapas/fotos externos requieren Internet. Antes de escalar a cientos de destinos conviene dividir en módulos de UI, datos y estilos.

## Próximas versiones
- Añadir progresivamente lugares y artículos con rigor histórico, fotografías con licencia comprobada y referencias trazables.
- Revisar cada artículo antes de presentarlo como investigación exhaustiva.
- Implementar exportación de recuerdos y, opcionalmente, una cuenta privada.
- Mantener los enlaces de `tellus-atlas.onrender.com` y conservar los servicios anteriores como respaldo hasta decidir si se desea otra URL gratuita de Render.
- Revisar rendimiento de globo y vista móvil en dispositivos reales.

La experiencia inmersiva está en `inmersion.html` y el primer reportaje independiente en `seti-i.html`. Los cambios en `main` se despliegan automáticamente según la configuración actual documentada.
