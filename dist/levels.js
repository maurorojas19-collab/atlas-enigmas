// Identidades estables: el historial previo se conserva al distribuir las nuevas rondas.
const PUZZLE_BANKS = {suave:PUZZLES,intermedio:[
  [
    "ARENA",
    "Superficie que encierra el norte: material de playa.",
    "Sinónimo e inserción.",
    "«Superficie» da ÁREA y norte se abrevia N. Introduce N dentro de AREA.",
    "ARE(N)A: ÁREA, sin tilde, encierra N, abreviatura de norte. ARENA es un material de playa."
  ],
  [
    "SEDA",
    "Las verdades esconden, de vuelta, un tejido.",
    "Palabra oculta al revés.",
    "Busca ADES dentro de VERDADES y léelo al revés.",
    "verdADES contiene ADES; al invertirlo se obtiene SEDA, un tejido."
  ],
  [
    "SUELO",
    "Piso que queda suelto sin la inicial de tornillo.",
    "Supresión de una inicial.",
    "La inicial de TORNILLO es T. Quítala de SUELTO.",
    "SUEL(T)O sin T, inicial de tornillo, da SUELO: piso."
  ],
  [
    "TECHO",
    "Cubierta: principio de todo y hecho sin cabeza.",
    "Inicial y palabra recortada.",
    "Une T, principio de TODO, con HECHO sin su primera H.",
    "T + (H)ECHO = TECHO, la cubierta de una construcción."
  ],
  [
    "ROSA",
    "Oro sin cabeza y media sala: una flor.",
    "Supresión y mitad.",
    "Quita la primera O de ORO y toma la primera mitad de SALA.",
    "(O)RO + SA(LA) = ROSA, una flor."
  ],
  [
    "PRADO",
    "Pardo, alterado, se vuelve terreno cubierto de hierba.",
    "Anagrama.",
    "Reorganiza PARDO.",
    "PARDO alterado forma PRADO, un terreno cubierto de hierba."
  ],
  [
    "NUBES",
    "Subes cambiando el primer sur por el norte: formaciones de gotas en el cielo.",
    "Sustitución de puntos cardinales.",
    "S es sur y N es norte. Cambia la primera S de SUBES por N.",
    "(S)UBES pasa a (N)UBES. Las NUBES son formaciones de gotas de agua o cristales de hielo suspendidos, no vapor visible."
  ],
  [
    "HILOS",
    "Hijos cambian la jota por ele: material de costura.",
    "Sustitución.",
    "Sustituye J por L en HIJOS.",
    "HI(J)OS con L en lugar de J da HI(L)OS, material de costura."
  ],
  [
    "LIMON",
    "Sedimento seguido del norte: cítrico.",
    "Sinónimo y abreviatura.",
    "Un sedimento fino es LIMO; añade N, abreviatura de norte.",
    "LIMO + N = LIMÓN, un cítrico."
  ],
  [
    "FUEGO",
    "Fue gozoso esconder una llama.",
    "Palabra oculta.",
    "Busca cinco letras seguidas en FUE GOZOSO.",
    "FUE GOzoso contiene FUEGO, aquí definido por «una llama» en su uso corriente."
  ],
  [
    "VELAS",
    "Arden en la mesa y reciben viento en el barco.",
    "Doble definición.",
    "Piensa en objetos de cera y en las piezas de un barco a vela.",
    "VELAS son las de cera que arden sobre la mesa y las que reciben el viento en un barco."
  ],
  [
    "CARTON",
    "Cantor descompuesto: material de embalaje.",
    "Anagrama.",
    "Reorganiza CANTOR.",
    "CANTOR descompuesto forma CARTÓN, un material de embalaje."
  ],
  [
    "TAZON",
    "Esta zona oculta un recipiente grande para beber.",
    "Palabra oculta.",
    "Busca letras seguidas entre ESTA y ZONA.",
    "esTA ZONa contiene TAZÓN, un recipiente grande para beber."
  ],
  [
    "RUMOR",
    "Baile sin sus dos últimas, oro sin final: noticia sin confirmar.",
    "Sinónimo y dos recortes.",
    "El baile es RUMBA. Quita BA y une lo que queda con ORO sin su última O.",
    "RUM(BA) + OR(O) = RUMOR, una noticia sin confirmar."
  ],
  [
    "COMETA",
    "Astro con cola; juguete sujeto por un hilo.",
    "Doble definición.",
    "La palabra se usa en astronomía y para un juguete que se hace volar.",
    "Un COMETA es un astro que puede presentar cola; una COMETA es el juguete que se hace volar sujeto por un hilo. Ambos sentidos existen en español."
  ],
  [
    "SOBRE",
    "Encima de la carta, su envoltorio.",
    "Doble definición.",
    "Una lectura indica posición; la otra, un envoltorio postal.",
    "SOBRE significa «encima de» y también es el envoltorio de una carta."
  ],
  [
    "CARTA",
    "Mensaje escrito: una degustación acoge la inicial del rey.",
    "Sinónimo e inserción.",
    "La degustación es CATA; la inicial de REY es R. Introduce R dentro de CATA.",
    "CA(R)TA: CATA acoge R, inicial de rey. CARTA es un mensaje escrito."
  ],
  [
    "CAMPANA",
    "Campo sin final, seguido de Ana: instrumento de bronce.",
    "Supresión y unión.",
    "Quita O a CAMPO y añade ANA.",
    "CAMP(O) + ANA = CAMPANA, un instrumento que puede estar hecho de bronce."
  ],
  [
    "FIRMA",
    "Rúbrica de marfil sin remate, trabajado.",
    "Supresión y anagrama.",
    "MARFIL sin remate pierde L. Reorganiza MARFI.",
    "MARFI(L), trabajado, forma FIRMA: una rúbrica."
  ],
  [
    "RELOJ",
    "Nota, artículo neutro y principio de jornada: lo que da la hora.",
    "Unión de tres elementos.",
    "La nota es RE; el artículo neutro, LO; jornada empieza por J.",
    "RE + LO + J = RELOJ, lo que da la hora."
  ],
  [
    "PARED",
    "Orden de detenerse y comienzo de diciembre levantan un muro.",
    "Sinónimo e inicial.",
    "La orden puede ser PARE. Diciembre empieza por D.",
    "PARE + D = PARED, un muro."
  ],
  [
    "ABANICO",
    "Tiraban iconos: ocultaban un utensilio para darse aire.",
    "Palabra oculta.",
    "Busca letras seguidas entre TIRABAN e ICONOS.",
    "tirABAN ICOnos contiene ABANICO, un utensilio para darse aire."
  ],
  [
    "SILLA",
    "Isla con principio de lago, revuelta: asiento con respaldo.",
    "Inicial y anagrama.",
    "Añade L, inicial de LAGO, a ISLA y reorganiza las cinco letras.",
    "ISLA + L, revueltas, forman SILLA, un asiento con respaldo."
  ],
  [
    "FRUTA",
    "Frota cambia su centro por la inicial de uva: alimento vegetal.",
    "Sustitución e inicial.",
    "El centro de FROTA es O. Sustitúyelo por U, inicial de UVA.",
    "FR(O)TA pasa a FR(U)TA: un alimento vegetal."
  ],
  [
    "CAMAROTE",
    "Habitación a bordo: lecho y gire.",
    "Unión de sinónimos.",
    "Un lecho es una CAMA; «gire» equivale a ROTE.",
    "CAMA + ROTE = CAMAROTE, una habitación a bordo de un barco."
  ],
  [
    "PALMA",
    "Árbol que llevas en la mano.",
    "Doble definición.",
    "La palabra también nombra la parte interior de la mano.",
    "PALMA es un árbol de la familia de las palmeras y la parte interior de la mano."
  ],
  [
    "BRUJA",
    "Jura, con un principio de bondad y revuelta: hechicera.",
    "Inicial y anagrama.",
    "Añade B, inicial de BONDAD, a JURA y reorganiza.",
    "JURA + B, revueltas, forman BRUJA, una hechicera."
  ],
  [
    "MANGO",
    "Fruta que permite sujetar un martillo.",
    "Doble definición.",
    "Una lectura es comestible; la otra, un asidero.",
    "MANGO es una fruta y el asidero por el que se sujeta un martillo."
  ],
  [
    "GATOS",
    "Maúllan y levantan coches.",
    "Doble definición.",
    "Unos son animales; los otros, herramientas de elevación.",
    "GATOS son los felinos que maúllan y las herramientas con las que se levantan coches."
  ],
  [
    "RAYAS",
    "Peces que quedan al subrayar.",
    "Doble definición.",
    "Piensa en peces planos y en trazos debajo de un texto.",
    "RAYAS son peces de cuerpo aplanado y también los trazos que se hacen al subrayar."
  ],
  [
    "COBRA",
    "Serpiente que recibe el pago.",
    "Doble definición.",
    "Puede ser un animal o una forma del verbo cobrar.",
    "COBRA es una serpiente; «cobra» también significa que alguien recibe un pago."
  ],
  [
    "CUADERNO",
    "Cuerno con comienzos de amor y deseo dentro: libro para escribir.",
    "Iniciales e inserción.",
    "Las iniciales de AMOR y DESEO dan AD. Introdúcelas en CUERNO.",
    "CU(AD)ERNO: CUERNO contiene A y D, iniciales de amor y deseo. Un CUADERNO sirve para escribir."
  ],
  [
    "LLAMA",
    "Arde y anda por los Andes.",
    "Doble definición.",
    "Piensa en el fuego y en un camélido andino.",
    "LLAMA es la parte visible del fuego y también un camélido andino."
  ],
  [
    "RUBIO",
    "Rubí, con el oeste y revuelto: de cabello claro.",
    "Abreviatura y anagrama.",
    "Añade O, abreviatura de oeste, a RUBÍ sin tilde y reorganiza.",
    "RUBI + O, revueltos, forman RUBIO: de cabello claro."
  ],
  [
    "HORIZONTE",
    "Norte hizo cambiar la línea aparente entre cielo y tierra.",
    "Anagrama de dos palabras.",
    "Reorganiza NORTE HIZO, siguiendo la señal «cambiar».",
    "NORTE HIZO, reorganizado, forma HORIZONTE, la línea aparente entre cielo y tierra."
  ],
  [
    "TIGRE",
    "Grite, alterado, ante un gran felino.",
    "Anagrama.",
    "Reorganiza GRITE.",
    "GRITE alterado forma TIGRE, un gran felino."
  ],
  [
    "LUNAR",
    "De la Luna, sobre la piel.",
    "Doble definición.",
    "Una lectura es un adjetivo astronómico; la otra, una mancha de la piel.",
    "LUNAR significa relativo a la Luna y también es una mancha de la piel."
  ],
  [
    "PASARELAS",
    "Las pareas de otro modo: pasos elevados para peatones.",
    "Anagrama de dos palabras.",
    "«De otro modo» pide reorganizar LAS PAREAS.",
    "LAS PAREAS, de otro modo, forma PASARELAS: pasos elevados para peatones."
  ],
  [
    "AGUJA",
    "Señala la hora o atraviesa una tela.",
    "Doble definición.",
    "Piensa en una pieza del reloj y en un instrumento de costura.",
    "AGUJA es la pieza de un reloj que señala la hora y el instrumento que atraviesa la tela al coser."
  ],
  [
    "JABON",
    "Producto de limpieza: bajo mezclado con el norte.",
    "Abreviatura y anagrama.",
    "Añade N, abreviatura de norte, a BAJO y reorganiza.",
    "BAJO + N, mezclados, forman JABÓN, un producto de limpieza."
  ]
],desafio:[
  [
    "ZORRO",
    "Su amor rozó lo imposible: esconde, de vuelta, a un astuto.",
    "Palabra oculta al revés.",
    "Busca ORROZ entre AMOR y ROZÓ y léelo al revés.",
    "amOR ROZó contiene ORROZ; al volver da ZORRO, que también designa a una persona astuta."
  ],
  [
    "ARCO",
    "Democracia guarda, de vuelta, una estructura curva.",
    "Palabra oculta al revés.",
    "Busca OCRA dentro de DEMOCRACIA y léelo al revés.",
    "demOCRAcia contiene OCRA; al invertirlo se obtiene ARCO, una estructura curva."
  ],
  [
    "SABIO",
    "Alguien instruido pone el sur ante un labio sin cabeza.",
    "Abreviatura y supresión.",
    "Pon S, abreviatura de sur, antes de LABIO sin su primera letra.",
    "S + (L)ABIO = SABIO, alguien instruido."
  ],
  [
    "POLVO",
    "Partículas en suspensión: un polo contiene cinco.",
    "Número romano e inserción.",
    "Cinco se escribe V en números romanos. Introdúcelo dentro de POLO.",
    "POL(V)O: POLO contiene V, cinco en números romanos. POLVO son partículas que pueden estar en suspensión."
  ],
  [
    "IMAN",
    "Una mirada esconde, de vuelta, un objeto que atrae hierro.",
    "Palabra oculta al revés.",
    "Busca NAMI entre UNA y MIRADA y léelo al revés.",
    "uNA MIrada contiene NAMI; al invertirlo se obtiene IMÁN, un objeto que atrae hierro."
  ],
  [
    "PLAYA",
    "Lugar de veraneo: plan sin final y ahora.",
    "Supresión y sinónimo.",
    "Quita el final de PLAN y añade un sinónimo de AHORA: YA.",
    "PLA(N) + YA = PLAYA, un lugar de veraneo."
  ],
  [
    "NACAR",
    "Quienes atracan esconden, de vuelta, un material irisado.",
    "Palabra oculta al revés.",
    "Dentro de ATRACAN hay RACAN. Léelo de derecha a izquierda.",
    "atRACAN contiene RACAN; al invertirlo aparece NÁCAR, un material irisado."
  ],
  [
    "AMBAR",
    "Bramar sin una erre, descompuesto: resina fósil.",
    "Supresión y anagrama.",
    "Quita una R de BRAMAR y reorganiza las cinco letras restantes.",
    "BRAMAR sin una R, descompuesto, forma ÁMBAR, una resina fósil."
  ],
  [
    "ACERO",
    "Hacer sin cabeza, seguido del oeste: aleación de hierro y carbono.",
    "Supresión y abreviatura.",
    "Quita H de HACER y añade O, abreviatura de oeste.",
    "(H)ACER + O = ACERO, una aleación de hierro y carbono."
  ],
  [
    "CISNE",
    "Ave de cuello largo: el séptimo arte contiene el sur.",
    "Sinónimo e inserción.",
    "El séptimo arte es CINE. Introduce S, abreviatura de sur.",
    "CI(S)NE: CINE contiene S, abreviatura de sur. El CISNE es un ave de cuello largo."
  ],
  [
    "ERIZO",
    "Animal de púas: el este encabeza un bucle.",
    "Abreviatura y sinónimo.",
    "El este se abrevia E. Un bucle de pelo es un RIZO.",
    "E + RIZO = ERIZO, un animal de púas."
  ],
  [
    "AZUCAR",
    "Cruzada sin la inicial de derrota, deshecha, da un endulzante.",
    "Inicial, supresión y anagrama.",
    "Quita D, inicial de DERROTA, de CRUZADA y reorganiza CRUZAA.",
    "CRUZA(D)A sin D, deshecha, forma AZÚCAR, un endulzante."
  ],
  [
    "GLOBO",
    "Depredador precedido por cabeza de gigante: esfera hinchable.",
    "Inicial y sinónimo.",
    "Pon G, cabeza de GIGANTE, antes de LOBO.",
    "G + LOBO = GLOBO, una esfera hinchable."
  ],
  [
    "HUESO",
    "Un huevo cambia cinco por el sur: pieza del esqueleto.",
    "Número romano y sustitución.",
    "En HUEVO, V representa cinco. Sustitúyela por S, abreviatura de sur.",
    "HUE(V)O pasa a HUE(S)O: una pieza del esqueleto. V representa cinco en números romanos y S abrevia sur."
  ],
  [
    "CORONA",
    "Conjunto de voces y media nada: tocado del rey.",
    "Sinónimo, mitad y unión.",
    "El conjunto de voces es CORO. La primera mitad de NADA es NA.",
    "CORO + NA(DA) = CORONA, un tocado del rey."
  ],
  [
    "ISLAS",
    "Sillas sin una ele, desordenadas: tierras rodeadas de agua.",
    "Supresión y anagrama.",
    "Quita una L de SILLAS y reorganiza SILAS.",
    "SILLAS sin una L da SILAS; desordenado forma ISLAS, tierras rodeadas de agua."
  ],
  [
    "JUNCO",
    "Junio cambia su número romano por cien: planta de ribera.",
    "Sustitución de números romanos.",
    "En JUNIO, I representa uno. Sustitúyelo por C, cien.",
    "JUN(I)O pasa a JUN(C)O, una planta de ribera."
  ],
  [
    "PLANETA",
    "Proyecto seguido de letra griega: cuerpo que orbita una estrella.",
    "Unión de sinónimos.",
    "El proyecto es un PLAN. La letra griega es ETA.",
    "PLAN + ETA = PLANETA, un cuerpo que orbita una estrella."
  ],
  [
    "KARMA",
    "Consecuencias de los actos: kárate y mamá se quedan a medias.",
    "Mitades y unión.",
    "Toma la primera mitad de KARATE y la primera mitad de MAMA, sin tildes.",
    "KAR(ATE) + MA(MÁ) = KARMA, concepto que relaciona los actos con sus consecuencias en tradiciones de la India."
  ],
  [
    "LITRO",
    "Una tortilla guarda, de vuelta, una medida de capacidad.",
    "Palabra oculta al revés.",
    "Dentro de TORTILLA hay ORTIL. Léelo al revés.",
    "tORTILla contiene ORTIL; al invertirlo se obtiene LITRO, una medida de capacidad."
  ],
  [
    "MURAL",
    "Pintura de pared: la ciudad de Ur está rodeada por el mal.",
    "Inserción.",
    "Introduce UR, que aparece en la pista, dentro de MAL.",
    "M(UR)AL: MAL rodea UR y forma MURAL, una pintura de pared. No es necesario conocer la historia de la ciudad para disponer de sus letras."
  ],
  [
    "SIRENAS",
    "Silban insistentes, rompen el nocturno ambiente silencioso: inicialmente, alarmas sonoras.",
    "Iniciales de palabras.",
    "Toma las iniciales de las siete palabras anteriores a «inicialmente».",
    "S(ilban) I(nsistentes) R(ompen) E(l) N(octurno) A(mbiente) S(ilencioso) = SIRENAS, alarmas sonoras. La frase también describe lo que hacen."
  ],
  [
    "NIEVE",
    "Viernes pierde erre y ese, se agita y da precipitación blanca.",
    "Supresiones y anagrama.",
    "Quita R y S de VIERNES. Reorganiza VIENE.",
    "VIERNES sin R ni S da VIENE; agitado forma NIEVE, precipitación en forma de cristales de hielo."
  ],
  [
    "OPERA",
    "Intervenir quirúrgicamente sin llegar al final: obra cantada.",
    "Sinónimo y supresión.",
    "Intervenir quirúrgicamente es OPERAR. Quita su última R.",
    "OPERA(R) sin final da ÓPERA, una obra cantada."
  ],
  [
    "UNIVERSO",
    "Todo lo que existe: uno, como prefijo, ante una línea poética.",
    "Prefijo y sinónimo.",
    "El prefijo que significa uno es UNI-; una línea poética es un VERSO.",
    "UNI + VERSO = UNIVERSO: el conjunto de todo lo que existe."
  ],
  [
    "PULSO",
    "Un latido, de vuelta y oculto entre los lupinos.",
    "Palabra oculta al revés.",
    "Busca OSLUP dentro de LOS LUPINOS y léelo al revés.",
    "lOS LUPinos contiene OSLUP; al invertirlo aparece PULSO, un latido."
  ],
  [
    "QUESO",
    "Bosque sin cabeza, agitado, da un alimento de leche.",
    "Supresión y anagrama.",
    "Quita B de BOSQUE y reorganiza OSQUE.",
    "(B)OSQUE, agitado, forma QUESO, un alimento elaborado con leche."
  ],
  [
    "ROBLE",
    "Árbol: doble cambia quinientos por la cabeza del rey.",
    "Número romano e inicial.",
    "D representa quinientos; la cabeza de REY es R. Sustituye D por R.",
    "(D)OBLE pasa a (R)OBLE: un árbol."
  ],
  [
    "SUEÑO",
    "Imagen al dormir: dueño cambia quinientos por el sur.",
    "Número romano y sustitución.",
    "D representa quinientos y S abrevia sur. Cambia D por S en DUEÑO.",
    "(D)UEÑO pasa a (S)UEÑO: una imagen o representación al dormir. La Ñ se conserva."
  ],
  [
    "TRIGO",
    "Gritón sin final, alterado, se vuelve cereal.",
    "Supresión y anagrama.",
    "Quita N de GRITÓN y reorganiza GRITO, sin tilde.",
    "GRITÓ(N), alterado, forma TRIGO, un cereal."
  ],
  [
    "VAPOR",
    "La ropa verde esconde, de vuelta, agua en estado gaseoso.",
    "Palabra oculta al revés.",
    "Busca ROPAV entre ROPA y VERDE y léelo al revés.",
    "ROPA Verde contiene ROPAV; al invertirlo aparece VAPOR, agua en estado gaseoso."
  ],
  [
    "PARADOJA",
    "Detiene una nota y una carcajada: aparente contradicción.",
    "Unión de tres elementos.",
    "«Detiene» da PARA; la nota es DO; la risa se expresa con JA.",
    "PARA + DO + JA = PARADOJA, una aparente contradicción."
  ],
  [
    "YERNO",
    "El esposo de la hija: rey de vuelta dice que no.",
    "Inversión y unión.",
    "Lee REY al revés y añade NO.",
    "REY de vuelta da YER; YER + NO = YERNO, el esposo de la hija."
  ],
  [
    "NAIPE",
    "Carta de juego: peinado sin una nota, deshecho.",
    "Supresión y anagrama.",
    "La nota es DO. Quítala de PEINADO y reorganiza PEINA.",
    "PEINA(DO), deshecho, forma NAIPE, una carta de juego."
  ],
  [
    "LABERINTO",
    "Nota libre, desordenada, describe una red de caminos confusos.",
    "Anagrama de dos palabras.",
    "Reorganiza NOTA LIBRE.",
    "NOTA LIBRE desordenada forma LABERINTO, una red de caminos confusos."
  ],
  [
    "BARCO",
    "El dios del vino acoge la cabeza del rey: embarcación.",
    "Sinónimo, inicial e inserción.",
    "El dios es BACO; la cabeza de REY es R. Introduce R en BACO.",
    "BA(R)CO: BACO acoge R, inicial de rey, y forma BARCO, una embarcación."
  ],
  [
    "COFRE",
    "Arca de fresco sin el sur, revuelto.",
    "Supresión y anagrama.",
    "Quita S, abreviatura de sur, de FRESCO y reorganiza FRECO.",
    "FRE(S)CO sin S, revuelto, forma COFRE, un arca para guardar objetos."
  ],
  [
    "PASAPORTE",
    "Documento de viaje: ocurre, seguido de presencia.",
    "Unión de sinónimos.",
    "«Ocurre» equivale a PASA y la presencia o aspecto de alguien es su PORTE.",
    "PASA + PORTE = PASAPORTE, un documento de viaje."
  ],
  [
    "DUETO",
    "Pieza para dos voces: duelo cambia cincuenta por la inicial de tenor.",
    "Número romano e inicial.",
    "L representa cincuenta y tenor empieza por T. Sustituye L por T.",
    "DUE(L)O pasa a DUE(T)O: una pieza para dos voces."
  ],
  [
    "EPOCA",
    "Un saco pesado guarda, de vuelta, un período.",
    "Palabra oculta al revés.",
    "Busca ACOPE entre SACO y PESADO y léelo al revés.",
    "sACO PEsado contiene ACOPE; al invertirlo se obtiene ÉPOCA, un período."
  ]
]};
const CONTENT_IDS = {
  "suave": [
    "0",
    "suave:extra:AMOR",
    "1",
    "2",
    "suave:extra:MESA",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "suave:extra:CAMINO",
    "9",
    "10",
    "suave:extra:ESTELA",
    "11",
    "12",
    "suave:extra:CAMELLO",
    "13",
    "14",
    "15",
    "suave:extra:CRISTAL",
    "16",
    "17",
    "suave:extra:ESTRELLA",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "suave:extra:SERENATA",
    "24",
    "25",
    "suave:extra:GIRASOLES",
    "26",
    "27",
    "suave:extra:CARACOLES",
    "28",
    "29"
  ],
  "intermedio": [
    "intermedio:0",
    "intermedio:extra:SEDA",
    "intermedio:1",
    "intermedio:2",
    "intermedio:extra:ROSA",
    "intermedio:3",
    "intermedio:4",
    "intermedio:5",
    "intermedio:6",
    "intermedio:7",
    "intermedio:8",
    "intermedio:extra:CARTON",
    "intermedio:9",
    "intermedio:10",
    "intermedio:extra:COMETA",
    "intermedio:11",
    "intermedio:12",
    "intermedio:extra:CAMPANA",
    "intermedio:13",
    "intermedio:14",
    "intermedio:15",
    "intermedio:extra:ABANICO",
    "intermedio:16",
    "intermedio:17",
    "intermedio:extra:CAMAROTE",
    "intermedio:18",
    "intermedio:19",
    "intermedio:20",
    "intermedio:21",
    "intermedio:22",
    "intermedio:23",
    "intermedio:extra:CUADERNO",
    "intermedio:24",
    "intermedio:25",
    "intermedio:extra:HORIZONTE",
    "intermedio:26",
    "intermedio:27",
    "intermedio:extra:PASARELAS",
    "intermedio:28",
    "intermedio:29"
  ],
  "desafio": [
    "desafio:0",
    "desafio:extra:ARCO",
    "desafio:1",
    "desafio:2",
    "desafio:extra:IMAN",
    "desafio:3",
    "desafio:4",
    "desafio:5",
    "desafio:6",
    "desafio:7",
    "desafio:8",
    "desafio:extra:AZUCAR",
    "desafio:9",
    "desafio:10",
    "desafio:extra:CORONA",
    "desafio:11",
    "desafio:12",
    "desafio:extra:PLANETA",
    "desafio:13",
    "desafio:14",
    "desafio:15",
    "desafio:extra:SIRENAS",
    "desafio:16",
    "desafio:17",
    "desafio:extra:UNIVERSO",
    "desafio:18",
    "desafio:19",
    "desafio:20",
    "desafio:21",
    "desafio:22",
    "desafio:23",
    "desafio:extra:PARADOJA",
    "desafio:24",
    "desafio:25",
    "desafio:extra:LABERINTO",
    "desafio:26",
    "desafio:27",
    "desafio:extra:PASAPORTE",
    "desafio:28",
    "desafio:29"
  ]
};
