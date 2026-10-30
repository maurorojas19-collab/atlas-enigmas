# TELLUS | EL ATLAS — Auditoría de las siete crónicas y navegación
**Fecha:** 30 de octubre de 2026  
**Alcance:** inspección de archivos HTML de la rama `main`, navegación, fotos referenciadas, estructura editorial y temporizadores de transición. **No es una auditoría visual en iPhone real ni una prueba automatizada de todos los recursos HTTP externos.**

## Inventario de reportajes integrados
| Crónica | Palabras aproximadas dentro de `article`* | Elementos `img` | Imágenes diferentes dentro de la página | Observación |
|---|---:|---:|---:|---|
| KV17 · Seti I | 3.135 | 8 | 8 | 4 fotos personales; HTML ~555 KB, incluye imagen incrustada |
| Guiza | 3.032 | 11 | 11 | 7 fotos personales |
| Karnak | 3.071 | 10 | 9 | 1 foto local aparece dos veces |
| Hatshepsut | 3.723 | 6 | 6 | 6 fotos personales |
| Luxor | 3.744 | 16 | 15 | 1 foto local aparece dos veces |
| Petra | 2.351 | 8 | 7 | 7 imágenes distintas de Wikimedia; una repetida |
| Göbekli Tepe | 2.277 | 10 | 10 | 10 imágenes de Wikimedia con créditos; 2 diagramas propios |

*Son conteos aproximados extraídos de HTML y no exclusivamente palabras de prosa: en varios casos incluyen epígrafes o bibliografía. La longitud se juzgará por contenido, no por una cuota.

**Total:** 7 crónicas completas; 69 elementos `img`; 66 fotografías únicas **sumadas por artículo**; 69 de 69 etiquetas con `alt` no vacío. Las 41 imágenes locales distintas referenciadas en las seis primeras piezas fueron verificadas contra archivos GitHub el 29-10-2026; el presente informe **no repite** esa comprobación binaria y no infiere carga exitosa en el sitio público.

## Hallazgos editoriales
- **Fortalezas:** siete relatos íntegros, referencias y créditos fotográficos; separación de datos y hipótesis mejorada en Göbekli Tepe; navegación desde el globo y artículos independientes.
- **Extensiones largas:** Hatshepsut y Luxor superan 3.700 palabras incluyendo elementos del artículo; revisar repeticiones, párrafos densos y progresión sin imponer recortes automáticos.
- **Fotografías repetidas:** Karnak, Luxor y Petra reiteran una imagen dentro de su propia página. La repetición de portada es admisible si tiene intención editorial, pero conviene corregirla si aporta cero información nueva. Göbekli Tepe utiliza diez imágenes distintas entre portada, relato y galería.
- **Petra, crédito corregido tras auditoría:** «A narrow passage in Petra.jpg» tenía autoría/licencia sin confirmar. Se sustituyó por «Jordan, Petra. Entrance in the pass.jpg», de Britchi Mirela (2014), CC BY-SA 4.0, contrastada en la ficha de Wikimedia Commons. Actualizados el artículo y la galería del globo. Fuente: https://commons.wikimedia.org/wiki/File:Jordan,_Petra._Entrance_in_the_pass.jpg
- **Verificación exterior no cerrada:** la existencia de referencias en HTML no equivale a confirmar el código HTTP y contenidos de cada fuente, ni la carga efectiva de cada URL de Wikimedia. La foto panorámica de Göbekli Tepe de septiembre de 2026 sí tiene autoría Maribarbola / CC BY-SA 4.0 acreditada en Commons.
- **Anclaje de fuentes:** Göbekli Tepe incorpora nueve enlaces de evidencia en la narración más un listado bibliográfico. Ampliar este patrón al resto de los reportajes donde haya afirmaciones técnicas o debatidas.
- **Próximo estándar:** galería al final, imágenes documentales en contexto, crédito individual, fuentes al cierre, fotografía personal rotulada y separada del relato público.

## Auditoría de navegación
- 18 marcadores geográficos y 7 crónicas integradas; **once destinos tienen una ficha introductoria**, no un reportaje completo.
- Desde el 30-10-2026 la ficha del lugar distingue explícitamente `CRÓNICA COMPLETA` de `FICHA INTRODUCTORIA`.
- `index.html` e `inmersion.html` se mantienen sincronizados; conservar esa paridad en cada cambio.
- El agrupador de lugares cercanos y la selección individual siguen en el motor. No se han modificado las posiciones ni el zoom geográfico.

## Corrección globo → mapa (30-10-2026)
Se detectó falta de sincronía en las duraciones: opacidad ~1.150 ms, transformación ~1.300 ms, pero el mapa alternativo ocultaba el globo a los 1.000 ms y la animación inversa terminaba a los 970 ms, produciendo cortes abruptos.

**Correcciones publicadas en el repositorio:** transiciones de opacidad a 1.250 ms y transformación a 1.350 ms, escalado final moderado de 1,43 a 1,30; ocultación del globo cuando se complete el intervalo de transición (~1.500 ms), compatible con `prefers-reduced-motion`; mapa alternativo espera tres teselas o hasta 1.400 ms desde la primera tesela antes del cambio. El mismo control está incorporado al mapa MapLibre y a la ruta de regreso al globo.

**Nota:** estas son correcciones estáticas verificadas en el código. La ausencia de flashes negros, regresión de gestos táctiles, suavidad percibida y comportamiento bajo 4G solo podrá asegurarse con prueba funcional en un dispositivo real.

## Lista de aceptación pendiente en iPhone
1. Portada, búsqueda, ficha, crónica y galería: anchos 375, 390 y 430 px, sin desplazamiento horizontal.
2. Gesto de pinza y regreso al globo sin salto, con red rápida, red lenta y sin conexión.
3. Selección de puntos próximos de Tebas occidental/Luxor y cierre del menú cercano sin pérdida de foco.
4. Preferencia «reducir movimiento» activada: no esperar transiciones largas.
5. Verificar carga de todas las fotos locales y externas y los vínculos de autoría/licencia, con un plan visible cuando una imagen no cargue.
6. Medir experiencia inicial en 4G: HTML principal ~505 KB y Seti I ~555 KB; identificar posibilidades de caché, compresión y extracción de imagen incrustada.
7. Verificar funcionamiento de favoritos, archivo personal y estado «visitado» después de volver al globo.

## Nueva zona geográfica
**Propuesta editorial: Andes centrales, Perú. Expedición 08: Caral-Supe.** Caral ya posee marcador; su ficha de introducción se reescribió con datos confirmados, sin marcarla como crónica completa. Investigación iniciada en `investigacion/caral-expedicion-08.md` (si el expediente está presente). No publicar un octavo reportaje hasta cerrar investigación, 1.500–2.200 palabras orientativas, mapa, fotos autorizadas y prueba final.

## Dictamen
**Auditoría estática completada; mejora de transición implementada y crédito pendiente de Petra corregido; control de calidad móvil y verificación exhaustiva de enlaces/fotos externos todavía abiertos.** Ningún resultado de este documento debe presentarse como prueba visual en un iPhone o confirmación HTTP individual de las imágenes externas.
