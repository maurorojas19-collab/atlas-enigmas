# TELLUS | EL ATLAS
## Auditoría editorial integral · 10 de noviembre de 2026

**Editor jefe.** Documento de trabajo. Auditoría de los **13 reportajes completos** publicados en `main`, sin intervenir artículos, marcadores, globo ni navegación. Este documento vive en una rama de evaluación hasta que se apruebe su incorporación al repositorio principal.

**Versión auditada:** `main` después de la expedición 13, commit de publicación de Mohenjo-Daro `030b1fc825269c677bbb6bee5f24939c846a0513`, confirmado `live` en Render. El `index.html` de esta auditoría tiene 19 destinos; 13 figuran en `tellusFullReports` y 6 son fichas fundacionales todavía no terminadas.

### Método

Auditoría estática del HTML real de los 13 archivos, el manual `EDITORIAL.md` y la integración en `index.html`; inspección de argumentos, estructura literaria, bibliografía, fotografías, sus pies de foto, planos, enlaces internos y scripts. Contraste externo por muestreo con UNESCO, estudios en *Antiquity* (2026) y fichas de Wikimedia Commons.

**Criterios editoriales de la nota provisional:** rigor y calibración de afirmaciones (30 %), narrativa y ritmo de lectura (20 %), profundidad y conexión con evidencias (20 %), curaduría visual y espacial (20 %), fuentes y trazabilidad (10 %). No se da nota independiente de experiencia física iPhone: esa prueba real **NO** se realizó. Por lo tanto ninguna calificación equivale a certificación integral de producción. Los decimales reflejan una valoración editorial comparativa, no una medición científica.

**Resultado global provisional:** **8.93/10** (≈ 8,9). **Ninguno certificado con 9,5/10** según el estándar completo, que requiere QA visual, validación de imágenes y revisión de fuente junto a la afirmación. Los artículos son reportajes auténticos y todos superan 1.500 palabras, pero su acabado es desigual.

### Inventario de reportajes

| Artículo | Palabras de narrativa aprox. | Fotos insertadas / únicas | Referencias listadas | Nota editorial | Acción crítica |
|---|---:|---:|---:|---:|---|
| **Seti I · KV17** | 2.482 | 8 / 8 | 15 | **9,3** | Optimizar recurso base64 de ~515 KB, comprobar rendimiento y uniformar fuentes a pie de argumento |
| **Pirámides de Guiza** | 2.275 | 11 / 11 | 10 | **9,2** | Enlaces consistentes de evidencia junto al párrafo; pulir la lectura cartográfica y evidencias personales |
| **Karnak** | 2.576 | 10 / 9 | 9 | **8,7** | Plano de recintos y Sala Hipóstila; referencias junto a afirmaciones; fotografía más explicativa |
| **Templo de Hatshepsut** | 3.311 | 6 / 6 | 10 | **8,5** | Prioridad alta: 6 fotos para ~3.300 palabras; ampliar archivo, agregar plano, editar el ritmo |
| **Templo de Luxor** | 3.043 | 16 / 15 | 9 | **8,8** | Esquema de la ruta ceremonial de Opet, fotografía menos redundante y trazabilidad por párrafo |
| **Petra** | 2.142 | 8 / 7 | 6 | **8,6** | Ampliar fuentes y añadir plano hidráulico real o diagrama rotulado de presas/canales |
| **Göbekli Tepe** | 1.755 | 10 / 10 | 12 | **9,0** | Mayor contexto espacial y humano; referencias junto a afirmaciones de cronologías y debates |
| **Caral** | 2.212 | 13 / 13 | 9 | **9,2** | Reforzar la ubicación precisa de los elementos arqueológicos en plano y comprobar galería |
| **Chichén Itzá** | 2.492 | 25 / 18 | 10 | **8,8** | Siete apariciones de imagen repetidas; jerarquizar archivo y crear enlaces de fuente por pasaje |
| **Nan Madol** | 2.393 | 13 / 13 | 8 | **9,1** | 1.1 elevó fotografía, mapa y lectura; falta plano arqueológico con autoría y QA Safari |
| **Angkor** | 2.316 | 10 / 10 | 10 | **9,0** | Crítica mayor: la narrativa depende de LiDAR, pero no hay todavía una figura científica de sus hallazgos |
| **Derinkuyu** | 2.457 | 11 / 11 | 7 | **8,9** | Reforzar crítica cronológica y agregar documentación espacial por niveles, sin inventar plano |
| **Mohenjo-Daro** | 2.097 | 10 / 10 | 8 | **9,0** | Incorporar plano arqueológico de la ciudad y estudios primarios de los sistemas de drenaje |

**Nota de metodología:** cifras de palabras obtenidas eliminando etiquetas, figuras y bibliografía; difieren levemente de las cifras de manuscrito al contar epígrafes u otros elementos. Los conteos de fotos son etiquetas de imagen, no verificación de que se vean en un navegador. Por ejemplo, Chichén Itzá tiene 25 apariciones pero 18 archivos únicos; la repetición en una galería puede ser deliberada, aunque exige justificación editorial. Mohenjo-Daro lista 8 entradas, pero dos apuntan a la misma ficha UNESCO (7 URL distintas).

### Dictamen artículo por artículo

**01 · KV17 / Seti I — 9,3.** El referente actual de la colección: 25 párrafos, 15 registros bibliográficos, secuencia espacial de la tumba, techo astronómico, pigmentos y método de documentación. Distingue fuentes científicas, planos propios e imágenes personales. **Objeción:** el HTML contiene una imagen JPEG embebida en base64 de aproximadamente **514.700 caracteres**, lo cual encarece el peso de origen y complica caché. No se ha demostrado lentitud móvil, pero merece separar el archivo y medir. Los vínculos a fuentes no siguen todavía el sistema numerado de los cuatro artículos recientes.

**02 · Guiza — 9,2.** El arco entre escala monumental, trabajo humano, transporte, teoría de rampas y hallazgos de muones está bien construido. La incorporación de siete fotografías personales y el esquema didáctico fortalecen el carácter de exposición. **Objeción:** pasar de enlaces incrustados a trazabilidad uniforme y comprobar correspondencia exacta de imágenes interiores con el comentario técnico.

**03 · Karnak — 8,7.** Buen relato del tiempo acumulado y de la Sala Hipóstila, que evita entender los monumentos como ruinas inmutables. Diez fotos, mayoritariamente archivo propio, sostienen la experiencia de visita. **Objeción:** sin plano local o guía del recinto, el lector puede confundir el conjunto de Amón con templos de Mut y Montu; las nueve fuentes aparecen en bibliografía final sin referencias junto a pasajes específicos.

**04 · Hatshepsut — 8,5.** Análisis valioso de la representación faraónica, las múltiples funciones del templo y el viaje a Punt. El texto es uno de los más extensos, con 35 párrafos (aprox. 3.311 palabras narrativas), pero dispone de solo seis fotografías. **Objeción:** el desarrollo de más de 3.000 palabras pide mayor riqueza visual, plano por terrazas, detalles de relieves y referencias sobre Punt/estatuaria próximas al argumento. El texto puede recibir una poda precisa sin perder profundidad.

**05 · Luxor — 8,8.** Buena secuencia sobre Opet, Amenhotep III, Ramsés II y continuidad cristiana e islámica. Fotografías personales valiosas, 16 inserciones. **Objeción:** el rito de Opet pide mapa narrativo de conexión con Karnak y río; la fotografía es abundante pero requiere una jerarquía más curada, y las nueve fuentes necesitan vínculos a sus afirmaciones.

**06 · Petra — 8,6.** Título y arco sobre el agua se sostienen con una prosa clara; explica el Siq natural, el comercio nabateo y las instalaciones hidráulicas sin exagerar el «descubrimiento» europeo. **Objeción:** reportaje centrado en ingeniería del agua sin mapa o esquema de captación/desvío; seis referencias y siete fotos distintas limitan las evidencias. Se necesita detalle técnico y diversidad de fotos más allá del Tesoro.

**07 · Göbekli Tepe — 9,0.** El artículo rehúye el tópico de «primer templo» como certeza, incorpora molienda, actividad doméstica, formación del sitio y debates astronómicos. Cuenta con 12 entradas bibliográficas y dos figuras SVG. **Objeción:** las 1.755 palabras cumplen el mínimo pero dejan espacio para explicar con más profundidad el paisaje regional y la metodología de excavación; falta un esquema geográfico claro con procedencia.

**08 · Caral — 9,2.** Muy bien equilibrados geografía Supe/desierto, urbanismo, cronología, vida social y discusión de evidencias. Trece imágenes diferentes, mapa y dos recursos SVG. **Objeción:** verificar la correspondencia de cada recurso con el elemento arquitectónico preciso e incorporar referencias científicas directamente al pasaje cuando aún no lo estén.

**09 · Chichén Itzá — 8,8.** Buen enfoque en tiempo maya, agua, El Castillo, debates astronómicos, cronología y evidencias de ADN; las fotos personales son una fortaleza patrimonial. **Objeción:** 25 etiquetas de imagen para 18 fuentes visuales, con seis archivos que reaparecen una o más veces. Conviene seleccionar qué repeticiones son comparaciones didácticas y cuáles son redundantes, añadir un plano del conjunto y referencias por párrafo.

**10 · Nan Madol — 9,1.** Segunda edición mejoró hero, secuencia visual, esquema de sectores explícitamente conceptual y fotografía del litoral. Buena diferenciación entre tradición oral y evidencia arqueológica; ocho fuentes numeradas enlazadas en 22 párrafos. **Objeción:** se necesita planimetría arqueológica con autoría para pasar de la explicación conceptual a la distribución real de islotes, además de QA táctil y carga de imágenes.

**11 · Angkor — 9,0.** Su fuerza es no confundir Angkor Wat con el conjunto urbano; une hidráulica, Angkor Thom, Bayon, Ta Prohm y estudios LiDAR de 2013 y 2015. Diez fuentes con notas por párrafo y diez imágenes diferentes. **Objeción crítica:** una historia que habla de lo revelado por LiDAR necesita al menos una figura real del estudio o mapa derivado con licencia verificable. El diagrama actual es genérico de agua, no prueba visual del hallazgo arqueológico.

**12 · Derinkuyu — 8,9.** Buena arqueología del refugio: toba, puertas circulares, ventilación, agua y fases religiosas. Once imágenes diferentes; mapa y corte conceptual accesible por desplazamiento horizontal. **Objeción:** las siete fuentes requieren ampliación con planimetría especializada e historia de intervenciones, sin fechar toda la red subterránea como si correspondiera a una sola etapa. Una foto regional de Capadocia está correctamente identificada como ajena al acceso de Derinkuyu.

**13 · Mohenjo-Daro — 9,0.** Une urbanismo, pozo, Gran Baño, estupa posterior, escritura del Indo y el artículo de Green, Alam y Petrie (2026). Evita interpretar el Gini residencial de 0,44 como una prueba de igualdad absoluta. **Objeción:** necesita mapa real de sectores y trazado de desagües. Las ocho entradas bibliográficas representan siete URL distintas; la ficha genérica de UNESCO aparece dos veces. La reproducción de sellos en Commons tiene información de dominio público, pero su plantilla de licencia merece comprobación final antes de dar por concluido el QA de derechos.

### Hallazgos transversales comprobados

1. **Trazabilidad inconsistente.** Nueve reportajes anteriores a Nan Madol usan bibliografías finales sin marcadores numéricos uniformes por párrafo. Seti I, Guiza y Caral sí contienen algunos enlaces incrustados en el texto; Karnak, Hatshepsut, Luxor, Petra, Göbekli y Chichén Itzá carecen de un sistema equivalente. Los cuatro recientes tienen notas `#ref-N` repartidas a lo largo del relato.
2. **Imagen y documentación.** En los trece HTML se encontraron **151 elementos de imagen**; sumando imágenes únicas por artículo hay **141** (no son 141 fotografías originales globalmente diferentes, pues algunos archivos podrían compartirse entre reportajes). Todas las etiquetas `img` revisadas incluyen `alt`. Las leyendas y archivos requieren prueba real individual de carga y adecuación.
3. **Referencias y estructura.** Los 13 incluyen sección bibliográfica; las etiquetas de salto interno inspeccionadas apuntan a anclas existentes dentro de los artículos. No se detectaron errores de sintaxis en los scripts JavaScript incrustados.
4. **Sistema espacial desigual.** Seti, Guiza, Göbekli y Caral contienen diagramas; Nan Madol, Angkor, Derinkuyu y Mohenjo incluyen mapas y esquemas. Karnak, Hatshepsut, Luxor y Petra necesitan materiales de interpretación espacial prioritarios.
5. **Performance de Seti I.** Un JPEG base64 de ~515 KB de texto ocupa una porción desproporcionada del documento. Externar y medir velocidad, sin sacrificar el archivo personal.
6. **No afirmar QA que no se hizo.** Confirmación `live` en Render acredita el despliegue del commit, pero no prueba que fotos externas carguen, que el texto sea legible en Safari ni que todos los enlaces de fuentes funcionen. El sitio no pudo abrirse desde el navegador web de auditoría; no hubo acceso a Safari real.
7. **Chequeos externos por muestreo.** Se corroboraron las fichas Wikimedia de la portada de Angkor, hero 1.1 de Nan Madol, paisaje de Capadocia, la panorámica de Göbekli 2026 y los sellos del Indo; también el estudio de Green, Alam y Petrie (2026) y la descripción UNESCO de Mohenjo-Daro. No se han verificado en red los ~130 enlaces documentales y todos los archivos de imagen de los trece reportajes.

### Plan de corrección propuesto

**Nivel 0 · Bloquea la calificación 9,5:** comprobar en navegador real la apertura de cada uno de los 13 artículos dentro del globo y desde su URL, carga y leyendas de las fotos, navegación iPhone (zoom, scroll, retorno al mapa), ancho de los diagramas, enlaces de origen, licencias CC y fuentes prioritarias. Registrar incidencias reales y capturas de QA.

**Nivel 1 · Edición correctiva prioritaria:**
1. Hatshepsut: ampliar y reorganizar fotografías, sumar planta de terrazas y reducir exposición redundante.
2. Petra: documentar el sistema hidráulico con un mapa/diagrama contrastado y añadir fotografía técnica.
3. Chichén Itzá: deduplicar exhibiciones y documentar la secuencia de imágenes propias.
4. Karnak y Luxor: construir mapas explicativos de recintos y procesiones, con fuentes por pasaje.

**Nivel 2 · Arqueología visual científica:**
5. Angkor: mapa LiDAR con fuente, licencia y lectura accesible.
6. Mohenjo-Daro: plano por sectores y evidencias de drenaje.
7. Nan Madol: mapa real de islotes y recinto de Nandowas, rotulando hipótesis.
8. Derinkuyu: cortes o levantamientos arqueológicos verificables, sin inventar pisos exactos.
9. Göbekli y Caral: fortalecer ubicación y metodología visual cuando corresponda.

**Nivel 3 · Calidad común:**
10. Adoptar una plantilla de referencia `#ref-N` y notas al pie de afirmaciones controvertidas, sin crear fuentes de relleno.
11. Corregir datos de metadatos fotográficos y enlaces que fallen en QA.
12. Optimizar el recurso embebido de Seti I y cualquier imagen pesada comprobada en el navegador.
13. Recalificar cada reportaje después de publicar mejoras, actualizar este registro y auditar regresiones del globo.

### Dictamen del editor jefe

**No rechazar los reportajes ni reiniciar TELLUS.** La calidad literaria ya es apreciable y muchos pasajes muestran prudencia científica. **Tampoco concederles automáticamente el sello 9,5**: hoy la colección no tiene una experiencia museográfica uniformemente certificada.

El siguiente salto de calidad no exige escribir 13 artículos nuevos. Exige hacer de cada foto una evidencia, de cada plano una explicación, de cada afirmación delicada una referencia trazable y de cada dispositivo una experiencia realmente comprobada.

**Decisión editorial:** **13 reportajes publicados; 13 aprobados como contenido de trabajo; 0 con certificación integral 9,5 vigente**. Conservar las 19 ubicaciones, los seis destinos fundacionales pendientes y el motor del globo sin modificaciones. Las correcciones se ejecutarán un destino por vez tras validar que no generan regresiones.
