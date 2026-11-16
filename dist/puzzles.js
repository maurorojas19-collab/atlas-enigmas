// Colección revisada: respuesta, pista, mecanismo, ayuda y explicación.
const PUZZLES = [
  [
    "CALOR",
    "Claro, alterado, provoca bochorno.",
    "Anagrama.",
    "«Alterado» indica reorganizar CLARO.",
    "CLARO alterado forma CALOR, sinónimo de bochorno en su sentido de calor sofocante."
  ],
  [
    "AMOR",
    "Roma revuelta despierta afecto.",
    "Anagrama.",
    "Reorganiza ROMA.",
    "ROMA revuelta forma AMOR: afecto."
  ],
  [
    "LIBRO",
    "Calibró un instrumento que oculta un volumen impreso.",
    "Palabra oculta.",
    "Busca cinco letras consecutivas dentro de CALIBRÓ, sin tilde.",
    "caLIBRÓ contiene LIBRO. La definición es «un volumen impreso»."
  ],
  [
    "CANTO",
    "Borde del tablón que se oye en el coro.",
    "Doble definición.",
    "Piensa en el borde de un objeto y en una voz musical.",
    "CANTO es el borde de un tablón y también la acción o el sonido de cantar, que puede oírse en un coro."
  ],
  [
    "MESA",
    "La promesa esconde un mueble.",
    "Palabra oculta.",
    "Busca las últimas cuatro letras de PROMESA.",
    "proMESA contiene MESA, un mueble."
  ],
  [
    "RATON",
    "Trona deshecha: un pequeño roedor.",
    "Anagrama.",
    "«Deshecha» pide reorganizar TRONA.",
    "TRONA deshecha forma RATÓN, un pequeño roedor. Las casillas omiten la tilde."
  ],
  [
    "PERLA",
    "En el súper, la dependienta esconde una joya.",
    "Palabra oculta.",
    "Busca entre el final de SÚPER y el comienzo de LA.",
    "suPER LA dependienta contiene PERLA: una joya."
  ],
  [
    "NORTE",
    "Tenor desorientado busca un punto cardinal.",
    "Anagrama.",
    "Reorganiza TENOR siguiendo la señal «desorientado».",
    "TENOR desorientado forma NORTE, un punto cardinal."
  ],
  [
    "MENTA",
    "Régimen tan estricto que esconde una hierba aromática.",
    "Palabra oculta.",
    "Busca letras consecutivas entre RÉGIMEN y TAN.",
    "régiMEN TAn contiene MENTA, una hierba aromática."
  ],
  [
    "SALTO",
    "Altos, desordenados, dan un brinco.",
    "Anagrama.",
    "Reorganiza ALTOS.",
    "ALTOS desordenados forma SALTO, un brinco."
  ],
  [
    "PLATO",
    "Templa todo y esconde una pieza de vajilla.",
    "Palabra oculta.",
    "Busca entre TEMPLA y TODO.",
    "temPLA TOdo contiene PLATO, una pieza de vajilla."
  ],
  [
    "CAMINO",
    "Camión desarmado: vía para avanzar.",
    "Anagrama.",
    "Reorganiza CAMIÓN sin su tilde.",
    "CAMIÓN desarmado, sin tilde, forma CAMINO, una vía para avanzar."
  ],
  [
    "COSTA",
    "Franja litoral de tacos revueltos.",
    "Anagrama.",
    "La señal «revueltos» se aplica a TACOS.",
    "TACOS revueltos forma COSTA, una franja litoral."
  ],
  [
    "MARCO",
    "Antigua moneda alemana que enmarca un cuadro.",
    "Doble definición.",
    "Piensa en una moneda anterior al euro y en el borde de un cuadro.",
    "MARCO fue la moneda de Alemania antes del euro. Un MARCO también rodea y enmarca un cuadro."
  ],
  [
    "ESTELA",
    "Estelar sin final deja el rastro de un barco.",
    "Supresión final.",
    "Quita la última R de ESTELAR.",
    "ESTELA(R) sin final da ESTELA, el rastro que deja un barco al avanzar."
  ],
  [
    "RUEDA",
    "En una ciudad europea se oculta, al volver, una pieza circular.",
    "Palabra oculta al revés.",
    "Busca cinco letras en CIUDAD EUROPEA y léelas de derecha a izquierda.",
    "ciudAD EURopea contiene ADEUR; «al volver» lo invierte y da RUEDA, una pieza circular."
  ],
  [
    "PESAR",
    "Pena al determinar el peso.",
    "Doble definición.",
    "Una lectura es un sentimiento; la otra, una acción con la balanza.",
    "PESAR es una pena o aflicción y también determinar el peso de algo."
  ],
  [
    "CAMELLO",
    "Él clamó, alterado, ante un animal de dos jorobas.",
    "Anagrama de dos palabras.",
    "Reorganiza ÉL CLAMÓ sin espacios ni tildes.",
    "EL CLAMO, alterado, forma CAMELLO, un animal de dos jorobas."
  ],
  [
    "PISTA",
    "Rastro sobre el que corren los atletas.",
    "Doble definición.",
    "Busca un indicio y una superficie de atletismo.",
    "PISTA es un rastro o indicio y también la superficie preparada donde corren los atletas."
  ],
  [
    "PAUSA",
    "En esta etapa usamos un pequeño descanso.",
    "Palabra oculta.",
    "Busca cinco letras consecutivas en ETAPA USAMOS.",
    "etaPA USAmos contiene PAUSA: un pequeño descanso. Una pausa pensada para ti, Paula."
  ],
  [
    "LAPIZ",
    "Artículo y pizca sin sus dos últimas: instrumento de escritura.",
    "Unión de fragmentos.",
    "El artículo es LA. Quita CA al final de PIZCA.",
    "LA + PIZ(CA) = LÁPIZ, un instrumento de escritura. «Sin sus dos últimas» se aplica a PIZCA."
  ],
  [
    "CRISTAL",
    "Cris, tal vez, oculta un vidrio.",
    "Palabra oculta.",
    "Busca entre CRIS y TAL.",
    "CRIS TAL vez contiene CRISTAL, aquí con el sentido corriente de vidrio."
  ],
  [
    "REMOS",
    "Cantaremos: dentro van los propulsores de la barca.",
    "Palabra oculta.",
    "Busca las últimas cinco letras de CANTAREMOS.",
    "cantaREMOS contiene REMOS, instrumentos para impulsar una barca."
  ],
  [
    "RAMPA",
    "La rama recibe el principio de primavera antes del final: una pendiente.",
    "Inserción e inicial.",
    "Primavera empieza por P. Insértala antes de la última A de RAMA.",
    "RAM(A) recibe P, inicial de primavera, antes de su final: RAM + P + A = RAMPA, una pendiente."
  ],
  [
    "ESTRELLA",
    "Astro que brilla en el reparto de una película.",
    "Doble definición.",
    "Busca un astro y una figura destacada del cine.",
    "ESTRELLA es un astro y también una figura destacada de una película."
  ],
  [
    "METRO",
    "Un termo revuelto da una unidad de longitud.",
    "Anagrama.",
    "Reorganiza TERMO.",
    "TERMO revuelto forma METRO, una unidad de longitud."
  ],
  [
    "TRAMA",
    "Marta, confundida, revela el argumento.",
    "Anagrama.",
    "La señal «confundida» se aplica a MARTA.",
    "MARTA confundida forma TRAMA, el argumento de una obra."
  ],
  [
    "BANCO",
    "Asiento en el que se depositan ahorros.",
    "Doble definición.",
    "La primera lectura es un mueble; la segunda, una entidad financiera.",
    "BANCO es un asiento y una entidad en la que se depositan ahorros."
  ],
  [
    "COPAS",
    "Recipientes de brindis en las cimas de los árboles.",
    "Doble definición.",
    "Piensa en vasos con pie y en la parte alta de los árboles.",
    "COPAS son recipientes para brindar y las partes superiores de los árboles."
  ],
  [
    "CLAVE",
    "Signo musical que permite descifrar un mensaje.",
    "Doble definición.",
    "Piensa en el pentagrama y en un código.",
    "CLAVE es un signo del pentagrama, como la clave de sol, y también la información que permite descifrar un mensaje."
  ],
  [
    "FAROL",
    "Lámpara de Flora, alterada.",
    "Anagrama.",
    "Reorganiza FLORA.",
    "FLORA alterada forma FAROL, un tipo de lámpara protegida por una caja o cubierta."
  ],
  [
    "SERENATA",
    "Serena tarda en ocultar un canto nocturno de cortejo.",
    "Palabra oculta.",
    "Busca entre SERENA y TARDA.",
    "SERENA TArda contiene SERENATA, un canto nocturno que puede dedicarse a alguien como cortejo."
  ],
  [
    "CIELO",
    "Liceo revuelto: bóveda sobre nuestras cabezas.",
    "Anagrama.",
    "Reorganiza LICEO.",
    "LICEO revuelto forma CIELO, la bóveda aparente sobre nuestras cabezas."
  ],
  [
    "BRISA",
    "Descubrí sabor que esconde un viento suave.",
    "Palabra oculta.",
    "Busca entre el final de DESCUBRÍ y el comienzo de SABOR.",
    "descuBRÍ SAbor contiene BRISA, un viento suave. Las tildes no alteran las letras de la respuesta."
  ],
  [
    "GIRASOLES",
    "Recorrido artístico seguido de astros: plantas de semillas comestibles.",
    "Unión de sinónimos.",
    "El recorrido artístico es una GIRA; los astros son SOLES.",
    "GIRA + SOLES = GIRASOLES, plantas con semillas comestibles."
  ],
  [
    "MONTE",
    "En el limón temprano se oculta una elevación.",
    "Palabra oculta.",
    "Busca entre LIMÓN y TEMPRANO.",
    "liMÓN TEmprano contiene MONTE, una elevación del terreno."
  ],
  [
    "SELVA",
    "Vales desordenados: bosque tropical.",
    "Anagrama.",
    "Reorganiza VALES.",
    "VALES desordenados forma SELVA, un bosque tropical."
  ],
  [
    "CARACOLES",
    "Rostro seguido de verduras: moluscos con concha.",
    "Unión de sinónimos.",
    "El rostro es CARA y las verduras son COLES.",
    "CARA + COLES = CARACOLES, moluscos con concha."
  ],
  [
    "VERSO",
    "En el universo cabe una línea de poesía.",
    "Palabra oculta.",
    "Busca las últimas cinco letras de UNIVERSO.",
    "uniVERSO contiene VERSO, una línea de poesía."
  ],
  [
    "TELAR",
    "Una letra alterada da una máquina de tejer.",
    "Anagrama.",
    "Reorganiza LETRA.",
    "LETRA alterada forma TELAR, una máquina para tejer. La definición nombra la máquina, no la acción de tejer."
  ]
];
