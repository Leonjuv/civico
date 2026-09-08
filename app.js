/**
 * Guía Cívica & Legal VE
 * Base de datos jurídica ampliada y Verificador de Afirmaciones Policiales
 * Diseño Minimalista con Iconos SVG y Soporte 100% Offline
 */

// Base de Datos Oficial con Verificación de Artículos y Afirmaciones Frecuentes
const LEGAL_DB = [
  {
    id: "art-193-copp",
    articleNumber: "193",
    legalBody: "COPP (Código Orgánico Procesal Penal)",
    category: "vehiculo",
    tag: "alerta",
    tagLabel: "ART. 193 COPP • INSPECCIÓN DE VEHÍCULOS",
    title: "Artículo 193 COPP: ¿Qué dice realmente sobre la inspección del vehículo?",
    officerClaim: "El oficial dice: 'El artículo 193 me faculta a revisar su teléfono, su cartera personal o desarmar el vehículo'.",
    verdict: "FALSO / ENGAÑO POLICIAL",
    verdictClass: "tag-prohibido",
    verdictExplanation: "El Art. 193 autoriza ÚNICAMENTE la inspección del vehículo cuando existan motivos fundados de que se ocultan objetos de un delito. En NINGÚN momento autoriza la revisión de teléfonos celulares ni correspondencia privada.",
    quickAns: "Solo autoriza inspección física del vehículo bajo motivos fundados, NUNCA de teléfonos ni carteras.",
    actualLaw: "Art. 193 COPP: La policía podrá inspeccionar un vehículo cuando existan motivos suficientes y fundados para presumir que en él se encuentran personas prófugas o cosas relacionadas con un hecho punible. Debe realizarse en presencia del conductor y cuidando de no ocasionar daños innecesarios.",
    script: "Oficial, con el debido respeto, el Artículo 193 del Código Orgánico Procesal Penal regula exclusivamente la inspección del vehículo bajo motivos fundados, pero en ninguna parte autoriza la revisión de teléfonos celulares ni carteras personales, lo cual está expresamente prohibido sin orden judicial por el Artículo 48 de la Constitución.",
    legalBasis: "Artículo 193 del Código Orgánico Procesal Penal (COPP) en concordancia con el Art. 48 de la Constitución (CRBV).",
    consequence: "Si el funcionario insiste en registrar el teléfono o pertenencias privadas alegando el 193:",
    consequenceDetails: [
      "Incurre en Delito de Violación de Comunicaciones Privadas (Ley Especial de Delitos Informáticos, penas de 2 a 6 años).",
      "Comete Abuso de Autoridad (Art. 67 Ley Contra la Corrupción) por falsear y extralimitar el alcance de la ley penal.",
      "Toda evidencia obtenida mediante engaño o usurpación legal es nula de toda nulidad (Art. 49 ordinal 1° CRBV)."
    ],
    diplomaticPhrase: "Oficial, con todo respeto conozco el contenido del 193 del COPP. Con gusto facilito la revisión visual del carro en mi presencia, pero el teléfono y mis documentos personales están amparados por el secreto constitucional.",
    keywords: ["193", "articulo 193", "art 193", "copp 193", "inspeccion vehiculo", "revisar carro", "maleta", "cartera", "celular", "telefono"]
  },
  {
    id: "art-191-copp",
    articleNumber: "191",
    legalBody: "COPP (Código Orgánico Procesal Penal)",
    category: "pie",
    tag: "alerta",
    tagLabel: "ART. 191 COPP • INSPECCIÓN DE PERSONAS",
    title: "Artículo 191 COPP: ¿Qué dice sobre revisar a una persona, morral o bolsillos?",
    officerClaim: "El oficial dice: 'Por el artículo 191 tengo derecho a registrarte todo el morral, bolsillos y ver tu celular porque estamos en un operativo'.",
    verdict: "PARCIALMENTE DISTORSIONADO",
    verdictClass: "tag-alerta",
    verdictExplanation: "La inspección personal exige 'motivos fundados' (sospecha de portar armas o drogas de un hecho delictivo concreto). Debe hacerla alguien del mismo sexo, respetando el pudor. NO es un chequeo rutinario libre ni autoriza a vaciar tus cosas ni a ver tu teléfono.",
    quickAns: "Exige motivos fundados de delito, respeto al pudor y funcionario del mismo sexo. No autoriza ver chats ni teléfonos.",
    actualLaw: "Art. 191 COPP: La policía podrá inspeccionar una persona siempre que haya motivos fundados para presumir que oculta entre sus ropas o pertenencias objetos relacionados con un hecho punible. Antes de la inspección deberá advertir a la persona acerca de la sospecha e invitarla a mostrar el objeto.",
    script: "Oficial, de acuerdo con el Artículo 191 del COPP, la inspección personal exige motivos fundados de un hecho punible. ¿Podría indicarme respetuosamente cuál es la sospecha o hecho delictivo que motiva esta inspección? Yo mismo puedo abrir el compartimento del morral que me solicite en presencia suya.",
    legalBasis: "Artículos 191 y 192 del Código Orgánico Procesal Penal (COPP).",
    consequence: "Si el funcionario requisa sin motivos o despoja pertenencias:",
    consequenceDetails: [
      "Incurre en Abuso de Autoridad (Art. 67 Ley contra la Corrupción) si realiza requisas vejatorias o fuera de la ley.",
      "Si exige dinero para no 'sembrar' o dejar ir, comete Concusión (Art. 60 Ley Anticorrupción, 3 a 7 años de presidio).",
      "La inspección debe realizarse por persona del mismo sexo del intervenido; lo contrario viola el debido proceso."
    ],
    diplomaticPhrase: "Funcionario, colaboro con la inspección en los términos del 191, pero le recuerdo que el procedimiento debe quedar registrado en un acta oficial si se retiene algún objeto de mi propiedad.",
    keywords: ["191", "articulo 191", "art 191", "copp 191", "morral", "bolso", "requisa", "mochila", "bolsillos", "persona", "inspeccion corporal"]
  },
  {
    id: "art-48-crbv",
    articleNumber: "48",
    legalBody: "Constitución (CRBV)",
    category: "todas",
    tag: "prohibido",
    tagLabel: "ART. 48 CRBV • INVIOLABILIDAD DE COMUNICACIONES",
    title: "Artículo 48 CRBV: ¿Me pueden obligar a desbloquear el celular o leer chats?",
    officerClaim: "El oficial dice: 'Entrégueme el teléfono y desbloquéelo para ver con quién habla o si no se va detenido'.",
    verdict: "TOTALMENTE ILEGAL / DELITO",
    verdictClass: "tag-prohibido",
    verdictExplanation: "El teléfono móvil está legalmente asimilado a la correspondencia privada. Su acceso SIN orden previa de un Juez de Control Penal constituye un delito grave de violación de comunicaciones privadas.",
    quickAns: "PROHIBIDO. El teléfono es correspondencia privada. Solo un Juez de Control puede ordenar revisarlo.",
    actualLaw: "Art. 48 CRBV: Se garantiza el secreto e inviolabilidad de las comunicaciones privadas en todas sus formas. No podrán ser interferidas sino por orden de un tribunal competente, con el cumplimiento de las disposiciones de ley.",
    script: "Buenas tardes, oficial. Con el mayor respeto institucional, el Artículo 48 de la Constitución establece la inviolabilidad de las comunicaciones privadas. Ningún funcionario puede revisar mi teléfono sin una orden firmada por un Juez de Control. Con gusto le muestro mis documentos de identidad, pero el celular no puedo desbloquearlo.",
    legalBasis: "Artículo 48 de la Constitución de la República Bolivariana de Venezuela y Art. 20 de la Resolución Conjunta N° 109 (Gaceta Oficial 42.458).",
    consequence: "Consecuencias penales para el funcionario que obligue a revisar el celular:",
    consequenceDetails: [
      "Delito de Violación de Comunicaciones Privadas (Ley Especial de Delitos Informáticos, 2 a 6 años de prisión).",
      "Destitución de la carrera policial ante la Inspectoría de Control de Actuación Policial (ICAP).",
      "Cualquier 'prueba' que el policía pretenda extraer sin orden judicial es NULA y no tiene validez legal."
    ],
    diplomaticPhrase: "Oficial, entiendo su trabajo de seguridad, pero revisar mi teléfono sin orden judicial le genera responsabilidad penal ante la Fiscalía de Derechos Fundamentales. Prefiero que llamemos a su superior o a la Fiscalía si tiene alguna duda.",
    keywords: ["48", "articulo 48", "art 48", "crbv 48", "celular", "telefono", "whatsapp", "fotos", "mensajes", "redes", "clave", "desbloquear"]
  },
  {
    id: "art-20-res-109",
    articleNumber: "20",
    legalBody: "Resolución Conjunta 109/058 (Gaceta 42.458)",
    category: "todas",
    tag: "derecho",
    tagLabel: "ART. 20 RES. 109 • DERECHO A GRABAR",
    title: "Artículo 20 de la Resolución 109: ¿Puedo grabar en audio o video a los policías?",
    officerClaim: "El oficial dice: 'Está prohibido grabar a los funcionarios en funciones, guarde el teléfono o se lo quito'.",
    verdict: "FALSO / MENTIRA FRECUENTE",
    verdictClass: "tag-prohibido",
    verdictExplanation: "El Art. 20 de la Resolución Conjunta 109 (Defensa e Interiores) autoriza EXPRESAMENTE a los ciudadanos a registrar en video o audio los procedimientos policiales y prohíbe a los funcionarios exigir que se apague o borre.",
    quickAns: "100% LEGAL. El Art. 20 de la Resolución Conjunta 109 autoriza expresamente a los ciudadanos a grabar.",
    actualLaw: "Art. 20 Resolución Conjunta 109 y 058 (Gaceta Oficial 42.458 del 8-sep-2022): Ninguna persona podrá ser obligada a no realizar grabaciones de video o audio en los puntos de control, ni a entregar sus equipos de grabación, ni a borrar el contenido grabado antes, durante o después del procedimiento.",
    script: "Oficial, con todo respeto, el Artículo 20 de la Resolución Conjunta 109 de los Ministerios de Defensa e Interiores, publicada en Gaceta Oficial 42.458, establece expresamente que los ciudadanos podemos registrar en audio o video los procedimientos. No estoy obstaculizando su trabajo, sino ejerciendo este derecho con respeto.",
    legalBasis: "Artículo 20 de la Resolución Conjunta N° 109 / N° 058 (Gaceta Oficial N° 42.458) y Artículos 57 y 141 de la CRBV.",
    consequence: "Si el funcionario intenta arrebatar el teléfono o borrar el video:",
    consequenceDetails: [
      "Incurre en desacato expreso a la Resolución Ministerial conjunta de sus propios superiores.",
      "Comete Delito contra la Propiedad si sustrae o daña el equipo físico (Art. 451 y 453 del Código Penal).",
      "La resolución prohíbe tajantemente retener el celular o exigir borrar el archivo."
    ],
    diplomaticPhrase: "Oficial, el video ampara tanto su apego al protocolo profesional como la seguridad del ciudadano. La propia Gaceta 42.458 le prohíbe a usted exigir que borre o apague el dispositivo.",
    keywords: ["20", "articulo 20", "art 20", "resolucion 109", "gaceta 42458", "grabar", "video", "audio", "filmar", "camara", "fotos policiales"]
  },
  {
    id: "art-181-ltt",
    articleNumber: "181",
    legalBody: "Ley de Transporte Terrestre (LTT)",
    category: "vehiculo",
    tag: "prohibido",
    tagLabel: "ART. 181 LTT • RETENCIÓN DE VEHÍCULOS",
    title: "Artículo 181 LTT: ¿Cuándo pueden retener mi vehículo o moto?",
    officerClaim: "El oficial dice: 'Por no tener el cinturón / casco / tener la licencia vencida me tengo que llevar el carro al estacionamiento'.",
    verdict: "FALSO / CAUSAL INVENTADA",
    verdictClass: "tag-prohibido",
    verdictExplanation: "Las infracciones comunes (semáforo, cinturón, licencia vencida) se sancionan con MULTA pecuniaria, NUNCA con retención del vehículo. El Art. 181 tiene solo 6 causales muy específicas (sin placas, ebriedad, accidente grave, fallas mecánicas críticas, etc.).",
    quickAns: "Por infracciones comunes solo aplica MULTA escrita. La retención está limitada taxativamente al Art. 181.",
    actualLaw: "Art. 181 LTT: Solo se retendrá el vehículo cuando: 1. No porte placas; 2. Condiciones mecánicas pongan en peligro la circulación; 3. El conductor esté bajo efecto de alcohol o drogas; 4. Accidente de tránsito con heridos o fallecidos; 5. No posea ningún documento de propiedad ni traspaso; 6. Circule sin póliza RCV vigente.",
    script: "Oficial, con el debido respeto, el Artículo 181 de la Ley de Transporte Terrestre establece causales taxativas para la retención del vehículo. Por una infracción ordinaria corresponde levantar una boleta de citación o multa conforme a la ley, pero no la retención del vehículo.",
    legalBasis: "Artículo 181 de la Ley de Transporte Terrestre.",
    consequence: "Si el funcionario insiste en quitar el vehículo sin causal del 181:",
    consequenceDetails: [
      "Incurre en Retención Arbitraria y Abuso de Autoridad (Art. 67 Ley Anticorrupción).",
      "Si utiliza la amenaza del estacionamiento para pedir dinero o dádivas, comete Delito de Concusión (Art. 60 Ley Anticorrupción).",
      "Puedes denunciarlo de inmediato ante la Fiscalía Superior o Tránsito Terrestre del INTT."
    ],
    diplomaticPhrase: "Oficial, si usted determina que cometí una falta vial, por favor entregue la boleta de multa oficial para pagarla por taquilla bancaria autorizada, pero el Art. 181 no faculta la retención por este motivo.",
    keywords: ["181", "articulo 181", "art 181", "ltt 181", "retencion", "estacionamiento", "grua", "quitar el carro", "quitar la moto", "llevarse la moto", "multa"]
  },
  {
    id: "art-218-cp",
    articleNumber: "218",
    legalBody: "Código Penal (Resistencia a la Autoridad)",
    category: "todas",
    tag: "alerta",
    tagLabel: "ART. 218 CP • ¿QUÉ ES RESISTENCIA?",
    title: "Artículo 218 Código Penal: ¿Negarme a un abuso es 'Resistencia a la Autoridad'?",
    officerClaim: "El oficial dice: 'Si no me hace caso o si me cuestiona, se lo llevo preso por resistencia a la autoridad'.",
    verdict: "AMENAZA INFUNDADA",
    verdictClass: "tag-prohibido",
    verdictExplanation: "La resistencia a la autoridad exige violencia física o amenazas activas contra el funcionario para impedir un acto legítimo de sus funciones. Exigir educadamente el cumplimiento de la Constitución NO constituye delito.",
    quickAns: "Exigir tus derechos pacíficamente y citar la ley NO es resistencia a la autoridad. La resistencia exige violencia.",
    actualLaw: "Art. 218 Código Penal: Sanciona a quien utilice violencia o amenaza activa contra un funcionario público para oponerse a que cumpla un acto legal de sus funciones.",
    script: "Oficial, estoy colaborando plenamente con usted con respeto y serenidad. No estoy ejerciendo ninguna violencia ni amenaza contra su persona, por lo que no existe resistencia a la autoridad. Simplemente estoy invocando los derechos que la Constitución y las leyes vigentes me confieren como ciudadano.",
    legalBasis: "Artículo 218 del Código Penal en relación con los Arts. 25 y 49 de la CRBV (principio de legalidad y nulidad de actos ilegales).",
    consequence: "Si el funcionario utiliza falsas imputaciones de resistencia:",
    consequenceDetails: [
      "Incurre en Delito de Simulación de Hecho Punible (Art. 239 del Código Penal) y Privación Ilegítima de Libertad (Art. 176 CP).",
      "Todo acto dictado por abuso de poder es nulo de nulidad absoluta y engendra responsabilidad civil, penal y administrativa (Art. 25 CRBV)."
    ],
    diplomaticPhrase: "Oficial, en ningún momento pretendo faltarle el respeto a su investidura; estoy a su disposición para cualquier procedimiento formal y legal, con respeto mutuo.",
    keywords: ["218", "articulo 218", "art 218", "resistencia", "resistencia a la autoridad", "desacato", "preso por resistencia", "esposas", "detenido"]
  },
  {
    id: "art-44-crbv",
    articleNumber: "44",
    legalBody: "Constitución (CRBV)",
    category: "pie",
    tag: "derecho",
    tagLabel: "ART. 44 CRBV • LIBERTAD PERSONAL",
    title: "Artículo 44 CRBV: ¿Me pueden detener por no llevar la cédula física?",
    officerClaim: "El oficial dice: 'Por no tener la cédula laminada te vas al comando detenido para verificar'.",
    verdict: "FALSO / PROCEDIMIENTO ILEGAL",
    verdictClass: "tag-prohibido",
    verdictExplanation: "En Venezuela solo existen dos causales legales para detener a una persona: 1. Flagrancia en la comisión de un delito; 2. Orden judicial escrita de un Juez. Olvidar la cédula NO es delito.",
    quickAns: "Nadie puede ser detenido sin orden judicial o flagrancia. Pueden verificar tu cédula por radio (SIIPOL).",
    actualLaw: "Art. 44 CRBV: La libertad personal es inviolable. Ninguna persona puede ser arrestada o detenida sino en virtud de una orden judicial, a menos que sea sorprendida in fraganti.",
    script: "Oficial, con el debido respeto, el Artículo 44 de la Constitución consagra la libertad personal: solo procede detención por orden judicial o flagrancia de un delito. Mi cédula de identidad es [tu número]. Le solicito respetuosamente que verifique mi identidad por radio con el sistema SIIPOL. No estoy en flagrancia de ningún delito.",
    legalBasis: "Artículo 44 de la Constitución (CRBV) y Ley Orgánica de Identificación.",
    consequence: "Si el funcionario priva de libertad sin delito flagrante:",
    consequenceDetails: [
      "Comete Delito de Privación Ilegítima de Libertad (Art. 176 Código Penal).",
      "Incurre en violación directa de los Derechos Fundamentales protegidos por la Fiscalía.",
      "El número 0800-FISCA-00 atiende de inmediato detenciones arbitrarias sin flagrancia."
    ],
    diplomaticPhrase: "Oficial, permítame llamar a un familiar para que envíe una fotografía de mi cédula o me la acerque, y verifique mi número por SIIPOL.",
    keywords: ["44", "articulo 44", "art 44", "crbv 44", "cedula", "sin cedula", "laminada", "siipol", "preso por cedula", "comando", "verificar"]
  },
  {
    id: "art-60-corrupcion",
    articleNumber: "60",
    legalBody: "Ley Contra la Corrupción",
    category: "todas",
    tag: "prohibido",
    tagLabel: "ART. 60 LEY CORRUPCIÓN • CONCUSIÓN",
    title: "Artículo 60 Ley Contra la Corrupción: ¿Qué dice sobre la 'matraca' o pedir dinero?",
    officerClaim: "El oficial dice: 'Deme una colaboración para el refresco o 20 dólares y no le retengo nada'.",
    verdict: "DELITO PENAL GRAVE",
    verdictClass: "tag-prohibido",
    verdictExplanation: "Exigir o insinuar dinero, transferencias o bienes a cambio de no imponer una sanción o no retener bienes es el delito penal de Concusión, castigado con 3 a 7 años de presidio.",
    quickAns: "DELITO DE CONCUSIÓN. Castigado con 3 a 7 años de prisión e inhabilitación perpetua.",
    actualLaw: "Art. 60 Ley Contra la Corrupción: El funcionario público que, abusando de sus funciones, constriña o induzca a alguien a que dé o prometa para sí mismo o para un tercero una suma de dinero o cualquier otra ganancia, será penado con prisión de 3 a 7 años.",
    script: "Oficial, con el debido respeto, yo no realizo pagos irregulares ni colaboraciones en efectivo. Si existe alguna infracción, por favor elabore la boleta de citación o multa oficial con su identificación y yo la cancelaré por los canales bancarios oficiales del Estado como lo establece la ley.",
    legalBasis: "Artículo 60 de la Ley Contra la Corrupción y Código Penal.",
    consequence: "Sanciones al funcionario involucrado:",
    consequenceDetails: [
      "Pena de prisión de 3 a 7 años e inhabilitación perpetua para la función policial.",
      "Apertura inmediata de expediente penal por la Fiscalía 25 Nacional Anticorrupción.",
      "Destitución deshonrosa sin beneficios de jubilación."
    ],
    diplomaticPhrase: "Oficial, mantengamos el procedimiento apegado estrictamente a la ley. Si tiene que multarme, haga la boleta oficial, pero no comprometa su investidura solicitando entregas indebidas.",
    keywords: ["60", "articulo 60", "art 60", "concursion", "matraca", "plata", "dinero", "dolares", "pago movil", "refresco", "colaboracion", "soborno"]
  }
];

// Base de Datos de Emergencias por Estados de Venezuela
const REGIONAL_EMERGENCY_DATA = {
  "nacional": {
    name: "Todo el País (Líneas Nacionales)",
    shortName: "Nacional",
    numbers: [
      { name: "Ministerio Público (Fiscalía General)", desc: "Denuncias de abusos policiales y corrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" },
      { name: "Defensoría del Pueblo", desc: "Protección de garantías constitucionales y derechos", phone: "08000783256", phoneDisplay: "08000-PUEBLO" },
      { name: "VEN 911 (Emergencias Nacionales)", desc: "Despacho unificado de seguridad en todo el país", phone: "911", phoneDisplay: "911" },
      { name: "ICAP (Control Actuación Policial)", desc: "Órgano disciplinario policial nacional", phone: "08007654227", phoneDisplay: "0800-POLICIA" }
    ]
  },
  "zulia": {
    name: "Estado Zulia",
    shortName: "Zulia",
    numbers: [
      { name: "Fiscalía Superior del Estado Zulia", desc: "Sede Maracaibo / Fiscales de Guardia", phone: "02617961200", phoneDisplay: "0261-7961200" },
      { name: "CPBEZ (Policía Bolivariana del Zulia)", desc: "Comandancia General / Sala Situacional", phone: "02617527181", phoneDisplay: "0261-7527181" },
      { name: "VEN 911 Zulia", desc: "Centro de Comando Regional Zulia", phone: "911", phoneDisplay: "911" },
      { name: "Defensoría del Pueblo (Zulia)", desc: "Atención al ciudadano en Maracaibo", phone: "02617234677", phoneDisplay: "0261-7234677" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita de denuncias anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "carabobo": {
    name: "Estado Carabobo",
    shortName: "Carabobo",
    numbers: [
      { name: "Fiscalía Superior de Carabobo", desc: "Sede Valencia / Fiscales de Guardia", phone: "02418575700", phoneDisplay: "0241-8575700" },
      { name: "Policía de Carabobo (PoliCarabobo)", desc: "Comandancia General / Sala Situacional", phone: "02418351572", phoneDisplay: "0241-8351572" },
      { name: "VEN 911 Carabobo", desc: "Centro de Despacho Regional", phone: "911", phoneDisplay: "911" },
      { name: "Defensoría del Pueblo (Carabobo)", desc: "Sede Valencia / Atención a víctimas", phone: "02418583431", phoneDisplay: "0241-8583431" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita de denuncias anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "caracas": {
    name: "Caracas / Distrito Capital & Miranda",
    shortName: "Caracas",
    numbers: [
      { name: "Fiscalía Superior del Área Metropolitana", desc: "Sede Caracas / Fiscales de Guardia", phone: "02125098111", phoneDisplay: "0212-5098111" },
      { name: "PNB (Comandancia El Helicoide / ICAP)", desc: "Dirección de Investigaciones y Disciplina", phone: "02126036000", phoneDisplay: "0212-6036000" },
      { name: "VEN 911 Gran Caracas", desc: "Centro de Comando Capital", phone: "911", phoneDisplay: "911" },
      { name: "Policía de Miranda (PoliMiranda)", desc: "Comandancia General Los Teques", phone: "02123220000", phoneDisplay: "0212-3220000" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita de denuncias anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "lara": {
    name: "Estado Lara",
    shortName: "Lara",
    numbers: [
      { name: "Fiscalía Superior del Estado Lara", desc: "Sede Barquisimeto / Guardias", phone: "02512544200", phoneDisplay: "0251-2544200" },
      { name: "Policía del Estado Lara (PoliLara)", desc: "Comandancia General Barquisimeto", phone: "02512311444", phoneDisplay: "0251-2311444" },
      { name: "VEN 911 Lara", desc: "Centro Regional de Seguridad", phone: "911", phoneDisplay: "911" },
      { name: "Defensoría del Pueblo (Lara)", desc: "Sede Barquisimeto", phone: "02512541188", phoneDisplay: "0251-2541188" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita de denuncias anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "tachira": {
    name: "Estado Táchira",
    shortName: "Táchira",
    numbers: [
      { name: "Fiscalía Superior del Estado Táchira", desc: "Sede San Cristóbal / Frontera", phone: "02763402000", phoneDisplay: "0276-3402000" },
      { name: "PoliTáchira (Comandancia General)", desc: "Sala Situacional y Control Policial", phone: "02763474444", phoneDisplay: "0276-3474444" },
      { name: "VEN 911 Táchira", desc: "Centro Regional de Emergencias", phone: "911", phoneDisplay: "911" },
      { name: "Defensoría del Pueblo (Táchira)", desc: "Sede San Cristóbal", phone: "02763421155", phoneDisplay: "0276-3421155" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita de denuncias anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "aragua": {
    name: "Estado Aragua",
    shortName: "Aragua",
    numbers: [
      { name: "Fiscalía Superior del Estado Aragua", desc: "Sede Maracay / Fiscales de Guardia", phone: "02432470000", phoneDisplay: "0243-2470000" },
      { name: "Policía de Aragua (PoliAragua)", desc: "Comandancia General Maracay", phone: "02432331555", phoneDisplay: "0243-2331555" },
      { name: "VEN 911 Aragua", desc: "Comando Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "anzoategui": {
    name: "Estado Anzoátegui",
    shortName: "Anzoátegui",
    numbers: [
      { name: "Fiscalía Superior de Anzoátegui", desc: "Sede Barcelona / Puerto La Cruz", phone: "02812700000", phoneDisplay: "0281-2700000" },
      { name: "Policía de Anzoátegui (PoliAnzoátegui)", desc: "Comandancia General", phone: "02812741122", phoneDisplay: "0281-2741122" },
      { name: "VEN 911 Anzoátegui", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "bolivar": {
    name: "Estado Bolívar",
    shortName: "Bolívar",
    numbers: [
      { name: "Fiscalía Superior del Estado Bolívar", desc: "Sede Ciudad Bolívar / Puerto Ordaz", phone: "02856320000", phoneDisplay: "0285-6320000" },
      { name: "Policía del Estado Bolívar", desc: "Comandancia General", phone: "02856541122", phoneDisplay: "0285-6541122" },
      { name: "VEN 911 Bolívar", desc: "Centro Regional de Seguridad", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "merida": {
    name: "Estado Mérida",
    shortName: "Mérida",
    numbers: [
      { name: "Fiscalía Superior del Estado Mérida", desc: "Sede Mérida / El Vigía", phone: "02742630000", phoneDisplay: "0274-2630000" },
      { name: "Policía del Estado Mérida", desc: "Comandancia General", phone: "02742631122", phoneDisplay: "0274-2631122" },
      { name: "VEN 911 Mérida", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "falcon": {
    name: "Estado Falcón",
    shortName: "Falcón",
    numbers: [
      { name: "Fiscalía Superior de Falcón", desc: "Sede Coro / Punto Fijo", phone: "02682510000", phoneDisplay: "0268-2510000" },
      { name: "Policía de Falcón (PoliFalcón)", desc: "Comandancia General Coro", phone: "02682521122", phoneDisplay: "0268-2521122" },
      { name: "VEN 911 Falcón", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "monagas": {
    name: "Estado Monagas",
    shortName: "Monagas",
    numbers: [
      { name: "Fiscalía Superior de Monagas", desc: "Sede Maturín / Guardias", phone: "02916420000", phoneDisplay: "0291-6420000" },
      { name: "PoliMonagas", desc: "Comandancia General Maturín", phone: "02916431122", phoneDisplay: "0291-6431122" },
      { name: "VEN 911 Monagas", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "barinas": {
    name: "Estado Barinas",
    shortName: "Barinas",
    numbers: [
      { name: "Fiscalía Superior de Barinas", desc: "Sede Barinas / Guardias", phone: "02735460000", phoneDisplay: "0273-5460000" },
      { name: "Policía del Estado Barinas", desc: "Comandancia General", phone: "02735321122", phoneDisplay: "0273-5321122" },
      { name: "VEN 911 Barinas", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "portuguesa": {
    name: "Estado Portuguesa",
    shortName: "Portuguesa",
    numbers: [
      { name: "Fiscalía Superior de Portuguesa", desc: "Sede Guanare / Acarigua", phone: "02572510000", phoneDisplay: "0257-2510000" },
      { name: "Policía de Portuguesa", desc: "Comandancia General", phone: "02572521122", phoneDisplay: "0257-2521122" },
      { name: "VEN 911 Portuguesa", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "yaracuy": {
    name: "Estado Yaracuy",
    shortName: "Yaracuy",
    numbers: [
      { name: "Fiscalía Superior de Yaracuy", desc: "Sede San Felipe / Guardias", phone: "02542310000", phoneDisplay: "0254-2310000" },
      { name: "Policía del Estado Yaracuy", desc: "Comandancia General San Felipe", phone: "02542321122", phoneDisplay: "0254-2321122" },
      { name: "VEN 911 Yaracuy", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "trujillo": {
    name: "Estado Trujillo",
    shortName: "Trujillo",
    numbers: [
      { name: "Fiscalía Superior de Trujillo", desc: "Sede Trujillo / Valera", phone: "02722360000", phoneDisplay: "0272-2360000" },
      { name: "Policía de Trujillo", desc: "Comandancia General", phone: "02722371122", phoneDisplay: "0272-2371122" },
      { name: "VEN 911 Trujillo", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "sucre": {
    name: "Estado Sucre",
    shortName: "Sucre",
    numbers: [
      { name: "Fiscalía Superior de Sucre", desc: "Sede Cumaná / Carúpano", phone: "02934310000", phoneDisplay: "0293-4310000" },
      { name: "Policía del Estado Sucre", desc: "Comandancia General Cumaná", phone: "02934321122", phoneDisplay: "0293-4321122" },
      { name: "VEN 911 Sucre", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "guarico": {
    name: "Estado Guárico",
    shortName: "Guárico",
    numbers: [
      { name: "Fiscalía Superior de Guárico", desc: "Sede San Juan de los Morros", phone: "02464310000", phoneDisplay: "0246-4310000" },
      { name: "PoliGuárico", desc: "Comandancia General", phone: "02464321122", phoneDisplay: "0246-4321122" },
      { name: "VEN 911 Guárico", desc: "Centro Regional", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  },
  "nueva-esparta": {
    name: "Nueva Esparta (Margarita)",
    shortName: "Nueva Esparta",
    numbers: [
      { name: "Fiscalía Superior de Nueva Esparta", desc: "Sede Porlamar / La Asunción", phone: "02952620000", phoneDisplay: "0295-2620000" },
      { name: "Policía de Nueva Esparta (Inepol)", desc: "Comandancia General", phone: "02952631122", phoneDisplay: "0295-2631122" },
      { name: "VEN 911 Nueva Esparta", desc: "Centro Regional Isla de Margarita", phone: "911", phoneDisplay: "911" },
      { name: "Ministerio Público Nacional", desc: "Línea gratuita anticorrupción", phone: "08003472200", phoneDisplay: "0800-FISCA-00" }
    ]
  }
};

// Estado de la Aplicación
let currentState = "nacional";
let currentCategory = "todas";
let recognition = null;
let isListening = false;
let deferredInstallPrompt = null;

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  checkBannerStatus();
  loadSavedState();
  renderCards(LEGAL_DB);
  renderEmergencyModal();
  setupVoiceRecognition();
  setupEventListeners();
  setupPwaInstall();
  registerServiceWorker();
  initCommunitySection();
  trackCivicoEvent("session_start", {
    is_standalone: window.matchMedia("(display-mode: standalone)").matches || (window.navigator.standalone === true)
  });
}

// Comprobar si el usuario cerró el banner anteriormente
function checkBannerStatus() {
  const isDismissed = localStorage.getItem("guia_legal_banner_dismissed");
  const banner = document.getElementById("newsBanner");
  if (isDismissed === "true" && banner) {
    banner.classList.add("hidden");
  }
}

function dismissBanner() {
  const banner = document.getElementById("newsBanner");
  if (banner) {
    banner.classList.add("hidden");
    localStorage.setItem("guia_legal_banner_dismissed", "true");
  }
}

// Normalización de texto (eliminar tildes y caracteres especiales)
function normalizeText(text) {
  return text.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Renderizado de Fichas con Verificador de Argumentos y SVGs minimalistas
function renderCards(cards, isSearchResult = false) {
  const container = document.getElementById("cardsContainer");
  const countBadge = document.getElementById("resultsCount");
  
  if (!container) return;
  container.innerHTML = "";
  
  if (countBadge) {
    countBadge.textContent = `${cards.length} temas`;
  }
  
  if (cards.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 20px; background: var(--bg-card); border-radius: var(--card-radius); border: 1px solid var(--border-color);">
        <div style="margin-bottom: 12px; color: var(--accent-blue);">
          <svg class="icon icon-lg" viewBox="0 0 24 24" style="width: 38px; height: 38px;">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <h4 style="color: #fff; margin-bottom: 6px;">No encontramos esa palabra o artículo exacto</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px;">
          Prueba buscando por número (ej: <strong>193</strong>, <strong>48</strong>, <strong>191</strong>) o palabras del día a día como <strong>celular</strong>, <strong>morral</strong> o <strong>grabar</strong>.
        </p>
        <button class="btn-script-action" style="margin: 0 auto;" onclick="resetSearch()">
          <svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
          <span>Ver todas las situaciones</span>
        </button>
      </div>
    `;
    return;
  }

  cards.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "situation-card";
    cardEl.id = `card-${card.id}`;
    
    // Si es un resultado de búsqueda específico de un artículo, expandirlo automáticamente
    if (isSearchResult && cards.length === 1) {
      cardEl.classList.add("expanded");
    }

    const consequencesHtml = card.consequenceDetails.map(item => `<li>${item}</li>`).join("");

    cardEl.innerHTML = `
      <div class="card-header" onclick="toggleCard('${card.id}')">
        <div class="card-header-main">
          <span class="card-tag ${card.tag === 'prohibido' ? 'tag-prohibido' : (card.tag === 'alerta' ? 'tag-alerta' : 'tag-derecho')}">
            ${card.tagLabel}
          </span>
          <h3 class="card-title">${card.title}</h3>
          <p class="card-quick-ans">${card.quickAns}</p>
        </div>
        <div class="card-toggle-icon">
          <svg class="icon icon-sm" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        
        <!-- Verificador de Afirmación Policial -->
        <div class="fact-check-box">
          <div class="fact-claim">
            <span class="fact-claim-label">
              <svg class="icon icon-sm" viewBox="0 0 24 24" style="stroke: var(--accent-gold);">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>Lo que suelen decirte en la calle:</span>
            </span>
            <div class="fact-claim-text">"${card.officerClaim}"</div>
          </div>
          <div class="fact-verdict">
            <span class="verdict-badge ${card.verdictClass}">
              <svg class="icon icon-sm" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>VEREDICTO: ${card.verdict}</span>
            </span>
            <p class="verdict-explanation">${card.verdictExplanation}</p>
          </div>
        </div>

        <!-- Nivel 1: Lo que dices en voz alta -->
        <div class="level-box level-1">
          <div class="level-header">
            <span class="level-label">
              <svg class="icon icon-sm" viewBox="0 0 24 24" style="stroke: var(--accent-blue);">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Tu respuesta recomendada (Con serenidad y firmeza):</span>
            </span>
          </div>
          <div class="script-box">"${card.script}"</div>
          <div class="script-actions">
            <button class="btn-script-action" onclick="copyScript(this, '${encodeURIComponent(card.script)}')">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copiar texto</span>
            </button>
            <button class="btn-script-action" onclick="speakText('${encodeURIComponent(card.script)}')">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              <span>Escuchar audio</span>
            </button>
          </div>
        </div>

        <!-- Nivel 2: Lo que realmente dice la ley -->
        <div class="level-box level-2">
          <div class="level-header">
            <span class="level-label">
              <svg class="icon icon-sm" viewBox="0 0 24 24" style="stroke: var(--accent-gold);">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              <span>Lo que dice la ley de verdad:</span>
            </span>
          </div>
          <p class="legal-text">${card.actualLaw}</p>
          <span class="official-source">${card.legalBasis}</span>
        </div>

        <!-- Consecuencias para el funcionario si desacata -->
        <div class="level-box level-consequence">
          <div class="level-header">
            <span class="level-label">
              <svg class="icon icon-sm" viewBox="0 0 24 24" style="stroke: var(--accent-red);">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Leyes que violan si insisten:</span>
            </span>
          </div>
          <p class="consequence-text"><strong>${card.consequence}</strong></p>
          <ul class="consequence-list">
            ${consequencesHtml}
          </ul>
          <div class="diplomatic-hint">
            <div class="diplomatic-title">
              <span>Qué responder si siguen presionando:</span>
            </div>
            <div class="diplomatic-text">"${card.diplomaticPhrase}"</div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(cardEl);
  });
}

// Expansión / Colapso de Tarjetas
function toggleCard(cardId) {
  const card = document.getElementById(`card-${cardId}`);
  if (!card) return;
  
  const isExpanded = card.classList.contains("expanded");
  
  document.querySelectorAll(".situation-card.expanded").forEach(c => {
    if (c !== card) c.classList.remove("expanded");
  });
  
  if (!isExpanded) {
    card.classList.add("expanded");
    setTimeout(() => {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  } else {
    card.classList.remove("expanded");
  }
}

// Reconocimiento de Voz Nativo ($0 Costo)
function setupVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    console.warn("Reconocimiento de voz no soportado en este navegador.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "es-VE";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isListening = true;
    showVoiceOverlay(true);
  };

  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      transcript += event.results[i][0].transcript;
    }
    
    document.getElementById("voiceTranscript").textContent = `"${transcript}"`;

    if (event.results[0].isFinal) {
      handleVoiceQuery(transcript);
    }
  };

  recognition.onerror = (event) => {
    console.error("Error de voz:", event.error);
    stopVoiceRecognition();
    showToast("No se pudo captar la voz. Escribe tu consulta.");
  };

  recognition.onend = () => {
    stopVoiceRecognition();
  };
}

function startVoiceRecognition() {
  if (!recognition) {
    showToast("Reconocimiento de voz no soportado. Escribe tu búsqueda.");
    document.getElementById("searchInput").focus();
    return;
  }
  
  try {
    document.getElementById("voiceTranscript").textContent = "Escuchando...";
    recognition.start();
  } catch (err) {
    recognition.stop();
  }
}

function stopVoiceRecognition() {
  isListening = false;
  if (recognition) {
    try { recognition.stop(); } catch(e){}
  }
  showVoiceOverlay(false);
}

function showVoiceOverlay(show) {
  const overlay = document.getElementById("voiceOverlay");
  const pointerBtn = document.getElementById("btnPointer");
  if (overlay) {
    if (show) overlay.classList.add("active");
    else overlay.classList.remove("active");
  }
  if (pointerBtn) {
    if (show) pointerBtn.classList.add("listening");
    else pointerBtn.classList.remove("listening");
  }
}

// Búsqueda Inteligente y Verificación de Artículos
function handleVoiceQuery(text) {
  stopVoiceRecognition();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = text;
  }
  filterCardsByQuery(text);
}

function quickSearchArticle(query) {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = query;
  }
  filterCardsByQuery(query);
  
  // Desplazar la vista suavemente hacia la sección de verificación
  const container = document.getElementById("cardsContainer");
  if (container) {
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function resetSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  setCategory("todas");
}

function filterCardsByQuery(query) {
  const cleanQuery = normalizeText(query);

  if (!cleanQuery) {
    const filtered = currentCategory === "todas" 
      ? LEGAL_DB 
      : LEGAL_DB.filter(c => c.category === currentCategory || c.category === "todas");
    renderCards(filtered, false);
    return filtered;
  }

  // 1. Detección directa de número de artículo (ej. "193", "articulo 193", "art 48")
  const articleNumberMatch = cleanQuery.match(/\b(\d{1,3})\b/);
  if (articleNumberMatch) {
    const num = articleNumberMatch[1];
    const directArticleMatch = LEGAL_DB.filter(card => card.articleNumber === num);
    if (directArticleMatch.length > 0) {
      renderCards(directArticleMatch, true);
      showToast(`Verificando Artículo ${num}`);
      return directArticleMatch;
    }
  }

  // 2. Búsqueda por términos y afirmaciones
  const queryTerms = cleanQuery.split(/\s+/).filter(t => t.length > 1);

  const scoredCards = LEGAL_DB.map(card => {
    let score = 0;
    const cardFullText = normalizeText(
      `${card.title} ${card.articleNumber} ${card.legalBody} ${card.officerClaim} ${card.verdictExplanation} ${card.quickAns} ${card.actualLaw} ${card.script} ${card.keywords.join(" ")}`
    );

    queryTerms.forEach(term => {
      if (card.articleNumber === term) score += 20;
      if (normalizeText(card.legalBody).includes(term)) score += 8;
      if (normalizeText(card.officerClaim).includes(term)) score += 10;
      if (card.keywords.some(k => normalizeText(k).includes(term))) score += 7;
      if (normalizeText(card.title).includes(term)) score += 6;
      if (cardFullText.includes(term)) score += 3;
    });

    return { card, score };
  }).filter(item => item.score > 0);

  scoredCards.sort((a, b) => b.score - a.score);
  const result = scoredCards.map(item => item.card);

  renderCards(result, true);
  trackCivicoEvent("search_query", { query: cleanQuery.substring(0, 40) });
  return result;
}

// Configurar Categorías (Tabs)
function setCategory(cat) {
  currentCategory = cat;
  trackCivicoEvent("category_click", { category: cat });
  
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === cat);
  });

  const searchInput = document.getElementById("searchInput");
  const query = searchInput ? searchInput.value.trim() : "";
  
  if (query) {
    filterCardsByQuery(query);
  } else {
    const filtered = cat === "todas" 
      ? LEGAL_DB 
      : LEGAL_DB.filter(c => c.category === cat || c.category === "todas");
    renderCards(filtered, false);
  }
}

// Configurar Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterCardsByQuery(e.target.value.trim());
    });
    
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        filterCardsByQuery(searchInput.value.trim());
      }
    });
  }

  // Botón Puntero: si el input tiene texto, ejecuta búsqueda; si está vacío, activa voz
  const btnPointer = document.getElementById("btnPointer");
  if (btnPointer) {
    btnPointer.addEventListener("click", () => {
      const text = searchInput ? searchInput.value.trim() : "";
      if (text) {
        filterCardsByQuery(text);
        const container = document.getElementById("cardsContainer");
        if (container) container.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        if (isListening) stopVoiceRecognition();
        else startVoiceRecognition();
      }
    });
  }

  const btnCancelVoice = document.getElementById("btnCancelVoice");
  if (btnCancelVoice) {
    btnCancelVoice.addEventListener("click", stopVoiceRecognition);
  }

  const btnCloseBanner = document.getElementById("btnCloseBanner");
  if (btnCloseBanner) {
    btnCloseBanner.addEventListener("click", dismissBanner);
  }

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setCategory(btn.dataset.category);
    });
  });
}

// Copiar Guión al Portapapeles
function copyScript(btn, encodedScript) {
  const text = decodeURIComponent(encodedScript);
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = `<svg class="icon icon-sm" viewBox="0 0 24 24" style="stroke: var(--accent-green);"><polyline points="20 6 9 17 4 12"/></svg><span>¡Copiado!</span>`;
    btn.style.color = "var(--accent-green)";
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.color = "";
    }, 2000);
  }).catch(() => {
    showToast("No se pudo copiar automáticamente.");
  });
}

// Reproducción de voz (Text-to-Speech)
function speakText(encodedText) {
  if (!('speechSynthesis' in window)) {
    showToast("Tu navegador no soporta lectura por voz.");
    return;
  }
  
  window.speechSynthesis.cancel();
  const text = decodeURIComponent(encodedText);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-VE";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
  showToast("Reproduciendo audio...");
}

// Modal de Directorio de Emergencia SOS Regional
function loadSavedState() {
  const saved = localStorage.getItem("guia_legal_state");
  if (saved && REGIONAL_EMERGENCY_DATA[saved]) {
    currentState = saved;
  } else {
    currentState = "nacional";
  }
  updateRegionUI();
}

function updateRegionUI() {
  const data = REGIONAL_EMERGENCY_DATA[currentState] || REGIONAL_EMERGENCY_DATA["nacional"];
  
  const headerText = document.getElementById("headerRegionText");
  if (headerText) {
    headerText.textContent = data.shortName;
  }

  const select = document.getElementById("stateSelect");
  if (select) {
    select.value = currentState;
  }
}

function onStateChange(stateKey) {
  if (REGIONAL_EMERGENCY_DATA[stateKey]) {
    currentState = stateKey;
    localStorage.setItem("guia_legal_state", stateKey);
    updateRegionUI();
    renderEmergencyModal();
    showToast(`Configurado en: ${REGIONAL_EMERGENCY_DATA[stateKey].name}`);
  }
}

function renderEmergencyModal() {
  const callList = document.getElementById("callList");
  if (!callList) return;
  callList.innerHTML = "";

  const regionData = REGIONAL_EMERGENCY_DATA[currentState] || REGIONAL_EMERGENCY_DATA["nacional"];

  regionData.numbers.forEach(item => {
    const card = document.createElement("a");
    card.className = "call-card";
    card.href = `tel:${item.phone}`;
    card.innerHTML = `
      <div class="call-info">
        <h5>${item.name}</h5>
        <p>${item.desc}</p>
      </div>
      <div class="call-number">
        <svg class="icon icon-sm" viewBox="0 0 24 24" style="stroke: var(--accent-green);">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span>${item.phoneDisplay}</span>
      </div>
    `;
    callList.appendChild(card);
  });
}

function openSosModal(focusSelect = false) {
  const modal = document.getElementById("sosModal");
  if (modal) {
    modal.classList.add("active");
    trackCivicoEvent("sos_modal_open");
    if (focusSelect) {
      setTimeout(() => {
        const select = document.getElementById("stateSelect");
        if (select) select.focus();
      }, 250);
    }
  }
}

function closeSosModal() {
  const modal = document.getElementById("sosModal");
  if (modal) modal.classList.remove("active");
}

function openAboutModal() {
  const modal = document.getElementById("aboutModal");
  if (modal) {
    modal.classList.add("active");
    trackCivicoEvent("credits_modal_open");
  }
}

function closeAboutModal() {
  const modal = document.getElementById("aboutModal");
  if (modal) modal.classList.remove("active");
}

// Botón de Alerta Rápida WhatsApp SOS con Ubicación GPS y Estado
function sendSosWhatsApp() {
  trackCivicoEvent("sos_whatsapp_sent", { state: currentState });
  const regionData = REGIONAL_EMERGENCY_DATA[currentState] || REGIONAL_EMERGENCY_DATA["nacional"];
  const baseMessage = `*ALERTA SOS - RETENCIÓN POLICIAL / ALCABALA*\nMe acaban de detener en un punto de control o patrullaje.\n*Entidad:* ${regionData.name}\nPor favor monitoreen mi situación.`;
  
  if (navigator.geolocation) {
    showToast("Obteniendo ubicación GPS...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(5);
        const lng = pos.coords.longitude.toFixed(5);
        const mapLink = `https://maps.google.com/?q=${lat},${lng}`;
        const finalMsg = `${baseMessage}\n*Ubicación GPS:* ${mapLink}\n*Hora:* ${new Date().toLocaleTimeString('es-VE')}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(finalMsg)}`;
        window.open(whatsappUrl, '_blank');
      },
      () => {
        const finalMsg = `${baseMessage}\n*Hora:* ${new Date().toLocaleTimeString('es-VE')}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(finalMsg)}`;
        window.open(whatsappUrl, '_blank');
      },
      { timeout: 5000 }
    );
  } else {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(baseMessage)}`;
    window.open(whatsappUrl, '_blank');
  }
}

// Mensaje Toast flotante
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Registro de Service Worker para funcionamiento 100% Offline
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registrado correctamente'))
        .catch(err => console.log('Error registrando Service Worker:', err));
    });
  }
}

// ==========================================================================
// Instalación de Acceso Directo (PWA) con Consentimiento del Usuario y Logo
// ==========================================================================

function setupPwaInstall() {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    trackCivicoEvent("pwa_prompt_received");
    console.log("Evento beforeinstallprompt interceptado");
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    trackCivicoEvent("pwa_installed");
    showToast("✅ ¡Acceso directo creado con el logo oficial en tu pantalla de inicio!");
    updateInstallButtonState(true);
  });

  // Verificar si ya se ejecuta como PWA standalone
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator.standalone === true);
  if (isStandalone) {
    updateInstallButtonState(true);
  }
}

function updateInstallButtonState(isInstalled) {
  const btn = document.getElementById("btnInstallPwa");
  if (!btn) return;
  const title = btn.querySelector(".quick-action-title");
  const sub = btn.querySelector(".quick-action-sub");
  if (isInstalled) {
    if (title) title.textContent = "Acceso Directo Activo";
    if (sub) sub.textContent = "Instalada en tu móvil • 100% Offline";
  }
}

function openInstallConsentModal() {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator.standalone === true);
  if (isStandalone) {
    showToast("✅ CÍVICO ya está instalada con su logo en tu pantalla.");
    return;
  }

  trackCivicoEvent("pwa_consent_modal_open");
  const modal = document.getElementById("installConsentModal");
  if (modal) {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const iosHint = document.getElementById("iosInstallHint");
    const acceptBtn = document.getElementById("btnAcceptInstall");

    if (isIos && iosHint) {
      iosHint.style.display = "block";
      if (acceptBtn) {
        acceptBtn.innerHTML = `
          <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          <span>Entendido, agregaré desde Safari</span>
        `;
      }
    } else if (iosHint) {
      iosHint.style.display = "none";
      if (acceptBtn) {
        acceptBtn.innerHTML = `
          <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          <span>Aceptar y Añadir al Móvil</span>
        `;
      }
    }

    modal.classList.add("active");
  }
}

function closeInstallConsentModal() {
  const modal = document.getElementById("installConsentModal");
  if (modal) modal.classList.remove("active");
}

function executePwaInstall() {
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        trackCivicoEvent("pwa_install_accepted");
        showToast("✅ Creando acceso directo con logo oficial...");
      } else {
        trackCivicoEvent("pwa_install_declined");
        showToast("Instalación cancelada. Puedes añadirla en cualquier momento.");
      }
      deferredInstallPrompt = null;
    });
    closeInstallConsentModal();
  } else if (isIos) {
    closeInstallConsentModal();
    trackCivicoEvent("pwa_ios_instruction_shown");
    showToast("Toca el botón Compartir de Safari y elige 'Añadir a pantalla de inicio'.");
  } else {
    closeInstallConsentModal();
    showToast("Abre el menú (⋮) de tu navegador y pulsa 'Instalar aplicación' o 'Agregar a inicio'.");
  }
}

// ==========================================================================
// Botón Compartir con Otros Usuarios (Logo oficial en WhatsApp / Telegram)
// ==========================================================================

function shareApp() {
  const shareTitle = "CÍVICO 🇻🇪 - La ley en tus manos";
  const shareText = "🛡️ Te comparto *CÍVICO*, la app para conocer nuestros derechos y verificar leyes en tiempo real ante alcabalas en Venezuela.\n\n✨ Es gratuita, segura y funciona *100% sin internet ni saldo*. Agrégala a tu pantalla de inicio:\n";
  const shareUrl = "https://leonjuv.github.io/civico/";

  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText,
      url: shareUrl
    }).then(() => {
      trackCivicoEvent("share_completed", { method: "native" });
      showToast("¡Gracias por compartir esta herramienta cívica!");
    }).catch((err) => {
      if (err.name !== "AbortError") {
        fallbackCopyShare(shareText, shareUrl);
      }
    });
  } else {
    fallbackCopyShare(shareText, shareUrl);
  }
}

function fallbackCopyShare(text, url) {
  const fullShare = `${text}\n${url}`;
  trackCivicoEvent("share_completed", { method: "clipboard" });
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullShare).then(() => {
      showToast("✅ Enlace copiado con logo oficial. Pégalo en WhatsApp o Telegram.");
    }).catch(() => {
      prompt("Copia y comparte este enlace:", fullShare);
    });
  } else {
    prompt("Copia y comparte este enlace:", fullShare);
  }
}

// ==========================================================================
// Módulo de Analítica & Telemetría Anónima (Métricas de Tracción y Privacidad)
// ==========================================================================

function trackCivicoEvent(eventName, eventParams = {}) {
  // 1. Google Analytics 4 (si hay conexión a internet y gtag está cargado)
  if (typeof gtag === "function") {
    try {
      gtag("event", eventName, eventParams);
    } catch (e) {
      console.warn("Analytics tag warning:", e);
    }
  }

  // 2. Registro local interno anónimo (para auditoría de métricas del creador)
  try {
    const stats = JSON.parse(localStorage.getItem("civico_metrics_summary") || "{}");
    stats[eventName] = (stats[eventName] || 0) + 1;
    stats.last_event_at = new Date().toISOString();
    localStorage.setItem("civico_metrics_summary", JSON.stringify(stats));
  } catch (e) {}
}

// Clic en canales comunitarios (WhatsApp / Telegram)
function trackCommunityClick(channel) {
  trackCivicoEvent("community_channel_click", { channel });
}

// ==========================================================================
// URL de tu Google Apps Script para almacenar suscriptores en Google Sheets
const GOOGLE_SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbx_OjwBEUzrq8Ame8AsDx-F5auCI1c5LSwPjo0EgMvgVklaSNesZTWWTX3F5Ji1w1-d/exec";

function initCommunitySection() {
  const savedLead = localStorage.getItem("civico_newsletter_lead");
  const form = document.getElementById("newsletterForm");
  const successBox = document.getElementById("newsletterSuccessBox");
  const successEmail = document.getElementById("newsletterSuccessEmail");

  if (savedLead && form && successBox) {
    form.style.display = "none";
    successBox.style.display = "flex";
    if (successEmail) {
      successEmail.textContent = `Actualizaciones legales enviadas a: ${savedLead}`;
    }
  }
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (!input) return;

  const email = input.value.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("Por favor introduce un correo electrónico válido.");
    return;
  }

  // 1. Guardar en almacenamiento local persistente
  localStorage.setItem("civico_newsletter_lead", email);

  try {
    const leadsList = JSON.parse(localStorage.getItem("civico_leads_archive") || "[]");
    leadsList.push({
      email: email,
      created_at: new Date().toISOString(),
      source: "boletin_web"
    });
    localStorage.setItem("civico_leads_archive", JSON.stringify(leadsList));
  } catch (e) {}

  // 2. Disparar evento de conversión a Analytics
  trackCivicoEvent("lead_subscribed", {
    domain: email.split("@")[1] || "unknown"
  });

  // 3. Enviar a Google Sheets automáticamente en tiempo real
  if (GOOGLE_SHEETS_ENDPOINT) {
    try {
      fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "civico_app"
        })
      }).catch(err => console.warn("Google Sheet sync notice:", err));
    } catch (e) {}
  }

  // 4. Actualizar interfaz
  const form = document.getElementById("newsletterForm");
  const successBox = document.getElementById("newsletterSuccessBox");
  const successEmail = document.getElementById("newsletterSuccessEmail");

  if (form) form.style.display = "none";
  if (successBox) successBox.style.display = "flex";
  if (successEmail) successEmail.textContent = `Actualizaciones legales enviadas a: ${email}`;

  showToast("🎉 ¡Bienvenido a la Red CÍVICO! Te mantendremos informado.");
}

// Herramientas de consulta de métricas para el desarrollador
window.CivicoAnalytics = {
  track: trackCivicoEvent,
  getMetrics: () => {
    try {
      return JSON.parse(localStorage.getItem("civico_metrics_summary") || "{}");
    } catch (e) {
      return {};
    }
  },
  getLeads: () => {
    try {
      return JSON.parse(localStorage.getItem("civico_leads_archive") || "[]");
    } catch (e) {
      return [];
    }
  }
};
