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


## Segunda intervención · 31-10-2026 · continuidad visual real

**Motivo:** el director confirmó que el primer ajuste del fundido no eliminaba la sensación de tosquedad en su iPhone.

**Nueva hipótesis contrastada con el código:** no bastaba reducir la escala o duración porque el canvas del globo, las teselas de respaldo y el globo WebGL MapLibre podían relevarse sin compartir centro óptico, zoom ni momento de carga; además, el respaldo podía imponerse mientras MapLibre seguía inicializándose.

**Cambios implementados:**
- Se mantiene como motor preferente la proyección `globe` de MapLibre para que el usuario avance de globo a mapa sin cambiar de motor cartográfico en mitad del gesto. MapLibre realiza la transición adaptativa de proyección en niveles altos de zoom.
- Antes de retirar el canvas inicial se ajusta la cámara de MapLibre usando el centro (latitud/longitud) y el tamaño visual del globo canvas, incluidos los desplazamientos verticales propios del diseño móvil.
- El relevo al mapa WebGL espera al evento `idle` tras el ajuste de cámara; no sucede durante el gesto táctil.
- Mientras MapLibre carga, la primera pinza no abre inmediatamente el mapa plano alternativo. Si no se dispone de teselas tras un plazo razonable, el sistema de respaldo sigue disponible.
- La transición alternativa usa una expansión circular desde la posición real del globo, evitando que aparezca de golpe un mapa plano a pantalla completa.
- Se añadió recuperación cuando el mapa WebGL no puede pintar la cámara nueva en un plazo de 3,5 segundos: el gesto no queda congelado.
- Se conservaron las 18 entradas geográficas y el texto de todas las expediciones.

**Commits:** `8fe00bf7433bd46672aba365fa8ed92eab97cf02` (arquitectura del relevo), `e704a02d846247a3e24dfa54081225bd0f40e0d4` (recuperación ante timeout).

**Pruebas completadas:** lectura de implementación real de GitHub; validación sintáctica JavaScript del documento; verificación de integridad del arreglo de destinos; despliegue `live` confirmado por Render.

**Pruebas que permanecen pendientes:** recorrido visual y táctil real en Safari/iPhone; reproducción de comportamiento con CDN lento, sin WebGL o red inestable; medición objetiva de FPS y continuidad de teselas; verificación en computador. El despliegue automático correcto no certifica por sí mismo la calidad perceptiva de una transición.
