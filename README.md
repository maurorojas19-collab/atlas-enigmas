# Entre líneas · Para Paula

Juego estático en español, sin instalación ni dependencias de ejecución. Abre `dist/index.html` para jugar, o sirve la carpeta `dist` con cualquier alojamiento estático HTTPS. Incluye teclado físico y virtual, pistas, rendición confirmada, archivo, resultados compartibles sin spoilers, estadísticas locales y temas claro y oscuro.

## Contenido y calendario

90 acertijos originales de cinco letras: 30 Suaves, 30 Intermedios y 30 Desafíos. Suave usa definiciones y mecanismos más directos; Intermedio incorpora fragmentos y combinaciones; Desafío suele requerir dos o más operaciones. La dificultad es una valoración editorial, pendiente de ajustar con experiencia real de juego.

Se puede jugar sin límite de partidas diarias en **Modo libre**. La biblioteca completa está disponible desde el inicio y **Siguiente pendiente** salta los acertijos resueltos o revelados. Al agotar un nivel se informa y se puede cambiar a otro, sin reiniciar automáticamente el contenido. Es posible volver expresamente a leer una solución.

La **Sugerencia diaria** elige una entrada de cada nivel por fecha. Primera fecha: 2 de noviembre de 2026; última: 1 de diciembre de 2026. Cambia a medianoche de America/Santiago según el reloj del dispositivo. Ambos modos comparten progreso: jugar por adelantado una futura sugerencia en modo libre la deja marcada cuando llegue su fecha. Así no se ofrece la misma partida como pendiente por segunda vez.

El archivo diario muestra fechas pasadas; la biblioteca de modo libre muestra todas las entradas sin revelar sus respuestas. Las estadísticas corresponden al nivel seleccionado e incluyen ambos modos. Se conserva el progreso previo del nivel Suave. Para extender el catálogo, añade entradas a `dist/puzzles.js` (Suave) y `dist/levels.js` (Intermedio y Desafío): respuesta sin tilde (conservando Ñ), pista, ayuda de mecanismo, orientación y explicación. Conserva el orden y la identidad de entradas ya publicadas para no alterar partidas guardadas. La fecha inicial se configura en `dist/app.js`.

El archivo y las respuestas son públicos en el código: es un juego casual, sin protección contra spoilers. La persistencia usa localStorage y corresponde a este navegador y origen; abrir otro archivo o dominio puede usar un historial diferente. Sin backend, cuentas ni analítica. Las fuentes se descargan de Google Fonts, con fuentes del sistema como alternativa sin conexión.

## Diseño

Identidad propia: Entre líneas, negro cálido, coral y tipografía editorial. Dedicatoria: «Para Paula, que siempre encuentra algo más». Inspiración de estructura y paleta: captura aportada y https://cripticando.com.ar/. No se reutilizaron su marca, textos de interfaz extensos ni acertijos.

La configuración de Sites se conserva en `.openai/hosting.json`; su presencia por sí sola no confirma publicación. Consulta el mensaje de entrega para el estado de publicación comprobado.
