# TELLUS | EL ATLAS — Auditoría editorial y de navegación
**Fecha:** 29-10-2026  
**Alcance:** revisión estática del código fuente y comprobación de existencia de archivos en GitHub. **No equivale a una inspección visual real en iPhone ni confirma el estado de publicación de Render.**

## Publicación Petra
- `petra.html` existe en `main` y se carga desde las dos entradas de la experiencia del globo (`index.html` e `inmersion.html`).
- El listado contiene 18 lugares. Se corrigió `017 LUGARES` a `018 LUGARES` y los contadores de exposición, que habían quedado en 17.
- Se guardaron cambios en la rama de despliegue `main`. Falta comprobar la URL pública y el último deploy en Render con el workspace confirmado.

## Inventario estático de las seis crónicas

| Reportaje | Palabras aproximadas del artículo | Elementos `img` | Fotos locales únicas verificadas | Observaciones |
|---|---:|---:|---:|---|
| Seti I | 3.135 | 8 | 4 | Fotografía adicional incrustada como data URI; otras de Wikimedia con créditos visibles |
| Guiza | 3.032 | 11 | 7 | Combinación de archivo personal y fotos externas con enlaces |
| Karnak | 3.071 | 10 | 9 | Una foto local repetida entre portada y texto |
| Hatshepsut | 3.723 | 6 | 6 | Archivo personal |
| Luxor | 3.744 | 16 | 15 | Una foto repetida entre portada y texto |
| Petra | 2.348 | 8 | 0 | 7 fotografías distintas de Wikimedia; una repetida en portada y texto |

**41 de 41 fotografías locales distintas referenciadas por los artículos existen en GitHub.** Se consultó directamente su archivo binario y se obtuvo un SHA válido en todos los casos. Esto no prueba que Render las esté sirviendo ni que las imágenes externas carguen sin errores.

## Alt, créditos, fuentes y continuidad
- Todos los elementos `img` de los seis reportajes tienen `alt`.
- Todos los artículos muestran fuentes o referencias, pero la vigencia HTTP de cada enlace externo aún requiere verificación específica.
- Se corrigieron en Petra cuatro créditos genéricos, contrastados con Commons: Qais E. Tweissi (CC BY-SA 4.0), SinanDira (CC BY-SA 4.0), ほっきー (CC0 1.0) y Yong Woo Park (CC BY 4.0).
- En Petra queda pendiente identificar con exactitud la licencia y autor de `A narrow passage in Petra.jpg`. No sustituir el crédito por uno inventado.
- Si una imagen de Petra falla, el artículo muestra una nota explicativa junto al enlace a su ficha, en vez de eliminar silenciosamente toda la figura.
- Las seis crónicas mantienen una estructura larga y referencias. Se recomienda lectura editorial completa de cada una para eliminar repeticiones y examinar interpretaciones arqueológicas discutibles.

## Experiencia de globo y mapa
- La transición entre globo y mapa tenía un fundido de 850–950 ms y un salto visual de escala 1.72. Se ajustó a 1.15–1.30 s y escala 1.43.
- Se protegió un temporizador para que no oculte el globo después de que el usuario haya iniciado otra transición.
- Se revisó el mecanismo de agrupación de marcadores cercanos: ahora evita crear grupos de puntos separados por largas cadenas de proximidad. Se conserva el selector de lugares cercanos para no exigir zoom extremo.
- Al desagruparse, los marcadores recuperan su `aria-label` específico.
- Los cambios están replicados en `index.html` e `inmersion.html`, que son idénticos al cierre de esta auditoría.

## Comprobaciones móviles pendientes
1. Capturas en iPhone a 375 px, 390 px y 430 px de portada, búsqueda, agrupaciones próximas, ficha, crónica y galería.
2. Prueba táctil real con dos monumentos cercanos (Seti I / Hatshepsut / Luxor / Karnak), accesibilidad y cierre del selector sin saltos.
3. Confirmar que no hay fondos en negro durante la transición y que funciona con reducción de movimiento.
4. Medir carga inicial en 4G: `index.html` ronda 502 kB y `seti-i.html` ronda 555 kB por recursos incrustados; evaluar extracción y caché de recursos.
5. Comprobar HTTP, pesos efectivos y carga final de las fotografías Wikimedia y de las fuentes enlazadas.
6. Confirmar que los seis artículos se leen cómodamente sin desplazamiento horizontal, y que la galería y el texto no recortan fotografías verticales.

## Expedición 07
Primer borrador histórico creado en `investigacion/gobekli-tepe-borrador.md`. Investigación documentada con UNESCO, DAI, Cambridge Archaeological Journal y PLOS ONE (septiembre 2026). **No publicado como exposición todavía.** Falta revisión final, materiales fotográficos verificables, créditos y composición visual.
