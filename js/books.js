const bookSVGs = {
  animales: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" class="book-cover-svg">
    <rect width="200" height="260" fill="none"/>
    <!-- Dog body lying down -->
    <ellipse cx="100" cy="140" rx="40" ry="18" fill="none" stroke="currentColor" stroke-width="1.3"/>
    <!-- Head -->
    <circle cx="148" cy="122" r="16" fill="none" stroke="currentColor" stroke-width="1.3"/>
    <!-- Ear -->
    <path d="M156 108 Q168 95 160 112" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <!-- Eye -->
    <circle cx="153" cy="120" r="2" fill="currentColor"/>
    <!-- Nose -->
    <circle cx="163" cy="124" r="1.5" fill="currentColor"/>
    <!-- Snout -->
    <path d="M160 126 Q166 128 163 124" fill="none" stroke="currentColor" stroke-width="1"/>
    <!-- Front legs -->
    <line x1="130" y1="155" x2="128" y2="178" stroke="currentColor" stroke-width="1.2"/>
    <line x1="120" y1="156" x2="118" y2="178" stroke="currentColor" stroke-width="1.2"/>
    <!-- Back legs -->
    <path d="M68 152 Q60 168 65 178" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <path d="M78 154 Q72 168 75 178" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <!-- Tail -->
    <path d="M58 138 Q38 125 35 110" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <!-- Road line (dashed) -->
    <line x1="15" y1="185" x2="185" y2="185" stroke="currentColor" stroke-width="0.6" stroke-dasharray="8 6"/>
    <!-- Ground -->
    <line x1="10" y1="178" x2="190" y2="178" stroke="currentColor" stroke-width="0.8"/>
    <!-- Spider web corner (top right) -->
    <path d="M175 30 L190 30" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <path d="M175 30 L190 45" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <path d="M175 30 L185 50" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
    <path d="M182 30 Q183 36 190 38" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.4"/>
    <!-- Small spider -->
    <circle cx="186" cy="42" r="1.5" fill="currentColor" opacity="0.4"/>
    <!-- Decorative dots (stars/dust) -->
    <circle cx="30" cy="55" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="50" cy="40" r="1.5" fill="none" stroke="currentColor" stroke-width="0.6" opacity="0.3"/>
    <circle cx="85" cy="50" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="120" cy="35" r="1.5" fill="none" stroke="currentColor" stroke-width="0.6" opacity="0.3"/>
    <circle cx="155" cy="55" r="1" fill="currentColor" opacity="0.3"/>
  </svg>`,

  "ciudad-invisible": `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" class="book-cover-svg">
    <rect width="200" height="260" fill="none"/>
    <!-- Buildings -->
    <rect x="20" y="90" width="24" height="120" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <rect x="50" y="60" width="20" height="150" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <rect x="76" y="100" width="30" height="110" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <rect x="112" y="50" width="18" height="160" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <rect x="136" y="80" width="26" height="130" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <rect x="168" y="110" width="16" height="100" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <!-- Windows -->
    <rect x="26" y="100" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="34" y="100" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="26" y="115" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="34" y="115" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="26" y="130" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="34" y="130" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="55" y="70" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="62" y="70" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="55" y="85" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="62" y="85" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="55" y="100" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="62" y="100" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="82" y="110" width="6" height="7" fill="currentColor" opacity="0.3"/>
    <rect x="94" y="110" width="6" height="7" fill="currentColor" opacity="0.3"/>
    <rect x="82" y="125" width="6" height="7" fill="currentColor" opacity="0.3"/>
    <rect x="94" y="125" width="6" height="7" fill="currentColor" opacity="0.3"/>
    <rect x="116" y="60" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="122" y="60" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="116" y="75" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="122" y="75" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="116" y="90" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="122" y="90" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="141" y="92" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="152" y="92" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="141" y="108" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="152" y="108" width="5" height="6" fill="currentColor" opacity="0.3"/>
    <rect x="172" y="120" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="172" y="135" width="4" height="5" fill="currentColor" opacity="0.3"/>
    <!-- Ground line -->
    <line x1="10" y1="210" x2="190" y2="210" stroke="currentColor" stroke-width="1"/>
    <!-- Antenna -->
    <line x1="121" y1="50" x2="121" y2="32" stroke="currentColor" stroke-width="1"/>
    <circle cx="121" cy="30" r="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
    <!-- Moon -->
    <circle cx="170" cy="35" r="10" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="174" cy="32" r="8" fill="var(--bg-color, #fdfcf8)" stroke="none"/>
  </svg>`,

  "reloj-de-arena": `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" class="book-cover-svg">
    <rect width="200" height="260" fill="none"/>
    <!-- Top plate -->
    <line x1="60" y1="50" x2="140" y2="50" stroke="currentColor" stroke-width="2"/>
    <!-- Bottom plate -->
    <line x1="60" y1="210" x2="140" y2="210" stroke="currentColor" stroke-width="2"/>
    <!-- Left glass -->
    <path d="M70 50 Q70 90 72 110 Q74 125 100 130 Q74 135 72 150 Q70 170 70 210" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <!-- Right glass -->
    <path d="M130 50 Q130 90 128 110 Q126 125 100 130 Q126 135 128 150 Q130 170 130 210" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <!-- Sand in top (partial) -->
    <path d="M82 80 Q82 95 86 108 Q90 118 100 122 Q110 118 114 108 Q118 95 118 80" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
    <!-- Sand stream -->
    <line x1="100" y1="130" x2="100" y2="170" stroke="currentColor" stroke-width="0.8" stroke-dasharray="1 4"/>
    <!-- Sand pile at bottom -->
    <path d="M80 200 Q90 185 100 180 Q110 185 120 200" fill="none" stroke="currentColor" stroke-width="1"/>
    <!-- Sand dots falling -->
    <circle cx="100" cy="140" r="1" fill="currentColor"/>
    <circle cx="100" cy="150" r="1" fill="currentColor"/>
    <circle cx="100" cy="160" r="1" fill="currentColor"/>
    <circle cx="99" cy="172" r="1" fill="currentColor"/>
    <!-- Sand dots in pile -->
    <circle cx="95" cy="196" r="1" fill="currentColor"/>
    <circle cx="100" cy="194" r="1" fill="currentColor"/>
    <circle cx="105" cy="196" r="1" fill="currentColor"/>
    <circle cx="100" cy="198" r="1" fill="currentColor"/>
    <circle cx="92" cy="200" r="1" fill="currentColor"/>
    <circle cx="108" cy="200" r="1" fill="currentColor"/>
    <circle cx="97" cy="190" r="1" fill="currentColor"/>
    <circle cx="103" cy="190" r="1" fill="currentColor"/>
    <!-- Decorative end caps -->
    <line x1="64" y1="48" x2="64" y2="52" stroke="currentColor" stroke-width="1.5"/>
    <line x1="136" y1="48" x2="136" y2="52" stroke="currentColor" stroke-width="1.5"/>
    <line x1="64" y1="208" x2="64" y2="212" stroke="currentColor" stroke-width="1.5"/>
    <line x1="136" y1="208" x2="136" y2="212" stroke="currentColor" stroke-width="1.5"/>
  </svg>`
};

const books = [
  {
    id: "animales",
    title: "Animales",
    author: "Kelly Garcia",
    dedication: "A mis abuelos",
    poems: [
      {
        title: "Ayer vi a Blanca Varela subiendo a la l\u00ednea B del metropolitano",
        content: "En verdad vi la sien izquierda de Blanca Varela\nsubiendo al \u00faltimo metropolitano de la l\u00ednea B\n\nEn verdad vi el cabello de Blanca Varela\nsujeto detr\u00e1s de la oreja izquierda de Blanca Varela\n\nLa vi hasta que se perdi\u00f3 en la sopa de brazos, piernas, cabellos y orejas.\nLo m\u00e1s seguro es que no fuera ella.\n\nOh Blanca, soy victima de tu sublime carcajada.\n\nAyer te vi en el metropolitano\ny ahora estoy en otro bus\nsin boletos de colores\nsin destino transparente\nsin tu sien izquierda.\njunio 2013"
      },
      {
        title: "A un perro atropellado en la Av. Universitaria",
        content: "Cuatro patitas negras\nvan sobre el asfalto negro\nluego...\ncuatro ruedas negras\nsobre el perrito negro\ny...\nadi\u00f3s ruedas\nadi\u00f3s perro\n\ntus patitas son ahora\nin\u00fatiles terminaciones nerviosas\nde tu cuerpo muerto\n\nEn tu costado derecho\ndebajo de las costillas\ntienes un corte\nmide unos 13 cent\u00edmetros\ny tus tripas lo aprovechan\nsalen por ah\u00ed a husmear el mundo\nson muy descaradas perrito\nsaludan a los pasajeros\ndel transporte p\u00fablico\ny a los que van a pie\n\neres todo un espect\u00e1culo\n\ntodos ellos voltean a mirarte\npero tu ya nunca mirar\u00e1s a nadie\n\ntus ojitos ya no est\u00e1n en su lugar\nahora tienes dos huecos\ny de ellos\ncuelgan dos hermosos hilos de sangre\nque se estiran\ncomo queriendo tocar el suelo\n\nY te miro y quiero llorar perrito\nme has recordado a la muerte\nella tambi\u00e9n es un perro negro\nsin ojos y sin tripas"
      },
      {
        title: "6:00 p.m.",
        subtitle: "a J y C",
        content: "Ya son las 6 de la tarde\nel sol se ha derramado por completo sobre la tierra\nhaciendo crujir de dolor a sus criaturas\nque al final del d\u00eda terminan encogidas\nretorci\u00e9ndose de luz\nentre las llamas invisibles\n\nnosotros, ustedes\nest\u00e1n, estamos\nsiempre dispuestos a la noche\n(que a pesar de todo ha sido nuestra preferida\npor todas esas jornadas nocturnas\nllenas del azul solitario de los f\u00f3sforos)\natentos\nporque la luna es una enorme garra de le\u00f3n\npropensa al zarpazo\n... \u00a1no le tengamos miedo!\nno podemos temblar de terror\ntantas veces nos recostamos sobre nuestros propios vientres\nsolo para mirar la noche\ny hemos terminado ebrios\ncon los ojos llenos de la niebla de otros siglos.\n\nnosotros, ustedes\n\u00bfyo?\nsoy una simple piedra enterrada en el simple suelo\nustedes en cambio\nbrotan de entre el excremento\ncomo la hierba\no como los ojos de las ara\u00f1as\nabundantes y transparentes\njuegan con el dolor del mundo\ncomo con un ni\u00f1o de tres a\u00f1os\ny emergen de la batalla despu\u00e9s del suplicio\n\ninocentes               vagabundos                              iluminados"
      },
      {
        title: "Ausencia",
        content: "Voy inventando mis pasos\ninerte y vaciada de luz\ntiento a ciegas el mundo\ny le voy robando a la angustia\neste breve espacio\nen donde me escondo\nde ti\ny contigo\n\npero te llamo y no vienes\n\ngrito tu nombre\nhasta vomitar las entra\u00f1as"
      },
      {
        title: "Tributo a tu tiempo",
        content: "Eres insurrecci\u00f3n de la memoria\nllegas a mi mente\ncon tus pasos largos\ncon tus ojos verdes\ncon tus manos buenas\nme llegas como vaho\nde ranciedad y apolillamiento\n\nTe hab\u00edas perdido y has vuelto\nEres t\u00fa?\nno, ya no eres t\u00fa\n\nEres solo un p\u00e1jaro muerto\nimposible de tocar y de o\u00edr\ntr\u00e1gicamente invisible\nirremediablemente\ninolvidable."
      },
      {
        title: "Si pues, ya no me gustan tus ojos",
        content: "te he visto de color sepia\nadornado con foquitos de medio watt\nsalen de tus orejas\nde tu boca\ny de los huecos de tu nariz\nson como animalitos\nsalen y se esconden\nsalen y se esconden\nsalen y se esconden\n\nAsi son tus luces\nasi son porque asi eres t\u00fa\nte enciendes y te apagas\nte enciendes y te apagas\nte enciendes y te apagas\nte enciendes y te apagas\nte enciendes y te apagas\nte enciendes y te apagas\nte enciendes y te apagas\nte enciendes y me apagas"
      },
      {
        title: "Oda a tu hipot\u00e9tica ausencia llena de gatos y garritas",
        content: "Miau, miau, miau"
      },
      {
        title: "Sin t\u00edtulo",
        content: "puedes irte,\nno hay problema\nyo me quedo aqu\u00ed\nescuchando a las ara\u00f1as tejer sus telas\ny a las ra\u00edces de los \u00e1rboles enterrarse m\u00e1s y m\u00e1s"
      },
      {
        title: "G",
        content: "un d\u00eda de estos\nla vida se disfrazar\u00e1\nde se\u00f1ora bonachona\ny nos har\u00e1 creer\nque podemos ser felices\n\ny nos comeremos el cuento\n\ny la tristeza ser\u00e1 solo\nun grillo m\u00e1s"
      },
      {
        title: "Si no te viera m\u00e1s",
        content: "Si no te viera m\u00e1s\nmi voz\n-solitaria sucesi\u00f3n de vocales cerradas-\nvagar\u00e1 inconclusa y anhelante\ncomo la gotita de pintura\nque se escap\u00f3 del cuadro\npara vivir pegada al pintor\npara conciliar o reconciliar\npara llegar a un acuerdo\npara pedir y para dar\nde m\u00ed y para m\u00ed\nsin pedirlo todo y entregando nada"
      },
      {
        title: "Mam\u00e1 s\u00e9 que lloras a escondidas",
        content: "1\nCierra los ojos mam\u00e1\nolvida mis veinticinco insolentes a\u00f1os\nyo olvidar\u00e9 tus l\u00e1grimas de funeral\n\n2\nDescansemos mam\u00e1\nignoremos los a\u00f1os y las l\u00e1grimas\n(que al final son lo mismo)\n\n3\nYa sab\u00eda que me iba a despertar as\u00ed\ncon los ojos ahogados por el sol\nque ya detesto\nque ya detestamos"
      },
      {
        title: "Vivo en el surco m\u00e1s peque\u00f1o de tu huella digital",
        content: "~"
      },
      {
        title: "Un d\u00eda",
        content: "Soy las escamas de un pescado victimado en el puerto\nSoy la espuma que las olas dejan en la orilla cuando fallecen\nSoy hongo en la red del pescador\nEl moho en la base de su bote\nY las claraboyas amarillas\n\nLa piedra redondeada por la fuerza del mar\nEl mar experto en domar piedras\nEl anzuelo oxidado\nLas maderas carcomidas sin destino y sin capit\u00e1n\n\nLos pies que vuelan\nEl mar que grita\nLa luna que esp\u00eda\nLa pupila que se esconde\nLas memorias tachadas de una agenda sin due\u00f1o y sin fechas\nLas zapatillas pintadas\nLa bendita en el codo de alguien\n\nEl an\u00f3nimo descubierto\nY las caras conocidas\nLa huella clandestina\nLos mensajes pasados\nLas rayas verticales\nLa profunda negaci\u00f3n\nEl hola y el qu\u00e9 tal de un desconocido hacia un desconocido\nLos versos borrados\ny el adi\u00f3s"
      },
      {
        title: "Hola",
        content: "Tengo un montoncito de palabras\naqu\u00ed, en el bolsillo derecho\n\u00bfquieres verlo?\nes peque\u00f1o y alegre\ncomo un reci\u00e9n nacido\npor eso lo amo\n\nHay otro debajo de mi cama\neste es grave y opaco\ncomo luz de muerto\nno te lo recomiendo\n\npero entre tu nombre\ny la pelusita amarilla\nque se cae del sol\nhe puesto uno\ntiene problemas\nno sabe qui\u00e9n es\ntal vez no quiera verte\nmejor no te lo muestro\nni a este ni a los otros\nadem\u00e1s\nson solo malahierba\nde color azul\nque crece y se multiplica\nsolo para joderme la vida\n\nya me di cuenta\nquieren hacerse grandes\nm\u00e1s fuertes que yo\nterminar\u00e1n mat\u00e1ndome\no algo peor\n\nser\u00e1 mejor\nQUE NO LOS VEAS\nQUE NADIE LOS VEA\nQUE NADIE ME VEA\n\nquiero ser poeta\ny en mi casa nadie sabe\nshhhh"
      }
    ]
  },
  {
    id: "ciudad-invisible",
    title: "Ciudad Invisible",
    author: "Marcos Rueda",
    poems: [
      {
        title: "Calle sin nombre",
        content: "Hay una calle\nque no tiene nombre\n\nlos carteros\nla evitan\n\nlos mapas\nla ignoran\n\npero la gente\nque vive ah\u00ed\nsabe exactamente\nd\u00f3nde est\u00e1"
      },
      {
        title: "Edificio",
        content: "El edificio respira\npor las ventanas abiertas\n\ncada piso\nes un pulm\u00f3n\n\ncada balc\u00f3n\nun suspiro\n\ny el ascensor\nes la sangre\nque sube y baja\nsin descanso"
      },
      {
        title: "Sem\u00e1foro",
        content: "Rojo\namarillo\nverde\n\nel sem\u00e1foro\nes el \u00fanico\nque decide\npor nosotros\n\ny le obedecemos\nsin preguntar"
      },
      {
        title: "Parque de noche",
        content: "De noche\nel parque\nes otro pa\u00eds\n\nlos \u00e1rboles\nson sombras\ncon ra\u00edces\n\nlos bancos\nson camas\nsin s\u00e1banas\n\ny el silencio\nes tan grande\nque se puede\ntocar"
      },
      {
        title: "Metro",
        content: "Bajo tierra\nviajamos\ncomo topos\n\ncon los ojos\ncerrados\ny los aud\u00edfonos\npuestos\n\nignor\u00e1ndonos\ncon precisi\u00f3n\nmilim\u00e9trica"
      },
      {
        title: "Lluvia urbana",
        content: "La lluvia\nen la ciudad\nno es agua\n\nes un recordatorio\nde que el cielo\ntodav\u00eda existe\n\narriba\nmuy arriba\nde los edificios\nque construimos\npara no verlo"
      }
    ]
  },
  {
    id: "reloj-de-arena",
    title: "Reloj de Arena",
    author: "Valentina Sol",
    poems: [
      {
        title: "Primer grano",
        content: "El primer grano de arena\ncay\u00f3\nantes de que yo naciera\n\ny seguir\u00e1 cayendo\ncuando yo\nme haya ido\n\nel tiempo\nno me necesita\npero yo\nno puedo vivir\nsin \u00e9l"
      },
      {
        title: "Mediod\u00eda",
        content: "A las doce\nel sol\nest\u00e1 exactamente\narriba\n\nno hay sombra\nno hay duda\nno hay met\u00e1fora\n\nsolo luz\ncayendo\nverticalmente\nsobre la verdad"
      },
      {
        title: "Espera",
        content: "Esperar\nes el arte\nde no hacer nada\ny que duela\n\ncada minuto\nes una piedra\nen el zapato\n\ncada hora\nun escal\u00f3n\nque no lleva\na ning\u00fan piso"
      },
      {
        title: "Amanecer",
        content: "El amanecer\nno pide aplausos\n\nsale\nhace su trabajo\ny se va\n\ncomo un obrero\nde la luz\nque no necesita\nque nadie\nle d\u00e9 las gracias"
      },
      {
        title: "\u00daltimo grano",
        content: "El \u00faltimo grano\nde arena\nno sabe\nque es el \u00faltimo\n\ncae\nigual que todos\nlos dem\u00e1s\n\nsin ceremonia\nsin discurso\nsin despedida\n\ncae\ny el reloj\nse queda\nen silencio"
      }
    ]
  }
];
