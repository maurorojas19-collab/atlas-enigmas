# Entre líneas · Para Paula

Juego estático en español, sin instalación ni dependencias de ejecución. Abre `dist/index.html` para jugar, o sirve la carpeta `dist` con cualquier alojamiento estático HTTPS. Incluye rondas de diez acertijos, teclado físico y virtual, pistas, rendición confirmada, archivo de rondas, resultados compartibles sin spoilers, estadísticas locales y temas claro y oscuro.

## Contenido y calendario

120 acertijos de cuatro a nueve letras: 40 Suaves, 40 Intermedios y 40 Desafíos. Las longitudes se mezclan dentro de las rondas y siempre se indica cuántas letras tiene la respuesta. Suave usa señales más explícitas; Intermedio añade asociaciones y fragmentos; Desafío incorpora inversiones, inserciones, iniciales y asociaciones menos directas. La dificultad depende de las pistas y no de la longitud. Es una valoración editorial, pendiente de calibrar con partidas reales.

Los 120 acertijos se distribuyen en **12 rondas de 10: cuatro rondas por nivel**. Cada ronda muestra diez posiciones numeradas y un contador de completados. Al terminar los diez se muestra un resumen de aciertos, soluciones reveladas, pistas e intentos. **Jugar otra ronda de 10** lleva al siguiente bloque que todavía tenga pendientes. Se pueden jugar varias rondas por día.

**Dejar para después** salta a otro pendiente dentro de la misma ronda; no cuenta el acertijo omitido como terminado. **Tus rondas** permite cambiar de bloque y revisar soluciones anteriores. Al agotar los cuatro bloques de un nivel se informa, sin reiniciar ni reciclar contenido automáticamente.

La **Ronda sugerida** prioriza un bloque según el día de America/Santiago y omite los ya completados. No implica que se añadan diez acertijos nuevos cada día. Todos los modos comparten el progreso y guardan la posición de cada nivel para poder retomar una ronda. La medianoche no interrumpe la ronda activa. Las estadísticas cuentan rondas completadas, aciertos, pendientes y aciertos con ayuda.

Se conserva el historial anterior mediante `CONTENT_IDS`: cada respuesta existente mantiene su identidad aunque cambie de posición. Las rondas se reorganizaron para mezclar longitudes, por lo que pueden incluir nuevos pendientes junto a respuestas anteriores. Las posiciones guardadas se migran una sola vez. Para extender el catálogo, añade entradas en bloques completos de diez a `dist/puzzles.js` (Suave) y `dist/levels.js` (Intermedio y Desafío): respuesta sin tilde (conservando Ñ), pista, ayuda de mecanismo, orientación y explicación. Añade identidades nuevas a `CONTENT_IDS`; nunca reutilices una identidad para otra respuesta.

La revisión editorial está documentada en `REVISION-EDITORIAL.md`. Se ajustaron pistas o explicaciones de 86 de los 90 originales y se añadieron 30 acertijos; los 90 originales conservan sus respuestas. Se verifican letras, indicadores, definiciones y explicaciones. Las dobles definiciones requieren revisión semántica; no se certifican con un contador de letras.

El archivo y las respuestas son públicos en el código: es un juego casual, sin protección contra spoilers. La persistencia usa localStorage y corresponde a este navegador y origen; abrir otro archivo o dominio puede usar un historial diferente. Sin backend, cuentas ni analítica. Las fuentes se descargan de Google Fonts, con fuentes del sistema como alternativa sin conexión.

## Diseño

Identidad propia: Entre líneas, negro cálido, coral y tipografía editorial. Dedicatoria: «Para Paula, que siempre encuentra algo más». Inspiración de estructura y paleta: captura aportada y https://cripticando.com.ar/. No se reutilizaron su marca, textos de interfaz extensos ni acertijos.

Web: https://entre-lineas-paula.onrender.com. Código en la rama `paula-entre-lineas` de `maurorojas19-collab/atlas-enigmas`, publicada por Render desde `dist`. El archivo local `.openai/hosting.json` corresponde a un intento antiguo de Sites y no controla esta publicación. No fusionar la rama del juego sobre la página principal de Tellus.
