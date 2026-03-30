const books = [
  {
    id: "animales",
    title: "Animales",
    author: "Kelly Garcia",
    coverSVG: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" class="book-cover-svg">
      <rect width="200" height="260" fill="none"/>
      <!-- Bird body -->
      <ellipse cx="100" cy="120" rx="28" ry="24" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <!-- Head -->
      <circle cx="100" cy="88" r="14" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <!-- Eye -->
      <circle cx="104" cy="85" r="2.5" fill="currentColor"/>
      <!-- Beak -->
      <path d="M114 88 L126 84 L114 92" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <!-- Tail feathers -->
      <path d="M72 130 Q55 145 48 160" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <path d="M72 128 Q52 138 42 152" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <path d="M74 126 Q50 132 38 142" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <!-- Legs -->
      <line x1="92" y1="144" x2="88" y2="170" stroke="currentColor" stroke-width="1.2"/>
      <line x1="108" y1="144" x2="112" y2="170" stroke="currentColor" stroke-width="1.2"/>
      <path d="M78 170 L88 170 L95 176" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <path d="M105 176 L112 170 L122 170" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <!-- Decorative dots -->
      <circle cx="140" cy="70" r="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
      <circle cx="155" cy="100" r="3" fill="none" stroke="currentColor" stroke-width="0.8"/>
      <circle cx="60" cy="75" r="2.5" fill="none" stroke="currentColor" stroke-width="0.8"/>
      <circle cx="148" cy="130" r="1.5" fill="none" stroke="currentColor" stroke-width="0.8"/>
      <circle cx="50" cy="105" r="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
      <circle cx="145" cy="155" r="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
      <!-- Whisker lines from beak -->
      <line x1="126" y1="84" x2="145" y2="78" stroke="currentColor" stroke-width="0.8"/>
      <line x1="126" y1="86" x2="148" y2="86" stroke="currentColor" stroke-width="0.8"/>
      <line x1="126" y1="88" x2="145" y2="94" stroke="currentColor" stroke-width="0.8"/>
    </svg>`,
    poems: [
      {
        title: "Ayer vi a Blanca Varela...",
        content: "Ayer vi a Blanca Varela\nen un sue\u00f1o\nme dijo que los poemas\nson animales\nque respiran solos\ny muerden\ncuando tienen hambre"
      },
      {
        title: "A un perro atropella...",
        content: "A un perro atropellado\nen la carretera\nle crecen flores\nen las costillas\n\ny...\n\nadi\u00f3s ruedas\nadi\u00f3s perro\n\ntus patitas son ahora\nin\u00fatiles terminaciones nerviosas\nde tu cuerpo muerto\n\nEn tu costado derecho\ndebajo de las costillas\ntienes un corte\nmide unos 13 cent\u00edmetros\ny tus tripas lo aprovechan\nsalen por ah\u00ed a husmear el mundo"
      },
      {
        title: "6:00 P.M.",
        content: "Son las seis de la tarde\ny el gato duerme\nsobre el peri\u00f3dico\n\nlas noticias de hoy\nson su almohada\n\nma\u00f1ana\nser\u00e1n su arena"
      },
      {
        title: "Ausencia",
        content: "El p\u00e1jaro que no vuelve\ndeja un hueco\nen la rama\n\nla rama no lo sabe\npero pesa menos\n\ny el \u00e1rbol\nsin saberlo\nse inclina\nhacia el lado\ndonde ya no est\u00e1"
      },
      {
        title: "Tributo a tu tiempo",
        content: "Tu tiempo de gato\nes un reloj sin manecillas\n\ncada siesta\nes una hora\nque no existe\n\ncada salto\nun segundo\nque se niega\na ser contado"
      },
      {
        title: "Si pues, ya no me gust...",
        content: "Si pues\nya no me gustan\nlos perros con due\u00f1o\n\nprefiero\nlos que cruzan la calle\nsin mirar\n\nesos\nque no le deben nada\na nadie"
      },
      {
        title: "Oda a tu hipot\u00e9tica a...",
        content: "Oda a tu hipot\u00e9tica ausencia\nanimal de compa\u00f1\u00eda\n\nsi te fueras\n\u00bfqui\u00e9n lamer\u00eda\nla sal de mis l\u00e1grimas?\n\n\u00bfqui\u00e9n dormir\u00eda\nen el hueco\nque deja mi cuerpo\nen el sof\u00e1?"
      },
      {
        title: "Sin t\u00edtulo",
        content: "Un pez\nen una bolsa de pl\u00e1stico\nes un astronauta\n\nsu pecera\nes el universo\n\ny el agua\nque se acaba\nes el ox\u00edgeno\nde su traje espacial"
      },
      {
        title: "G",
        content: "G de gato\nG de garra\nG de gru\u00f1ido\n\nla G\nes la letra\nm\u00e1s animal\ndel abecedario"
      },
      {
        title: "Si no te viera m\u00e1s",
        content: "Si no te viera m\u00e1s\nanimal\n\nme quedar\u00eda\ncon el sonido\nde tus patas\nsobre el piso\n\nese ritmo\nirregular\nque hac\u00edas\nal caminar\n\ncomo un jazz\ndesafinado\ny perfecto"
      },
      {
        title: "Mam\u00e1 s\u00e9 que lloras a...",
        content: "Mam\u00e1 s\u00e9 que lloras a veces\ncuando el perro te mira\ncon esos ojos\n\nno llores\n\n\u00e9l no sabe\nque va a morir\n\ny t\u00fa no sabes\nque ya est\u00e1s\nmuriendo"
      },
      {
        title: "Vivo en el surco m\u00e1s ...",
        content: "Vivo en el surco m\u00e1s hondo\ndel animal m\u00e1s viejo\n\naqu\u00ed abajo\ntodo huele\na tierra mojada\n\ny los gusanos\nson mis vecinos\nm\u00e1s antiguos"
      },
      {
        title: "Un d\u00eda",
        content: "Un d\u00eda\nel animal se detuvo\ny mir\u00f3 al cielo\n\nno buscaba a dios\nni a las estrellas\n\nsolo quer\u00eda\nsaber\nsi iba a llover"
      },
      {
        title: "Hola",
        content: "Hola\nanimal\n\nhola\ncriatura\nde ojos redondos\n\nhola\nser\nque no necesita\nnombre\n\nhola\nvida\nque no pide\npermiso"
      }
    ]
  },
  {
    id: "ciudad-invisible",
    title: "Ciudad Invisible",
    author: "Marcos Rueda",
    coverSVG: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" class="book-cover-svg">
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
    coverSVG: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" class="book-cover-svg">
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
    </svg>`,
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
