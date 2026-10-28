# ATLAS · Los enigmas de nuestro mundo

Web personal de exploración histórica, arqueología y bitácora de viajes. El nombre **ATLAS** es temporal y puede cambiarse desde los ajustes de la web.

## Sitio publicado
https://atlas-enigmas.onrender.com

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
- Personalización local del nombre temporal.

## Privacidad
Aunque esta web tenga una dirección pública, los recuerdos y fotografías añadidos en cada navegador permanecen en ese navegador. No hay cuentas ni copia de seguridad en la nube. Limpiar los datos del navegador o cambiar de dispositivo puede borrar los recuerdos. Para utilizarla como archivo permanente hay que incorporar autenticación, almacenamiento privado y exportación de respaldo antes de confiarle fotografías importantes.

## Estructura
La versión 0.2 está desplegada como **index.html autocontenido** para simplificar la publicación inicial. Contiene el CSS, datos editoriales, lógica de interfaz e imagen ilustrada de respaldo. MapLibre y los mapas/fotos externos requieren Internet. Antes de escalar a cientos de destinos conviene dividir en módulos de UI, datos y estilos.

## Próximas versiones
- Añadir progresivamente lugares y artículos con rigor histórico, fotografías con licencia comprobada y referencias trazables.
- Revisar cada artículo antes de presentarlo como investigación exhaustiva.
- Implementar exportación de recuerdos y, opcionalmente, una cuenta privada.
- Elegir nombre definitivo, logo, dominio y metadatos.
- Revisar rendimiento de globo y vista móvil en dispositivos reales.

Para publicar cambios posteriores, actualiza `index.html` en `main`; Render desplegará automáticamente.
