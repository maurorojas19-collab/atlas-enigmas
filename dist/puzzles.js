// Contenido original. Respuesta, acertijo, mecanismo, orientación, explicación.
const PUZZLES = [
  [
    "CALOR",
    "Claro, alterado, da una sensación de verano.",
    "Un anagrama.",
    "«Alterado» pide reorganizar CLARO.",
    "CLARO alterado forma CALOR, una sensación propia del verano."
  ],
  [
    "LIBRO",
    "Calibró el instrumento y dejó oculta una obra de papel.",
    "Una palabra oculta.",
    "Busca dentro de CALIBRO, sin tilde.",
    "caLIBRÓ, sin tilde, contiene LIBRO: una obra de papel."
  ],
  [
    "CANTO",
    "Borde que también puede oírse.",
    "Una doble definición.",
    "Busca algo que sea tanto un borde como una voz musical.",
    "CANTO es el borde de un objeto y también la acción o el sonido de cantar."
  ],
  [
    "RATON",
    "Trona, desordenada, deja escapar un roedor.",
    "Un anagrama.",
    "Reordena las cinco letras de TRONA.",
    "TRONA desordenada forma RATÓN, un roedor. Se escribe RATON en las casillas."
  ],
  [
    "PERLA",
    "En el súper, la joya queda escondida.",
    "Una palabra oculta.",
    "Une «súper» y «la», sin tilde ni espacio.",
    "suPER LA contiene PERLA, una joya."
  ],
  [
    "NORTE",
    "Tenor, desorientado, busca un rumbo.",
    "Un anagrama.",
    "«Desorientado» pide reorganizar TENOR.",
    "TENOR desorientado forma NORTE, un rumbo."
  ],
  [
    "MENTA",
    "Teman el desorden de esta hierba.",
    "Un anagrama.",
    "Reordena TEMAN.",
    "TEMAN en desorden forma MENTA, una hierba aromática."
  ],
  [
    "SALTO",
    "Altos, desordenados, dan un brinco.",
    "Un anagrama.",
    "Reordena ALTOS.",
    "ALTOS desordenados forma SALTO, un brinco."
  ],
  [
    "PLATO",
    "Taló con P al principio y todo revuelto: una pieza de vajilla.",
    "Un anagrama con una letra añadida.",
    "Reordena P + TALO, sin tilde.",
    "P + TALÓ sin tilde y revuelto forma PLATO, una pieza de vajilla."
  ],
  [
    "COSTA",
    "Tacos mezclados junto al mar.",
    "Un anagrama.",
    "«Mezclados» transforma TACOS.",
    "TACOS mezclados forma COSTA, la franja de tierra junto al mar."
  ],
  [
    "MARCO",
    "Vieja moneda alemana que rodea el cuadro.",
    "Una doble definición.",
    "Fue moneda alemana y sigue alrededor de muchos cuadros.",
    "El MARCO fue la moneda de Alemania antes del euro y es la pieza que rodea un cuadro."
  ],
  [
    "RUEDA",
    "Da vueltas y es una reunión de prensa.",
    "Una doble definición.",
    "Piensa en una pieza circular y en una rueda de prensa.",
    "Una RUEDA da vueltas. Una RUEDA de prensa es una reunión de periodistas para hacer preguntas."
  ],
  [
    "PESAR",
    "Una pena que se puede medir en la balanza.",
    "Una doble definición.",
    "Puede ser un sustantivo y un verbo.",
    "PESAR es una pena o sentimiento de tristeza, y también determinar el peso con una balanza."
  ],
  [
    "PISTA",
    "Una huella para correr.",
    "Una doble definición.",
    "Piensa en un rastro y en un lugar para hacer deporte.",
    "PISTA es una huella o indicio, y también una superficie preparada para correr."
  ],
  [
    "PAUSA",
    "En esta etapa usamos un pequeño descanso.",
    "Una palabra oculta.",
    "Busca cinco letras seguidas en «etapa usamos», sin el espacio.",
    "etaPA USAmos contiene PAUSA. La definición es «un pequeño descanso». Una pausa pensada para ti, Paula."
  ],
  [
    "LAPIZ",
    "La y una pizca sin sus dos últimas: algo para escribir.",
    "Una unión de fragmentos.",
    "Une LA con PIZ, de PIZCA sin CA.",
    "LA + PIZ(CA) = LÁPIZ, algo para escribir. Las tildes no se escriben en las casillas."
  ],
  [
    "REMOS",
    "En cantaremos van los que impulsan la barca.",
    "Una palabra oculta.",
    "Busca al final de CANTAREMOS.",
    "cantaREMOS contiene REMOS, los instrumentos que impulsan una barca."
  ],
  [
    "RAMPA",
    "La rama recibe el principio de primavera antes del final: una pendiente.",
    "Una inserción de letra.",
    "Inserta P, principio de Primavera, antes de la última A de RAMA.",
    "RAM(A) recibe P antes de su última letra: RAM + P + A = RAMPA, una pendiente."
  ],
  [
    "METRO",
    "Termo revuelto sirve para medir.",
    "Un anagrama.",
    "Reordena TERMO.",
    "TERMO revuelto forma METRO, una unidad de longitud que sirve para medir."
  ],
  [
    "TRAMA",
    "Marta, confundida, revela el argumento.",
    "Un anagrama.",
    "Reordena MARTA.",
    "MARTA confundida forma TRAMA, el argumento de una obra."
  ],
  [
    "BANCO",
    "Un asiento con dinero en depósito.",
    "Una doble definición.",
    "Se puede sentar uno en él o depositar dinero allí.",
    "BANCO es un asiento y también una entidad donde se deposita dinero."
  ],
  [
    "COPAS",
    "Lo que hay en la mesa y en lo alto de los árboles.",
    "Una doble definición.",
    "Piensa en recipientes y en ramas.",
    "COPAS son vasos para beber y las partes superiores de los árboles."
  ],
  [
    "CLAVE",
    "Signo del pentagrama que resuelve el misterio.",
    "Una doble definición.",
    "Piensa en la clave de sol y en la clave de un enigma.",
    "CLAVE es el signo del pentagrama que determina la altura de las notas, y también lo que permite resolver un misterio."
  ],
  [
    "FAROL",
    "Flora, agitada, enciende una luz.",
    "Un anagrama.",
    "Reordena FLORA.",
    "FLORA agitada forma FAROL, un objeto que da luz."
  ],
  [
    "CIELO",
    "Liceo revuelto por las nubes.",
    "Un anagrama.",
    "Reordena LICEO.",
    "LICEO revuelto forma CIELO, donde están las nubes."
  ],
  [
    "BRISA",
    "Abrís, sin acento y de otra manera, una corriente suave de aire.",
    "Un anagrama sin tilde.",
    "Reordena ABRIS.",
    "ABRÍS sin acento y de otra manera forma BRISA, una corriente suave de aire."
  ],
  [
    "MONTE",
    "Temón, sin tilde y revuelto, se eleva en el paisaje.",
    "Un anagrama sin tilde.",
    "Reordena TEMON.",
    "TEMÓN sin tilde y revuelto forma MONTE, una elevación del terreno."
  ],
  [
    "SELVA",
    "Vales desordenados en un bosque tropical.",
    "Un anagrama.",
    "Reordena VALES.",
    "VALES desordenados forma SELVA, un bosque tropical."
  ],
  [
    "VERSO",
    "En el universo cabe una línea de poesía.",
    "Una palabra oculta.",
    "Mira las últimas cinco letras de UNIVERSO.",
    "uniVERSO contiene VERSO: una línea de poesía."
  ],
  [
    "TELAR",
    "Letra, cambiada, teje.",
    "Un anagrama.",
    "Reordena LETRA.",
    "LETRA cambiada forma TELAR, la máquina con la que se teje."
  ]
];
