"use strict";
/* ===================== CONFIGURACIÓN Y CONEXIÓN A SUPABASE ===================== */
const NIVEL = "1° Medio";

const SUPABASE_URL = "https://ilbuqgrrjwjjqmvnqiim.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_yFpjLANCv8UAsIEswtCw2g_o_Fwu1Td";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchProgresoUsuario(correo){
  const { data, error } = await sb.from("progreso").select("*").eq("correo", correo);
  if(error){ console.error(error); return []; }
  return data;
}
async function registrarIntento(correo, ejeId, leccionId, ejercicioId, tipo, correcto){
  const { error } = await sb.from("progreso").insert({
    correo, nivel: NIVEL, eje: ejeId, leccion_id: leccionId, ejercicio_id: ejercicioId, tipo, correcto
  });
  if(error) console.error(error);
}
