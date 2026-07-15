"use strict";
/* ===================== EJE: FUNCIONES — 1° Medio ===================== */
/* Alineado a las Bases Curriculares de Matemática (Mineduc) */
const LECCIONES_FUNCIONES = [
  {
    id:"f1", titulo:"¿Qué es una función?",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Una función es una relación entre dos variables en la que a cada valor de entrada (x) le corresponde exactamente un único valor de salida (y). Se escribe f(x), que se lee \"f de x\", y representa el valor que la función f le asigna a x."},
      {t:"metodo", h:"Método para evaluar una función en un valor dado", pasos:[
        "Identifica la regla de la función (la fórmula que la define).",
        "Sustituye la variable x por el valor dado, respetando su signo.",
        "Resuelve las operaciones respetando la prioridad: paréntesis, potencias, multiplicaciones/divisiones y luego sumas/restas.",
        "El resultado obtenido es el valor de la función en ese punto: f(valor)."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Evaluar f(x) = 2x + 3 en x = 5", pasos:[
        "Regla: f(x) = 2x + 3",
        "Sustituyo x por 5: f(5) = 2(5) + 3",
        "Resuelvo: f(5) = 10 + 3",
        "f(5) = 13"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Evaluar f(x) = x² − 4x + 1 en x = −2", pasos:[
        "Sustituyo: f(−2) = (−2)² − 4(−2) + 1",
        "Resuelvo la potencia y el producto: f(−2) = 4 + 8 + 1",
        "f(−2) = 13"
      ]},
      {t:"metodo", h:"¿Cómo saber si una relación es función?", pasos:[
        "Revisa los pares (x, y) de la relación.",
        "Si algún valor de x aparece dos veces con distinto valor de y, NO es función.",
        "Si cada x tiene un único y asociado, SÍ es función."
      ]},
      {t:"ejemplo", h:"Ejemplo 3 — ¿Es función?", pasos:[
        "Pares: (1,2), (2,4), (2,5)",
        "El valor x=2 aparece dos veces, con y=4 y también y=5",
        "Conclusión: NO es función, porque una misma entrada tiene dos salidas distintas"
      ]}
    ],
    estandar:[
      {p:"Si f(x) = 3x + 1, calcula f(2) (escribe solo el número)", tipo:"numerico", r:"7",
        fb_ok:"Sustituiste x por 2 y calculaste 3(2)+1=7 correctamente.",
        fb_no:"Sustituye x por 2 en la regla completa: 3(2)+1, resolviendo primero la multiplicación.",
        errores:{"6":"Multiplicaste 3×2=6, pero olvidaste sumar el +1 final de la regla.","5":"Parece que sumaste 3+2 en vez de multiplicar 3×2 y luego sumar 1.","8":"Revisa el orden: primero se multiplica (3×2=6) y luego se suma 1, no al revés."}},
      {p:"Si f(x) = 3x + 1, ¿cuál es f(0)?", o:["0","1","3","4"], r:1,
        fb:["3×0 es 0, pero falta sumar el +1 de la regla — la respuesta no es solo el resultado de la multiplicación.",
            "Correcto: 3(0)+1 = 0+1 = 1.",
            "Parece que solo consideraste el coeficiente 3, olvidando multiplicarlo por x=0.",
            "Revisa el cálculo: 3×0=0, luego +1=1. No corresponde sumar otro número."]},
      {p:"Si f(x) = 3x + 1, ¿cuál es f(−1)?", o:["−2","−4","2","4"], r:0,
        fb:["Correcto: 3(−1)+1 = −3+1 = −2.",
            "Pareces haber olvidado sumar el +1 después de calcular 3×(−1)=−3.",
            "Revisa el signo: 3×(−1) da un resultado negativo, no positivo.",
            "Revisa el signo del resultado: 3×(−1)+1 da un número negativo, no positivo."]},
      {p:"Si g(x) = x², calcula g(4) (escribe solo el número)", tipo:"numerico", r:"16",
        fb_ok:"4²=4×4=16, correcto.",
        fb_no:"Recuerda que x² significa x×x, no x×2.",
        errores:{"8":"Multiplicaste 4×2=8 en vez de elevar al cuadrado (4×4=16).","12":"Revisa: 4²=4×4=16, no corresponde a una suma ni a otra multiplicación."}},
      {p:"Si g(x) = x², ¿cuál es g(−3)?", o:["−9","9","6","−6"], r:1,
        fb:["Cuidado: al elevar un número negativo al cuadrado, el resultado siempre es positivo (negativo×negativo=positivo).",
            "Correcto: (−3)² = (−3)×(−3) = 9.",
            "Parece que multiplicaste −3×−2 o hiciste una operación distinta al cuadrado.",
            "Revisa el signo: el cuadrado de un número negativo siempre da un resultado positivo."]},
      {p:"Si h(x) = 5 (función constante), ¿cuál es h(100)?", o:["100","5","0","105"], r:1,
        fb:["Una función constante NO depende del valor de x: siempre entrega el mismo resultado, sin importar qué valor le des.",
            "Correcto: una función constante siempre entrega el mismo valor, en este caso 5.",
            "El resultado de una función constante no es 0; es el valor fijo que la define (5 en este caso).",
            "No se suma el valor de x al resultado; una función constante ignora completamente la entrada."]},
      {p:"¿Cuál de estos conjuntos de pares (x,y) SÍ representa una función?", o:["(1,2), (2,3), (3,4)","(1,2), (1,3), (2,4)","(2,2), (2,3), (2,4)","(1,1), (1,2), (1,3)"], r:0,
        fb:["Correcto: todos los valores de x son distintos, así que cada uno tiene un único y asociado.",
            "Revisa: el valor x=1 aparece dos veces con distintos y (2 y 3), eso rompe la definición de función.",
            "Revisa: el valor x=2 se repite tres veces con distintos valores de y, por lo tanto no es función.",
            "Revisa: el valor x=1 aparece tres veces con distintos y, por lo tanto no es función."]},
      {p:"Si f(x) = 2x − 5, ¿para qué valor de x se cumple que f(x) = 7?", o:["5","6","7","8"], r:1,
        fb:["Revisa el despeje: 2x=7+5=12, y 12÷2=6, no 5.",
            "Correcto: 2x=7+5=12, entonces x=12÷2=6.",
            "Parece que confundiste el resultado f(x)=7 con el valor de x. Hay que despejar x, no usar directamente el 7.",
            "Revisa la operación: 7+5=12, y 12÷2=6, no 8."]}
    ],
    avanzado:[
      {p:"Si f(x) = x² + 2x, calcula f(3) − f(1) (escribe solo el número)", tipo:"numerico", r:"12",
        fb_ok:"f(3)=9+6=15, f(1)=1+2=3, entonces 15−3=12.",
        fb_no:"Calcula f(3) y f(1) por separado, y luego resta los resultados.",
        errores:{"3":"Parece que solo calculaste f(1) o restaste mal. f(3)=15 y f(1)=3, entonces 15−3=12.","18":"Revisa: quizás sumaste f(3)+f(1) en vez de restar. f(3)−f(1)=15−3=12."}},
      {p:"Si f(x) = 2x + 1 y f(a) = 15, ¿cuál es el valor de a?", o:["6","7","8","5"], r:1,
        fb:["Revisa el despeje: 2a=15−1=14, y 14÷2=7, no 6.",
            "Correcto: 2a+1=15 → 2a=14 → a=7.",
            "Revisa la resta: 15−1=14, no 16 (que daría a=8).",
            "Parece que dividiste 15 entre 3 en vez de despejar correctamente la ecuación 2a+1=15."]},
      {p:"¿Cuál de las siguientes reglas NO representa una función de x?", o:["y = 2x + 3","y² = x","y = x² − 1","y = √x, con x ≥ 0"], r:1,
        fb:["Esta SÍ es función: cada valor de x tiene un único y asociado.",
            "Correcto: en y²=x, para un mismo x positivo hay dos valores posibles de y (uno positivo y uno negativo), por lo que no es función.",
            "Esta SÍ es función: cada x tiene un único resultado al elevarlo al cuadrado y restar 1.",
            "Esta SÍ es función: la raíz cuadrada con x≥0 entrega un único valor no negativo para cada x."]},
      {p:"Si f(x) = 3x − 2 y g(x) = x + 4, ¿cuál es el valor de f(g(2))?", o:["16","14","18","10"], r:0,
        fb:["Correcto: primero g(2)=2+4=6, luego f(6)=3(6)−2=16.",
            "Revisa: probablemente calculaste f(2) directamente en vez de evaluar primero g(2).",
            "Revisa el orden de operaciones en f(6)=3(6)−2: primero se multiplica, luego se resta.",
            "Parece que evaluaste solo f(2)=3(2)−2=4 sin aplicar primero g(2). El orden importa: primero g, después f."]}
    ]
  },
  {
    id:"f2", titulo:"Función lineal: y = mx",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Una función lineal tiene la forma y = mx. Su gráfica es siempre una línea recta que pasa por el origen (0,0). El valor m se llama pendiente y determina la inclinación de la recta."},
      {t:"metodo", h:"Método para graficar una función lineal", pasos:[
        "Construye una tabla de valores: elige al menos 3 valores de x, incluyendo el 0.",
        "Calcula el valor de y correspondiente para cada x, usando y = mx.",
        "Ubica cada par (x,y) como un punto en el plano cartesiano.",
        "Traza una línea recta que una todos los puntos."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Graficar y = 2x", pasos:[
        "Tabla: x=−1 → y=−2  |  x=0 → y=0  |  x=1 → y=2  |  x=2 → y=4",
        "Puntos: (−1,−2), (0,0), (1,2), (2,4)",
        "Al unir los puntos se obtiene una recta creciente que pasa por el origen"
      ]},
      {t:"metodo", h:"Método para encontrar la ecuación conociendo un punto", pasos:[
        "Como y = mx, sustituye el punto conocido (x,y) en la ecuación.",
        "Despeja m dividiendo ambos lados por x.",
        "Escribe la ecuación final reemplazando m."
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Una función lineal pasa por (3,12)", pasos:[
        "Sustituyo en y = mx: 12 = m(3)",
        "Despejo: m = 12/3 = 4",
        "Ecuación: y = 4x"
      ]}
    ],
    estandar:[
      {p:"En y = 5x, si x = 3, ¿cuál es y?", o:["8","15","20","10"], r:1, e:"y = 5(3) = 15."},
      {p:"En y = 5x, si x = −2, ¿cuál es y?", o:["−10","10","−7","3"], r:0, e:"y = 5(−2) = −10."},
      {p:"¿Cuál es la pendiente de y = 7x?", o:["7","x","1","0"], r:0, e:"En y=mx, el número que acompaña a x es la pendiente: 7."},
      {p:"Una función lineal pasa por (2,10). ¿Cuál es su ecuación?", o:["y=5x","y=8x","y=10x","y=2x"], r:0, e:"m=10/2=5, entonces y=5x."},
      {p:"Una función lineal pasa por (4,−8). ¿Cuál es su pendiente?", o:["−2","−4","2","4"], r:0, e:"m=−8/4=−2."},
      {p:"¿Por qué punto pasa siempre la gráfica de y = mx?", o:["(0,0)","(1,1)","(m,0)","(0,m)"], r:0, e:"Al ser x=0, y=m(0)=0 siempre, por lo tanto siempre pasa por el origen."},
      {p:"Si y = −3x, ¿cuál es y cuando x = 5?", o:["−15","15","−8","8"], r:0, e:"y=−3(5)=−15."},
      {p:"Una función lineal tiene la tabla: x=1→y=6; x=2→y=12. ¿Cuál es su ecuación?", o:["y=6x","y=3x","y=12x","y=x+5"], r:0, e:"m=6/1=6 (se confirma con x=2: 6×2=12), entonces y=6x."}
    ],
    avanzado:[
      {p:"Una función lineal pasa por (−2,10). ¿Cuál es su ecuación?", o:["y=−5x","y=5x","y=−2x","y=2x"], r:0, e:"m=10/(−2)=−5, entonces y=−5x."},
      {p:"Una función y=mx pasa por (2,4). ¿Cuál es el valor de y cuando x=6?", o:["12","8","10","14"], r:0, e:"m=4/2=2 → y=2x. En x=6: y=2(6)=12."},
      {p:"¿Cuál de estos puntos NO pertenece a la función y = 4x?", o:["(3,12)","(−1,−4)","(2,9)","(0,0)"], r:2, e:"4×2=8, no 9, por lo tanto (2,9) no pertenece a esa función."},
      {p:"Las funciones y=3x e y=−2x, ¿en qué punto se cruzan?", o:["(0,0)","(1,1)","(3,−2)","(1,3)"], r:0, e:"Toda función y=mx pasa por el origen, por lo que ambas se cruzan en (0,0)."}
    ]
  },
  {
    id:"f3", titulo:"La pendiente: cómo calcularla e interpretarla",
    bloques:[
      {t:"concepto", h:"Concepto", p:"La pendiente (m) mide qué tan inclinada está una recta y cómo cambia y respecto a x. Se calcula como la razón entre la diferencia de las coordenadas y y la diferencia de las coordenadas x de dos puntos de la recta."},
      {t:"metodo", h:"Método para calcular la pendiente entre dos puntos", pasos:[
        "Identifica dos puntos de la recta: (x₁,y₁) y (x₂,y₂).",
        "Calcula la diferencia de las coordenadas y: y₂ − y₁.",
        "Calcula la diferencia de las coordenadas x: x₂ − x₁.",
        "Divide: m = (y₂ − y₁) / (x₂ − x₁).",
        "Interpreta el signo: si m>0 la función crece; si m<0 decrece; si m=0 es horizontal (constante)."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Pendiente entre (1,3) y (4,15)", pasos:[
        "y₂−y₁ = 15−3 = 12",
        "x₂−x₁ = 4−1 = 3",
        "m = 12/3 = 4"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Pendiente desde una tabla", pasos:[
        "Tabla: x: 0,1,2,3  →  y: 5,8,11,14",
        "Cada vez que x aumenta en 1, y aumenta en 3",
        "Esa diferencia constante ES la pendiente: m = 3"
      ]}
    ],
    estandar:[
      {p:"Calcula la pendiente entre (2,4) y (5,13)", o:["2","3","4","5"], r:1, e:"(13−4)/(5−2)=9/3=3."},
      {p:"Calcula la pendiente entre (0,0) y (6,18)", o:["2","3","6","18"], r:1, e:"(18−0)/(6−0)=18/6=3."},
      {p:"Calcula la pendiente entre (1,10) y (4,1)", o:["−3","3","−9","9"], r:0, e:"(1−10)/(4−1)=−9/3=−3."},
      {p:"Si una función tiene pendiente positiva, su gráfica:", o:["Sube de izquierda a derecha","Baja de izquierda a derecha","Es horizontal","Es vertical"], r:0, e:"Pendiente positiva significa que y aumenta cuando x aumenta."},
      {p:"Si una función tiene pendiente 0, su gráfica es:", o:["Horizontal","Vertical","Diagonal ascendente","Diagonal descendente"], r:0, e:"Pendiente 0 significa que y no cambia: una recta horizontal."},
      {p:"En la tabla x: 0,1,2,3 → y: 2,5,8,11, ¿cuál es la pendiente?", o:["2","3","4","5"], r:1, e:"y aumenta 3 cada vez que x aumenta 1."},
      {p:"Calcula la pendiente entre (−2,−3) y (2,5)", o:["1","2","3","4"], r:1, e:"(5−(−3))/(2−(−2))=8/4=2."},
      {p:"Una pendiente de −5 significa que:", o:["Por cada unidad que x aumenta, y disminuye 5","Por cada unidad que x aumenta, y aumenta 5","La función es constante","La función no existe"], r:0, e:"El signo negativo indica que y disminuye cuando x aumenta."}
    ],
    avanzado:[
      {p:"Los puntos (1,4), (3,10) y (6,k) pertenecen a la misma función afín (pendiente constante). ¿Cuál es el valor de k?", o:["19","20","22","25"], r:0, e:"m=(10−4)/(3−1)=3. Desde (3,10) hasta x=6 hay 3 unidades más: k=10+3(3)=19."},
      {p:"La pendiente entre (a,3) y (5,11) es 4. ¿Cuál es el valor de a?", o:["3","4","5","6"], r:0, e:"(11−3)/(5−a)=4 → 8/(5−a)=4 → 5−a=2 → a=3."},
      {p:"Una función pasa por (2,7) y tiene pendiente −1. ¿Cuál es el valor de y cuando x=6?", o:["3","4","5","11"], r:0, e:"y = 7 + (−1)(6−2) = 7−4 = 3."},
      {p:"¿Cuál par de puntos tiene la pendiente MÁS inclinada (mayor valor absoluto)?", o:["(0,0) y (1,10)","(0,0) y (1,2)","(0,0) y (2,1)","(0,0) y (5,5)"], r:0, e:"Pendientes: 10, 2, 0.5 y 1 respectivamente. La mayor es 10."}
    ]
  },
  {
    id:"f4", titulo:"Función afín: y = mx + n",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Una función afín tiene la forma y = mx + n. A diferencia de la función lineal, no pasa necesariamente por el origen: el valor n (coeficiente de posición) indica el punto exacto donde la recta corta al eje Y, es decir, el valor de y cuando x=0."},
      {t:"metodo", h:"Método para encontrar la ecuación conociendo dos puntos", pasos:[
        "Calcula la pendiente con los dos puntos: m = (y₂−y₁)/(x₂−x₁).",
        "Sustituye el valor de m y uno de los puntos (x,y) en y = mx + n.",
        "Despeja n.",
        "Escribe la ecuación final con los valores de m y n encontrados."
      ]},
      {t:"ejemplo", h:"Ejemplo — Puntos (1,5) y (3,13)", pasos:[
        "m = (13−5)/(3−1) = 8/2 = 4",
        "Sustituyo (1,5) en y=mx+n: 5 = 4(1) + n",
        "Despejo: n = 5−4 = 1",
        "Ecuación final: y = 4x + 1"
      ]}
    ],
    estandar:[
      {p:"En y = 2x + 3, ¿cuál es y si x = 0?", o:["0","2","3","5"], r:2, e:"y=2(0)+3=3. El coeficiente de posición es el valor cuando x=0."},
      {p:"En y = 2x + 3, ¿cuál es y si x = 4?", o:["8","9","11","14"], r:2, e:"y=2(4)+3=8+3=11."},
      {p:"¿Cuál es el coeficiente de posición de y = −5x + 7?", o:["−5","5","7","−7"], r:2, e:"El coeficiente de posición es el término independiente: 7."},
      {p:"Una función afín pasa por (0,4) y tiene pendiente 2. ¿Cuál es su ecuación?", o:["y=2x+4","y=4x+2","y=2x−4","y=4x−2"], r:0, e:"Como pasa por (0,4), n=4 directamente. Ecuación: y=2x+4."},
      {p:"Encuentra la ecuación de la función afín que pasa por (2,7) y (4,13)", o:["y=3x+1","y=2x+3","y=3x+2","y=2x+1"], r:0, e:"m=(13−7)/(4−2)=3. Con (2,7): 7=3(2)+n → n=1. Ecuación: y=3x+1."},
      {p:"Encuentra la ecuación que pasa por (0,−2) y (3,4)", o:["y=2x−2","y=2x+2","y=−2x−2","y=3x−2"], r:0, e:"m=(4−(−2))/3=2. Como pasa por (0,−2), n=−2. Ecuación: y=2x−2."},
      {p:"¿Cuál de estas funciones NO es afín?", o:["y=3x+2","y=x−5","y=x²+1","y=−4x"], r:2, e:"y=x²+1 tiene un término cuadrático, no es lineal ni afín."},
      {p:"La gráfica de y = mx + n corta al eje Y en el punto:", o:["(0,n)","(n,0)","(0,m)","(m,0)"], r:0, e:"Cuando x=0, y=n, por lo que el corte con el eje Y es siempre (0,n)."}
    ],
    avanzado:[
      {p:"Una función afín pasa por (1,6) y (5,18). ¿Cuál es el valor de y cuando x=10?", o:["33","30","36","28"], r:0, e:"m=(18−6)/(5−1)=3. Con (1,6): 6=3(1)+n → n=3. Ecuación: y=3x+3. En x=10: y=33."},
      {p:"Las funciones y=2x+1 e y=−x+7, ¿en qué punto se cruzan?", o:["(2,5)","(1,3)","(3,7)","(0,1)"], r:0, e:"Igualando: 2x+1=−x+7 → 3x=6 → x=2. Luego y=2(2)+1=5. Punto (2,5)."},
      {p:"Una función afín tiene coeficiente de posición 5 y pasa por (2,13). ¿Cuál es su pendiente?", o:["4","3","5","6"], r:0, e:"13=m(2)+5 → 8=2m → m=4."},
      {p:"¿Cuál de estas rectas es PARALELA a y = 3x + 2 (misma pendiente)?", o:["y=3x−7","y=−3x+2","y=x+3","y=2x+3"], r:0, e:"Dos rectas son paralelas si tienen la misma pendiente. y=3x−7 también tiene pendiente 3."}
    ]
  },
  {
    id:"f5", titulo:"Proporcionalidad directa e inversa",
    bloques:[
      {t:"concepto", h:"Concepto", p:"En la proporcionalidad directa (y = kx), la razón y/x es siempre la misma constante k. En la proporcionalidad inversa (y = k/x), es el producto x·y el que se mantiene constante. Reconocer cuál aplica en un problema es el primer paso para resolverlo."},
      {t:"metodo", h:"Método para proporcionalidad directa", pasos:[
        "Verifica que la razón y/x sea constante entre los datos conocidos.",
        "Calcula la constante k = y/x usando un par de datos conocido.",
        "Usa y = kx para encontrar el valor desconocido."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Proporcionalidad directa", pasos:[
        "3 cuadernos cuestan $2.400. ¿Cuánto cuestan 5 cuadernos?",
        "k = 2.400/3 = 800 (precio por cuaderno)",
        "y = 800 × 5 = 4.000",
        "Respuesta: $4.000"
      ]},
      {t:"metodo", h:"Método para proporcionalidad inversa", pasos:[
        "Verifica que el producto x·y sea constante entre los datos conocidos.",
        "Calcula la constante k = x·y usando un par de datos conocido.",
        "Usa y = k/x para encontrar el valor desconocido."
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Proporcionalidad inversa", pasos:[
        "4 obreros terminan una obra en 12 días. ¿Cuántos días demorarían 6 obreros?",
        "k = 4 × 12 = 48",
        "días = 48/6 = 8",
        "Respuesta: 8 días"
      ]}
    ],
    estandar:[
      {p:"Si y = kx, y cuando x=4, y=20, ¿cuál es k?", o:["4","5","16","24"], r:1, e:"k=20/4=5."},
      {p:"Con k=5 (proporcionalidad directa), ¿cuál es y cuando x=7?", o:["12","30","35","40"], r:2, e:"y=5×7=35."},
      {p:"2 kg de manzanas cuestan $1.600. ¿Cuánto cuestan 5 kg? (directa)", o:["$3.200","$4.000","$8.000","$1.600"], r:1, e:"k=1.600/2=800 por kg. y=800×5=$4.000."},
      {p:"En proporcionalidad inversa, si x=3, y=8, ¿cuál es la constante k?", o:["11","24","5","3"], r:1, e:"k=x·y=3×8=24."},
      {p:"Con k=24 (proporcionalidad inversa), ¿cuál es y cuando x=6?", o:["4","6","18","30"], r:0, e:"y=24/6=4."},
      {p:"¿Cuál situación representa proporcionalidad inversa?", o:["Velocidad y tiempo para recorrer una distancia fija","Cantidad de pan y su precio total","Horas trabajadas y sueldo","Litros de bencina y kilómetros recorridos"], r:0, e:"A mayor velocidad, menor tiempo (para una distancia fija): son inversamente proporcionales."},
      {p:"¿Cuál situación representa proporcionalidad directa?", o:["Cantidad de trabajadores y días para terminar una obra","Cantidad de entradas al cine y el costo total","Velocidad y tiempo de un viaje","Número de grifos abiertos y tiempo en llenar un estanque"], r:1, e:"A más entradas, el costo aumenta en la misma proporción."},
      {p:"6 obreros hacen un trabajo en 10 días. ¿Cuántos obreros se necesitan para hacerlo en 4 días?", o:["15","12","10","20"], r:0, e:"k=6×10=60. obreros=60/4=15."}
    ],
    avanzado:[
      {p:"y es directamente proporcional a x. Cuando x=5, y=45. ¿Cuál es x cuando y=81?", o:["9","8","7","10"], r:0, e:"k=45/5=9. x=81/9=9."},
      {p:"y es inversamente proporcional a x. Cuando x=10, y=6. ¿Cuál es x cuando y=15?", o:["4","5","6","3"], r:0, e:"k=10×6=60. x=60/15=4."},
      {p:"Un depósito se llena en 5 horas con 3 llaves abiertas. ¿Cuántas horas demorará con 5 llaves?", o:["3","2","4","2,5"], r:0, e:"k=3×5=15. horas=15/5=3."},
      {p:"En un mapa, 2 cm representan 50 km reales. ¿Cuántos cm representan 175 km reales?", o:["7","6","8","5"], r:0, e:"k=50/2=25 km por cm. cm=175/25=7."}
    ]
  },
  {
    id:"f6", titulo:"Resolver problemas aplicados con funciones",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Modelar un problema real significa traducirlo a una función matemática. La clave está en identificar si existe un valor fijo inicial (n) además de una tasa de cambio (m): si lo hay, es una función afín (y=mx+n); si no, es lineal (y=mx)."},
      {t:"metodo", h:"Método para modelar un problema con una función", pasos:[
        "Identifica las variables: ¿qué cantidad depende de qué otra?",
        "Busca un valor fijo/inicial en el enunciado (cargo fijo, monto inicial, etc.) — ese será n.",
        "Busca la tasa de cambio (costo por unidad, velocidad, etc.) — esa será m.",
        "Escribe la ecuación y = mx + n (o y = mx si no hay valor fijo).",
        "Usa la ecuación para responder la pregunta, evaluando o despejando según corresponda."
      ]},
      {t:"ejemplo", h:"Ejemplo — Tarifa de un taxi", pasos:[
        "Un taxi cobra $600 de bajada de bandera más $500 por km recorrido",
        "Variable fija: n=600 (bajada de bandera)",
        "Tasa de cambio: m=500 (por km)",
        "Ecuación: y = 500x + 600",
        "Para 8 km: y = 500(8)+600 = 4.000+600 = $4.600"
      ]}
    ],
    estandar:[
      {p:"Un plan de celular cobra $8.000 fijos más $50 por minuto usado. ¿Cuál es la ecuación del costo total y según minutos x?", o:["y=50x+8000","y=8000x+50","y=50x","y=8000x"], r:0, e:"El cargo fijo es n=8000, la tasa por minuto es m=50."},
      {p:"Con la ecuación anterior, ¿cuánto cuesta usar 40 minutos?", o:["$10.000","$8.050","$9.500","$10.050"], r:0, e:"y=50(40)+8000=2000+8000=$10.000."},
      {p:"Un estanque tiene 200 litros y se llena a 15 litros por minuto. ¿Cuál es la ecuación del volumen y según minutos x?", o:["y=15x+200","y=200x+15","y=15x","y=200x"], r:0, e:"Valor inicial n=200, tasa m=15."},
      {p:"Con la ecuación anterior, ¿cuántos litros hay después de 10 minutos?", o:["350","200","150","500"], r:0, e:"y=15(10)+200=150+200=350."},
      {p:"Un arriendo de auto cuesta $20.000 fijos más $300 por km. ¿Cuánto cuesta recorrer 100 km?", o:["$50.000","$30.000","$20.300","$23.000"], r:0, e:"y=300(100)+20.000=30.000+20.000=$50.000."},
      {p:"Un servicio de streaming NO cobra cargo fijo, solo $990 por película. ¿Es lineal o afín?", o:["Lineal (y=mx)","Afín con n distinto de 0","Ninguna de las anteriores","No se puede saber"], r:0, e:"Al no haber cargo fijo (n=0), la función es lineal: y=990x."},
      {p:"Un plomero cobra $15.000 por visita más $8.000 por hora. Si trabajó 3 horas, ¿cuánto cobra?", o:["$39.000","$24.000","$45.000","$23.000"], r:0, e:"y=8.000(3)+15.000=24.000+15.000=$39.000."},
      {p:"Si y=200x es el costo de x boletos de bus, ¿cuánto cuestan 12 boletos?", o:["$2.000","$2.400","$1.800","$2.200"], r:1, e:"y=200(12)=$2.400."}
    ],
    avanzado:[
      {p:"Plan A: $10.000 fijos + $30/min. Plan B: $40/min sin cargo fijo. ¿Desde cuántos minutos el Plan B es más caro?", o:["Más de 1.000 minutos","Más de 100 minutos","Más de 500 minutos","Nunca es más caro"], r:0, e:"10.000+30x<40x → 10.000<10x → x>1.000."},
      {p:"Una fotocopiadora cobra $50 por copia hasta 100 copias, y $40 por cada copia adicional desde ahí. ¿Cuánto cuestan 150 copias?", o:["$7.000","$6.500","$7.500","$8.000"], r:0, e:"100×50=5.000, más 50 copias adicionales×40=2.000. Total: $7.000."},
      {p:"Plomero A: $20.000 fijo + $5.000/hora. Plomero B: $35.000 fijo + $2.000/hora. ¿En cuántas horas cobran lo mismo?", o:["5 horas","4 horas","6 horas","3 horas"], r:0, e:"20.000+5.000h=35.000+2.000h → 3.000h=15.000 → h=5."},
      {p:"Una empresa modela sus ganancias con y=1.200x−30.000 (x=unidades vendidas). ¿Desde cuántas unidades no tiene pérdidas (y≥0)?", o:["25 unidades","20 unidades","30 unidades","15 unidades"], r:0, e:"1.200x≥30.000 → x≥25."}
    ]
  }
];
