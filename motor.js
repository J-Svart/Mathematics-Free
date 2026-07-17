(function(){
"use strict";

/* ===================== EJES DISPONIBLES =====================
   Cada eje toma su arreglo de lecciones desde su propio archivo en
   /js/contenido/. El chequeo "typeof ... !== undefined" evita que un
   error en UN archivo de contenido (ej. geometria.js) tumbe todo el sitio:
   si ese archivo falla al cargar, ese eje simplemente queda vacío,
   pero el resto del sitio sigue funcionando. */
const EJE_FUNCIONES  = "funciones";
const EJE_NUMEROS    = "numeros-algebra";
const EJE_GEOMETRIA  = "geometria";

const EJES = [
  { id: EJE_FUNCIONES,  nombre: "Funciones",        lecciones: (typeof LECCIONES_FUNCIONES  !== "undefined" ? LECCIONES_FUNCIONES  : []) },
  { id: EJE_NUMEROS,    nombre: "Números y Álgebra", lecciones: (typeof LECCIONES_NUMEROS    !== "undefined" ? LECCIONES_NUMEROS    : []) },
  { id: EJE_GEOMETRIA,  nombre: "Geometría",         lecciones: (typeof LECCIONES_GEOMETRIA  !== "undefined" ? LECCIONES_GEOMETRIA  : []) }
];

function ejeDeLeccion(leccionId){
  const eje = EJES.find(e => e.lecciones.some(l => l.id === leccionId));
  return eje ? eje.id : null;
}

/* ===================== SESIÓN LOCAL ===================== */
const LS_USER = "matefree_user";
const memoryStore = {};
let storageDisponible = true;
try{ const k="__t__"; localStorage.setItem(k,"1"); localStorage.removeItem(k); }catch(e){ storageDisponible=false; }
const storage = {
  get(k){ if(storageDisponible){ try{return localStorage.getItem(k);}catch(e){return memoryStore[k]??null;} } return memoryStore[k]??null; },
  set(k,v){ if(storageDisponible){ try{localStorage.setItem(k,v); return;}catch(e){} } memoryStore[k]=v; },
  remove(k){ if(storageDisponible){ try{localStorage.removeItem(k); return;}catch(e){} } delete memoryStore[k]; }
};
function getUser(){ try{ return JSON.parse(storage.get(LS_USER)); }catch(e){ return null; } }
function setUser(u){ storage.set(LS_USER, JSON.stringify(u)); }
function clearUser(){ storage.remove(LS_USER); }

function validarCorreo(v){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(v.trim());
}

/* ===================== NAVEGACIÓN ===================== */
const screens = {};
["registro","leccion","ejercicio","resultado"].forEach(id=>{ screens[id] = document.getElementById("screen-"+id); });
function showScreen(name){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

let progresoActual = [];
let ejeActualId = EJE_FUNCIONES;
let leccionActual = null;
let sesionEjercicios = [];
let sesionTipo = "";
let sesionIndex = 0;
let sesionCorrectas = 0;

function dominadas(){
  return new Set(progresoActual.filter(r=>r.correcto).map(r=>r.leccion_id+"::"+r.ejercicio_id));
}
function totalEjerciciosLeccion(l){ return l.estandar.length + l.avanzado.length; }
function progresoLeccion(l){
  const dom = dominadas();
  let total = totalEjerciciosLeccion(l), hechos = 0;
  l.estandar.forEach((_,i)=>{ if(dom.has(l.id+"::std"+i)) hechos++; });
  l.avanzado.forEach((_,i)=>{ if(dom.has(l.id+"::adv"+i)) hechos++; });
  return {hechos,total};
}

/* ===================== REGISTRO ===================== */
const form = document.getElementById("form-registro");
const fields = { nombre:document.getElementById("nombre"), apellido:document.getElementById("apellido"), curso:document.getElementById("curso"), correo:document.getElementById("correo") };
const wraps = { nombre:document.getElementById("f-nombre"), apellido:document.getElementById("f-apellido"), curso:document.getElementById("f-curso"), correo:document.getElementById("f-correo") };

form.addEventListener("submit", async function(e){
  e.preventDefault();
  let valido = true;
  if(!fields.nombre.value.trim()){ wraps.nombre.classList.add("invalid"); valido=false; } else wraps.nombre.classList.remove("invalid");
  if(!fields.apellido.value.trim()){ wraps.apellido.classList.add("invalid"); valido=false; } else wraps.apellido.classList.remove("invalid");
  if(!fields.curso.value){ wraps.curso.classList.add("invalid"); valido=false; } else wraps.curso.classList.remove("invalid");
  if(!validarCorreo(fields.correo.value)){ wraps.correo.classList.add("invalid"); valido=false; } else wraps.correo.classList.remove("invalid");
  if(!valido) return;

  const user = { nombre:fields.nombre.value.trim(), apellido:fields.apellido.value.trim(), curso:fields.curso.value, correo:fields.correo.value.trim().toLowerCase() };
  setUser(user);
  await entrarApp();
});

document.getElementById("nav-user").addEventListener("click", function(){
  clearUser();
  form.reset();
  Object.values(wraps).forEach(w=>w.classList.remove("invalid"));
  document.getElementById("nav-user").style.display = "none";
  document.getElementById("sidebar").style.display = "none";
  showScreen("registro");
});

/* ===================== APP (sidebar + lección) ===================== */
async function entrarApp(){
  const user = getUser();
  if(!user) return;
  document.getElementById("nav-user").style.display = "inline-flex";
  document.getElementById("sidebar").style.display = "block";
  progresoActual = await fetchProgresoUsuario(user.correo);
  renderEjeTabs();
  renderSidebar();
  abrirLeccion(EJES.find(e=>e.id===ejeActualId).lecciones[0]);
}

function renderEjeTabs(){
  const wrap = document.getElementById("eje-tabs");
  wrap.innerHTML = "";
  EJES.forEach(eje=>{
    const btn = document.createElement("button");
    btn.className = "eje-tab" + (eje.id === ejeActualId ? " active" : "");
    btn.type = "button";
    btn.textContent = eje.nombre;
    btn.addEventListener("click", ()=>{
      ejeActualId = eje.id;
      renderEjeTabs();
      renderSidebar();
      abrirLeccion(eje.lecciones[0]);
    });
    wrap.appendChild(btn);
  });
}

function renderSidebar(){
  const eje = EJES.find(e=>e.id===ejeActualId);
  const list = document.getElementById("sidebar-list");
  list.innerHTML = "";
  eje.lecciones.forEach((l, idx)=>{
    const {hechos,total} = progresoLeccion(l);
    const item = document.createElement("div");
    item.className = "lesson-nav-item";
    item.dataset.id = l.id;
    item.innerHTML = `<span class="nav-num">${String(idx+1).padStart(2,"0")}</span><span>${l.titulo}</span>${hechos===total ? '<span class="nav-check">✓</span>' : ''}`;
    item.addEventListener("click", ()=> abrirLeccion(l));
    list.appendChild(item);
  });
  const repasoItem = document.createElement("div");
  repasoItem.className = "lesson-nav-item";
  repasoItem.style.borderTop = "1px solid rgba(255,255,255,.1)";
  repasoItem.style.marginTop = "8px";
  repasoItem.style.paddingTop = "14px";
  repasoItem.innerHTML = `<span class="nav-num">↻</span><span>Repaso mixto</span>`;
  repasoItem.addEventListener("click", ()=> iniciarRepaso());
  list.appendChild(repasoItem);
}
function marcarSidebarActivo(leccionId){
  document.querySelectorAll(".lesson-nav-item").forEach(el=>{
    el.classList.toggle("active", el.dataset.id === leccionId);
  });
}

function abrirLeccion(l){
  leccionActual = l;
  marcarSidebarActivo(l.id);
  const eje = EJES.find(e=>e.id===ejeActualId);
  const idx = eje.lecciones.findIndex(x=>x.id===l.id);
  document.getElementById("lc-eyebrow").textContent = eje.nombre + " · Lección " + (idx+1) + " de " + eje.lecciones.length;
  document.getElementById("lc-titulo").textContent = l.titulo;
  const body = document.getElementById("lc-body");
  body.innerHTML = "";
  l.bloques.forEach(b=>{
    if(b.t === "concepto"){
      const div = document.createElement("div");
      div.className = "concepto-block";
      div.innerHTML = `<h4>${b.h}</h4><p>${b.p}</p>`;
      body.appendChild(div);
    } else if(b.t === "metodo"){
      const div = document.createElement("div");
      div.className = "metodo-block";
      const items = b.pasos.map(p=>`<li>${p}</li>`).join("");
      div.innerHTML = `<span class="mb-label">Método</span><h4>${b.h}</h4><ol>${items}</ol>`;
      body.appendChild(div);
    } else if(b.t === "ejemplo"){
      const div = document.createElement("div");
      div.className = "ejemplo-block";
      const items = b.pasos.map(p=>`<div class="step">${p}</div>`).join("");
      div.innerHTML = `<span class="eb-label">Ejemplo resuelto</span><h4>${b.h}</h4>${items}`;
      body.appendChild(div);
    }
  });
  showScreen("leccion");
}

document.getElementById("btn-practicar-estandar").addEventListener("click", ()=> iniciarEjercicios("estandar"));
document.getElementById("btn-practicar-avanzado").addEventListener("click", ()=> iniciarEjercicios("avanzado"));

/* ===================== EJERCICIOS ===================== */
function iniciarEjercicios(tipo){
  sesionTipo = tipo;
  sesionEjercicios = leccionActual[tipo];
  sesionIndex = 0;
  sesionCorrectas = 0;
  document.getElementById("ex-tipo-label").textContent = tipo === "estandar" ? "Ejercicios estándar" : "Ejercicios avanzados";
  mostrarPregunta();
  showScreen("ejercicio");
}
document.getElementById("back-to-leccion").addEventListener("click", function(){
  if(sesionTipo === "repaso" && leccionActual){ showScreen("leccion"); }
  else { showScreen("leccion"); }
});

function mostrarPregunta(){
  const total = sesionEjercicios.length;
  document.getElementById("ex-count-label").textContent = (sesionIndex+1) + " / " + total;
  document.getElementById("ex-progress-fill").style.width = Math.round((sesionIndex/total)*100) + "%";
  const q = sesionEjercicios[sesionIndex];
  document.getElementById("ex-question").textContent = q.p;
  const opts = document.getElementById("ex-options");
  opts.innerHTML = "";
  const feedback = document.getElementById("ex-feedback");
  feedback.className = "feedback-box";
  feedback.textContent = "";
  document.getElementById("btn-siguiente").style.display = "none";

  if(q.tipo === "numerico"){
    const row = document.createElement("div");
    row.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;align-items:center;";
    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "decimal";
    input.placeholder = "Escribe tu respuesta";
    input.id = "num-input";
    input.style.cssText = "flex:1;min-width:160px;padding:12px 14px;border:1.5px solid var(--line);border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:1rem;";
    const btnCheck = document.createElement("button");
    btnCheck.className = "btn btn-accent";
    btnCheck.type = "button";
    btnCheck.textContent = "Verificar";
    btnCheck.addEventListener("click", ()=> responderNumerico(input.value));
    input.addEventListener("keydown", (e)=>{ if(e.key === "Enter"){ e.preventDefault(); responderNumerico(input.value); } });
    row.appendChild(input); row.appendChild(btnCheck);
    opts.appendChild(row);
    setTimeout(()=> input.focus(), 50);
  } else {
    q.o.forEach((texto, idx)=>{
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.type = "button";
      btn.textContent = texto;
      btn.addEventListener("click", ()=> responderOpcion(idx));
      opts.appendChild(btn);
    });
  }
}

function normalizarNumero(v){
  const limpio = String(v).trim().replace(/\./g,"").replace(",", ".");
  const n = parseFloat(limpio);
  return isNaN(n) ? null : n;
}

async function responderOpcion(idx){
  const q = sesionEjercicios[sesionIndex];
  const correcto = idx === q.r;
  const opts = document.querySelectorAll("#ex-options .opt-btn");
  opts.forEach((b,i)=>{
    b.disabled = true;
    if(i === q.r) b.classList.add("correct");
    else if(i === idx && !correcto) b.classList.add("wrong");
  });

  const textoFeedback = (q.fb && q.fb[idx]) ? q.fb[idx] : q.e;
  mostrarFeedback(correcto, textoFeedback);
  await guardarIntento(correcto);
}

async function responderNumerico(valorTexto){
  const q = sesionEjercicios[sesionIndex];
  const input = document.getElementById("num-input");
  const btnCheck = input.nextElementSibling;
  const valor = normalizarNumero(valorTexto);
  const esperado = normalizarNumero(q.r);
  const correcto = valor !== null && esperado !== null && Math.abs(valor - esperado) < 0.01;

  input.disabled = true;
  if(btnCheck) btnCheck.disabled = true;
  input.style.borderColor = correcto ? "#2F6F62" : "#C1443A";

  let textoFeedback;
  if(correcto){
    textoFeedback = q.fb_ok || q.e || "¡Bien! Aplicaste el método correctamente.";
  } else {
    const claveError = valorTexto.trim();
    textoFeedback = (q.errores && q.errores[claveError]) ? q.errores[claveError] : (q.fb_no || ("La respuesta correcta es " + q.r + ". " + (q.e || "")));
  }
  mostrarFeedback(correcto, textoFeedback + (correcto ? "" : ` (Respuesta correcta: ${q.r})`));
  await guardarIntento(correcto);
}

function mostrarFeedback(correcto, texto){
  const feedback = document.getElementById("ex-feedback");
  feedback.classList.add("show", correcto ? "ok" : "no");
  feedback.textContent = (correcto ? "✔ Correcto. " : "✘ No es correcto. ") + texto;
  document.getElementById("btn-siguiente").style.display = "inline-flex";
  if(correcto) sesionCorrectas++;
}

async function guardarIntento(correcto){
  const user = getUser();
  const q = sesionEjercicios[sesionIndex];
  const leccionIdReal = q._origLeccionId || leccionActual.id;
  const codigoEjercicio = q._origEjercicioId || ((sesionTipo === "estandar" ? "std" : "adv") + sesionIndex);
  const tipoReal = q._origLeccionId ? "estandar" : sesionTipo;
  await registrarIntento(user.correo, ejeDeLeccion(leccionIdReal), leccionIdReal, codigoEjercicio, tipoReal, correcto);
  if(correcto){
    progresoActual.push({correo:user.correo, leccion_id:leccionIdReal, ejercicio_id:codigoEjercicio, correcto:true});
  }
}

function barajar(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function iniciarRepaso(){
  const eje = EJES.find(e=>e.id===ejeActualId);
  const pool = eje.lecciones.flatMap(l =>
    l.estandar.map((ex,i)=> Object.assign({}, ex, {_origLeccionId:l.id, _origEjercicioId:"std"+i}))
  );
  sesionEjercicios = barajar(pool).slice(0, 10);
  sesionTipo = "repaso";
  sesionIndex = 0;
  sesionCorrectas = 0;
  document.getElementById("ex-tipo-label").textContent = "Repaso mixto · " + eje.nombre;
  mostrarPregunta();
  showScreen("ejercicio");
}

document.getElementById("btn-siguiente").addEventListener("click", function(){
  sesionIndex++;
  if(sesionIndex >= sesionEjercicios.length){ mostrarResultado(); }
  else { mostrarPregunta(); }
});

function mostrarResultado(){
  document.getElementById("res-score").textContent = sesionCorrectas + "/" + sesionEjercicios.length;
  document.getElementById("res-sub").textContent = "Ejercicios correctos en esta práctica";
  showScreen("resultado");
}
document.getElementById("btn-a-leccion").addEventListener("click", ()=>{ abrirLeccion(leccionActual); });
document.getElementById("btn-a-indice").addEventListener("click", ()=>{ renderSidebar(); abrirLeccion(leccionActual); });

/* ===================== ENTRADA ===================== */
const existente = getUser();
if(existente){ entrarApp(); }

})();
