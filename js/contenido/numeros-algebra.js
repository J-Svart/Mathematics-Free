"use strict";
/* ===================== EJE: NÚMEROS Y ÁLGEBRA — 1° Medio ===================== */
/* Alineado a las Bases Curriculares de Matemática (Mineduc) */
const LECCIONES_NUMEROS = [
  {
    id:"na1", titulo:"Potencias de exponente entero",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Una potencia aⁿ representa multiplicar la base a por sí misma n veces cuando el exponente es positivo. Cuando el exponente es 0 (con base distinta de 0), el resultado es siempre 1. Cuando el exponente es negativo, la potencia equivale al recíproco de la potencia con exponente positivo."},
      {t:"metodo", h:"Método para calcular y simplificar potencias", pasos:[
        "Si el exponente es positivo, multiplica la base por sí misma tantas veces como indique el exponente.",
        "Si el exponente es 0, el resultado es 1 (siempre que la base no sea 0).",
        "Si el exponente es negativo, calcula el recíproco: a⁻ⁿ = 1/aⁿ.",
        "Al multiplicar potencias de igual base, suma los exponentes: aᵐ·aⁿ = aᵐ⁺ⁿ.",
        "Al dividir potencias de igual base, resta los exponentes: aᵐ÷aⁿ = aᵐ⁻ⁿ.",
        "Una potencia elevada a otra potencia: multiplica los exponentes: (aᵐ)ⁿ = aᵐ·ⁿ."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Calcular 2⁻³", pasos:[
        "2⁻³ = 1/2³",
        "2³ = 8",
        "2⁻³ = 1/8"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Simplificar 3⁴ · 3⁻²", pasos:[
        "Se suman los exponentes: 3^(4+(−2))",
        "3^(4−2) = 3²",
        "3² = 9"
      ]},
      {t:"ejemplo", h:"Ejemplo 3 — Simplificar (5²)³", pasos:[
        "Se multiplican los exponentes: 5^(2×3)",
        "5⁶ = 15.625"
      ]}
    ],
    estandar:[
      {p:"Calcula 2⁴ (escribe solo el número)", tipo:"numerico", r:"16",
        fb_ok:"2×2×2×2=16, correcto.",
        fb_no:"Multiplica la base (2) por sí misma tantas veces como indique el exponente (4 veces), no multipliques 2×4.",
        errores:{"8":"Calculaste 2×4=8, pero un exponente indica multiplicación repetida de la base, no una multiplicación directa por el exponente.","6":"Parece que sumaste 2+2+2 tres veces. Recuerda: son 4 factores de 2 multiplicados entre sí: 2×2×2×2."}},
      {p:"Calcula 5⁰", o:["0","1","5","No está definido"], r:1,
        fb:["Cualquier número (distinto de 0) elevado a 0 no da 0, da 1.",
            "Correcto: cualquier número distinto de 0 elevado a 0 es igual a 1.",
            "5⁰ no es lo mismo que 5¹. El exponente 0 siempre da 1, sin importar la base.",
            "5⁰ sí está definido: es igual a 1, por la propiedad de las potencias con exponente 0."]},
      {p:"Calcula 3⁻²", o:["1/9","−9","9","−1/9"], r:0,
        fb:["Correcto: 3⁻²=1/3²=1/9.",
            "Un exponente negativo no vuelve negativo el resultado; indica un recíproco (1 sobre la potencia positiva).",
            "Revisa: el exponente negativo no significa multiplicar por −1, sino calcular el recíproco: 1/3².",
            "El resultado de una potencia con base positiva nunca es negativo, sin importar el signo del exponente."]},
      {p:"Simplifica 2³·2²  (escribe el resultado final, solo el número)", tipo:"numerico", r:"32",
        fb_ok:"Correcto: se suman los exponentes (3+2=5), y 2⁵=32.",
        fb_no:"Al multiplicar potencias de igual base, se suman los exponentes: 2^(3+2)=2⁵, y luego se calcula esa potencia.",
        errores:{"64":"Revisa: no se multiplican los exponentes en este caso (eso sería para una potencia de potencia), se suman: 3+2=5.","20":"Parece que multiplicaste las bases (2×... ) de forma distinta. Recuerda: 2³·2²=2^(3+2)=2⁵=32."}},
      {p:"Simplifica 5⁶÷5⁴", o:["5²=25","5¹⁰","5^1,5","25²"], r:0,
        fb:["Correcto: al dividir potencias de igual base, se restan los exponentes: 6−4=2 → 5²=25.",
            "Revisa: al dividir NO se suman los exponentes, se restan: 6−4=2, no 6+4=10.",
            "Los exponentes al dividir potencias de igual base se restan (números enteros), no se dividen entre sí.",
            "El resultado correcto es 5²=25, no 25² — revisa qué número queda como base."]},
      {p:"Simplifica (2²)³", o:["64","32","12","8"], r:0,
        fb:["Correcto: al elevar una potencia a otra potencia, se multiplican los exponentes: 2×3=6 → 2⁶=64.",
            "Revisa: en (2²)³ los exponentes se multiplican (2×3=6), no se suman (2+3=5, que daría 32).",
            "2²=4, pero luego hay que elevar ese resultado a 3, no multiplicarlo por 3: 4³=64, no 4×3=12.",
            "Revisa el cálculo completo: (2²)³=2⁶=64, no solo 2³=8."]},
      {p:"Calcula 10⁻¹", o:["0,1","−10","10","1"], r:0,
        fb:["Correcto: 10⁻¹=1/10=0,1.",
            "El exponente negativo no hace negativa la base; indica el recíproco: 1/10, no −10.",
            "Un exponente −1 no anula el exponente ni deja la base igual; equivale a 1/10.",
            "10⁻¹ no es 1; es 1 dividido por 10, es decir 0,1."]},
      {p:"Simplifica 4³·4⁻¹", o:["16","4","64","1"], r:0,
        fb:["Correcto: se suman los exponentes: 3+(−1)=2 → 4²=16.",
            "Revisa: 3+(−1)=2, no 1. El resultado es 4²=16, no 4¹=4.",
            "No se multiplican los exponentes al multiplicar potencias de igual base, se suman: 3+(−1)=2.",
            "El resultado no es 1; eso ocurriría solo si los exponentes sumaran 0 (por ejemplo, 4³·4⁻³)."]}
    ],
    avanzado:[
      {p:"Simplifica (3²·3⁴)÷3³ (escribe solo el número)", tipo:"numerico", r:"27",
        fb_ok:"Correcto: (2+4)−3=3, entonces 3³=27.",
        fb_no:"Primero suma los exponentes del producto (2+4=6), luego resta el exponente de la división (6−3=3), y calcula 3³.",
        errores:{"9":"Revisa: el exponente final es 3 (no 2), porque (2+4)−3=3, y 3³=27, no 3²=9.","243":"Revisa el orden de operación de exponentes: (2+4)−3=3, entonces es 3³=27, no 3⁵=243."}},
      {p:"¿Cuál es el valor de x si 2ˣ=32?", o:["4","5","6","16"], r:1,
        fb:["Revisa: 2⁴=16, no 32. Necesitas un exponente más para llegar a 32.",
            "Correcto: 2⁵=32, entonces x=5.",
            "Revisa: 2⁶=64, un exponente más de lo necesario.",
            "16 es el resultado de 2⁴, no el valor de x que buscamos; la pregunta pide el exponente, no la potencia."]},
      {p:"Simplifica (2⁻¹)⁻²", o:["4","1/4","−4","2"], r:0,
        fb:["Correcto: se multiplican los exponentes: (−1)×(−2)=2 → 2²=4.",
            "Revisa el signo del producto de exponentes: (−1)×(−2) da un resultado positivo (2), no negativo.",
            "El resultado de una potencia con base positiva nunca es negativo, sin importar los exponentes.",
            "Revisa: el exponente final es 2 (resultado de multiplicar −1×−2), no 1."]},
      {p:"Calcula 5³·5⁻³", o:["1","0","5","25"], r:0,
        fb:["Correcto: los exponentes suman 3+(−3)=0, y cualquier base (no nula) elevada a 0 es 1.",
            "El resultado no es 0; recuerda que ningún número elevado a 0 da 0, siempre da 1.",
            "Revisa: el exponente final es 0 (3+(−3)=0), no 1, por lo tanto el resultado es 5⁰=1, no 5¹=5.",
            "Revisa: los exponentes se suman (3+(−3)=0), el resultado es 5⁰=1, no 5²=25."]}
    ]
  },
  {
    id:"na2", titulo:"Raíces cuadradas y cúbicas",
    bloques:[
      {t:"concepto", h:"Concepto", p:"La raíz cuadrada de un número a (√a) es el valor que multiplicado por sí mismo da a. La raíz cúbica (∛a) es el valor que multiplicado tres veces da a. La raíz cuadrada de un número negativo no existe en los números reales, pero la raíz cúbica de un número negativo sí existe y es negativa."},
      {t:"metodo", h:"Método para calcular raíces", pasos:[
        "Para √a, busca qué número multiplicado por sí mismo da a.",
        "Para ∛a, busca qué número multiplicado tres veces da a.",
        "Si a es negativo, recuerda: la raíz cuadrada NO existe en los reales, pero la raíz cúbica SÍ existe (y es negativa).",
        "Si el número no es un cuadrado o cubo perfecto, la raíz es inexacta y se puede aproximar con decimales."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Calcular √64", pasos:[
        "Busco qué número multiplicado por sí mismo da 64",
        "8×8=64",
        "√64=8"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Calcular ∛−27", pasos:[
        "Busco qué número multiplicado tres veces da −27",
        "(−3)×(−3)×(−3) = −27",
        "∛−27=−3"
      ]},
      {t:"ejemplo", h:"Ejemplo 3 — Raíz inexacta", pasos:[
        "√50: 50 no es un cuadrado perfecto (7²=49, 8²=64)",
        "El valor está entre 7 y 8",
        "√50 ≈ 7,07 (aproximado)"
      ]}
    ],
    estandar:[
      {p:"Calcula √36", o:["6","18","9","4"], r:0, e:"6×6=36."},
      {p:"Calcula √100", o:["10","50","20","5"], r:0, e:"10×10=100."},
      {p:"Calcula ∛8", o:["2","4","8","3"], r:0, e:"2×2×2=8."},
      {p:"Calcula ∛125", o:["5","25","15","3"], r:0, e:"5×5×5=125."},
      {p:"¿Cuál es el valor de √−16?", o:["No existe en los números reales","4","−4","16"], r:0, e:"No existe ningún número real que al multiplicarse por sí mismo dé un resultado negativo."},
      {p:"Calcula ∛−1", o:["−1","1","0","−3"], r:0, e:"(−1)×(−1)×(−1)=−1."},
      {p:"¿Es √81 un número exacto?", o:["Sí, es 9","No, es aproximado","Sí, es 40,5","No existe"], r:0, e:"9×9=81, por lo tanto √81=9 exactamente."},
      {p:"¿Cuál de estas raíces es exacta?", o:["√81","√50","√20","√90"], r:0, e:"81 es un cuadrado perfecto (9²), las otras no lo son."}
    ],
    avanzado:[
      {p:"Calcula √(4×9)", o:["6","13","36","18"], r:0, e:"√4×√9=2×3=6 (equivale a √36=6)."},
      {p:"Calcula ∛(−8×27)", o:["−6","6","−19","19"], r:0, e:"−8×27=−216, y ∛−216=−6."},
      {p:"Si √x=12, ¿cuál es el valor de x?", o:["144","24","6","72"], r:0, e:"x=12²=144."},
      {p:"Calcula √144 − ∛27", o:["9","15","12","6"], r:0, e:"√144=12, ∛27=3, 12−3=9."}
    ]
  },
  {
    id:"na3", titulo:"Notación científica",
    bloques:[
      {t:"concepto", h:"Concepto", p:"La notación científica escribe números muy grandes o muy pequeños en la forma a×10ⁿ, donde 1≤a<10 y n es un número entero. Sirve para trabajar con cifras extensas de forma compacta."},
      {t:"metodo", h:"Método para convertir a notación científica", pasos:[
        "Mueve la coma decimal hasta dejar un solo dígito distinto de cero a la izquierda.",
        "Cuenta cuántos lugares moviste la coma: ese número es el exponente n.",
        "Si el número original es grande (≥10), el exponente es positivo. Si es pequeño (<1), el exponente es negativo.",
        "Escribe el resultado como a×10ⁿ."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Número grande: 45.000", pasos:[
        "Muevo la coma 4 lugares a la izquierda: 4,5",
        "Como moví la coma hacia la izquierda, el exponente es positivo: 10⁴",
        "45.000 = 4,5×10⁴"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Número pequeño: 0,00032", pasos:[
        "Muevo la coma 4 lugares a la derecha: 3,2",
        "Como moví la coma hacia la derecha, el exponente es negativo: 10⁻⁴",
        "0,00032 = 3,2×10⁻⁴"
      ]}
    ],
    estandar:[
      {p:"Escribe 3.200 en notación científica", o:["3,2×10³","32×10²","3,2×10²","0,32×10⁴"], r:0, e:"Muevo la coma 3 lugares: 3,2×10³."},
      {p:"Escribe 520.000 en notación científica", o:["5,2×10⁵","52×10⁴","5,2×10⁴","0,52×10⁶"], r:0, e:"Muevo la coma 5 lugares: 5,2×10⁵."},
      {p:"Escribe 0,0045 en notación científica", o:["4,5×10⁻³","45×10⁻⁴","4,5×10³","0,45×10⁻²"], r:0, e:"Muevo la coma 3 lugares a la derecha: 4,5×10⁻³."},
      {p:"¿A qué número corresponde 6×10³?", o:["6.000","600","60.000","0,006"], r:0, e:"6×1.000=6.000."},
      {p:"¿A qué número corresponde 2,5×10⁻²?", o:["0,025","0,0025","25","2,5"], r:0, e:"2,5÷100=0,025."},
      {p:"¿Cuál de estos NO está correctamente escrito en notación científica?", o:["45×10²","6,2×10³","1,05×10⁻²","9,9×10⁵"], r:0, e:"En notación científica el primer factor debe estar entre 1 y 10; 45 no cumple esa condición."},
      {p:"Escribe 89.000.000 en notación científica", o:["8,9×10⁷","89×10⁶","8,9×10⁶","0,89×10⁸"], r:0, e:"Muevo la coma 7 lugares: 8,9×10⁷."},
      {p:"¿Cuál de estos números es mayor?", o:["3×10⁵","9×10⁴","2×10⁵","8×10³"], r:0, e:"3×10⁵=300.000, el mayor de todos."}
    ],
    avanzado:[
      {p:"Calcula (2×10³)×(3×10²)", o:["6×10⁵","6×10⁶","5×10⁵","6×10¹"], r:0, e:"Se multiplican los coeficientes (2×3=6) y se suman los exponentes (3+2=5): 6×10⁵."},
      {p:"Calcula (8×10⁶)÷(2×10²)", o:["4×10⁴","4×10³","4×10⁸","6×10⁴"], r:0, e:"Se dividen los coeficientes (8÷2=4) y se restan los exponentes (6−2=4): 4×10⁴."},
      {p:"La masa de una bacteria es 0,000002 g. ¿Cuál es su notación científica?", o:["2×10⁻⁶","2×10⁻⁵","2×10⁶","0,2×10⁻⁵"], r:0, e:"Muevo la coma 6 lugares a la derecha: 2×10⁻⁶."},
      {p:"Calcula (5×10²)+(3×10²)", o:["8×10²","8×10⁴","15×10²","8×10⁰"], r:0, e:"Al tener la misma potencia de 10, se suman directamente los coeficientes: (5+3)×10²=8×10²."}
    ]
  },
  {
    id:"na4", titulo:"Ecuaciones de primer grado",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Una ecuación de primer grado tiene la forma ax+b=c. Resolverla significa encontrar el valor de x que hace verdadera la igualdad, despejando la incógnita paso a paso."},
      {t:"metodo", h:"Método para despejar x", pasos:[
        "Agrupa los términos con la incógnita en un lado de la igualdad y los números en el otro, cambiando de signo al pasar de lado.",
        "Reduce (suma o resta) los términos semejantes en cada lado.",
        "Divide ambos lados por el número que acompaña a la incógnita, para dejarla sola.",
        "Comprueba el resultado reemplazando el valor obtenido en la ecuación original."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Resolver 4x+7=23", pasos:[
        "Paso el 7 restando al otro lado: 4x=23−7",
        "4x=16",
        "Divido por 4: x=4",
        "Comprobación: 4(4)+7=16+7=23 ✓"
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Resolver 5x−3=2x+9 (incógnita en ambos lados)", pasos:[
        "Paso 2x al lado izquierdo (resta) y −3 al lado derecho (suma): 5x−2x=9+3",
        "3x=12",
        "x=4"
      ]}
    ],
    estandar:[
      {p:"Resuelve 2x+5=13", o:["3","4","5","6"], r:1, e:"2x=8 → x=4."},
      {p:"Resuelve 6x−4=20", o:["3","4","5","6"], r:1, e:"6x=24 → x=4."},
      {p:"Resuelve x+7=2", o:["−5","5","−9","9"], r:0, e:"x=2−7=−5."},
      {p:"Resuelve 3x=21", o:["6","7","8","63"], r:1, e:"x=21/3=7."},
      {p:"Resuelve x/4=5", o:["9","20","1,25","45"], r:1, e:"x=5×4=20."},
      {p:"Resuelve 2x+3=x+10", o:["6","7","8","13"], r:1, e:"2x−x=10−3 → x=7."},
      {p:"Resuelve 5x−2=3x+8", o:["3","4","5","6"], r:2, e:"5x−3x=8+2 → 2x=10 → x=5."},
      {p:"Resuelve −2x+6=0", o:["3","−3","6","−6"], r:0, e:"−2x=−6 → x=3."}
    ],
    avanzado:[
      {p:"Resuelve 3(x+2)=21", o:["5","7","3","9"], r:0, e:"3x+6=21 → 3x=15 → x=5."},
      {p:"Resuelve 4x−2(x−3)=14", o:["4","5","6","8"], r:0, e:"4x−2x+6=14 → 2x=8 → x=4."},
      {p:"Resuelve (x/2)+(x/3)=5", o:["6","5","10","15"], r:0, e:"Común denominador 6: 3x/6+2x/6=5 → 5x/6=5 → x=6."},
      {p:"Resuelve 2(x−1)=3(x−2)+2", o:["2","3","4","1"], r:0, e:"2x−2=3x−6+2 → 2x−2=3x−4 → −2+4=3x−2x → x=2."}
    ]
  },
  {
    id:"na5", titulo:"Factorización: factor común y diferencia de cuadrados",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Factorizar es escribir una expresión como un producto de otras más simples. Dos técnicas básicas son el factor común (cuando un elemento se repite en todos los términos) y la diferencia de cuadrados (a²−b²=(a+b)(a−b))."},
      {t:"metodo", h:"Método: factor común", pasos:[
        "Identifica el factor que se repite en todos los términos (puede ser un número, una variable, o ambos).",
        "Divide cada término por ese factor común.",
        "Escribe el resultado como: factor común × (lo que quedó dentro del paréntesis)."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Factorizar 6x+9", pasos:[
        "El factor común de 6 y 9 es 3",
        "6x÷3=2x   y   9÷3=3",
        "6x+9 = 3(2x+3)"
      ]},
      {t:"metodo", h:"Método: diferencia de cuadrados", pasos:[
        "Verifica que la expresión tenga la forma a²−b² (una resta de dos términos que son cuadrados perfectos).",
        "Encuentra la raíz cuadrada de cada término: a y b.",
        "Escribe el resultado como (a+b)(a−b)."
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Factorizar x²−25", pasos:[
        "√x²=x   y   √25=5",
        "Es una diferencia de cuadrados: a=x, b=5",
        "x²−25 = (x+5)(x−5)"
      ]}
    ],
    estandar:[
      {p:"Factoriza 4x+8", o:["4(x+2)","2(2x+4)","4(x+8)","x(4+8)"], r:0, e:"El factor común es 4: 4x÷4=x, 8÷4=2 → 4(x+2)."},
      {p:"Factoriza 5x−15", o:["5(x−3)","5(x−15)","x(5−15)","15(x−1)"], r:0, e:"El factor común es 5: 5(x−3)."},
      {p:"Factoriza 9x²−3x", o:["3x(3x−1)","3(3x²−x)","9x(x−3)","x(9x−3)"], r:0, e:"El mayor factor común es 3x: 3x(3x−1)."},
      {p:"Factoriza x²−9", o:["(x−3)(x+3)","(x−9)(x+1)","(x−3)²","x(x−9)"], r:0, e:"√x²=x, √9=3 → (x−3)(x+3)."},
      {p:"Factoriza x²−49", o:["(x−7)(x+7)","(x−49)(x+1)","(x−7)²","x(x−49)"], r:0, e:"√x²=x, √49=7 → (x−7)(x+7)."},
      {p:"Factoriza 16−x²", o:["(4−x)(4+x)","(x−4)(x−4)","(16−x)(1+x)","x(16−x)"], r:0, e:"√16=4, √x²=x → (4−x)(4+x)."},
      {p:"Factoriza 12x+18 (factor común más grande)", o:["6(2x+3)","3(4x+6)","2(6x+9)","12(x+18)"], r:0, e:"El mayor factor común de 12 y 18 es 6: 6(2x+3)."},
      {p:"Factoriza 4x²−25", o:["(2x−5)(2x+5)","(4x−25)(x+1)","(2x−5)²","x(4x−25)"], r:0, e:"√4x²=2x, √25=5 → (2x−5)(2x+5)."}
    ],
    avanzado:[
      {p:"Factoriza 2x²−8 completamente", o:["2(x−2)(x+2)","2(x²−4)","(2x−4)(x+2)","(x−2)(2x+4)"], r:0, e:"Primero factor común 2: 2(x²−4). Luego diferencia de cuadrados: 2(x−2)(x+2)."},
      {p:"Factoriza 3x²−27 completamente", o:["3(x−3)(x+3)","3(x²−9)","(3x−9)(x+3)","(x−3)(3x+9)"], r:0, e:"Factor común 3: 3(x²−9). Diferencia de cuadrados: 3(x−3)(x+3)."},
      {p:"¿Cuál es el mayor factor común de 12x³ y 18x²?", o:["6x²","6x","3x²","12x"], r:0, e:"El mayor factor numérico común es 6, y la menor potencia de x presente es x²: 6x²."},
      {p:"Factoriza x⁴−16 (aplica diferencia de cuadrados)", o:["(x²−4)(x²+4)","(x²−8)(x²+8)","(x−4)(x+4)","(x²−2)(x²+8)"], r:0, e:"x⁴−16=(x²)²−4²=(x²−4)(x²+4). (x²−4 se puede seguir factorizando como (x−2)(x+2))."}
    ]
  },
  {
    id:"na6", titulo:"Factorización de trinomios y ecuaciones de segundo grado",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Un trinomio x²+bx+c se factoriza buscando dos números que, multiplicados, den c, y que, sumados, den b. Una vez factorizada la expresión, una ecuación cuadrática se resuelve igualando cada factor a cero por separado."},
      {t:"metodo", h:"Método para factorizar un trinomio x²+bx+c", pasos:[
        "Busca dos números que multiplicados den c (el término independiente).",
        "Esos mismos dos números deben sumar b (el coeficiente de x).",
        "Escribe el trinomio como (x + primer número)(x + segundo número)."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Factorizar x²+7x+12", pasos:[
        "Busco dos números que multiplicados den 12 y sumados den 7",
        "3×4=12  y  3+4=7 → son 3 y 4",
        "x²+7x+12 = (x+3)(x+4)"
      ]},
      {t:"metodo", h:"Método para resolver una ecuación cuadrática por factorización", pasos:[
        "Iguala la ecuación a cero: x²+bx+c=0.",
        "Factoriza el trinomio como en el método anterior.",
        "Iguala cada factor a cero por separado.",
        "Resuelve cada ecuación lineal resultante: esas son las dos soluciones."
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Resolver x²−2x−15=0", pasos:[
        "Busco dos números que multiplicados den −15 y sumados den −2",
        "−5×3=−15  y  −5+3=−2 → son −5 y 3",
        "(x−5)(x+3)=0",
        "x−5=0 → x=5     ó     x+3=0 → x=−3"
      ]}
    ],
    estandar:[
      {p:"Factoriza x²+5x+6", o:["(x+2)(x+3)","(x+1)(x+6)","(x+5)(x+1)","(x−2)(x−3)"], r:0, e:"2×3=6 y 2+3=5."},
      {p:"Factoriza x²+9x+20", o:["(x+4)(x+5)","(x+2)(x+10)","(x+1)(x+20)","(x−4)(x−5)"], r:0, e:"4×5=20 y 4+5=9."},
      {p:"Factoriza x²−3x−10", o:["(x−5)(x+2)","(x+5)(x−2)","(x−10)(x+1)","(x−2)(x+5)"], r:0, e:"−5×2=−10 y −5+2=−3."},
      {p:"Factoriza x²−7x+12", o:["(x−3)(x−4)","(x+3)(x+4)","(x−2)(x−6)","(x−1)(x−12)"], r:0, e:"−3×−4=12 y −3+−4=−7."},
      {p:"Resuelve x²−5x+6=0", o:["x=2 o x=3","x=1 o x=6","x=−2 o x=−3","x=6 solamente"], r:0, e:"(x−2)(x−3)=0 → x=2 o x=3."},
      {p:"Resuelve x²+7x+12=0", o:["x=−3 o x=−4","x=3 o x=4","x=−3 o x=4","x=12 solamente"], r:0, e:"(x+3)(x+4)=0 → x=−3 o x=−4."},
      {p:"Resuelve x²−x−6=0", o:["x=3 o x=−2","x=−3 o x=2","x=6 o x=−1","x=2 o x=3"], r:0, e:"(x−3)(x+2)=0 → x=3 o x=−2."},
      {p:"Resuelve x²−9x+20=0", o:["x=4 o x=5","x=−4 o x=−5","x=2 o x=10","x=20 solamente"], r:0, e:"(x−4)(x−5)=0 → x=4 o x=5."}
    ],
    avanzado:[
      {p:"Resuelve x²−4x−5=0", o:["x=5 o x=−1","x=−5 o x=1","x=4 o x=−1","x=5 o x=1"], r:0, e:"(x−5)(x+1)=0 → x=5 o x=−1."},
      {p:"Resuelve 2x²−8x=0 (factor común primero)", o:["x=0 o x=4","x=0 o x=−4","x=2 o x=4","x=0 solamente"], r:0, e:"2x(x−4)=0 → x=0 o x=4."},
      {p:"La ecuación x²−6x+9=0 tiene:", o:["Una única solución: x=3 (raíz doble)","Dos soluciones distintas: x=3 y x=−3","No tiene solución","Tres soluciones"], r:0, e:"(x−3)²=0, ambos factores son iguales, entonces x=3 es la única solución."},
      {p:"Resuelve x²+2x−24=0", o:["x=4 o x=−6","x=−4 o x=6","x=4 o x=6","x=−4 o x=−6"], r:0, e:"Busco dos números que multiplicados den −24 y sumados den 2: 6 y −4. (x+6)(x−4)=0 → x=−6 o x=4."}
    ]
  },
  {
    id:"na7", titulo:"Fórmula general para ecuaciones de segundo grado",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Cuando un trinomio no se puede factorizar fácilmente, se usa la fórmula general para resolver cualquier ecuación de la forma ax²+bx+c=0: x = (−b ± √(b²−4ac)) / 2a. La expresión dentro de la raíz (b²−4ac) se llama discriminante."},
      {t:"metodo", h:"Método para aplicar la fórmula general", pasos:[
        "Identifica los valores de a, b y c en la ecuación ax²+bx+c=0.",
        "Calcula el discriminante: b²−4ac.",
        "Si el discriminante es negativo, la ecuación no tiene soluciones reales.",
        "Si es positivo o cero, calcula su raíz cuadrada: √(discriminante).",
        "Aplica la fórmula x=(−b±√(discriminante))/2a, obteniendo las dos soluciones: una con + y otra con −."
      ]},
      {t:"ejemplo", h:"Ejemplo — Resolver 2x²+3x−2=0", pasos:[
        "a=2, b=3, c=−2",
        "Discriminante: 3²−4(2)(−2) = 9+16 = 25",
        "√25 = 5",
        "x = (−3±5)/4",
        "x = (−3+5)/4 = 0,5     ó     x = (−3−5)/4 = −2"
      ]}
    ],
    estandar:[
      {p:"En 3x²−5x+2=0, ¿cuáles son los valores de a, b y c?", o:["a=3, b=−5, c=2","a=3, b=5, c=−2","a=−5, b=3, c=2","a=2, b=−5, c=3"], r:0, e:"Se leen directamente los coeficientes en orden."},
      {p:"Calcula el discriminante de x²−4x+3=0", o:["4","16","−4","28"], r:0, e:"(−4)²−4(1)(3)=16−12=4."},
      {p:"Calcula el discriminante de x²+2x+5=0", o:["−16","16","24","4"], r:0, e:"2²−4(1)(5)=4−20=−16."},
      {p:"Si el discriminante es negativo, la ecuación:", o:["No tiene soluciones reales","Tiene una solución","Tiene dos soluciones","Siempre tiene solución"], r:0, e:"No existe raíz cuadrada real de un número negativo."},
      {p:"Usa la fórmula general para resolver x²−4x+3=0", o:["x=1 o x=3","x=−1 o x=−3","x=2 o x=6","x=4 o x=3"], r:0, e:"Discriminante=4, √4=2, x=(4±2)/2 → x=3 o x=1."},
      {p:"Usa la fórmula general para resolver x²−2x−3=0", o:["x=3 o x=−1","x=−3 o x=1","x=2 o x=−3","x=3 o x=1"], r:0, e:"Discriminante=16, √16=4, x=(2±4)/2 → x=3 o x=−1."},
      {p:"Usa la fórmula general para resolver 2x²+x−3=0", o:["x=1 o x=−1,5","x=−1 o x=1,5","x=3 o x=−2","x=1,5 o x=2"], r:0, e:"Discriminante=1+24=25, √25=5, x=(−1±5)/4 → x=1 o x=−1,5."},
      {p:"¿Para qué sirve el discriminante antes de aplicar la fórmula completa?", o:["Para saber cuántas soluciones reales tiene la ecuación","Para saber el valor de a","Para saber si es de primer grado","No tiene ninguna utilidad"], r:0, e:"El signo del discriminante indica si hay 0, 1 o 2 soluciones reales."}
    ],
    avanzado:[
      {p:"Resuelve 3x²−7x+2=0 usando la fórmula general", o:["x=2 o x=1/3","x=−2 o x=−1/3","x=7 o x=2","x=1 o x=2/3"], r:0, e:"Discriminante=49−24=25, √25=5, x=(7±5)/6 → x=2 o x=1/3."},
      {p:"¿Cuántas soluciones reales tiene x²+6x+9=0?", o:["Una (raíz doble)","Dos distintas","Ninguna","Tres"], r:0, e:"Discriminante=36−36=0, lo que da una única solución."},
      {p:"¿Cuántas soluciones reales tiene x²+x+1=0?", o:["Ninguna","Una","Dos","Infinitas"], r:0, e:"Discriminante=1−4=−3, negativo, por lo tanto no hay soluciones reales."},
      {p:"Resuelve 5x²−x−4=0 usando la fórmula general", o:["x=1 o x=−0,8","x=−1 o x=0,8","x=4 o x=−1","x=1 o x=4"], r:0, e:"Discriminante=1+80=81, √81=9, x=(1±9)/10 → x=1 o x=−0,8."}
    ]
  },
  {
    id:"na8", titulo:"Sistemas de ecuaciones lineales 2x2",
    bloques:[
      {t:"concepto", h:"Concepto", p:"Un sistema de ecuaciones 2x2 tiene dos ecuaciones con dos incógnitas (x e y). Resolverlo significa encontrar el único par de valores que cumple ambas ecuaciones al mismo tiempo."},
      {t:"metodo", h:"Método de sustitución", pasos:[
        "Despeja una de las incógnitas en una de las ecuaciones.",
        "Sustituye esa expresión en la otra ecuación.",
        "Resuelve la ecuación resultante, que ahora tiene una sola incógnita.",
        "Sustituye el valor encontrado en cualquiera de las ecuaciones originales para hallar la otra incógnita."
      ]},
      {t:"ejemplo", h:"Ejemplo 1 — Sustitución: x+y=10, 2x−y=5", pasos:[
        "Despejo y de la primera ecuación: y=10−x",
        "Sustituyo en la segunda: 2x−(10−x)=5",
        "Resuelvo: 2x−10+x=5 → 3x=15 → x=5",
        "Sustituyo en y=10−x: y=10−5=5",
        "Solución: x=5, y=5"
      ]},
      {t:"metodo", h:"Método de reducción (eliminación)", pasos:[
        "Multiplica una o ambas ecuaciones por un número, de modo que el coeficiente de una incógnita quede igual (con signo opuesto) en ambas.",
        "Suma las dos ecuaciones término a término: esa incógnita se cancela.",
        "Resuelve la ecuación resultante con una sola incógnita.",
        "Sustituye el valor encontrado en cualquiera de las ecuaciones originales para hallar la otra incógnita."
      ]},
      {t:"ejemplo", h:"Ejemplo 2 — Reducción: 2x+y=8, x−y=1", pasos:[
        "Sumo directamente ambas ecuaciones (los términos con y se cancelan): (2x+x)+(y−y)=8+1",
        "3x=9 → x=3",
        "Sustituyo en x−y=1: 3−y=1 → y=2",
        "Solución: x=3, y=2"
      ]}
    ],
    estandar:[
      {p:"En x+y=10, 2x−y=5, ¿cuál es el valor de x?", o:["3","4","5","6"], r:2, e:"Sustituyendo y=10−x: 2x−(10−x)=5 → 3x=15 → x=5."},
      {p:"Con el resultado anterior, ¿cuál es el valor de y?", o:["3","4","5","6"], r:2, e:"y=10−5=5."},
      {p:"En x−y=1, 2x+y=8, ¿cuál es el valor de x (usando reducción)?", o:["2","3","4","5"], r:1, e:"Sumando ambas ecuaciones: 3x=9 → x=3."},
      {p:"Con el resultado anterior, ¿cuál es el valor de y?", o:["1","2","3","4"], r:1, e:"3−y=1 → y=2."},
      {p:"En y=x+2, 3x+y=14, ¿cuál es el valor de x (sustitución directa)?", o:["2","3","4","5"], r:1, e:"3x+(x+2)=14 → 4x=12 → x=3."},
      {p:"Con el resultado anterior, ¿cuál es el valor de y?", o:["4","5","6","7"], r:1, e:"y=3+2=5."},
      {p:"En 2x+2y=20, x−y=2, ¿cuál es el valor de x?", o:["4","5","6","7"], r:2, e:"De la primera: x+y=10. Sumando con x−y=2: 2x=12 → x=6."},
      {p:"¿Qué significa la solución (x,y) de un sistema de ecuaciones?", o:["El único par de valores que cumple ambas ecuaciones a la vez","Cualquier valor que cumpla una de las ecuaciones","El valor promedio entre ambas ecuaciones","No tiene ningún significado especial"], r:0, e:"La solución debe satisfacer simultáneamente ambas ecuaciones del sistema."}
    ],
    avanzado:[
      {p:"Resuelve el sistema: 3x+2y=16, x+y=7", o:["x=2, y=5","x=5, y=2","x=3, y=4","x=4, y=3"], r:0, e:"De la segunda: y=7−x. Sustituyendo: 3x+2(7−x)=16 → x+14=16 → x=2, y=5."},
      {p:"Resuelve el sistema: 4x−y=10, 2x+y=8", o:["x=3, y=2","x=2, y=3","x=4, y=6","x=3, y=−2"], r:0, e:"Sumando ambas: 6x=18 → x=3. Sustituyendo: y=8−2(3)=2."},
      {p:"Un sistema tiene las ecuaciones x+y=15 y x−y=3. ¿Cuál es el producto x·y?", o:["54","45","63","36"], r:0, e:"Sumando: 2x=18 → x=9, y=6. Producto: 9×6=54."},
      {p:"Dos números suman 20 y su diferencia es 4. ¿Cuáles son esos números?", o:["12 y 8","14 y 6","10 y 10","16 y 4"], r:0, e:"x+y=20, x−y=4. Sumando: 2x=24 → x=12, y=8."}
    ]
  }
];
