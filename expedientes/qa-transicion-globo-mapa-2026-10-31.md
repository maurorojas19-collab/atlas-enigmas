# TELLUS | EL ATLAS · Auditoría técnica: transición globo → mapa

**Fecha:** 31 de octubre de 2026  
**Origen:** reporte del director sobre salto brusco de zoom/transición al usar iPhone.
**Archivo intervenido:** `index.html`.  
**Commit:** `2104cb21bbce57f13f36f49fb44060b6b4497957`.

## Diagnóstico realizado sobre el código real

El motor incluye un globo canvas de respaldo, MapLibre GL y una superficie geográfica de teselas para contingencias. Antes del cambio:

- El globo podía pasar de un zoom interno de 1,28 a 1,08 en el mismo gesto que activaba el mapa de teselas, provocando una contracción visual súbita.
- La entrada en el mapa de contingencia imponía zoom 3,25 independientemente del ancho de la pantalla. En iPhone esto producía una diferencia grande de escala entre el globo y las teselas.
- El fundido/globo usaba escala final 1,30 y opacidad interpolada durante unos 1250 a 1500 ms, que aumentaban el trabajo visual y la sensación de cambio artificial.
- MapLibre iniciaba su propio cambio al terminar de cargar teselas, sin coordinarse plenamente con dedos activos sobre el globo ni con el mapa de contingencia.

## Correcciones aplicadas

1. Eliminar la reducción súbita del zoom del globo al activar el detalle, y bloquear solicitudes repetidas durante el fundido.
2. Calcular el zoom inicial del detalle a partir del ancho renderizado del globo y permitir entrada cartográfica desde nivel 1,7, evitando el salto fijo a 3,25.
3. Suavizar la interpolación de opacidad y escala, con transiciones de 520–580 ms y retirada del globo alrededor de 650 ms; respetar `prefers-reduced-motion`.
4. Coordinar la toma de control de MapLibre: exigir teselas listas, esperar a que termine el gesto táctil y evitar el traspaso mientras esté activo el mapa de contingencia.
5. Exigir al menos una tesela central válida antes de mostrar el detalle, para reducir los cuadros vacíos.
6. Recuperar el estado del globo y volver a intentar el traspaso a MapLibre al salir del mapa de contingencia.

## Verificación realizada

- Se leyó y modificó `main:index.html` directamente en GitHub.
- Se verificó sintaxis JavaScript de todo el script principal mediante compilación estática.
- Se comprobó preservación exacta del arreglo de 18 lugares y del archivo de textura del globo.
- Render registró el commit `2104cb2` como despliegue `live` del sitio `tellus-atlas`.

## Verificaciones pendientes, no presentar como realizadas

- Prueba de gestos reales en Safari de iPhone (pellizcar, arrastrar, zoom repetido y vuelta al globo).
- Prueba en Safari escritorio, Chrome de escritorio y distintos tamaños de pantalla.
- Comprobación visual con red lenta o teselas que fallen, y medición de cuadros por segundo.
- Revisión de la transición bajo conexiones con MapLibre disponible y sin MapLibre.
- Regression test táctil para marcadores próximos, favoritos, búsqueda, modo satélite/mapa y lectura de reportajes.

**Estado editorial/técnico:** corrección publicada, **QA visual móvil pendiente**. No afirmar una experiencia 10/10 hasta observarla realmente.
