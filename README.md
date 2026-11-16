# Entre líneas · Para Paula

Juego estático en español, sin instalación ni dependencias de ejecución. Abre `dist/index.html` para jugar, o sirve la carpeta `dist` con cualquier alojamiento estático HTTPS. Incluye rondas de diez acertijos, teclado físico y virtual, pistas, rendición confirmada, archivo de rondas, resultados compartibles sin spoilers, estadísticas locales y temas claro y oscuro.

## Contenido y calendario

90 acertijos originales de cinco letras: 30 Suaves, 30 Intermedios y 30 Desafíos. Suave usa definiciones y mecanismos más directos; Intermedio incorpora fragmentos y combinaciones; Desafío suele requerir dos o más operaciones. La dificultad es una valoración editorial, pendiente de ajustar con experiencia real de juego.

Los 90 acertijos se distribuyen en **9 rondas de 10: tres rondas por nivel**. Cada ronda muestra diez posiciones numeradas y un contador de completados. Al terminar los diez se muestra un resumen de aciertos, soluciones reveladas, pistas e intentos. **Jugar otra ronda de 10** lleva al siguiente bloque que todavía tenga pendientes. Se pueden jugar varias rondas por día.

**Dejar para después** salta a otro pendiente dentro de la misma ronda; no cuenta el acertijo omitido como terminado. **Tus rondas** permite cambiar de bloque y revisar soluciones anteriores. Al agotar los tres bloques de un nivel se informa, sin reiniciar ni reciclar contenido automáticamente.

La **Ronda sugerida** prioriza un bloque según el día de America/Santiago y omite los ya completados. No implica que se añadan diez acertijos nuevos cada día. Todos los modos comparten el progreso y guardan la posición de cada nivel para poder retomar una ronda. La medianoche no interrumpe la ronda activa. Las estadísticas cuentan rondas completadas, aciertos, pendientes y aciertos con ayuda.

Se conserva el historial anterior: las respuestas guardadas antes de añadir rondas se reconocen dentro de su bloque. Para extender el catálogo, añade entradas en bloques completos de diez a `dist/puzzles.js` (Suave) y `dist/levels.js` (Intermedio y Desafío): respuesta sin tilde (conservando Ñ), pista, ayuda de mecanismo, orientación y explicación. Conserva el orden y la identidad de entradas publicadas para no alterar partidas guardadas.

El archivo y las respuestas son públicos en el código: es un juego casual, sin protección contra spoilers. La persistencia usa localStorage y corresponde a este navegador y origen; abrir otro archivo o dominio puede usar un historial diferente. Sin backend, cuentas ni analítica. Las fuentes se descargan de Google Fonts, con fuentes del sistema como alternativa sin conexión.

## Diseño

Identidad propia: Entre líneas, negro cálido, coral y tipografía editorial. Dedicatoria: «Para Paula, que siempre encuentra algo más». Inspiración de estructura y paleta: captura aportada y https://cripticando.com.ar/. No se reutilizaron su marca, textos de interfaz extensos ni acertijos.

La configuración de Sites se conserva en `.openai/hosting.json`; su presencia por sí sola no confirma publicación. Consulta el mensaje de entrega para el estado de publicación comprobado.
