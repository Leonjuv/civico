/**
 * Guía Cívica & Legal VE
 * Base de datos jurídica ampliada y Verificador de Afirmaciones Policiales
 * Diseño Minimalista con Iconos SVG y Soporte 100% Offline
 */

// Base de Datos Oficial con Verificación de Artículos y Afirmaciones Frecuentes
const LEGAL_DB = [
  {
    "id": "art-193-copp",
    "articleNumber": "193",
    "legalBody": "COPP (Código Orgánico Procesal Penal)",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ART. 193 COPP • INSPECCIÓN DE VEHÍCULOS",
    "title": "Artículo 193 COPP: ¿Qué dice realmente sobre la inspección del vehículo?",
    "officerClaim": "El oficial dice: 'El artículo 193 me faculta a revisar su teléfono, su cartera personal o desarmar el vehículo'.",
    "verdict": "FALSO / ENGAÑO POLICIAL",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "El Art. 193 autoriza ÚNICAMENTE la inspección del vehículo cuando existan motivos fundados de que se ocultan objetos de un delito. En NINGÚN momento autoriza la revisión de teléfonos celulares ni correspondencia privada.",
    "quickAns": "Solo autoriza inspección física del vehículo bajo motivos fundados, NUNCA de teléfonos ni carteras.",
    "actualLaw": "Art. 193 COPP: La policía podrá inspeccionar un vehículo cuando existan motivos suficientes y fundados para presumir que en él se encuentran personas prófugas o cosas relacionadas con un hecho punible. Debe realizarse en presencia del conductor y cuidando de no ocasionar daños innecesarios.",
    "script": "Oficial, con el debido respeto, el Artículo 193 del Código Orgánico Procesal Penal regula exclusivamente la inspección del vehículo bajo motivos fundados, pero en ninguna parte autoriza la revisión de teléfonos celulares ni carteras personales, lo cual está expresamente prohibido sin orden judicial por el Artículo 48 de la Constitución.",
    "legalBasis": "Artículo 193 del Código Orgánico Procesal Penal (COPP) en concordancia con el Art. 48 de la Constitución (CRBV).",
    "consequence": "Si el funcionario insiste en registrar el teléfono o pertenencias privadas alegando el 193:",
    "consequenceDetails": [
      "Incurre en Delito de Violación de Comunicaciones Privadas (Ley Especial de Delitos Informáticos, penas de 2 a 6 años).",
      "Comete Abuso de Autoridad (Art. 67 Ley Contra la Corrupción) por falsear y extralimitar el alcance de la ley penal.",
      "Toda evidencia obtenida mediante engaño o usurpación legal es nula de toda nulidad (Art. 49 ordinal 1° CRBV)."
    ],
    "diplomaticPhrase": "Oficial, con todo respeto conozco el contenido del 193 del COPP. Con gusto facilito la revisión visual del carro en mi presencia, pero el teléfono y mis documentos personales están amparados por el secreto constitucional.",
    "keywords": [
      "193",
      "articulo 193",
      "art 193",
      "copp 193",
      "inspeccion vehiculo",
      "revisar carro",
      "maleta",
      "cartera",
      "celular",
      "telefono"
    ]
  },
  {
    "id": "art-191-copp",
    "articleNumber": "191",
    "legalBody": "COPP (Código Orgánico Procesal Penal)",
    "category": "pie",
    "tag": "alerta",
    "tagLabel": "ART. 191 COPP • INSPECCIÓN DE PERSONAS",
    "title": "Artículo 191 COPP: ¿Qué dice sobre revisar a una persona, morral o bolsillos?",
    "officerClaim": "El oficial dice: 'Por el artículo 191 tengo derecho a registrarte todo el morral, bolsillos y ver tu celular porque estamos en un operativo'.",
    "verdict": "PARCIALMENTE DISTORSIONADO",
    "verdictClass": "tag-alerta",
    "verdictExplanation": "La inspección personal exige 'motivos fundados' (sospecha de portar armas o drogas de un hecho delictivo concreto). Debe hacerla alguien del mismo sexo, respetando el pudor. NO es un chequeo rutinario libre ni autoriza a vaciar tus cosas ni a ver tu teléfono.",
    "quickAns": "Exige motivos fundados de delito, respeto al pudor y funcionario del mismo sexo. No autoriza ver chats ni teléfonos.",
    "actualLaw": "Art. 191 COPP: La policía podrá inspeccionar una persona siempre que haya motivos fundados para presumir que oculta entre sus ropas o pertenencias objetos relacionados con un hecho punible. Antes de la inspección deberá advertir a la persona acerca de la sospecha e invitarla a mostrar el objeto.",
    "script": "Oficial, de acuerdo con el Artículo 191 del COPP, la inspección personal exige motivos fundados de un hecho punible. ¿Podría indicarme respetuosamente cuál es la sospecha o hecho delictivo que motiva esta inspección? Yo mismo puedo abrir el compartimento del morral que me solicite en presencia suya.",
    "legalBasis": "Artículos 191 y 192 del Código Orgánico Procesal Penal (COPP).",
    "consequence": "Si el funcionario requisa sin motivos o despoja pertenencias:",
    "consequenceDetails": [
      "Incurre en Abuso de Autoridad (Art. 67 Ley contra la Corrupción) si realiza requisas vejatorias o fuera de la ley.",
      "Si exige dinero para no 'sembrar' o dejar ir, comete Concusión (Art. 60 Ley Anticorrupción, 3 a 7 años de presidio).",
      "La inspección debe realizarse por persona del mismo sexo del intervenido; lo contrario viola el debido proceso."
    ],
    "diplomaticPhrase": "Funcionario, colaboro con la inspección en los términos del 191, pero le recuerdo que el procedimiento debe quedar registrado en un acta oficial si se retiene algún objeto de mi propiedad.",
    "keywords": [
      "191",
      "articulo 191",
      "art 191",
      "copp 191",
      "morral",
      "bolso",
      "requisa",
      "mochila",
      "bolsillos",
      "persona",
      "inspeccion corporal"
    ]
  },
  {
    "id": "art-48-crbv",
    "articleNumber": "48",
    "legalBody": "Constitución (CRBV)",
    "category": "todas",
    "tag": "prohibido",
    "tagLabel": "ART. 48 CRBV • INVIOLABILIDAD DE COMUNICACIONES",
    "title": "Artículo 48 CRBV: ¿Me pueden obligar a desbloquear el celular o leer chats?",
    "officerClaim": "El oficial dice: 'Entrégueme el teléfono y desbloquéelo para ver con quién habla o si no se va detenido'.",
    "verdict": "TOTALMENTE ILEGAL / DELITO",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "El teléfono móvil está legalmente asimilado a la correspondencia privada. Su acceso SIN orden previa de un Juez de Control Penal constituye un delito grave de violación de comunicaciones privadas.",
    "quickAns": "PROHIBIDO. El teléfono es correspondencia privada. Solo un Juez de Control puede ordenar revisarlo.",
    "actualLaw": "Art. 48 CRBV: Se garantiza el secreto e inviolabilidad de las comunicaciones privadas en todas sus formas. No podrán ser interferidas sino por orden de un tribunal competente, con el cumplimiento de las disposiciones de ley.",
    "script": "Buenas tardes, oficial. Con el mayor respeto institucional, el Artículo 48 de la Constitución establece la inviolabilidad de las comunicaciones privadas. Ningún funcionario puede revisar mi teléfono sin una orden firmada por un Juez de Control. Con gusto le muestro mis documentos de identidad, pero el celular no puedo desbloquearlo.",
    "legalBasis": "Artículo 48 de la Constitución de la República Bolivariana de Venezuela y Art. 20 de la Resolución Conjunta N° 109 (Gaceta Oficial 42.458).",
    "consequence": "Consecuencias penales para el funcionario que obligue a revisar el celular:",
    "consequenceDetails": [
      "Delito de Violación de Comunicaciones Privadas (Ley Especial de Delitos Informáticos, 2 a 6 años de prisión).",
      "Destitución de la carrera policial ante la Inspectoría de Control de Actuación Policial (ICAP).",
      "Cualquier 'prueba' que el policía pretenda extraer sin orden judicial es NULA y no tiene validez legal."
    ],
    "diplomaticPhrase": "Oficial, entiendo su trabajo de seguridad, pero revisar mi teléfono sin orden judicial le genera responsabilidad penal ante la Fiscalía de Derechos Fundamentales. Prefiero que llamemos a su superior o a la Fiscalía si tiene alguna duda.",
    "keywords": [
      "48",
      "articulo 48",
      "art 48",
      "crbv 48",
      "celular",
      "telefono",
      "whatsapp",
      "fotos",
      "mensajes",
      "redes",
      "clave",
      "desbloquear"
    ]
  },
  {
    "id": "art-20-res-109",
    "articleNumber": "20",
    "legalBody": "Resolución Conjunta 109/058 (Gaceta 42.458)",
    "category": "todas",
    "tag": "derecho",
    "tagLabel": "ART. 20 RES. 109 • DERECHO A GRABAR",
    "title": "Artículo 20 de la Resolución 109: ¿Puedo grabar en audio o video a los policías?",
    "officerClaim": "El oficial dice: 'Está prohibido grabar a los funcionarios en funciones, guarde el teléfono o se lo quito'.",
    "verdict": "FALSO / MENTIRA FRECUENTE",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "El Art. 20 de la Resolución Conjunta 109 (Defensa e Interiores) autoriza EXPRESAMENTE a los ciudadanos a registrar en video o audio los procedimientos policiales y prohíbe a los funcionarios exigir que se apague o borre.",
    "quickAns": "100% LEGAL. El Art. 20 de la Resolución Conjunta 109 autoriza expresamente a los ciudadanos a grabar.",
    "actualLaw": "Art. 20 Resolución Conjunta 109 y 058 (Gaceta Oficial 42.458 del 8-sep-2022): Ninguna persona podrá ser obligada a no realizar grabaciones de video o audio en los puntos de control, ni a entregar sus equipos de grabación, ni a borrar el contenido grabado antes, durante o después del procedimiento.",
    "script": "Oficial, con todo respeto, el Artículo 20 de la Resolución Conjunta 109 de los Ministerios de Defensa e Interiores, publicada en Gaceta Oficial 42.458, establece expresamente que los ciudadanos podemos registrar en audio o video los procedimientos. No estoy obstaculizando su trabajo, sino ejerciendo este derecho con respeto.",
    "legalBasis": "Artículo 20 de la Resolución Conjunta N° 109 / N° 058 (Gaceta Oficial N° 42.458) y Artículos 57 y 141 de la CRBV.",
    "consequence": "Si el funcionario intenta arrebatar el teléfono o borrar el video:",
    "consequenceDetails": [
      "Incurre en desacato expreso a la Resolución Ministerial conjunta de sus propios superiores.",
      "Comete Delito contra la Propiedad si sustrae o daña el equipo físico (Art. 451 y 453 del Código Penal).",
      "La resolución prohíbe tajantemente retener el celular o exigir borrar el archivo."
    ],
    "diplomaticPhrase": "Oficial, el video ampara tanto su apego al protocolo profesional como la seguridad del ciudadano. La propia Gaceta 42.458 le prohíbe a usted exigir que borre o apague el dispositivo.",
    "keywords": [
      "20",
      "articulo 20",
      "art 20",
      "resolucion 109",
      "gaceta 42458",
      "grabar",
      "video",
      "audio",
      "filmar",
      "camara",
      "fotos policiales"
    ]
  },
  {
    "id": "art-181-ltt",
    "articleNumber": "181",
    "legalBody": "Ley de Transporte Terrestre (LTT)",
    "category": "vehiculo",
    "tag": "prohibido",
    "tagLabel": "ART. 181 LTT • RETENCIÓN DE VEHÍCULOS",
    "title": "Artículo 181 LTT: ¿Cuándo pueden retener mi vehículo o moto?",
    "officerClaim": "El oficial dice: 'Por no tener el cinturón / casco / tener la licencia vencida me tengo que llevar el carro al estacionamiento'.",
    "verdict": "FALSO / CAUSAL INVENTADA",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Las infracciones comunes (semáforo, cinturón, licencia vencida) se sancionan con MULTA pecuniaria, NUNCA con retención del vehículo. El Art. 181 tiene solo 6 causales muy específicas (sin placas, ebriedad, accidente grave, fallas mecánicas críticas, falta total de documentos de posesión o falta de RCV).",
    "quickAns": "Por infracciones comunes solo aplica MULTA escrita. La retención está limitada taxativamente al Art. 181.",
    "actualLaw": "Art. 181 LTT: Solo se retendrá el vehículo cuando: 1. No porte placas; 2. Condiciones mecánicas pongan en peligro la circulación; 3. El conductor esté bajo efecto de alcohol o drogas; 4. Accidente de tránsito con heridos o fallecidos; 5. No posea ningún documento de propiedad ni traspaso; 6. Circule sin póliza RCV vigente.",
    "script": "Oficial, con el debido respeto, el Artículo 181 de la Ley de Transporte Terrestre establece causales taxativas para la retención del vehículo. Por una infracción ordinaria corresponde levantar una boleta de citación o multa conforme a la ley, pero no la retención del vehículo.",
    "legalBasis": "Artículo 181 de la Ley de Transporte Terrestre.",
    "consequence": "Si el funcionario insiste en quitar el vehículo sin causal del 181:",
    "consequenceDetails": [
      "Incurre en Retención Arbitraria y Abuso de Autoridad (Art. 67 Ley Anticorrupción).",
      "Si utiliza la amenaza del estacionamiento para pedir dinero o dádivas, comete Delito de Concusión (Art. 60 Ley Anticorrupción).",
      "Puedes denunciarlo de inmediato ante la Fiscalía Superior o Tránsito Terrestre del INTT."
    ],
    "diplomaticPhrase": "Oficial, si usted determina que cometí una falta vial, por favor entregue la boleta de multa oficial para pagarla por taquilla bancaria autorizada, pero el Art. 181 no faculta la retención por este motivo.",
    "keywords": [
      "181",
      "articulo 181",
      "art 181",
      "ltt 181",
      "retencion",
      "estacionamiento",
      "grua",
      "quitar el carro",
      "quitar la moto",
      "llevarse la moto",
      "multa"
    ]
  },
  {
    "id": "art-218-cp",
    "articleNumber": "218",
    "legalBody": "Código Penal (Resistencia a la Autoridad)",
    "category": "todas",
    "tag": "alerta",
    "tagLabel": "ART. 218 CP • ¿QUÉ ES RESISTENCIA?",
    "title": "Artículo 218 Código Penal: ¿Negarme a un abuso es 'Resistencia a la Autoridad'?",
    "officerClaim": "El oficial dice: 'Si no me hace caso o si me cuestiona, se lo llevo preso por resistencia a la autoridad'.",
    "verdict": "AMENAZA INFUNDADA",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "La resistencia a la autoridad exige violencia física o amenazas activas contra el funcionario para impedir un acto legítimo de sus funciones. Exigir educadamente el cumplimiento de la Constitución NO constituye delito.",
    "quickAns": "Exigir tus derechos pacíficamente y citar la ley NO es resistencia a la autoridad. La resistencia exige violencia.",
    "actualLaw": "Art. 218 Código Penal: Sanciona a quien utilice violencia o amenaza activa contra un funcionario público para oponerse a que cumpla un acto legal de sus funciones.",
    "script": "Oficial, estoy colaborando plenamente con usted con respeto y serenidad. No estoy ejerciendo ninguna violencia ni amenaza contra su persona, por lo que no existe resistencia a la autoridad. Simplemente estoy invocando los derechos que la Constitución y las leyes vigentes me confieren como ciudadano.",
    "legalBasis": "Artículo 218 del Código Penal en relación con los Arts. 25 y 49 de la CRBV (principio de legalidad y nulidad de actos ilegales).",
    "consequence": "Si el funcionario utiliza falsas imputaciones de resistencia:",
    "consequenceDetails": [
      "Incurre en Delito de Simulación de Hecho Punible (Art. 239 del Código Penal) y Privación Ilegítima de Libertad (Art. 176 CP).",
      "Todo acto dictado por abuso de poder es nulo de nulidad absoluta y engendra responsabilidad civil, penal y administrativa (Art. 25 CRBV)."
    ],
    "diplomaticPhrase": "Oficial, en ningún momento pretendo faltarle el respeto a su investidura; estoy a su disposición para cualquier procedimiento formal y legal, con respeto mutuo.",
    "keywords": [
      "218",
      "articulo 218",
      "art 218",
      "resistencia",
      "resistencia a la autoridad",
      "desacato",
      "preso por resistencia",
      "esposas",
      "detenido"
    ]
  },
  {
    "id": "art-44-crbv",
    "articleNumber": "44",
    "legalBody": "Constitución (CRBV)",
    "category": "pie",
    "tag": "derecho",
    "tagLabel": "ART. 44 CRBV • LIBERTAD PERSONAL",
    "title": "Artículo 44 CRBV: ¿Me pueden detener por no llevar la cédula física?",
    "officerClaim": "El oficial dice: 'Por no tener la cédula laminada te vas al comando detenido para verificar'.",
    "verdict": "FALSO / PROCEDIMIENTO ILEGAL",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "En Venezuela solo existen dos causales legales para detener a una persona: 1. Flagrancia en la comisión de un delito; 2. Orden judicial escrita de un Juez. Olvidar la cédula NO es delito.",
    "quickAns": "Nadie puede ser detenido sin orden judicial o flagrancia. Pueden verificar tu cédula por radio (SIIPOL).",
    "actualLaw": "Art. 44 CRBV: La libertad personal es inviolable. Ninguna persona puede ser arrestada o detenida sino en virtud de una orden judicial, a menos que sea sorprendida in fraganti.",
    "script": "Oficial, con el debido respeto, el Artículo 44 de la Constitución consagra la libertad personal: solo procede detención por orden judicial o flagrancia de un delito. Mi cédula de identidad es [tu número]. Le solicito respetuosamente que verifique mi identidad por radio con el sistema SIIPOL. No estoy en flagrancia de ningún delito.",
    "legalBasis": "Artículo 44 de la Constitución (CRBV) y Ley Orgánica de Identificación.",
    "consequence": "Si el funcionario priva de libertad sin delito flagrante:",
    "consequenceDetails": [
      "Comete Delito de Privación Ilegítima de Libertad (Art. 176 Código Penal).",
      "Incurre en violación directa de los Derechos Fundamentales protegidos por la Fiscalía.",
      "El número 0800-FISCA-00 atiende de inmediato detenciones arbitrarias sin flagrancia."
    ],
    "diplomaticPhrase": "Oficial, permítame llamar a un familiar para que envíe una fotografía de mi cédula o me la acerque, y verifique mi número por SIIPOL.",
    "keywords": [
      "44",
      "articulo 44",
      "art 44",
      "crbv 44",
      "cedula",
      "sin cedula",
      "laminada",
      "siipol",
      "preso por cedula",
      "comando",
      "verificar"
    ]
  },
  {
    "id": "art-60-corrupcion",
    "articleNumber": "60",
    "legalBody": "Ley Contra la Corrupción",
    "category": "todas",
    "tag": "prohibido",
    "tagLabel": "ART. 60 LEY CORRUPCIÓN • CONCUSIÓN",
    "title": "Artículo 60 Ley Contra la Corrupción: ¿Qué dice sobre la 'matraca' o pedir dinero?",
    "officerClaim": "El oficial dice: 'Deme una colaboración para el refresco o 20 dólares y no le retengo nada'.",
    "verdict": "DELITO PENAL GRAVE",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Exigir o insinuar dinero, transferencias o bienes a cambio de no imponer una sanción o no retener bienes es el delito penal de Concusión, castigado con 3 a 7 años de presidio.",
    "quickAns": "DELITO DE CONCUSIÓN. Castigado con 3 a 7 años de prisión e inhabilitación perpetua.",
    "actualLaw": "Art. 60 Ley Contra la Corrupción: El funcionario público que, abusando de sus funciones, constriña o induzca a alguien a que dé o prometa para sí mismo o para un tercero una suma de dinero o cualquier otra ganancia, será penado con prisión de 3 a 7 años.",
    "script": "Oficial, con el debido respeto, yo no realizo pagos irregulares ni colaboraciones en efectivo. Si existe alguna infracción, por favor elabore la boleta de citación o multa oficial con su identificación y yo la cancelaré por los canales bancarios oficiales del Estado como lo establece la ley.",
    "legalBasis": "Artículo 60 de la Ley Contra la Corrupción y Código Penal.",
    "consequence": "Sanciones al funcionario involucrado:",
    "consequenceDetails": [
      "Pena de prisión de 3 a 7 años e inhabilitación perpetua para la función policial.",
      "Apertura inmediata de expediente penal por la Fiscalía 25 Nacional Anticorrupción.",
      "Destitución deshonrosa sin beneficios de jubilación."
    ],
    "diplomaticPhrase": "Oficial, mantengamos el procedimiento apegado estrictamente a la ley. Si tiene que multarme, haga la boleta oficial, pero no comprometa su investidura solicitando entregas indebidas.",
    "keywords": [
      "60",
      "articulo 60",
      "art 60",
      "concursion",
      "matraca",
      "plata",
      "dinero",
      "dolares",
      "pago movil",
      "refresco",
      "colaboracion",
      "soborno"
    ]
  },
  {
    "id": "retener-documentos-comando",
    "articleNumber": "67",
    "legalBody": "Ley Contra la Corrupción y CRBV",
    "category": "todas",
    "tag": "prohibido",
    "tagLabel": "ABUSO DE FUNCIONES • RETENER DOCUMENTOS",
    "title": "¿Puede el policía retener mi cédula o licencia para forzarme a ir al comando?",
    "officerClaim": "El oficial dice: 'Me quedo con su cédula y su licencia; acompáñame al comando si quiere que se los devuelva'.",
    "verdict": "TOTALMENTE ILEGAL / COACCIÓN ARBITRARIA",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "El funcionario debe inspeccionar los documentos en el sitio y devolverlos de inmediato. Retener la cédula o licencia como mecanismo de presión o chantaje para obligar al ciudadano a trasladarse a una sede policial por una supuesta falta de tránsito es privación arbitraria y abuso de funciones.",
    "quickAns": "ILEGAL. Deben verificar tus papeles en el sitio y devolvértelos. No pueden retenerlos para forzarte al comando.",
    "actualLaw": "Art. 44 y 50 CRBV en relación con el Art. 67 Ley Contra la Corrupción: Ningún funcionario puede retener la documentación de identidad de un ciudadano para coaccionar su libertad de movimiento ni forzar traslados policiales sin orden judicial o flagrancia delictiva.",
    "script": "Oficial, con todo respeto, usted tiene la potestad de verificar mis documentos en este lugar. Le solicito amablemente que me los devuelva. Si considera que cometí una infracción vial, elabore la boleta de citación correspondiente aquí mismo, pero la ley prohíbe retener documentos personales para coaccionar mi traslado al comando.",
    "legalBasis": "Artículos 44 y 50 de la CRBV; Art. 67 de la Ley Contra la Corrupción; Art. 199 de la Ley de Transporte Terrestre.",
    "consequence": "Si el funcionario insiste en despojarte de tus documentos y exigir que lo sigas:",
    "consequenceDetails": [
      "Incurre en Delito de Abuso de Funciones y Coacción Arbitraria (Art. 67 Ley Contra la Corrupción).",
      "Comete Retención Indebida de Documento Público de Identidad personal.",
      "Puedes denunciarlo ante el Fiscal de Guardia del Ministerio Público llamando al 0800-FISCA-00 indicando su nombre y número de patrulla."
    ],
    "diplomaticPhrase": "Oficial, estoy plenamente dispuesto a recibir la boleta de infracción que usted determine en este punto de control. Por favor devuélvame mis documentos para continuar cumpliendo con la ley.",
    "keywords": [
      "comando",
      "acompaname",
      "retener cedula",
      "retener licencia",
      "quitar documentos",
      "acompanar a la estacion",
      "quedarse los papeles",
      "secuestro de documentos",
      "junquito",
      "teques"
    ]
  },
  {
    "id": "moto-batea-patrulla",
    "articleNumber": "115",
    "legalBody": "CRBV y Ley de Tránsito Terrestre",
    "category": "vehiculo",
    "tag": "prohibido",
    "tagLabel": "PROHIBIDO • MOTOS EN BATEAS DE PATRULLAS",
    "title": "¿Pueden subir mi moto a la fuerza a la batea de una camioneta policial?",
    "officerClaim": "El oficial dice: 'Móntale la moto en la batea de la patrulla y te la llevas ya para el comando'.",
    "verdict": "PROCEDIMIENTO ARBITRARIO / DAÑO AL PATRIMONIO",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "El traslado de cualquier vehículo o motocicleta retenido por causas legales debe realizarse exclusivamente mediante grúa reglamentaria, elaborando obligatoriamente un Acta de Inventario y Daños previa firmada por el conductor. Subirla a la fuerza a una batea de patrulla daña el bien y engendra responsabilidad civil y penal.",
    "quickAns": "PROHIBIDO. El traslado exige grúa reglamentaria y Acta de Inventario previa. No pueden apilar motos en bateas.",
    "actualLaw": "Art. 115 CRBV (Garantía del derecho de propiedad) y Art. 182 LTT: La retención y remolque debe efectuarse con equipos especializados (grúas) y levantando inventario descriptivo formal del estado del vehículo para salvaguardar la propiedad ciudadana.",
    "script": "Oficial, con el debido respeto, el traslado de un vehículo o motocicleta debe realizarse mediante grúa autorizada y con previa acta de inventario que certifique su estado físico según la Ley de Transporte Terrestre. Subir la moto a la batea de la patrulla genera daños mecánicos y estéticos a mi propiedad privada de los cuales el cuerpo policial debe hacerse legalmente responsable.",
    "legalBasis": "Artículo 115 de la CRBV; Artículos 181 y 182 de la Ley de Transporte Terrestre; Art. 65 LEFP.",
    "consequence": "Si dañan o montan la motocicleta a la fuerza en la patrulla:",
    "consequenceDetails": [
      "Generan Responsabilidad Patrimonial del Estado y del funcionario por daños a la propiedad privada (Art. 140 CRBV).",
      "Incurren en Abuso de Autoridad al incumplir el protocolo reglamentario de remolque.",
      "El acta de retención queda viciada de nulidad absoluta si no cuenta con inventario suscrito por las partes."
    ],
    "diplomaticPhrase": "Funcionario, le solicito respetuosamente que preserve la integridad de mi vehículo. Si procede un remolque legal, esperemos la grúa reglamentaria y levantemos el inventario formal correspondiente.",
    "keywords": [
      "batea",
      "patrulla",
      "montar moto",
      "camioneta",
      "subir moto",
      "zulia",
      "golpear moto",
      "inventario",
      "grua",
      "remolque moto",
      "danos moto"
    ]
  },
  {
    "id": "policia-sin-identificacion-ebrio",
    "articleNumber": "65",
    "legalBody": "Ley del Estatuto de la Función Policial (LEFP)",
    "category": "todas",
    "tag": "prohibido",
    "tagLabel": "ART. 65 LEFP • IDENTIFICACIÓN OBLIGATORIA",
    "title": "¿Qué hacer si el policía no tiene placa visible o está bajo efectos del alcohol?",
    "officerClaim": "El oficial dice: 'Yo no tengo por qué mostrarte mi carnet ni darte mi nombre. ¡Baja ese teléfono ya!'",
    "verdict": "FALTA GRAVÍSIMA / DEBER DE IDENTIFICACIÓN",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Todo funcionario policial en servicio tiene el DEBER ESTRICTO de portar su placa identificadora visible en el pecho con su apellido y jerarquía. Ocultar la placa, agredir físicamente al ciudadano o prestar servicio con aliento alcohólico son causales inmediatas de destitución penal y administrativa.",
    "quickAns": "Es OBLIGATORIO que porten placa visible con apellido y rango. Si está ebrio o sin placa, es falta gravísima destituible.",
    "actualLaw": "Art. 65 LEFP: Son deberes de los funcionarios policiales portar visiblemente su identificación personal, placa y credencial, así como dirigirse a los ciudadanos con respeto. Art. 86 LEFP: Es causal de destitución la prestación de servicio bajo influencia de bebidas alcohólicas o drogas.",
    "script": "Buenas tardes, oficial. El Artículo 65 de la Ley del Estatuto de la Función Policial establece el deber legal de portar su identificación y placa visible. Le pido respetuosamente que me indique su nombre, jerarquía y cuerpo policial para interactuar con la debida transparencia institucional que exige la ley.",
    "legalBasis": "Artículos 65 y 86 de la Ley del Estatuto de la Función Policial (LEFP); Art. 17 Ley Orgánica del Servicio de Policía.",
    "consequence": "Si el funcionario actúa sin identificación, en ebriedad o agrede físicamente:",
    "consequenceDetails": [
      "Destitución inmediata sin derecho a indemnización por el Consejo Disciplinario Policial.",
      "Apertura de procedimiento penal ante la Fiscalía de Derechos Fundamentales por Tratos Crueles o Degradantes.",
      "Intervención de la Inspectoría para el Control de la Actuación Policial (ICAP)."
    ],
    "diplomaticPhrase": "Oficial, busquemos el entendimiento respetuoso. Permítame hablar con el jefe de la comisión o supervisor a cargo del punto para continuar con el procedimiento reglamentario.",
    "keywords": [
      "placa",
      "chapa",
      "nombre del policia",
      "ebrio",
      "alcohol",
      "borracho",
      "sin uniforme",
      "sin credencial",
      "lefp 65",
      "identificacion policial",
      "tapar placa",
      "estudiante de derecho"
    ]
  },
  {
    "id": "fotos-celular-personal-multa",
    "articleNumber": "49",
    "legalBody": "CRBV y Ley de Transporte Terrestre",
    "category": "vehiculo",
    "tag": "prohibido",
    "tagLabel": "ART. 49 CRBV • PRUEBAS ILEGÍTIMAS",
    "title": "¿Puede un policía mostrarme una foto de su teléfono personal para multarme?",
    "officerClaim": "El oficial dice: 'Mire esta foto en mi teléfono personal, aquí se ve que venía a exceso de velocidad o en infracción'.",
    "verdict": "PRUEBA NULA / ILEGAL",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Una fotografía tomada con un celular particular por un funcionario o tercero no cumple con los estándares de cadena de custodia ni con los instrumentos de medición técnica homologados (radares o cinemómetros certificados por SENCAMER e INTT). No constituye prueba legal para fundamentar una infracción.",
    "quickAns": "NULO. Una foto en un celular particular no es prueba legal. Se requieren cinemómetros y radares homologados.",
    "actualLaw": "Art. 49 ordinal 1° CRBV: Serán nulas las pruebas obtenidas mediante violación del debido proceso. Art. 200 LTT: Las infracciones viales constatadas por medios tecnológicos deben provenir de dispositivos homologados y certificados oficialmente por las autoridades de tránsito.",
    "script": "Oficial, con el debido respeto, una fotografía tomada en un teléfono celular particular no es un instrumento técnico homologado por el INTT ni SENCAMER para constatar velocidad o faltas viales. Conforme al Artículo 49 de la Constitución, esa imagen carece de validez legal como medio probatorio.",
    "legalBasis": "Artículo 49 de la CRBV; Artículos 199 y 200 de la Ley de Transporte Terrestre; Normas de Metrología Legal SENCAMER.",
    "consequence": "Si el funcionario insiste en imponer multa o exigir dinero con falsas evidencias:",
    "consequenceDetails": [
      "Incurre en Simulación de Hecho Punible o Fraude Procesal Administrativo.",
      "La boleta de multa resulta anulable mediante recurso de reconsideración en los 3 días hábiles posteriores.",
      "Si exige dinero para 'borrar la foto', comete el delito de Concusión (Art. 60 Ley Anticorrupción)."
    ],
    "diplomaticPhrase": "Oficial, si desea emitir la boleta de infracción con el fundamento legal y técnico respectivo, por favor elabórela y ejerceré mi derecho legal a la defensa ante la Inspectoría de Tránsito.",
    "keywords": [
      "foto",
      "foto en celular",
      "foto en telefono",
      "lara",
      "exceso de velocidad",
      "cinemometro",
      "radar",
      "prueba falsa",
      "multa inventada",
      "galeria"
    ]
  },
  {
    "id": "papel-ahumado-polarizado",
    "articleNumber": "181",
    "legalBody": "Ley de Transporte Terrestre",
    "category": "vehiculo",
    "tag": "prohibido",
    "tagLabel": "LEY DE TRÁNSITO • PAPEL AHUMADO",
    "title": "¿Me pueden retener el carro o multar por tener papel ahumado (polarizado)?",
    "officerClaim": "El oficial dice: 'Ese papel ahumado está muy oscuro, eso no está permitido y el carro va retenido al estacionamiento'.",
    "verdict": "FALSO / NO ES CAUSAL DE RETENCIÓN",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "En Venezuela NO existe ninguna norma técnica vigente que fije un porcentaje medible de luminosidad para autos particulares, ni mucho menos el papel ahumado figura entre las causales taxativas de retención del Art. 181 de la LTT. Retener un carro por vidrios ahumados es un acto completamente ilegal.",
    "quickAns": "NO pueden retener el carro. El papel ahumado NO es causal de retención bajo el Art. 181 de la Ley de Tránsito.",
    "actualLaw": "Art. 181 Ley de Transporte Terrestre: Establece las únicas causas de retención vehicular (falta de placas, peligro mecánico evidente, ebriedad, accidente con víctimas, falta total de documentos o falta de RCV). El papel ahumado NO figura en ninguna de ellas.",
    "script": "Buenas tardes, oficial. Con el mayor respeto, el Artículo 181 de la Ley de Transporte Terrestre taxativamente enumera las causas de retención preventiva de un vehículo, y el papel ahumado no forma parte de ninguna de ellas. No existe ley que ordene retener el automóvil por este motivo.",
    "legalBasis": "Artículo 181 de la Ley de Transporte Terrestre en concordancia con el principio de legalidad del Art. 137 de la CRBV.",
    "consequence": "Si el funcionario amenaza con llevarse el carro en grúa por papel ahumado:",
    "consequenceDetails": [
      "Comete Retención Ilegal y Extralimitación de Funciones Policiales.",
      "Si pide dinero a cambio de 'dejar pasar el polarizado', incurre en Concusión (Art. 60 Ley Contra la Corrupción).",
      "Puedes solicitar la presencia inmediata del Fiscal de Guardia del Ministerio Público."
    ],
    "diplomaticPhrase": "Oficial, entiendo su recomendación sobre la visibilidad, pero la ley no prevé retención por este concepto. Permítame continuar mi marcha pacífica con toda mi documentación en regla.",
    "keywords": [
      "papel ahumado",
      "polarizado",
      "vidrios negros",
      "vidrios oscuros",
      "papel negro",
      "tonalidad",
      "porcentaje",
      "retener carro por polarizado",
      "ahumados"
    ]
  },
  {
    "id": "barras-led-exploradoras",
    "articleNumber": "169",
    "legalBody": "Ley de Transporte Terrestre (Art. 169 num. 21)",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ART. 169 LTT • BARRAS LED Y EXPLORADORAS",
    "title": "¿Qué pasa si tengo barras LED o faros exploradores en el carro o moto?",
    "officerClaim": "El oficial dice: 'Las barras LED son ilegales, tiene que pagar 100 dólares o le quito el carro'.",
    "verdict": "MULTA O RETIRO DEL ACCESORIO / NO RETENCIÓN DEL CARRO",
    "verdictClass": "tag-alerta",
    "verdictExplanation": "El uso de barras LED y accesorios lumínicos no originales que provoquen encandilamiento está prohibido y genera una MULTA pecuniaria (10 UT) o la orden de retiro del accesorio. Sin embargo, NO es causal para retener el automóvil completo en un estacionamiento judicial.",
    "quickAns": "Aplica multa de 10 UT o retiro voluntario de la barra, pero NUNCA la retención del vehículo completo.",
    "actualLaw": "Art. 169 numeral 21 LTT y Resoluciones INTT: Sanciona con multa de diez unidades tributarias (10 UT) la modificación de estructuras o instalación de dispositivos de alumbrado no autorizados que encandilen o afecten la seguridad vial.",
    "script": "Oficial, entiendo la normativa del INTT sobre dispositivos lumínicos no originales. Si usted considera que procede una infracción, emita la boleta de multa correspondiente de 10 unidades tributarias, o si lo requiere puedo desconectar o retirar las exploradoras aquí mismo, pero la ley no establece la retención del vehículo por este motivo.",
    "legalBasis": "Artículo 169 numeral 21 de la Ley de Transporte Terrestre y Resoluciones Conjuntas del INTT sobre dispositivos de alumbrado.",
    "consequence": "Si el funcionario exige pagos en divisas o amenaza con el estacionamiento:",
    "consequenceDetails": [
      "Incurre en Concusión (Art. 60 Ley Anticorrupción) al usar una falta administrativa para extorsionar.",
      "El decomiso del accesorio debe constar en un Acta de Retención formal con entrega de comprobante.",
      "La multa se cancela únicamente a través de la taquilla o portal web oficial del INTT."
    ],
    "diplomaticPhrase": "Funcionario, colaboro con gusto desconectando el dispositivo para cumplir con la normativa vial. Procedamos según lo que la ley estipula formalmente.",
    "keywords": [
      "luces led",
      "barras led",
      "exploradoras",
      "faros extra",
      "luces altas",
      "encandilar",
      "169",
      "bombillos led",
      "regleta led"
    ]
  },
  {
    "id": "carnet-nombre-tercero-traspaso",
    "articleNumber": "181",
    "legalBody": "Ley de Transporte Terrestre",
    "category": "vehiculo",
    "tag": "derecho",
    "tagLabel": "CIRCULACIÓN LEGAL • VEHÍCULO DE TERCEROS",
    "title": "¿Es legal manejar un carro o moto que no está a mi nombre?",
    "officerClaim": "El oficial dice: 'El carnet de circulación no está a su nombre, por lo tanto el vehículo queda retenido por averiguaciones'.",
    "verdict": "FALSO / TOTALMENTE LEGAL",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Conducir un vehículo propiedad de un familiar, amigo o con documento de compraventa autenticado es plenamente legal en Venezuela. No es causal de retención si portas el Certificado de Registro original y tus documentos personales vigentes, siempre que no esté solicitado por robo en SIIPOL.",
    "quickAns": "100% LEGAL. Puedes circular con un vehículo ajeno portando su carnet original y tus documentos al día.",
    "actualLaw": "Art. 181 LTT: Solo procede retención cuando el conductor 'no presente documento alguno que justifique su legítima posesión'. Si portas el carnet de circulación original o contrato notariado, tu posesión es plenamente legítima.",
    "script": "Oficial, con el debido respeto, la ley venezolana permite circular en un vehículo de un tercero siempre que se porte el Certificado de Registro original y mis documentos personales vigentes. El Artículo 181 de la LTT solo prevé retención si no se presenta documento alguno de propiedad, y aquí tengo el carnet original.",
    "legalBasis": "Artículo 181 numeral 2 de la Ley de Transporte Terrestre y Código Civil Venezolano (Presunción de legítima posesión).",
    "consequence": "Si el funcionario insiste en 'retención por averiguación' sin que el vehículo esté solicitado:",
    "consequenceDetails": [
      "Comete Retención Arbitraria y Abuso de Poder penado por la Ley Anticorrupción.",
      "El chequeo por SIIPOL dura escasos minutos por radio policial; si no arroja novedad, debe permitir continuar.",
      "Puedes solicitar el número de reporte radial de SIIPOL que demuestre si existe alguna alerta real."
    ],
    "diplomaticPhrase": "Oficial, verifique la placa y seriales por el sistema SIIPOL. Comprobará que la unidad está totalmente limpia y en orden, y podré seguir mi camino.",
    "keywords": [
      "no esta a mi nombre",
      "carnet de otra persona",
      "carro prestado",
      "moto prestada",
      "traspaso",
      "compraventa",
      "carta poder",
      "titulo a nombre de otro"
    ]
  },
  {
    "id": "licencia-digital-carnet-qr",
    "articleNumber": "15",
    "legalBody": "Providencias INTT / Ley de Infogobierno",
    "category": "vehiculo",
    "tag": "derecho",
    "tagLabel": "DOCUMENTOS DIGITALES • CÓDIGO QR INTT",
    "title": "¿Son legales las licencias y carnets de circulación digitales con código QR?",
    "officerClaim": "El oficial dice: 'Ese papel impreso o esa licencia en el celular no es válida, tiene que presentar el carnet de plástico plastificado'.",
    "verdict": "FALSO / DOCUMENTO 100% OFICIAL Y LEGAL",
    "verdictClass": "tag-derecho",
    "verdictExplanation": "El INTT emite oficialmente las licencias de conducir y certificados de registro vehicular en formato digital PDF con Código QR de verificación electrónica. Tienen plena validez jurídica a nivel nacional según la Gaceta Oficial y la Ley de Infogobierno.",
    "quickAns": "100% VÁLIDO. Los documentos digitales del INTT con QR son oficiales y verificables en línea.",
    "actualLaw": "Providencias Administrativas del INTT y Ley sobre Mensajes de Datos y Firmas Electrónicas: Los documentos generados electrónicamente por el sistema automatizado del INTT con Código QR y firma digital poseen total fuerza probatoria y legal.",
    "script": "Oficial, con todo respeto, este documento fue emitido directamente por el portal oficial del INTT en formato digital con código QR de seguridad. La ley le otorga plena validez legal. Si tiene alguna duda sobre su autenticidad, puede escanear el QR con la aplicación oficial del INTT o verificarlo en el portal web intt.gob.ve.",
    "legalBasis": "Ley sobre Mensajes de Datos y Firmas Electrónicas; Ley de Infogobierno; Resoluciones del Instituto Nacional de Transporte Terrestre.",
    "consequence": "Si el funcionario desconoce arbitrariamente el documento digital oficial:",
    "consequenceDetails": [
      "Desacata los actos administrativos del ente rector nacional de transporte (INTT).",
      "Incurre en Denegación de Eficacia a Documento Público Oficial legítimo.",
      "El ciudadano puede mostrar la consulta pública del INTT directamente en el navegador."
    ],
    "diplomaticPhrase": "Funcionario, el INTT ya no emite plásticos físicos y este formato digital es el estándar oficial del Estado venezolano. Escaneemos el QR juntos para su total tranquilidad.",
    "keywords": [
      "licencia digital",
      "qr",
      "carnet digital",
      "papel blanco",
      "impreso",
      "intt qr",
      "plastificado",
      "hoja de papel",
      "licencia en pdf"
    ]
  },
  {
    "id": "extintor-triangulos-botiquin",
    "articleNumber": "169",
    "legalBody": "Ley de Transporte Terrestre (Art. 169 num. 9)",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ART. 169 LTT • EQUIPOS DE EMERGENCIA",
    "title": "¿Me pueden retener el vehículo si no tengo extintor, botiquín o triángulos?",
    "officerClaim": "El oficial dice: 'No tiene el extintor al día ni los triángulos de seguridad, el vehículo va para el comando retenido'.",
    "verdict": "FALSO / NUNCA ES CAUSAL DE RETENCIÓN",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "La falta de herramientas de auxilio vial (extintor, gato, triángulos o botiquín) es calificada por la Ley de Transporte Terrestre como una infracción leve sujeta ÚNICAMENTE a una boleta de multa pecuniaria de cinco a diez unidades tributarias (5 a 10 UT). Jamás amerita retención del carro.",
    "quickAns": "Solo amerita MULTA pecuniaria leve (5 a 10 UT). NUNCA da pie a retención del vehículo.",
    "actualLaw": "Art. 169 numeral 9 LTT: Sanciona con multa de cinco a diez unidades tributarias a los conductores que circulen sin los dispositivos de emergencia reglamentarios. El Art. 181 LTT NO incluye esta falta entre las causales de retención.",
    "script": "Oficial, reconozco la importancia de los dispositivos de emergencia. No obstante, el Artículo 169 de la Ley de Transporte Terrestre califica la falta de extintor o triángulos como una infracción sancionada con boleta de multa, no con retención vehicular según el Artículo 181.",
    "legalBasis": "Artículo 169 numeral 9 y Artículo 181 de la Ley de Transporte Terrestre.",
    "consequence": "Si el oficial pretende llevar el vehículo al estacionamiento por un extintor:",
    "consequenceDetails": [
      "Comete Abuso de Autoridad y Extralimitación de Funciones.",
      "Toda exigencia de dinero para 'obviar' el extintor es delito de Concusión (Art. 60 Ley Anticorrupción).",
      "La boleta debe ser entregada en mano con los datos del funcionario para su posterior cancelación legal."
    ],
    "diplomaticPhrase": "Oficial, si corresponde la sanción administrativa, elabore la boleta de multa para cancelarla por el banco oficial, y procederé a equipar el vehículo de inmediato.",
    "keywords": [
      "extintor",
      "triangulos",
      "botiquin",
      "gato",
      "herramientas",
      "llave de cruz",
      "falta de extintor",
      "extintor vencido",
      "caucho de repuesto"
    ]
  },
  {
    "id": "pago-multas-efectivo-prohibido",
    "articleNumber": "202",
    "legalBody": "Ley de Transporte Terrestre y Ley Anticorrupción",
    "category": "todas",
    "tag": "prohibido",
    "tagLabel": "PAGO DE MULTAS • PROHIBIDO EFECTIVO",
    "title": "¿Puedo o debo pagar una multa de tránsito en efectivo al policía en la calle?",
    "officerClaim": "El oficial dice: 'Págueme la infracción a mí en efectivo o por pago móvil personal y nos evitamos el trámite de la boleta'.",
    "verdict": "TOTALMENTE PROHIBIDO / DELITO DE CORRUPCIÓN",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Ningún funcionario policial ni de tránsito puede recibir dinero en efectivo, transferencias o Pago Móvil por concepto de multas. Las multas se notifican mediante boleta oficial y se pagan exclusivamente ante los bancos recaudadores autorizados por el INTT en un lapso de 30 días hábiles.",
    "quickAns": "PROHIBIDO. Ningún policía puede cobrar multas en el sitio. Tienes 30 días hábiles para pagar por banco oficial.",
    "actualLaw": "Artículos 200, 202 y 205 LTT: Las sanciones pecuniarias se cancelarán en las instituciones financieras receptoras de fondos públicos nacionales. El infractor dispone de 30 días hábiles para el pago y 3 días para apelar.",
    "script": "Oficial, con todo respeto, la ley venezolana prohíbe taxativamente la entrega o cobro de dinero en efectivo a los funcionarios en la vía pública. Por favor entrégueme la boleta de citación formal con su número de placa y yo la cancelaré conforme a la ley en las cuentas autorizadas del INTT.",
    "legalBasis": "Artículos 199, 202 y 205 de la Ley de Transporte Terrestre; Art. 60 y 62 de la Ley Contra la Corrupción.",
    "consequence": "Para el funcionario que reciba o solicite pagos en el sitio:",
    "consequenceDetails": [
      "Comete Delito de Concusión y Corrupción Pasiva (penas de 3 a 7 años de prisión).",
      "Sanción de inhabilitación perpetua para el ejercicio de cargos públicos policiales.",
      "Puedes realizar la denuncia confidencial ante el 0800-FISCA-00 aportando los datos de la transferencia o exigencia."
    ],
    "diplomaticPhrase": "Oficial, mantengamos el procedimiento con estricta transparencia. Facilíteme la boleta de infracción oficial para tramitarla por los canales regulares del Estado.",
    "keywords": [
      "pagar multa en sitio",
      "pago movil al policia",
      "efectivo",
      "dolares",
      "pagar en la calle",
      "boleta",
      "30 dias para pagar",
      "banco de venezuela",
      "multa banco"
    ]
  },
  {
    "id": "mudanza-enseres-personales",
    "articleNumber": "50",
    "legalBody": "Constitución (CRBV) / Ley Agroalimentaria",
    "category": "vehiculo",
    "tag": "derecho",
    "tagLabel": "ART. 50 CRBV • MUDANZAS Y ENSERES",
    "title": "¿Me pueden exigir guía SUNAGRO o decomisar bienes por trasladar una mudanza personal?",
    "officerClaim": "El oficial dice: 'Está trasladando muebles, electrodomésticos o cajas sin guía de movilización SUNAGRO o factura comercial, eso queda retenido'.",
    "verdict": "FALSO / EXCESO DE AUTORIDAD",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Las Guías de Movilización (SICA / SUNAGRO) son EXCLUSIVAS para la distribución comercial de materias primas y productos agroalimentarios. El traslado de enseres domésticos usados, menaje de casa, ropa y muebles particulares NO requiere guías de carga comerciales ni permisos especiales.",
    "quickAns": "Las guías SUNAGRO son SOLO para alimentos comerciales. Tus pertenencias y muebles usados no requieren permisos.",
    "actualLaw": "Art. 50 CRBV (Derecho al libre tránsito de personas y bienes). Las facultades de fiscalización de SUNAGRO se circunscriben a rubros agroalimentarios bajo el Decreto con Rango, Valor y Fuerza de Ley del Sistema Nacional Integral Agroalimentario.",
    "script": "Buenas tardes, oficial. Los bienes que traslado son enseres personales de uso doméstico particular por cambio de residencia, no mercancía comercial ni rubros agroalimentarios. El Artículo 50 de la Constitución garantiza el libre tránsito de bienes privados y la normativa SUNAGRO no aplica a pertenencias del hogar.",
    "legalBasis": "Artículo 50 y Artículo 115 de la CRBV; Decreto con Rango, Valor y Fuerza de Ley del Sistema Nacional Integral Agroalimentario.",
    "consequence": "Si el funcionario retiene bienes personales alegando falta de guías agrícolas:",
    "consequenceDetails": [
      "Comete Apropiación Indebida calificada y Retención Arbitraria de Propiedad Privada.",
      "Incurre en Desviación de Poder sancionada por la Ley Contra la Corrupción.",
      "Es recomendable portar una lista o inventario simple firmado como respaldo voluntario."
    ],
    "diplomaticPhrase": "Oficial, aquí tiene una lista detallada de mis objetos personales y la dirección de origen y destino. Con gusto puede constatar que son artículos usados de mi hogar.",
    "keywords": [
      "mudanza",
      "enseres",
      "muebles",
      "cajas",
      "sunagro",
      "guia sada",
      "guia sica",
      "electrodomesticos",
      "corotos",
      "colchon",
      "decomiso carga"
    ]
  },
  {
    "id": "manejar-chancletas-sandalias-camisa",
    "articleNumber": "137",
    "legalBody": "Constitución (CRBV) / Principio de Legalidad",
    "category": "vehiculo",
    "tag": "derecho",
    "tagLabel": "MITO VIAL • CALZADO Y VESTIMENTA",
    "title": "¿Es delito o causa de multa manejar en chancletas, sandalias o sin camisa?",
    "officerClaim": "El oficial dice: 'Manejar en chancletas, sandalias o sin camisa está prohibido por la ley y amerita multa y retención del carro'.",
    "verdict": "MITO VIAL / INEXISTENTE EN LA LEY",
    "verdictClass": "tag-derecho",
    "verdictExplanation": "Ninguna disposición de la Ley de Transporte Terrestre ni de su Reglamento prohíbe expresamente conducir descalzo, en sandalias o sin franela. Bajo el principio de legalidad, nadie puede ser sancionado por actos no tipificados expresamente en la ley (aunque por seguridad personal vial siempre se aconseja calzado que sujete el pie).",
    "quickAns": "MITO. Ninguna ley sanciona conducir en sandalias o sin camisa. No es causal de multa ni de retención.",
    "actualLaw": "Art. 137 y Art. 49 numeral 6 CRBV (Principio de Legalidad): La Constitución y la ley definen las atribuciones de los órganos del Poder Público. Ninguna persona puede ser sancionada por actos u omisiones que no estuvieren previstos como infracción en leyes preexistentes.",
    "script": "Oficial, con el debido respeto, la Ley de Transporte Terrestre venezolana no contempla sanción ni prohibición alguna por el tipo de calzado o vestimenta al conducir. Conforme al principio constitucional de legalidad, la autoridad solo puede exigir lo que la ley señale expresamente.",
    "legalBasis": "Artículos 49 numeral 6 y 137 de la CRBV; Ley de Transporte Terrestre.",
    "consequence": "Si el funcionario intenta sancionar o retener el carro con inventos de vestimenta:",
    "consequenceDetails": [
      "Incurre en Usurpación de Funciones Legislativas y Abuso de Autoridad.",
      "La boleta carecería de tipicidad legal y es nula de pleno derecho.",
      "Si exige dinero para 'perdonar' la vestimenta, comete Concusión (Art. 60 Ley Anticorrupción)."
    ],
    "diplomaticPhrase": "Funcionario, entiendo su recomendación sobre la precaución al pedalear, pero le aseguro que tengo total control del vehículo y mis documentos están en regla.",
    "keywords": [
      "chancletas",
      "sandalias",
      "descalzo",
      "sin camisa",
      "sin franela",
      "conducir en chancleta",
      "crocs",
      "ropa al manejar",
      "mito vial"
    ]
  },
  {
    "id": "moto-casco-reglamentario-chaleco",
    "articleNumber": "169",
    "legalBody": "Ley de Transporte Terrestre (Art. 169 num. 18)",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ART. 169 LTT • CASCO EN MOTOCICLETAS",
    "title": "¿Qué exige la ley sobre el casco en motos y cuándo procede retención?",
    "officerClaim": "El oficial dice: 'El casco que lleva no es integral o el acompañante no lleva chaleco, la moto va retenida al estacionamiento'.",
    "verdict": "MULTA DE 10 UT / RETENCIÓN SOLO SI SE NIEGA A USARLO",
    "verdictClass": "tag-alerta",
    "verdictExplanation": "Tanto el conductor como el acompañante deben usar casco protector abrochado. No llevarlo es sancionado con MULTA de 10 UT. La retención preventiva solo procede si el conductor o acompañante se niegan rotundamente a ponérselo para continuar la marcha con seguridad vial.",
    "quickAns": "No llevar casco acarrea MULTA de 10 UT. El policía debe permitirte colocarte el casco antes de amenazar con grúa.",
    "actualLaw": "Art. 169 numeral 18 LTT: Sanciona con multa de diez unidades tributarias (10 UT) a los conductores de motocicletas que circulen sin el casco de seguridad reglamentario debidamente abrochado ellos o sus acompañantes.",
    "script": "Oficial, reconozco la obligatoriedad del casco protector. Si cometí una falta, por favor elabore la boleta de multa reglamentaria de 10 unidades tributarias. Aquí tengo el casco para colocármelo de inmediato y reanudar la marcha de manera segura.",
    "legalBasis": "Artículo 169 numeral 18 y Artículo 181 de la Ley de Transporte Terrestre; Normas COVENIN de cascos protectores.",
    "consequence": "Si el funcionario insiste en retener la moto aun cuando te colocas el casco:",
    "consequenceDetails": [
      "Excede el supuesto legal del Art. 181, ya que la falta de equipamiento es subsanable en el sitio.",
      "El remolque injustificado genera costos ilegales de grúa denunciables ante el INTT.",
      "La boleta de multa no faculta despojar la motocicleta del ciudadano."
    ],
    "diplomaticPhrase": "Oficial, colaboro plenamente colocándome el equipo de seguridad en este instante. Permítame subsanar la situación y cumplir con las normas viales.",
    "keywords": [
      "casco",
      "casco moto",
      "parrillero",
      "chaleco",
      "casco integral",
      "sin casco",
      "abrochar casco",
      "multa por casco",
      "acompanante moto"
    ]
  },
  {
    "id": "moto-ninos-tres-personas-sobrecupo",
    "articleNumber": "169",
    "legalBody": "Ley de Transporte Terrestre y LOPNNA",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ALERTA LEGAL • NIÑOS Y SOBRECUPO EN MOTO",
    "title": "¿Puedo llevar a niños menores de 10 años o a más de dos personas en moto?",
    "officerClaim": "El oficial dice: 'En moto solo pueden ir dos personas y está prohibido llevar niños pequeños, no puede continuar la marcha'.",
    "verdict": "AFIRMACIÓN CORRECTA / PROTECCIÓN A LA VIDA",
    "verdictClass": "tag-alerta",
    "verdictExplanation": "El oficial tiene razón: la ley venezolana PROHÍBE taxativamente transportar más de dos (2) personas en moto y transportar menores de diez (10) años de edad. Es una medida estricta para proteger la vida infantil ante accidentes mortales.",
    "quickAns": "PROHIBIDO. Máximo 2 personas en moto. Prohibido transportar niños menores de 10 años por su seguridad.",
    "actualLaw": "Art. 169 numeral 20 LTT y LOPNNA: Prohíbe transportar más de dos personas en motocicletas y transportar niños o niñas menores de 10 años de edad, sancionando con multa pecuniaria y suspensión de la marcha por resguardo físico.",
    "script": "Oficial, entiendo y respeto la norma de seguridad y protección de la infancia. Desciendo a los acompañantes para tomar transporte público y continuar la marcha conforme a la reglamentación legal sin poner en riesgo a nadie.",
    "legalBasis": "Artículo 169 numeral 20 de la Ley de Transporte Terrestre; Ley Orgánica para la Protección de Niños, Niñas y Adolescentes (LOPNNA).",
    "consequence": "Consecuencias legales si insistes en transportar niños o más de 2 personas:",
    "consequenceDetails": [
      "Multa administrativa de 10 unidades tributarias impuesta por las autoridades de tránsito.",
      "Inmovilización preventiva de la marcha hasta que se garantice el traslado seguro del menor.",
      "Notificación a los Consejos de Protección de Niños, Niñas y Adolescentes si se reincide en poner en riesgo la vida infantil."
    ],
    "diplomaticPhrase": "Comprendo plenamente el oficial, la seguridad de la familia es lo primero. Coordinaremos de inmediato otro medio de transporte para el menor.",
    "keywords": [
      "ninos en moto",
      "tres personas en moto",
      "sobrecupo",
      "menor de 10 anos",
      "bebe en moto",
      "parrilla moto",
      "lopnna",
      "tres en moto",
      "familia en moto"
    ]
  },
  {
    "id": "eliminacion-alcabalas-fijas-urbanas",
    "articleNumber": "50",
    "legalBody": "Directiva Ministerial de Seguridad Ciudadana (Agosto 2026)",
    "category": "todas",
    "tag": "derecho",
    "tagLabel": "DIRECTIVA 2026 • ALCABALAS URBANAS",
    "title": "¿Qué dice la normativa reciente de 2026 sobre las alcabalas fijas dentro de las ciudades?",
    "officerClaim": "El oficial dice: 'Tenemos una alcabala permanente aquí parada en esta calle urbana porque nos da la gana'.",
    "verdict": "DIRECTIVA 2026 DE SUPRESIÓN DE ALCABALAS FIJAS URBANAS",
    "verdictClass": "tag-derecho",
    "verdictExplanation": "En agosto de 2026, el Ejecutivo Nacional y el Ministerio de Relaciones Interiores ordenaron el desmantelamiento progresivo de los puntos de control fijos (alcabalas estáticas) dentro de los cascos urbanos, sustituyéndolos por patrullaje preventivo continuo para erradicar cobros ilegales y agilizar la libre movilidad.",
    "quickAns": "En 2026 se ordenó eliminar alcabalas fijas urbanas. Los operativos deben ser móviles y estar debidamente autorizados.",
    "actualLaw": "Resolución Conjunta 109 y Directiva Nacional de Seguridad Ciudadana (Agosto 2026): Las alcabalas estáticas urbanas no autorizadas están proscritas. Todo punto de control vial debe contar con supervisión de oficiales superiores, señalización y conos reflectivos visibles.",
    "script": "Buenas tardes, oficial. Como es del conocimiento público conforme a las directivas ministeriales emitidas en agosto de 2026, las alcabalas fijas en cascos urbanos fueron ordenadas a suprimir en favor del patrullaje preventivo. ¿Podría indicarme amablemente si este punto cuenta con la debida orden de servicio del comando superior?",
    "legalBasis": "Directiva Ministerial del MPPRIJP de Agosto de 2026; Art. 50 CRBV; Artículos 1 al 5 de la Resolución Conjunta N° 109 (Gaceta 42.458).",
    "consequence": "Si el punto de control es improvisado o cobra peajes ilícitos:",
    "consequenceDetails": [
      "Es clasificado como 'Punto de Control No Autorizado' sujeto a intervención del ICAP y DGCIM.",
      "El Ministerio Público procesa de oficio denuncias de puntos fantasmas creados para la extorsión.",
      "Puedes verificar la validez del operativo comunicándote directamente con el VEN 911."
    ],
    "diplomaticPhrase": "Oficial, colaboro con todo gusto en mi verificación personal. Solo busco confirmar que el procedimiento cumple con los parámetros vigentes del Ministerio.",
    "keywords": [
      "alcabalas urbanas",
      "eliminar alcabalas",
      "2026",
      "directiva ministerial",
      "punto fijo",
      "conos",
      "alcabala fantasma",
      "punto no autorizado",
      "patrullaje"
    ]
  },
  {
    "id": "certificado-medico-vial-vencido",
    "articleNumber": "169",
    "legalBody": "Ley de Transporte Terrestre (Art. 169 num. 1)",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ART. 169 LTT • CERTIFICADO MÉDICO",
    "title": "¿Me pueden retener el vehículo si tengo el Certificado Médico Vial vencido?",
    "officerClaim": "El oficial dice: 'Su certificado médico está vencido desde hace un mes, bájese del carro que va para el estacionamiento'.",
    "verdict": "FALSO / SOLO MULTA ADMINISTRATIVA",
    "verdictClass": "tag-prohibido",
    "verdictExplanation": "Conducir con el certificado médico vial vencido es una infracción que acarrea una MULTA administrativa pecuniaria (5 a 10 UT). El Artículo 181 de la LTT en ningún momento faculta la retención del vehículo ni el traslado en grúa por este motivo.",
    "quickAns": "Solo aplica MULTA escrita. El certificado médico vencido NUNCA es causal de retención de vehículo ni moto.",
    "actualLaw": "Art. 169 numeral 1 LTT: Sanciona con multa administrativa a quien conduzca con licencia o certificados médicos vencidos. El Art. 181 de la LTT no contempla la retención por esta causa.",
    "script": "Oficial, con el debido respeto, el vencimiento del certificado médico vial es sancionado mediante boleta de multa según el Artículo 169 de la Ley de Transporte Terrestre. No forma parte de las causales taxativas de retención del Artículo 181, por lo que le solicito que emita la boleta respectiva.",
    "legalBasis": "Artículos 169 numeral 1 y 181 de la Ley de Transporte Terrestre.",
    "consequence": "Si el funcionario insiste en amenazar con grúa por el certificado médico:",
    "consequenceDetails": [
      "Incurre en Retención Ilegal y Extralimitación de Atribuciones Administrativas.",
      "Cualquier solicitud de dinero en sustitución de la boleta constituye Concusión penal.",
      "El ciudadano tiene 30 días hábiles para pagar la sanción económica oficial."
    ],
    "diplomaticPhrase": "Oficial, por favor elabore la boleta de multa reglamentaria. Me comprometo a renovar el certificado médico a la brevedad ante el colegio médico correspondiente.",
    "keywords": [
      "certificado medico",
      "vencido",
      "medico vial",
      "papel del colegio de medicos",
      "examen medico",
      "multa certificado",
      "renovar certificado"
    ]
  },
  {
    "id": "seguro-rcv-vencido-advertencia",
    "articleNumber": "181",
    "legalBody": "Ley de Transporte Terrestre (Art. 58 y Art. 181 num. 4)",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ALERTA AL CONDUCTOR • SEGURO RCV",
    "title": "¿Me pueden retener el vehículo si no tengo la póliza de Seguro RCV al día?",
    "officerClaim": "El oficial dice: 'No tiene póliza de Responsabilidad Civil (RCV) vigente, el vehículo no puede continuar circulando'.",
    "verdict": "AFIRMACIÓN LEGALMENTE CIERTA / DEBES SUBSANAR",
    "verdictClass": "tag-alerta",
    "verdictExplanation": "¡Atención! A diferencia de otras faltas, el Artículo 181 numeral 4 de la Ley de Transporte Terrestre SÍ faculta la inmovilización preventiva del vehículo hasta que se contrate o presente la póliza de seguro de responsabilidad civil vigente que garantice daños a terceros.",
    "quickAns": "CUIDADO: El Art. 181 sí faculta inmovilizar el carro o moto hasta que presentes o compres la póliza RCV vigente.",
    "actualLaw": "Art. 58 y Art. 181 numeral 4 LTT: Todo vehículo debe estar amparado por una póliza de responsabilidad civil. Se retendrá preventivamente el vehículo que circule sin la correspondiente póliza vigente hasta que se subsane la infracción.",
    "script": "Oficial, reconozco la importancia de la cobertura del seguro RCV para la protección de terceros. Le solicito respetuosamente me permita estacionar el vehículo en un lugar seguro y acceder a internet para renovar la póliza digitalmente en este momento para regularizar la circulación.",
    "legalBasis": "Artículos 58 y 181 numeral 4 de la Ley de Transporte Terrestre.",
    "consequence": "Recomendación para evitar inconvenientes en alcabalas:",
    "consequenceDetails": [
      "Mantén siempre vigente tu seguro RCV; hoy en día se emite y renueva digitalmente en pocos minutos.",
      "El oficial no puede enviarlo al estacionamiento si logras subsanar la póliza en el sitio.",
      "Evita pagar sobornos: comprar la póliza oficial es más económico y te protege legalmente ante accidentes."
    ],
    "diplomaticPhrase": "Funcionario, permítame unos minutos para gestionar la emisión digital de mi póliza RCV en mi teléfono y subsanar de inmediato el requisito legal.",
    "keywords": [
      "rcv",
      "seguro",
      "responsabilidad civil",
      "poliza",
      "seguro vencido",
      "sin seguro",
      "dano a terceros",
      "rcv digital",
      "181 seguro"
    ]
  },
  {
    "id": "revisar-maleta-baul-equipaje",
    "articleNumber": "193",
    "legalBody": "COPP (Art. 193) y Constitución (CRBV)",
    "category": "vehiculo",
    "tag": "alerta",
    "tagLabel": "ART. 193 COPP • BAÚL Y MALETEROS",
    "title": "¿Me pueden exigir abrir la maleta o baúl del carro y revisar bolsos interiores?",
    "officerClaim": "El oficial dice: 'Bájese del carro, abra la maleta y abra todas las maletas y bolsos que lleva adentro'.",
    "verdict": "INSPECCIÓN VISUAL PERMITIDA / PROHIBIDO REQUISAR SIN SOSPECHA",
    "verdictClass": "tag-alerta",
    "verdictExplanation": "El funcionario puede pedir la apertura de la maleta para una inspección visual general bajo sospecha fundada. Sin embargo, tú mismo debes manipular los objetos. No pueden desordenar, meter las manos en bolsos cerrados sin sospecha concreta de delito ni dañar pertenencias.",
    "quickAns": "Inspección visual permitida bajo motivos fundados. Tú mismo debes abrirla; no pueden revolver tus maletas sin sospecha.",
    "actualLaw": "Art. 193 COPP: La policía podrá inspeccionar el vehículo cuidando de no ocasionar daños innecesarios y en presencia obligatoria del conductor o poseedor legítimo.",
    "script": "Oficial, con gusto abro la maleta en mi presencia para que realice la inspección visual correspondiente. Le pido respetuosamente que me indique qué compartimento desea verificar para yo mismo mostrárselo, resguardando mis pertenencias personales como estipula el COPP.",
    "legalBasis": "Artículo 193 del Código Orgánico Procesal Penal y Art. 115 de la Constitución (CRBV).",
    "consequence": "Si el funcionario manipula a solas o revuelve pertenencias íntimas:",
    "consequenceDetails": [
      "Viola el protocolo de debida custodia y presunción de inocencia del Art. 49 CRBV.",
      "Existe riesgo de siembra irregular si la inspección no se realiza con la vista fija del ciudadano.",
      "El ciudadano tiene el derecho constitucional de registrar la inspección visual en video (Art. 20 Res. 109)."
    ],
    "diplomaticPhrase": "Funcionario, permanezco aquí a su lado durante la revisión de la maleta para colaborar y verificar conjuntamente que todo esté en perfecto orden.",
    "keywords": [
      "maleta",
      "baul",
      "abrir maleta",
      "revisar equipaje",
      "inspeccion carro",
      "bolsos en la maleta",
      "maletero",
      "sembrar"
    ]
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
let isCompendiumExpanded = false;
let recognition = null;
let isListening = false;
let deferredInstallPrompt = null;

// Escucha Inmediata de Instalación PWA (Nivel Raíz para no perder el evento en Chromium/Edge/Chrome)
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  console.log("Evento beforeinstallprompt interceptado exitosamente");
  updateInstallButtonState(false, true);
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (typeof trackCivicoEvent === "function") {
    trackCivicoEvent("pwa_installed");
  }
  showToast("✅ ¡CÍVICO se instaló con éxito en tu pantalla de inicio!");
  updateInstallButtonState(true);
});

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


// Función para Desplegar / Plegar el Compendio Completo de 26 Fichas
function toggleFullCompendium() {
  isCompendiumExpanded = !isCompendiumExpanded;
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("btnClearSearch");
  
  if (searchInput && searchInput.value.trim()) {
    searchInput.value = "";
  }
  if (clearBtn) {
    clearBtn.classList.add("hidden");
  }
  
  currentCategory = "todas";
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === "todas");
  });
  
  renderCards(LEGAL_DB, false);
  
  if (isCompendiumExpanded) {
    const cardEl = document.getElementById("compendiumToggleCard");
    if (cardEl) {
      setTimeout(() => {
        cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }
}

// Renderizado de Fichas con Verificador de Argumentos y Modo Inteligente Desplegable
function renderCards(cards, isSearchResult = false) {
  const container = document.getElementById("cardsContainer");
  const searchStatusBar = document.getElementById("searchStatusBar");
  const searchStatusLabel = document.getElementById("searchStatusLabel");
  const compendiumToggleCard = document.getElementById("compendiumToggleCard");
  const compendiumToggleText = document.getElementById("compendiumToggleText");
  const compendiumToggleSub = document.getElementById("compendiumToggleSub");
  
  if (!container) return;
  container.innerHTML = "";

  const searchInput = document.getElementById("searchInput");
  const currentQuery = searchInput ? searchInput.value.trim() : "";
  const isFiltering = isSearchResult || currentQuery.length > 0 || currentCategory !== "todas";

  if (isFiltering) {
    // Modo Búsqueda / Filtro Activo: Mostrar resultados inmediatamente
    container.style.display = "flex";
    if (compendiumToggleCard) compendiumToggleCard.classList.add("hidden");
    if (searchStatusBar) {
      searchStatusBar.classList.remove("hidden");
      if (currentQuery) {
        searchStatusLabel.innerHTML = `Resultados para <strong>"${currentQuery}"</strong> (${cards.length} ${cards.length === 1 ? 'tema' : 'temas'})`;
      } else {
        const catName = currentCategory === "pie" ? "A Pie (Peatón)" : "Vehículo / Moto";
        searchStatusLabel.innerHTML = `Temas en <strong>${catName}</strong> (${cards.length} ${cards.length === 1 ? 'tema' : 'temas'})`;
      }
    }
  } else {
    // Modo Inicial: Controlado por el acordeón del compendio
    if (searchStatusBar) searchStatusBar.classList.add("hidden");
    if (compendiumToggleCard) {
      compendiumToggleCard.classList.remove("hidden");
      if (!isCompendiumExpanded) {
        container.style.display = "none";
        compendiumToggleCard.classList.remove("expanded");
        if (compendiumToggleText) compendiumToggleText.textContent = "Desplegar";
        if (compendiumToggleSub) compendiumToggleSub.textContent = "26 situaciones de calle • Toca para desplegar";
        return;
      } else {
        container.style.display = "flex";
        compendiumToggleCard.classList.add("expanded");
        if (compendiumToggleText) compendiumToggleText.textContent = "Ocultar";
        if (compendiumToggleSub) compendiumToggleSub.textContent = "26 situaciones desplegadas • Toca para plegar";
      }
    }
  }
  
  if (cards.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 20px; background: var(--bg-card); border-radius: var(--card-radius); border: 1px solid var(--border-color); width: 100%;">
        <div style="margin-bottom: 12px; color: var(--accent-blue);">
          <svg class="icon icon-lg" viewBox="0 0 24 24" style="width: 38px; height: 38px;">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <h4 style="color: #fff; margin-bottom: 6px;">No encontramos esa palabra o artículo exacto</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px;">
          Prueba buscando por número (ej: <strong>193</strong>, <strong>48</strong>, <strong>181</strong>) o palabras del día a día como <strong>batea</strong>, <strong>celular</strong>, <strong>polarizado</strong> o <strong>comando</strong>.
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
  const clearBtn = document.getElementById("btnClearSearch");
  if (searchInput) {
    searchInput.value = query;
  }
  if (clearBtn) {
    clearBtn.classList.remove("hidden");
  }
  filterCardsByQuery(query);
  
  const searchStatusBar = document.getElementById("searchStatusBar");
  if (searchStatusBar) {
    setTimeout(() => {
      searchStatusBar.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}

function resetSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("btnClearSearch");
  if (clearBtn) clearBtn.classList.add("hidden");
  isCompendiumExpanded = false;
  setCategory("todas");
  const searchSection = document.querySelector(".search-section");
  if (searchSection) {
    searchSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function filterCardsByQuery(query) {
  const cleanQuery = normalizeText(query);
  const clearBtn = document.getElementById("btnClearSearch");
  if (clearBtn) {
    clearBtn.classList.toggle("hidden", cleanQuery.length === 0);
  }

  if (!cleanQuery) {
    if (currentCategory === "todas") {
      renderCards(LEGAL_DB, false);
    } else {
      const filtered = LEGAL_DB.filter(c => c.category === currentCategory || c.category === "todas");
      renderCards(filtered, true);
    }
    return;
  }

  // 1. Detección directa si la búsqueda es estrictamente el número de artículo o "art/articulo 193"
  const articleNumberMatch = cleanQuery.match(/\b(\d{1,3})\b/);
  const queryWords = cleanQuery.split(/\s+/).filter(t => t.length > 0);
  
  if (articleNumberMatch && queryWords.length <= 2 && queryWords.every(w => w === articleNumberMatch[1] || ["art", "articulo", "art."].includes(w))) {
    const num = articleNumberMatch[1];
    const directArticleMatch = LEGAL_DB.filter(card => card.articleNumber === num);
    if (directArticleMatch.length > 0) {
      renderCards(directArticleMatch, true);
      showToast(`Verificando Artículo ${num}`);
      return directArticleMatch;
    }
  }

  // 2. Búsqueda por términos y afirmaciones
  const queryTerms = queryWords.filter(t => t.length > 1);
  const termsToUse = queryTerms.length > 0 ? queryTerms : [cleanQuery];

  const scoredCards = LEGAL_DB.map(card => {
    let score = 0;
    const cardFullText = normalizeText(
      `${card.title} ${card.articleNumber} ${card.legalBody} ${card.officerClaim} ${card.verdictExplanation} ${card.quickAns} ${card.actualLaw} ${card.script} ${card.keywords.join(" ")}`
    );

    termsToUse.forEach(term => {
      if (card.articleNumber === term) score += 25;
      if (normalizeText(card.legalBody).includes(term)) score += 8;
      if (normalizeText(card.officerClaim).includes(term)) score += 12;
      if (card.keywords.some(k => normalizeText(k).includes(term))) score += 10;
      if (normalizeText(card.title).includes(term)) score += 8;
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
    if (cat === "todas") {
      renderCards(LEGAL_DB, false);
    } else {
      const filtered = LEGAL_DB.filter(c => c.category === cat || c.category === "todas");
      renderCards(filtered, true);
    }
  }
}

// Configurar Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("btnClearSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      if (clearBtn) {
        clearBtn.classList.toggle("hidden", val.length === 0);
      }
      filterCardsByQuery(val);
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

// Detección Inteligente del Navegador y Sistema Operativo
function detectCurrentBrowser() {
  const ua = navigator.userAgent || "";
  const isIos = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isEdgeOrBing = /EdgA|Edge|BingWeb|BING/i.test(ua);
  const isFirefox = /Firefox|FxiOS/i.test(ua);
  const isSamsung = /SamsungBrowser/i.test(ua);
  const isChrome = /Chrome|CriOS/i.test(ua) && !isEdgeOrBing && !isSamsung;
  const isSafari = isIos || (/Safari/i.test(ua) && !isChrome && !isFirefox && !isEdgeOrBing && !isSamsung);

  if (isSafari) return "safari";
  if (isEdgeOrBing) return "edge";
  if (isFirefox) return "firefox";
  if (isChrome || isSamsung) return "chrome";
  return "edge";
}

function selectBrowserGuide(browserKey) {
  const allGuides = ["edge", "chrome", "firefox", "safari"];
  allGuides.forEach(key => {
    const el = document.getElementById(`guide-${key}`);
    if (el) el.style.display = (key === browserKey) ? "block" : "none";
    
    const tabBtn = document.querySelector(`.btn-browser-tab[data-target-browser="${key}"]`);
    if (tabBtn) {
      if (key === browserKey) {
        tabBtn.classList.add("active");
      } else {
        tabBtn.classList.remove("active");
      }
    }
  });

  const names = {
    edge: "Bing / Microsoft Edge",
    chrome: "Google Chrome",
    firefox: "Mozilla Firefox",
    safari: "Safari (iPhone / iPad)"
  };
  const titleEl = document.getElementById("guideBrowserName");
  if (titleEl && names[browserKey]) {
    titleEl.textContent = `Paso a paso para ${names[browserKey]}:`;
  }
}

function setupPwaInstall() {
  // Verificar si ya se ejecuta como PWA standalone
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator.standalone === true);
  if (isStandalone) {
    updateInstallButtonState(true);
  } else if (deferredInstallPrompt) {
    updateInstallButtonState(false, true);
  }
}

function updateInstallButtonState(isInstalled, isPromptReady = false) {
  const btn = document.getElementById("btnInstallPwa");
  if (!btn) return;
  const title = btn.querySelector(".quick-action-title");
  const sub = btn.querySelector(".quick-action-sub");
  if (isInstalled) {
    if (title) title.textContent = "Acceso Directo Activo";
    if (sub) sub.textContent = "Instalada en tu móvil • 100% Offline";
  } else if (isPromptReady) {
    if (title) title.textContent = "Instalar CÍVICO en tu Pantalla";
    if (sub) sub.textContent = "Toca para agregar a tu móvil en 1 toque";
  }
}

function openInstallConsentModal() {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator.standalone === true);
  if (isStandalone) {
    showToast("✅ CÍVICO ya está instalada y activa en tu pantalla.");
    return;
  }

  trackCivicoEvent("pwa_consent_modal_open");
  const modal = document.getElementById("installConsentModal");
  if (!modal) return;

  const detected = detectCurrentBrowser();
  selectBrowserGuide(detected);

  const acceptBtnText = document.getElementById("btnAcceptInstallText");

  if (deferredInstallPrompt) {
    if (acceptBtnText) acceptBtnText.textContent = "Instalar en mi Pantalla Ahora";
  } else {
    if (detected === "safari") {
      if (acceptBtnText) acceptBtnText.textContent = "Entendido, ver pasos para Safari";
    } else if (detected === "edge") {
      if (acceptBtnText) acceptBtnText.textContent = "Entendido, ver pasos para Bing/Edge";
    } else if (detected === "firefox") {
      if (acceptBtnText) acceptBtnText.textContent = "Entendido, ver pasos para Firefox";
    } else {
      if (acceptBtnText) acceptBtnText.textContent = "Ver pasos para instalar";
    }
  }

  modal.classList.add("active");
}

function closeInstallConsentModal() {
  const modal = document.getElementById("installConsentModal");
  if (modal) modal.classList.remove("active");
}

function executePwaInstall() {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator.standalone === true);
  if (isStandalone) {
    closeInstallConsentModal();
    showToast("✅ CÍVICO ya está instalada en tu pantalla.");
    return;
  }

  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        trackCivicoEvent("pwa_install_accepted");
        showToast("✅ Creando acceso directo con el logo de CÍVICO...");
        closeInstallConsentModal();
      } else {
        trackCivicoEvent("pwa_install_declined");
        showToast("Instalación cancelada. Puedes añadirla en cualquier momento.");
      }
      deferredInstallPrompt = null;
    });
  } else {
    const detected = detectCurrentBrowser();
    trackCivicoEvent("pwa_manual_guide_shown", { browser: detected });
    
    // Resaltar visualmente la tarjeta de pasos dentro del modal
    const activeGuide = document.getElementById("browserInstallGuide");
    if (activeGuide) {
      activeGuide.classList.add("highlight-pulse");
      activeGuide.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setTimeout(() => activeGuide.classList.remove("highlight-pulse"), 1800);
    }
    
    if (detected === "safari") {
      showToast("Toca Compartir ⎋ y luego 'Añadir a pantalla de inicio'.");
    } else if (detected === "edge") {
      showToast("Toca el menú (⋯ o ☰) de Bing/Edge y elige 'Agregar al teléfono'.");
    } else if (detected === "firefox") {
      showToast("Toca los tres puntos (⋮) de Firefox y elige 'Instalar'.");
    } else {
      showToast("Toca los tres puntos (⋮) y elige 'Instalar aplicación'.");
    }
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
