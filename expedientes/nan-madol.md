# TELLUS | EL ATLAS · Expediente 010 · Nan Madol

**Estado:** producción editorial completa y **preparada para revisión** en rama `expedicion-10-nan-madol`, sin incorporación a `main` ni publicación en Render.

**Artículo:** `/nan-madol.html`.  
**Integración prevista:** marcador preexistente `nanmadol` (Pohnpei, 6.844° N, 158.335° E); conservar número geográfico 03 del atlas, independiente del número de expedición 10.  
**Título:** *Nan Madol: la ciudad de piedra que desafió al océano*.  
**Fecha:** 1 de noviembre de 2026.  
**Narración:** aproximadamente 2.356 palabras originales, 23 párrafos, lectura continua.  
**Visuales:** 6 fotos en la crónica, 5 fotos distintas en galería al final, 1 mapa geográfico OpenStreetMap, 1 cronología interpretativa de dos fases; no se duplicaron imágenes del cuerpo en la galería.  
**Bibliografía:** 8 referencias patrimoniales y académicas con llamadas de fuente desde los párrafos.

## Pregunta rectora

¿Cómo se convirtió la costa de Pohnpei en un centro de poder monumental hecho de basalto y coral, cómo evolucionó durante siglos y por qué su futuro depende tanto de la gestión humana como del mar?

## Rigor y debates

- **Islotes:** UNESCO refiere más de 100; algunos levantamientos arqueológicos cuentan menos por diferencias de delimitación. Evitar un número absoluto sin contextualizar método.
- **Cronología:** McCoy et al. (2016) obtuvieron datos directos de construcción funeraria monumental hacia 1180–1200; Shen et al. (2024) identifican fases constructivas ampliamente distribuidas c. 930–1130 y 1170–1425. No presentar como contradicción necesaria, pues difieren muestras y escala del análisis.
- **Método:** no identificar la edad de crecimiento de cada coral con la colocación exacta de ese fragmento; valorar coral heredado y radiocarbono con limitaciones.
- **Basalto:** origen geológico y firmas mediante fluorescencia de rayos X; no afirmar que se conoce el mecanismo preciso de traslado de todas las columnas.
- **Oralidad:** Olosihpa, Olosohpa e Isokelekel son memoria cultural relevante; los elementos sobrenaturales no constituyen evidencia física de levitación de rocas.
- **Clima y sociedad:** variaciones de nivel relativo del mar y ENSO pueden haber influido en construcción y reparación, pero la relación causal exacta no está demostrada de manera exclusiva.
- **Conservación 2026:** UNESCO registra progresos parciales en vegetación y canales y mantiene el sitio en la Lista de Patrimonio Mundial en Peligro; no afirmar que la amenaza está resuelta.
- **Continuidad:** reconocer la autoridad tradicional de los Nahnmwarki y comunidades contemporáneas de Pohnpei; no presentar a sus habitantes como «civilización desaparecida».

## Bibliografía principal

1. UNESCO, ficha 1503: https://whc.unesco.org/en/list/1503/
2. UNESCO, Decisión 48 COM 7A.25 (2026): https://whc.unesco.org/en/decisions/?id_decision=9016
3. Oficina Nacional de Archivos, Cultura y Preservación Histórica de Micronesia, Nan Madol: https://nach.gov.fm/nan-madol-east-site-of-temwen-island-temwen-island/
4. Recursos FSM NACH: https://nach.gov.fm/nan-madol/
5. Shen et al., *PNAS Nexus* (2024): https://pmc.ncbi.nlm.nih.gov/articles/PMC11443547/
6. McCoy et al., *Quaternary Research* (2016): https://www.cambridge.org/core/journals/quaternary-research/article/earliest-direct-evidence-of-monument-building-at-the-archaeological-site-of-nan-madol-pohnpei-micronesia-identified-using-230thu-coral-dating-and-geochemical-sourcing-of-megalithic-architectural-stone/0338E86D312973BA0B32D56A5D297FAF
7. McCoy y Athens, *Journal of Pacific Archaeology* (2011/2012): https://pacificarchaeology.org/index.php/journal/article/view/68
8. UNESCO, expediente de nominación y fuentes: https://whc.unesco.org/en/list/1503/documents/

## Curaduría fotográfica

Los once archivos son fotografías existentes de Nan Madol, con fichas de Wikimedia Commons abiertas para comprobar objeto y licencia. Las imágenes se sirven desde `Special:FilePath` con ancho limitado y el crédito enlaza al archivo y a la licencia.

| Uso | Nombre exacto de archivo Commons | Autor | Licencia |
|---|---|---|---|
| Cuerpo/portada | Nan Madol and surroundings.jpg | Uhooep | CC BY-SA 4.0 |
| Cuerpo | Nan Madol and canal.jpg | Uhooep | CC BY-SA 4.0 |
| Cuerpo | NanMadol2.jpg | CT Snow | CC BY 2.0 |
| Cuerpo | Detail of a wall constructed of columnar basalt pieces at Nan Madol.jpg | Jebrennan | CC BY-SA 4.0 |
| Cuerpo | Nan Madol, Pohnpei.jpg | Uhooep | CC BY-SA 4.0 |
| Cuerpo | Nan Madol and canal 2.jpg | Uhooep | CC BY-SA 4.0 |
| Galería | Nan Madol 5.jpg | CT Snow | CC BY 2.0 |
| Galería | Nan madol.jpg | NOAA | Dominio público |
| Galería | Nan Madol 1.jpg | CT Snow | CC BY 2.0 |
| Galería | Nan Madol 3.jpg | CT Snow | CC BY 2.0 |
| Galería | Nan Madol 4.jpg | CT Snow | CC BY 2.0 |

**Nota curatorial:** las fotografías CT Snow son archivo de 2001 y la fotografía NOAA es un archivo documental histórico, no una reconstrucción. La verificación de **carga real** de cada URL redireccionada queda pendiente; las fichas y licencias, no la experiencia de red del usuario, fueron contrastadas.

## Estado técnico / QA

- Código de la rama contiene página nueva `nan-madol.html` y actualización mínima de la entrada `nanmadol` existente en `index.html`.
- Comprobado: 18 destinos permanecen; los otros 17 objetos del registro permanecieron iguales byte por byte. Motor original del globo y configuración MapLibre conservados byte por byte.
- Comprobado por lectura: JS sintácticamente válido, 23 párrafos, 8 fuentes, 6 fotos incrustadas, 5 fotos distintas en galería, mapa y cronología. Cargador de crónica activado exclusivamente para `nanmadol`.
- **No probado aún:** carga de las 11 imágenes en Safari, iframe OSM, rendimiento en iPhone, accesibilidad con VoiceOver, lectura completa en Render, navegación y agrupaciones táctiles. La rama NO ha sido desplegada a producción.
- Criterio de publicación: resolver fallos detectados y fusionar con `main` solo cuando se autorice publicar.

## Auditoría editorial provisional · escala 1–10

| Dimensión | Nota provisional | Motivo |
|---|---:|---|
| Rigor histórico y científico | 9,3 | Dos investigaciones de datación y fuentes patrimoniales contrastadas, con hipótesis delimitadas |
| Narración y estructura | 9,3 | Continuidad, materialidad, sentido político y cierre conectado con apertura |
| Visuales y procedencia | 9,1 | Once imágenes reales y acreditadas, sin repetición cuerpo/galería; carga final aún sin comprobar |
| UX/lectura móvil | Pendiente | Solo inspección estática, falta Safari real |
| Publicación y regresiones | Pendiente | Motor preservado; no hay despliegue de la rama en Render |

**Veredicto del Editor jefe:** material sustantivamente preparado y sólido. Todavía **no certificable 9,5/10** ni «publicado» sin QA real. Evitar convertir las notas provisionales en calificación final.

**Siguiente paso autorizado cuando el director lo solicite:** revisión previa a la fusión, corregir defectos reales y publicar mediante Render, verificando commit y estado `live`.
