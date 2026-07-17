"use strict";
/* ===================== EJE: GEOMETRÍA — 1° Medio ===================== */
/* Alineado al Programa de Estudio de Matemática 1° Medio (Mineduc, Decreto 614/2013):
   Unidad "Homotecia y sus aplicaciones" — homotecia, teorema de Tales, semejanza
   de figuras planas, teorema de Euclides y razones trigonométricas. */
const LECCIONES_GEOMETRIA = [
  {
    id:"g1", titulo:"Homotecia: concepto y propiedades",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Una homotecia es una transformación que, a partir de un punto fijo llamado centro (O) y un número k llamado factor (o razón de homotecia), transforma cada punto P en un punto P' ubicado sobre la misma recta que pasa por O y P, de modo que la distancia OP' es igual a k veces la distancia OP. Si el centro de la homotecia es el origen (0,0), entonces las coordenadas de la imagen se obtienen multiplicando cada coordenada de P por k: P'=(k·x, k·y)."},
      {t:"metodo", h:"Método para hallar la imagen de un punto (centro en el origen)", pasos:[
        "Identifica el factor k de la homotecia.",
        "Multiplica la coordenada x del punto original por k.",
        "Multiplica la coordenada y del punto original por k.",
        "El punto resultante (k·x, k·y) es la imagen P'.",
        "Interpreta el resultado: si |k|>1 la figura se amplía; si 0<|k|<1 se reduce; si k<0 la imagen queda del lado opuesto del centro (orientación invertida)."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Homotecia de centro O(0,0) y factor k=2 sobre A(3,4)", pasos:[
        "Aplico la fórmula: A' = (k·x, k·y) = (2·3, 2·4)",
        "A' = (6, 8)",
        "Como k=2 (|k|>1), la imagen quedó al doble de distancia del centro: la figura se amplía."
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Homotecia de centro O(0,0) y factor k=−1/2 sobre B(4,−6)", pasos:[
        "B' = (−1/2·4, −1/2·(−6))",
        "B' = (−2, 3)",
        "Como k es negativo, la imagen quedó al lado opuesto del centro respecto del punto original; y como |k|<1, la figura se redujo a la mitad."
      ]}
    ],
    estandar:[
      {p:"Con centro O(0,0) y factor k=3, ¿cuál es la imagen del punto (2,5)?", o:["(6,15)","(5,8)","(2,5)","(6,5)"], r:0, e:"Se multiplica cada coordenada por 3: (2×3, 5×3)=(6,15)."},
      {p:"Con centro O(0,0) y factor k=1/2, ¿cuál es la imagen del punto (8,4)?", o:["(4,2)","(16,8)","(8,2)","(4,4)"], r:0, e:"Se multiplica cada coordenada por 1/2: (8×1/2, 4×1/2)=(4,2)."},
      {p:"Con centro O(0,0) y factor k=−1, ¿cuál es la imagen del punto (5,−2)?", o:["(−5,2)","(5,2)","(−5,−2)","(5,−2)"], r:0, e:"Se multiplica cada coordenada por −1: (5×−1, −2×−1)=(−5,2). Es una inversión respecto del centro."},
      {p:"¿Qué significa que el factor k de una homotecia sea negativo?", o:["La imagen queda del lado opuesto del centro respecto del punto original","La imagen siempre se reduce","El centro se traslada","La figura no cambia de forma"], r:0, e:"El signo negativo invierte el sentido: la imagen queda al otro lado del centro."},
      {p:"Si |k| > 1 en una homotecia, la imagen resultante es:", o:["Más grande que la figura original (ampliada)","Más pequeña (reducida)","Del mismo tamaño","Depende del centro"], r:0, e:"Un factor con valor absoluto mayor que 1 amplía la figura."},
      {p:"Si 0 < |k| < 1 en una homotecia, la imagen resultante es:", o:["Más pequeña que la figura original (reducida)","Más grande (ampliada)","Del mismo tamaño","No se puede saber"], r:0, e:"Un factor entre 0 y 1 (en valor absoluto) reduce la figura."},
      {p:"Con centro O(0,0) y factor k=4, ¿cuál es la imagen del punto (1,1)?", o:["(4,4)","(1,4)","(4,1)","(5,5)"], r:0, e:"(1×4, 1×4)=(4,4)."},
      {p:"¿Qué punto de la figura original NO cambia de posición bajo una homotecia?", o:["El centro de la homotecia","El punto más alejado","El punto más cercano al eje X","Ninguno, todos se mueven"], r:0, e:"El centro O es un punto fijo: su imagen es él mismo, ya que la distancia desde el centro a sí mismo es siempre 0."}
    ],
    avanzado:[
      {p:"El punto (2,3) tiene como imagen (8,12) bajo una homotecia de centro O(0,0). ¿Cuál es el factor k? (escribe solo el número)", tipo:"numerico", r:"4",
        fb_ok:"Correcto: 8/2=4 y 12/3=4, el factor es k=4.",
        fb_no:"Divide una coordenada de la imagen por la coordenada original correspondiente: 8/2 o 12/3.",
        errores:{"6":"Revisa: 8÷2=4, no 6. El factor se obtiene dividiendo la coordenada de la imagen por la original.","2":"Ese sería el valor de la coordenada x original, no el factor. El factor es 8/2=4."}},
      {p:"Con centro O(0,0) y factor k=−2, ¿cuál es la imagen del punto (−3,5)?", o:["(6,−10)","(−6,10)","(6,10)","(−6,−10)"], r:0, e:"(−3×−2, 5×−2)=(6,−10)."},
      {p:"Una homotecia de factor k=1/3 se aplica a un segmento de 15 cm. ¿Cuánto mide el segmento imagen? (escribe solo el número, en cm)", tipo:"numerico", r:"5",
        fb_ok:"Correcto: 15×(1/3)=5 cm.",
        fb_no:"Multiplica la longitud original por el factor: 15×(1/3).",
        errores:{"45":"Revisa: para reducir con factor 1/3 se multiplica (no se divide al revés): 15×(1/3)=5, no 15×3.","3":"Ese es el denominador del factor, no la longitud resultante. Calcula 15×(1/3)=5."}},
      {p:"Un triángulo tiene un vértice en (4,6). Tras una homotecia de centro O(0,0), ese vértice queda en (2,3). ¿Cuál es el factor k?", o:["1/2","2","1/4","3/4"], r:0, e:"k = 2/4 = 1/2 (o 3/6=1/2, ambas coordenadas confirman el mismo factor)."}
    ]
  },
  {
    id:"g2", titulo:"Teorema de Tales",
    bloques:[
      {t:"concepto", h:"Concepto", p:"El Teorema de Tales establece que si dos o más rectas paralelas son cortadas por dos rectas transversales, los segmentos que se forman en una transversal son proporcionales a los segmentos correspondientes en la otra. Aplicado a un triángulo: si una recta es paralela a uno de sus lados y corta a los otros dos, divide a esos lados en segmentos proporcionales."},
      {t:"metodo", h:"Método para aplicar el teorema de Tales en un triángulo", pasos:[
        "Dibuja o identifica el triángulo ABC con una recta DE paralela al lado BC, donde D está en AB y E está en AC.",
        "Plantea la proporción: AD/DB = AE/EC (los segmentos que deja la paralela en un lado son proporcionales a los del otro lado).",
        "Sustituye los valores conocidos en la proporción.",
        "Despeja el segmento desconocido multiplicando en cruz."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Hallar AE conociendo AD=4, DB=6, EC=9", pasos:[
        "Planteo la proporción: AD/DB = AE/EC",
        "4/6 = AE/9",
        "Multiplico en cruz: 4×9 = 6×AE → 36 = 6×AE",
        "AE = 36/6 = 6"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Rectas paralelas cortadas por transversales", pasos:[
        "Tres rectas paralelas son cortadas por dos transversales. En la primera transversal los segmentos miden 3 y 5; en la segunda, el segmento correspondiente al de 3 mide 6.",
        "Planteo la proporción: 3/5 = 6/x",
        "3·x = 5·6 → 3x = 30 → x = 10"
      ]}
    ],
    estandar:[
      {p:"En un triángulo ABC, DE es paralela a BC. Si AD=3, DB=5, AE=6, ¿cuánto mide EC?", o:["10","8","9","12"], r:0, e:"3/5=6/EC → 3·EC=30 → EC=10."},
      {p:"En un triángulo ABC, DE paralela a BC. Si AD=2, DB=4, EC=8, ¿cuánto mide AE?", o:["4","6","8","2"], r:0, e:"2/4=AE/8 → 4·AE=16 → AE=4."},
      {p:"Dos transversales cortan tres rectas paralelas. En la primera los segmentos miden 4 y 6; en la segunda, el correspondiente al de 4 mide 10. ¿Cuánto mide el otro segmento?", o:["15","12","18","20"], r:0, e:"4/6=10/x → 4x=60 → x=15."},
      {p:"En un triángulo ABC, DE paralela a BC, con AD=6, AB=10 (AD+DB), AE=9. ¿Cuánto mide AC?", o:["15","12","18","20"], r:0, e:"DB=10−6=4. Proporción: 6/4=9/EC → EC=6. AC=AE+EC=9+6=15."},
      {p:"¿Qué condición es indispensable para aplicar el Teorema de Tales en un triángulo?", o:["Que la recta trazada sea paralela a uno de los lados","Que el triángulo sea equilátero","Que todos los ángulos sean rectos","Que los lados sean todos iguales"], r:0, e:"El teorema exige que la recta secante sea paralela al lado del triángulo para que se cumpla la proporcionalidad."},
      {p:"En un triángulo ABC, DE paralela a BC, con AD=5, DB=15, y BC=40. ¿Cuánto mide DE, sabiendo que DE/BC=AD/AB?", o:["10","8","12","20"], r:0, e:"AB=5+15=20. DE/40=5/20 → DE=40×(5/20)=10."},
      {p:"Si en un triángulo AD/DB = 2/3 y AE/EC también debe cumplir esa razón, y AE=8, ¿cuánto mide EC?", o:["12","10","14","16"], r:0, e:"2/3=8/EC → 2·EC=24 → EC=12."},
      {p:"El Teorema de Tales se puede explicar a partir de las propiedades de:", o:["La homotecia","La simetría axial","La rotación","El área de figuras"], r:0, e:"El Teorema de Tales se desarrolla a partir de las propiedades de la homotecia, como se vio en la lección anterior."}
    ],
    avanzado:[
      {p:"En un triángulo ABC, DE paralela a BC. AD=x, DB=x+2, AE=6, EC=10. Calcula x. (escribe solo el número)", tipo:"numerico", r:"3",
        fb_ok:"Correcto: x/(x+2)=6/10 → 10x=6x+12 → 4x=12 → x=3.",
        fb_no:"Plantea la proporción x/(x+2)=6/10 y resuelve la ecuación despejando x.",
        errores:{"2":"Revisa el planteamiento de la ecuación: 10x=6(x+2) → 10x=6x+12 → 4x=12 → x=3, no 2.","6":"Ese es el valor de AE, no de x. Resuelve la ecuación 10x=6x+12 para hallar x=3."}},
      {p:"Tres rectas paralelas son cortadas por dos transversales. En la primera, los segmentos consecutivos miden 5 y 8; el segmento total de la segunda transversal (correspondiente a la suma) mide 39. ¿Cuánto mide el segmento correspondiente al de 5?", o:["15","18","20","24"], r:0, e:"Proporción: 5/13 = x/39 (ya que 5+8=13) → 13x=195 → x=15."},
      {p:"En un triángulo ABC, DE paralela a BC. Si la razón AD/AB=2/5 y BC=25, ¿cuánto mide DE?", o:["10","12","15","8"], r:0, e:"DE/BC=AD/AB → DE/25=2/5 → DE=25×2/5=10."},
      {p:"Un terreno tiene la forma de un triángulo. Una cerca paralela a la base divide un lado en 8 m y 12 m (desde el vértice), y el segmento correspondiente en el otro lado mide 10 m desde el vértice. ¿Cuánto mide el segmento restante de ese lado?", o:["15 m","12 m","18 m","20 m"], r:0, e:"8/12=10/x → 8x=120 → x=15."}
    ]
  },
  {
    id:"g3", titulo:"Semejanza de figuras planas",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Dos figuras son semejantes cuando tienen exactamente la misma forma, aunque no necesariamente el mismo tamaño: sus ángulos correspondientes son iguales y sus lados correspondientes son proporcionales, es decir, mantienen la misma razón de semejanza k. Para triángulos existen tres criterios que permiten afirmar que dos triángulos son semejantes sin verificar todos sus elementos: AA (dos ángulos correspondientes iguales), LAL (dos lados proporcionales con el ángulo comprendido entre ellos igual) y LLL (los tres lados proporcionales)."},
      {t:"metodo", h:"Método para calcular un lado desconocido usando semejanza", pasos:[
        "Identifica los dos triángulos (o figuras) semejantes y ordena sus vértices correspondientes.",
        "Escribe la razón de semejanza usando un par de lados correspondientes conocidos.",
        "Plantea la proporción con el lado desconocido.",
        "Resuelve la ecuación multiplicando en cruz."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Triángulos semejantes por criterio AA", pasos:[
        "Triángulo ABC ~ triángulo DEF, con lados correspondientes AB=6, DE=9, y BC=8.",
        "Razón de semejanza: DE/AB = 9/6 = 1,5",
        "EF corresponde a BC: EF = BC × 1,5 = 8 × 1,5 = 12"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Aplicación a modelos a escala", pasos:[
        "Un plano a escala 1:200 tiene un pasillo dibujado que mide 3 cm.",
        "Como la escala es 1:200, cada cm del plano equivale a 200 cm reales.",
        "Medida real: 3 cm × 200 = 600 cm = 6 metros"
      ]}
    ],
    estandar:[
      {p:"Dos triángulos son semejantes si:", o:["Sus ángulos correspondientes son iguales y sus lados proporcionales","Todos sus lados son iguales","Tienen la misma área","Son ambos equiláteros"], r:0, e:"La semejanza exige ángulos iguales y lados en la misma proporción; no requiere que midan lo mismo."},
      {p:"El criterio de semejanza AA significa que basta con que:", o:["Dos ángulos correspondientes sean iguales","Los tres ángulos sean distintos","Un lado sea el doble del otro","Los tres lados sean iguales"], r:0, e:"Si dos ángulos correspondientes son iguales, el tercero también lo es (suman 180°), por lo tanto los triángulos son semejantes."},
      {p:"Triángulo ABC ~ triángulo DEF. Si AB=5, DE=15, y BC=7, ¿cuánto mide EF?", o:["21","12","10","15"], r:0, e:"Razón: 15/5=3. EF=BC×3=7×3=21."},
      {p:"Un mapa está a escala 1:500. Si una calle mide 4 cm en el mapa, ¿cuántos metros mide en la realidad?", o:["20 m","200 m","4 m","50 m"], r:0, e:"4 cm × 500 = 2.000 cm = 20 m."},
      {p:"En dos triángulos semejantes, si la razón de semejanza es 2 (el segundo es el doble del primero) y un lado del primero mide 9, ¿cuánto mide el lado correspondiente del segundo?", o:["18","4,5","11","7"], r:0, e:"9×2=18."},
      {p:"¿Cuál de estos criterios de semejanza de triángulos exige que el ángulo conocido esté ENTRE los dos lados proporcionales?", o:["LAL","AA","LLL","Ninguno de los anteriores"], r:0, e:"En el criterio LAL (Lado-Ángulo-Lado), el ángulo debe estar comprendido entre los dos lados que se comparan."},
      {p:"Dos polígonos semejantes tienen razón de semejanza 3/4. Si un lado del primero mide 12 cm, ¿cuánto mide el lado correspondiente del segundo?", o:["16 cm","9 cm","15 cm","10 cm"], r:0, e:"12 ÷ (3/4) = 12 × 4/3 = 16 cm."},
      {p:"El criterio LLL para semejanza de triángulos requiere que:", o:["Los tres pares de lados correspondientes sean proporcionales","Los tres ángulos sean iguales entre sí en un mismo triángulo","Solo un lado coincida","Dos ángulos sean rectos"], r:0, e:"LLL significa Lado-Lado-Lado: los tres lados correspondientes deben mantener la misma razón."}
    ],
    avanzado:[
      {p:"Triángulo ABC ~ triángulo DEF. AB=8, DE=12, BC=10, y EF=x. Calcula x. (escribe solo el número)", tipo:"numerico", r:"15",
        fb_ok:"Correcto: razón=12/8=1,5. EF=10×1,5=15.",
        fb_no:"Calcula primero la razón de semejanza (DE/AB) y luego multiplícala por BC.",
        errores:{"6.67":"Revisa: la razón es DE/AB=12/8=1,5 (no al revés), y luego se multiplica por BC: 10×1,5=15.","20":"Revisa el cálculo de la razón: 12/8=1,5, no 2. Luego 10×1,5=15."}},
      {p:"Un edificio proyecta una sombra de 12 m. Al mismo tiempo, un poste de 2 m de altura proyecta una sombra de 3 m. ¿Cuál es la altura del edificio? (los triángulos formados son semejantes)", o:["8 m","6 m","18 m","4 m"], r:0, e:"Proporción: altura_edificio/12 = 2/3 → altura=12×2/3=8 m."},
      {p:"Dos triángulos semejantes tienen razón de semejanza k=5/3. Si el perímetro del triángulo menor es 36 cm, ¿cuál es el perímetro del triángulo mayor?", o:["60 cm","48 cm","54 cm","72 cm"], r:0, e:"El perímetro escala con la misma razón que los lados: 36×5/3=60 cm."},
      {p:"Un modelo a escala 1:150 de un edificio mide 40 cm de altura. ¿Cuántos metros mide el edificio real?", o:["60 m","40 m","15 m","150 m"], r:0, e:"40 cm × 150 = 6.000 cm = 60 m."}
    ]
  },
  {
    id:"g4", titulo:"Teorema de Euclides",
    bloques:[
      {t:"concepto", h:"Concepto", p:"El Teorema de Euclides describe las relaciones métricas dentro de un triángulo rectángulo cuando se traza la altura (h) sobre la hipotenusa. Esta altura divide a la hipotenusa en dos segmentos, llamados proyecciones de los catetos (m y n), y forma dos triángulos más pequeños semejantes entre sí y semejantes al triángulo original. De esta semejanza se obtienen dos relaciones clave: cada cateto al cuadrado es igual al producto de la hipotenusa completa por la proyección de ese mismo cateto (b²=c·n, a²=c·m), y la altura al cuadrado es igual al producto de las dos proyecciones (h²=m·n)."},
      {t:"metodo", h:"Método para aplicar el teorema de Euclides", pasos:[
        "Identifica en el triángulo rectángulo la hipotenusa (c), la altura sobre la hipotenusa (h), y las proyecciones de los catetos sobre la hipotenusa (m y n, con m+n=c).",
        "Si buscas la altura, usa: h² = m·n, y luego saca raíz cuadrada.",
        "Si buscas un cateto, usa: (cateto)² = hipotenusa × proyección de ese cateto, y luego saca raíz cuadrada.",
        "Verifica que las proyecciones sumen exactamente la hipotenusa completa (m+n=c)."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Calcular la altura conociendo las proyecciones", pasos:[
        "Un triángulo rectángulo tiene proyecciones m=4 y n=9 sobre la hipotenusa.",
        "Aplico h² = m·n = 4×9 = 36",
        "h = √36 = 6"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Calcular un cateto conociendo la hipotenusa y su proyección", pasos:[
        "La hipotenusa mide c=25, y la proyección del cateto b sobre ella es n=9.",
        "Aplico b² = c·n = 25×9 = 225",
        "b = √225 = 15"
      ]}
    ],
    estandar:[
      {p:"En un triángulo rectángulo, las proyecciones de los catetos sobre la hipotenusa son m=3 y n=12. ¿Cuánto mide la altura sobre la hipotenusa?", o:["6","7,5","9","36"], r:0, e:"h²=3×12=36 → h=√36=6."},
      {p:"Las proyecciones son m=2 y n=8. ¿Cuánto mide la altura sobre la hipotenusa?", o:["4","5","16","10"], r:0, e:"h²=2×8=16 → h=√16=4."},
      {p:"La hipotenusa mide c=20 y la proyección de un cateto es n=5. ¿Cuánto mide ese cateto?", o:["10","15","25","100"], r:0, e:"cateto²=20×5=100 → cateto=√100=10."},
      {p:"La hipotenusa mide c=13 y la proyección de un cateto es n=4. ¿Cuánto mide ese cateto? (aproxima a un decimal)", o:["7,2","9","5,2","6,4"], r:0, e:"cateto²=13×4=52 → cateto=√52≈7,2."},
      {p:"¿Qué relación establece el teorema de Euclides entre la altura y las proyecciones de los catetos?", o:["h² = m·n","h = m+n","h² = m+n","h = m·n"], r:0, e:"La altura al cuadrado es igual al producto de las dos proyecciones: h²=m·n."},
      {p:"Si las proyecciones m y n de un triángulo rectángulo son iguales (m=n=5), ¿qué tipo de triángulo rectángulo es?", o:["Isósceles (rectángulo)","Escaleno","Equilátero","No existe con esas condiciones"], r:0, e:"Si las proyecciones son iguales, los catetos también son iguales entre sí, por lo tanto es un triángulo rectángulo isósceles."},
      {p:"En un triángulo rectángulo, m+n siempre es igual a:", o:["La hipotenusa completa","El doble de la altura","Un cateto","El área del triángulo"], r:0, e:"Las dos proyecciones m y n suman exactamente la longitud completa de la hipotenusa."},
      {p:"La hipotenusa mide 18 y una proyección mide 8. ¿Cuánto mide el cateto correspondiente a esa proyección? (aproxima a un decimal)", o:["12,0","10,0","14,4","9,5"], r:0, e:"cateto²=18×8=144 → cateto=√144=12."}
    ],
    avanzado:[
      {p:"Un triángulo rectángulo tiene hipotenusa c=25. Un cateto mide 15. ¿Cuánto mide la proyección de ese cateto sobre la hipotenusa? (escribe solo el número)", tipo:"numerico", r:"9",
        fb_ok:"Correcto: 15²=25·n → 225=25n → n=9.",
        fb_no:"Usa la relación cateto²=hipotenusa×proyección, y despeja la proyección dividiendo.",
        errores:{"10":"Revisa: 15²=225, y 225÷25=9, no 10.","20":"Ese valor no corresponde al despeje correcto: 225÷25=9. Recuerda elevar el cateto al cuadrado antes de dividir."}},
      {p:"En un triángulo rectángulo, la altura sobre la hipotenusa mide 12 y una de las proyecciones mide 9. ¿Cuánto mide la otra proyección?", o:["16","18","20","14"], r:0, e:"h²=m·n → 144=9·n → n=16."},
      {p:"Un triángulo rectángulo tiene catetos que miden 6 y 8, e hipotenusa 10. ¿Cuánto mide la proyección del cateto de 6 sobre la hipotenusa?", o:["3,6","4,8","5","6,4"], r:0, e:"6²=10·n → 36=10n → n=3,6."},
      {p:"Si la hipotenusa de un triángulo rectángulo mide 16 y las dos proyecciones son iguales, ¿cuánto mide la altura sobre la hipotenusa?", o:["8","4","16","64"], r:0, e:"Si son iguales, cada proyección mide 8. h²=8×8=64 → h=√64=8."}
    ]
  },
  {
    id:"g5", titulo:"Razones trigonométricas en el triángulo rectángulo",
    bloques:[
      {t:"concepto", h:"Concepto", p:"En un triángulo rectángulo, las razones trigonométricas relacionan un ángulo agudo con las medidas de los lados del triángulo. Para un ángulo α: el seno es la razón entre el cateto opuesto a α y la hipotenusa (sen α = opuesto/hipotenusa); el coseno es la razón entre el cateto adyacente a α y la hipotenusa (cos α = adyacente/hipotenusa); y la tangente es la razón entre el cateto opuesto y el cateto adyacente (tan α = opuesto/adyacente). Estas razones se mantienen constantes para un mismo ángulo, sin importar el tamaño del triángulo, precisamente porque todos los triángulos rectángulos con ese ángulo son semejantes entre sí."},
      {t:"metodo", h:"Método para calcular un lado usando razones trigonométricas", pasos:[
        "Identifica el ángulo conocido y cuáles lados corresponden al cateto opuesto, cateto adyacente e hipotenusa respecto de ese ángulo.",
        "Elige la razón trigonométrica que relacione el lado conocido con el lado que buscas.",
        "Plantea la ecuación con la razón (sen, cos o tan) y despeja el lado desconocido.",
        "Usa una calculadora para obtener el valor de la razón trigonométrica del ángulo, si es necesario."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Calcular un cateto conociendo el ángulo y la hipotenusa", pasos:[
        "Un triángulo rectángulo tiene un ángulo de 30° y una hipotenusa de 10 cm. Busco el cateto opuesto a ese ángulo.",
        "Uso sen(30°) = opuesto/hipotenusa → sen(30°) = opuesto/10",
        "sen(30°) = 0,5, entonces 0,5 = opuesto/10",
        "opuesto = 0,5 × 10 = 5 cm"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Calcular un ángulo conociendo dos catetos", pasos:[
        "Un triángulo rectángulo tiene cateto opuesto = 6 y cateto adyacente = 8, respecto de un ángulo α.",
        "Uso tan α = opuesto/adyacente = 6/8 = 0,75",
        "α = arctan(0,75) ≈ 36,87°"
      ]}
    ],
    estandar:[
      {p:"En un triángulo rectángulo, el seno de un ángulo α se define como:", o:["Cateto opuesto ÷ hipotenusa","Cateto adyacente ÷ hipotenusa","Cateto opuesto ÷ cateto adyacente","Hipotenusa ÷ cateto opuesto"], r:0, e:"sen α = cateto opuesto / hipotenusa, por definición."},
      {p:"En un triángulo rectángulo, el coseno de un ángulo α se define como:", o:["Cateto adyacente ÷ hipotenusa","Cateto opuesto ÷ hipotenusa","Cateto opuesto ÷ cateto adyacente","Hipotenusa ÷ cateto adyacente"], r:0, e:"cos α = cateto adyacente / hipotenusa, por definición."},
      {p:"En un triángulo rectángulo, la tangente de un ángulo α se define como:", o:["Cateto opuesto ÷ cateto adyacente","Cateto adyacente ÷ hipotenusa","Cateto opuesto ÷ hipotenusa","Hipotenusa ÷ cateto opuesto"], r:0, e:"tan α = cateto opuesto / cateto adyacente, por definición."},
      {p:"Un triángulo rectángulo tiene hipotenusa 10 y un ángulo de 30°. ¿Cuánto mide el cateto opuesto a ese ángulo? (usa sen 30°=0,5)", o:["5","8,66","3","7"], r:0, e:"sen(30°)=opuesto/10 → 0,5=opuesto/10 → opuesto=5."},
      {p:"Un triángulo rectángulo tiene hipotenusa 10 y un ángulo de 60°. ¿Cuánto mide el cateto adyacente a ese ángulo? (usa cos 60°=0,5)", o:["5","8,66","10","2"], r:0, e:"cos(60°)=adyacente/10 → 0,5=adyacente/10 → adyacente=5."},
      {p:"Un triángulo rectángulo tiene cateto opuesto=6 y cateto adyacente=6 respecto de un ángulo α. ¿Cuál es el valor de tan α?", o:["1","0,5","6","36"], r:0, e:"tan α=6/6=1 (esto corresponde a un ángulo de 45°)."},
      {p:"¿Por qué la razón trigonométrica de un ángulo no cambia aunque el triángulo rectángulo sea más grande o más chico?", o:["Porque todos los triángulos rectángulos con ese mismo ángulo son semejantes entre sí","Porque el área siempre es la misma","Porque los tres lados miden siempre lo mismo","Porque el ángulo recto cambia de valor"], r:0, e:"Al ser semejantes, mantienen la misma razón entre lados correspondientes, y esa razón es precisamente la razón trigonométrica."},
      {p:"Un triángulo rectángulo tiene cateto opuesto=9 y ángulo α con sen α=0,6. ¿Cuánto mide la hipotenusa?", o:["15","5,4","10,8","12"], r:0, e:"sen α=opuesto/hipotenusa → 0,6=9/hipotenusa → hipotenusa=9/0,6=15."}
    ],
    avanzado:[
      {p:"Un triángulo rectángulo tiene cateto opuesto=6 y cateto adyacente=8, respecto de un ángulo α. Calcula tan α. Escribe el resultado con coma decimal (ejemplo: 0,75)", tipo:"numerico", r:"0,75",
        fb_ok:"Correcto: tan α = opuesto/adyacente = 6/8 = 0,75.",
        fb_no:"Divide el cateto opuesto por el cateto adyacente: 6÷8.",
        errores:{"1,33":"Revisa el orden de la división: tan α=opuesto/adyacente=6/8=0,75, no adyacente/opuesto.","0,6":"Ese valor correspondería a otra razón. tan α=6/8=0,75."}},
      {p:"Una escalera de 5 m forma un ángulo de 53° con el suelo (usa sen 53°≈0,8). ¿A qué altura de la pared llega aproximadamente?", o:["4 m","3 m","2,5 m","5 m"], r:0, e:"sen(53°)=altura/5 → 0,8=altura/5 → altura=0,8×5=4 m."},
      {p:"Desde un punto en el suelo, a 20 m de la base de un edificio, se observa la parte superior con un ángulo de elevación cuya tangente es 1,5. ¿Cuál es la altura del edificio?", o:["30 m","13,3 m","21,5 m","18,5 m"], r:0, e:"tan α=altura/20 → 1,5=altura/20 → altura=1,5×20=30 m."},
      {p:"Un triángulo rectángulo tiene cateto opuesto=12 y cateto adyacente=5 respecto de un ángulo α. ¿Cuánto mide la hipotenusa? (usa el teorema de Pitágoras, ya que sen²α+cos²α=1 equivale a esto)", o:["13","15","17","10"], r:0, e:"Hipotenusa=√(12²+5²)=√(144+25)=√169=13."}
    ]
  }
];
