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

// Small SVG illustrations for each poem - animal-focused when possible
const poemIllustrations = {
  animales: [
    // 0: Blanca Varela - crowd in bus, bodies like sardines
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1"><rect x="8" y="22" width="64" height="34" rx="6"/><circle cx="20" cy="60" r="5"/><circle cx="60" cy="60" r="5"/><line x1="8" y1="56" x2="72" y2="56"/><circle cx="22" cy="34" r="4" stroke-width="0.8"/><circle cx="34" cy="32" r="4" stroke-width="0.8"/><circle cx="46" cy="35" r="4" stroke-width="0.8"/><circle cx="58" cy="33" r="4" stroke-width="0.8"/><line x1="22" y1="38" x2="22" y2="48" stroke-width="0.6"/><line x1="34" y1="36" x2="34" y2="48" stroke-width="0.6"/><line x1="46" y1="39" x2="46" y2="48" stroke-width="0.6"/><line x1="58" y1="37" x2="58" y2="48" stroke-width="0.6"/></svg>`,
    // 1: Perro atropellado - dog on road with wheel marks
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2"><ellipse cx="40" cy="38" rx="22" ry="10"/><circle cx="62" cy="30" r="9"/><circle cx="66" cy="28" r="1.8" fill="currentColor"/><path d="M70 32 Q76 34 72 30"/><path d="M55 22 Q60 16 58 24" stroke-width="1"/><path d="M22 46 Q18 56 22 60"/><path d="M30" y1="47" x2="28" y2="60" stroke-width="1"/><line x1="4" y1="62" x2="76" y2="62" stroke-width="0.6"/><line x1="4" y1="66" x2="76" y2="66" stroke-dasharray="6 4" stroke-width="0.6"/><circle cx="14" cy="20" r="8" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.3"/><circle cx="14" cy="20" r="3" stroke-width="0.6" opacity="0.3"/></svg>`,
    // 2: 6:00 p.m. - lion claw as moon, spider eyes
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1"><path d="M40 8 Q52 8 56 20 Q58 28 52 34 Q46 38 40 38 Q34 38 28 34 Q22 28 24 20 Q28 8 40 8" stroke-width="1.2"/><path d="M28 34 L22 44" stroke-width="1.5"/><path d="M34 38 L30 48" stroke-width="1.5"/><path d="M46 38 L50 48" stroke-width="1.5"/><path d="M52 34 L58 44" stroke-width="1.5"/><circle cx="34" cy="22" r="2" fill="currentColor"/><circle cx="46" cy="22" r="2" fill="currentColor"/><line x1="10" y1="58" x2="70" y2="58" stroke-width="0.6"/><path d="M10 58 A30 10 0 0 1 70 58" stroke-width="0.8" opacity="0.4"/></svg>`,
    // 3: Ausencia - empty space, ghost of absent figure
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M32 20 Q40 12 48 20" stroke-dasharray="2 3"/><path d="M30 24 L30 52" stroke-dasharray="2 3"/><path d="M50 24 L50 52" stroke-dasharray="2 3"/><path d="M30 52 Q40 58 50 52" stroke-dasharray="2 3"/><circle cx="37" cy="28" r="1" fill="currentColor" opacity="0.2"/><circle cx="43" cy="28" r="1" fill="currentColor" opacity="0.2"/></svg>`,
    // 4: Tributo - dead bird lying on its back
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2"><ellipse cx="40" cy="44" rx="18" ry="10"/><circle cx="22" cy="38" r="8"/><circle cx="19" cy="36" r="1.5" fill="currentColor"/><path d="M14 40 L6 38"/><path d="M40 34 L36 24" stroke-width="0.8"/><path d="M44 34 L48 24" stroke-width="0.8"/><path d="M34 24 Q40 18 48 24" stroke-width="0.8"/><path d="M54 52 Q50 62 56 64" stroke-width="0.8"/><path d="M58 44 Q66 44 68 48" stroke-width="0.8"/></svg>`,
    // 5: Si pues - firefly-like animalitos coming out of a face
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="40" cy="42" rx="16" ry="20"/><circle cx="34" cy="36" r="2.5"/><circle cx="46" cy="36" r="2.5"/><path d="M36 48 Q40 52 44 48"/><circle cx="18" cy="20" r="3" stroke-width="0.8"/><line x1="18" y1="20" x2="15" y2="17" stroke-width="0.5"/><line x1="18" y1="20" x2="21" y2="17" stroke-width="0.5"/><circle cx="62" cy="24" r="3" stroke-width="0.8"/><line x1="62" y1="24" x2="59" y2="21" stroke-width="0.5"/><line x1="62" y1="24" x2="65" y2="21" stroke-width="0.5"/><circle cx="28" cy="12" r="2" stroke-width="0.8" opacity="0.5"/><circle cx="54" cy="14" r="2" stroke-width="0.8" opacity="0.5"/><circle cx="66" cy="42" r="2" stroke-width="0.8" opacity="0.4"/></svg>`,
    // 6: Oda - cat stretching with claws out
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2"><ellipse cx="36" cy="44" rx="20" ry="12"/><circle cx="58" cy="34" r="10"/><path d="M48 26 L52 14 L56 24"/><path d="M68 26 L64 14 L60 24"/><circle cx="54" cy="32" r="2" fill="currentColor"/><circle cx="62" cy="32" r="2" fill="currentColor"/><ellipse cx="58" cy="38" rx="2.5" ry="1.5"/><line x1="48" y1="36" x2="38" y2="34" stroke-width="0.6"/><line x1="48" y1="38" x2="38" y2="40" stroke-width="0.6"/><line x1="68" y1="36" x2="76" y2="34" stroke-width="0.6"/><line x1="68" y1="38" x2="76" y2="40" stroke-width="0.6"/><path d="M16 44 Q8 40 4 34"/><path d="M20 54 Q18 62 22 64" stroke-width="0.8"/></svg>`,
    // 7: Sin título - spider hanging from web
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="0.8"><line x1="40" y1="4" x2="40" y2="30"/><ellipse cx="40" cy="36" rx="8" ry="6" stroke-width="1"/><circle cx="40" cy="30" r="5" stroke-width="1"/><circle cx="38" cy="29" r="1" fill="currentColor"/><circle cx="42" cy="29" r="1" fill="currentColor"/><path d="M32 34 Q24 28 16 22"/><path d="M32 36 Q22 36 12 34"/><path d="M32 38 Q24 44 16 50"/><path d="M48 34 Q56 28 64 22"/><path d="M48 36 Q58 36 68 34"/><path d="M48 38 Q56 44 64 50"/><path d="M36 42 Q34 52 30 58" stroke-width="0.6"/><path d="M44 42 Q46 52 50 58" stroke-width="0.6"/></svg>`,
    // 8: G - cricket on a leaf
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1"><path d="M10 54 Q40 40 70 54" stroke-width="1.2"/><line x1="40" y1="48" x2="40" y2="54" stroke-width="0.6"/><ellipse cx="40" cy="40" rx="10" ry="6"/><circle cx="30" cy="36" r="4"/><circle cx="28" cy="35" r="1" fill="currentColor"/><path d="M28 32 Q22 22 16 18" stroke-width="0.8"/><path d="M30" y1="32" x2="26" y2="22" stroke-width="0.8"/><path d="M46 44 Q54 54 60 60" stroke-width="0.8"/><path d="M48 46 Q58 52 66 56" stroke-width="0.8"/><path d="M34 44 Q26 54 20 60" stroke-width="0.8"/></svg>`,
    // 9: Si no te viera más - a paint drop escaping a canvas
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1"><rect x="12" y="8" width="40" height="50" rx="1"/><rect x="16" y="12" width="32" height="42" rx="0" stroke-width="0.6" stroke-dasharray="2 3"/><path d="M48 46 Q54 52 56 64 A6 6 0 0 1 44 64 Q44 56 48 46" stroke-width="1.2"/><circle cx="50" cy="60" r="1.5" fill="currentColor" opacity="0.3"/><line x1="52" y1="46" x2="56" y2="42" stroke-width="0.6" opacity="0.4"/><line x1="52" y1="42" x2="58" y2="40" stroke-width="0.6" opacity="0.4"/></svg>`,
    // 10: Mamá - closed eyes with single tear, sun above
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="40" cy="16" r="6" stroke-width="0.8" opacity="0.3"/><path d="M16 40 Q24 32 34 40" stroke-width="1.5"/><path d="M46 40 Q54 32 64 40" stroke-width="1.5"/><path d="M34 44 Q32 54 34 60" stroke-width="0.8"/><path d="M34 60 Q34 64 38 62 Q36 58 34 60" fill="currentColor" opacity="0.3"/></svg>`,
    // 11: Vivo en el surco - large fingerprint
    null,
    // 12: Un día - fish in the sea with waves
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 32 Q14 24 24 32 Q34 40 44 32 Q54 24 64 32 Q72 38 78 32" stroke-width="1.2"/><path d="M4 42 Q14 34 24 42 Q34 50 44 42 Q54 34 64 42 Q72 48 78 42" stroke-width="0.8" opacity="0.5"/><path d="M4 52 Q14 44 24 52 Q34 60 44 52 Q54 44 64 52" stroke-width="0.5" opacity="0.3"/><ellipse cx="40" cy="22" rx="10" ry="5" stroke-width="1.2"/><path d="M50 22 L58 16 L58 28 Z" stroke-width="0.8"/><circle cx="36" cy="20" r="1.5" fill="currentColor"/><path d="M34 24 Q36 26 38 24" stroke-width="0.6"/></svg>`,
    // 13: Hola - blue weeds/malahierba growing from a pocket
    `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 46 L20 72 L60 72 L60 46"/><path d="M20 46 Q40 56 60 46" stroke-width="1.2"/><path d="M30 46 Q28 32 30 20" stroke-width="0.8"/><path d="M30 28 Q26 24 28 20" stroke-width="0.6"/><path d="M30 28 Q34 24 32 20" stroke-width="0.6"/><path d="M40 46 Q38 28 40 14" stroke-width="0.8"/><path d="M40 22 Q36 18 38 12" stroke-width="0.6"/><path d="M40 22 Q44 18 42 12" stroke-width="0.6"/><path d="M40 30 Q36 26 37 22" stroke-width="0.6"/><path d="M50 46 Q52 34 50 22" stroke-width="0.8"/><path d="M50 30 Q46 26 48 22" stroke-width="0.6"/><path d="M50 30 Q54 26 52 22" stroke-width="0.6"/></svg>`
  ],
  "ciudad-invisible": [
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><line x1="10" y1="50" x2="50" y2="50"/><rect x="15" y="30" width="8" height="20"/><rect x="26" y="20" width="8" height="30"/><rect x="37" y="35" width="8" height="15"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><rect x="15" y="10" width="30" height="44"/><rect x="20" y="16" width="6" height="6"/><rect x="34" y="16" width="6" height="6"/><rect x="20" y="28" width="6" height="6"/><rect x="34" y="28" width="6" height="6"/><rect x="26" y="42" width="8" height="12"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="30" cy="16" r="8" fill="currentColor" opacity="0.15"/><circle cx="30" cy="30" r="8"/><circle cx="30" cy="44" r="8"/><line x1="30" y1="4" x2="30" y2="56"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><path d="M15 50 Q15 20 30 15 Q45 20 45 50"/><circle cx="22" cy="36" r="1" fill="currentColor" opacity="0.3"/><circle cx="38" cy="32" r="1" fill="currentColor" opacity="0.3"/><circle cx="30" cy="42" r="1" fill="currentColor" opacity="0.3"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><rect x="10" y="20" width="40" height="28" rx="8"/><line x1="10" y1="34" x2="50" y2="34"/><rect x="22" y="25" width="16" height="6" rx="1"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 12 L20 48"/><path d="M24 8 L24 44"/><path d="M28 14 L28 50"/><path d="M32 10 L32 46"/><path d="M36 12 L36 48"/><path d="M40 8 L40 44"/><line x1="8" y1="52" x2="52" y2="52" stroke-width="0.8"/></svg>`
  ],
  "reloj-de-arena": [
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><circle cx="30" cy="44" r="3" fill="currentColor" opacity="0.3"/><line x1="30" y1="10" x2="30" y2="40" stroke-dasharray="2 4"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="30" cy="30" r="16"/><line x1="30" y1="30" x2="30" y2="18"/><line x1="30" y1="30" x2="40" y2="30"/><circle cx="30" cy="30" r="2" fill="currentColor"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><circle cx="30" cy="30" r="3"/><circle cx="30" cy="30" r="10"/><circle cx="30" cy="30" r="18"/><circle cx="30" cy="30" r="25" stroke-dasharray="3 4"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M10 44 Q20 20 30 16 Q40 20 50 44"/><line x1="30" y1="16" x2="30" y2="8"/><circle cx="30" cy="6" r="3" fill="currentColor" opacity="0.2"/></svg>`,
    `<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="1"><line x1="18" y1="14" x2="42" y2="14" stroke-width="1.5"/><line x1="18" y1="46" x2="42" y2="46" stroke-width="1.5"/><path d="M22 14 Q22 26 30 30 Q22 34 22 46"/><path d="M38 14 Q38 26 30 30 Q38 34 38 46"/></svg>`
  ]
};

// Large interlude illustrations - shown between poem groups for breathing room
const interludeIllustrations = {
  animales: {
    // After poem index 4 (after "Tributo a tu tiempo")
    4: `<svg viewBox="0 0 300 200" fill="none" stroke="currentColor" stroke-width="0.8" class="interlude-svg">
      <path d="M20 160 Q60 140 100 160 Q140 180 180 160 Q220 140 260 160 Q280 170 300 160" opacity="0.3"/>
      <path d="M0 170 Q40 150 80 170 Q120 190 160 170 Q200 150 240 170 Q270 185 300 170" opacity="0.2"/>
      <ellipse cx="150" cy="80" rx="40" ry="20" stroke-width="1"/>
      <circle cx="120" cy="68" r="12" stroke-width="1"/>
      <circle cx="116" cy="66" r="2.5" fill="currentColor" opacity="0.4"/>
      <path d="M108 70 L96 66" stroke-width="0.8"/>
      <path d="M160 92 Q180 100 188 110" stroke-width="0.8"/>
      <path d="M130 100 Q126 116 130 122" stroke-width="0.6"/>
      <path d="M170 100 Q174 116 170 122" stroke-width="0.6"/>
      <circle cx="60" cy="40" r="2" fill="currentColor" opacity="0.15"/>
      <circle cx="240" cy="50" r="3" fill="currentColor" opacity="0.15"/>
      <circle cx="40" cy="100" r="2" fill="currentColor" opacity="0.1"/>
      <circle cx="260" cy="90" r="2" fill="currentColor" opacity="0.1"/>
    </svg>`,
    // After poem index 9 (after "Si no te viera más")
    9: `<svg viewBox="0 0 300 200" fill="none" stroke="currentColor" stroke-width="0.8" class="interlude-svg">
      <circle cx="150" cy="100" r="50" stroke-width="1" stroke-dasharray="4 6"/>
      <circle cx="150" cy="100" r="35" stroke-width="0.8" stroke-dasharray="3 5"/>
      <circle cx="150" cy="100" r="20" stroke-width="0.6"/>
      <circle cx="150" cy="100" r="8" stroke-width="0.5"/>
      <circle cx="150" cy="100" r="2" fill="currentColor" opacity="0.3"/>
      <path d="M100 100 Q80 60 60 50" stroke-width="0.5" opacity="0.3"/>
      <path d="M200 100 Q220 60 240 50" stroke-width="0.5" opacity="0.3"/>
      <path d="M150 50 Q150 30 140 20" stroke-width="0.5" opacity="0.3"/>
      <path d="M150 150 Q150 170 160 180" stroke-width="0.5" opacity="0.3"/>
    </svg>`
  }
};

const books = [
  {
    id: "animales",
    title: "Animales",
    author: "Kelly Garcia",
    dedication: "A mis abuelos",
    year: 2026,
    edition: "Primera edici\u00f3n",
    publisher: "Maestra Editorial",
    poemsDates: "Poemas seleccionados entre 2012 y 2015",
    authorBio: "Kelly Garcia (Ica, 1987) estudi\u00f3 Comunicaci\u00f3n Social en la Universidad Nacional Mayor de San Marcos. Perteneci\u00f3 a la generaci\u00f3n de poetas sanmarquinos de la d\u00e9cada del 2010. Particip\u00f3 en la antolog\u00eda Ese puerto existe (C.A.C.A Editores, 2012) y en diversas lecturas en espacios culturales. Vive en Lima, Per\u00fa.",
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
