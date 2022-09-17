/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "2.8"

const ARCHIVOS = [
  "/favicon.ico",
   "/img/icono/160x30.png",
   "/img/icono/160x30.webp",
   "/img/icono/80x15.png",
   "/img/icono/icono1024.png",
   "/img/icono/icono2048.png",
   "/img/icono/icono256.png",
   "/img/icono/maskable_icon.png",
   "/img/icono/maskable_icon_x128.png",
   "/img/icono/maskable_icon_x192.png",
   "/img/icono/maskable_icon_x384.png",
   "/img/icono/maskable_icon_x48.png",
   "/img/icono/maskable_icon_x512.png",
   "/img/icono/maskable_icon_x72.png",
   "/img/icono/maskable_icon_x96.png",
   "/img/m05conceptos/Cadena.svg",
   "/img/m05conceptos/Eslabon.svg",
   "/img/m05conceptos/winlogo.png",
   "/img/m05conceptos/winlogo.xcf",
   "/img/m09if/if.svg",
   "/img/m10ifElse/if-else.svg",
   "/img/m11multiple/condicional-multiple.svg",
   "/img/m12melse/condicional-multiple-else.svg",
   "/img/m15doWhile/do-while.png",
   "/img/m15doWhile/do-while.svg",
   "/img/m16numeros/cuadratica.png",
   "/img/m16numeros/recta.png",
   "/img/m16numeros/recta.svg",
   "/img/m17while/while.svg",
   "/img/m18for/for.svg",
   "/img/m19switch/switch-default.svg",
   "/img/m19switch/switch.svg",
   "/img/m21clases/hormiga1.svg",
   "/img/m21clases/hormiga2.svg",
   "/img/m21clases/hormiga3.svg",
   "/img/m21clases/hormiga4.svg",
   "/img/m23ejemplo/dis.png",
   "/img/m23ejemplo/vista.png",
   "/img/m24formulario/dis.png",
   "/img/m24formulario/vista.png",
   "/img/m24formulario/vista2.png",
   "/img/m24formulario/vista3.png",
   "/img/m25servicio/dis.png",
   "/img/m25servicio/vista.png",
   "/img/m25servicio/vista2.png",
   "/",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01software.html",
   "/m02arquitectura/",
   "/m02arquitectura/index.html",
   "/m02arquitectura/mAcaracteristicas.html",
   "/m02arquitectura/mBuso.html",
   "/m02arquitectura/mCcomponentes.html",
   "/m02arquitectura/print.html",
   "/m04mvc/",
   "/m04mvc/index.html",
   "/m04mvc/mAalgoritmo.html",
   "/m04mvc/mBproceso.html",
   "/m04mvc/mClenguaje.html",
   "/m04mvc/mDpseudocodigo.html",
   "/m04mvc/mEdiagrama.html",
   "/m04mvc/print.html",
   "/m05conceptos/",
   "/m05conceptos/index.html",
   "/m05conceptos/mAkotlin.html",
   "/m05conceptos/mCstring.html",
   "/m05conceptos/mDprint.html",
   "/m05conceptos/mEorden.html",
   "/m05conceptos/print.html",
   "/m06variables/",
   "/m06variables/index.html",
   "/m06variables/mAidentificadores.html",
   "/m06variables/mBvariables.html",
   "/m06variables/mCconstantes.html",
   "/m06variables/mDduplicadas.html",
   "/m06variables/mEnoEncontradas.html",
   "/m06variables/mFreadLine.html",
   "/m06variables/print.html",
   "/m07comentarios/",
   "/m07comentarios/index.html",
   "/m07comentarios/mAcomentarios.html",
   "/m07comentarios/mBcom.html",
   "/m07comentarios/mCcom1OMas.html",
   "/m07comentarios/mDKDoc.html",
   "/m07comentarios/print.html",
   "/m08bloques/",
   "/m08bloques/index.html",
   "/m08bloques/mAbloque.html",
   "/m08bloques/mBpresBloque.html",
   "/m08bloques/mCpresBloqueVD.html",
   "/m08bloques/print.html",
   "/m09if/",
   "/m09if/index.html",
   "/m09if/mAboolean.html",
   "/m09if/mBtxtIgualdad.html",
   "/m09if/mCtxtDiferente.html",
   "/m09if/mDif.html",
   "/m09if/mECodigo.html",
   "/m09if/print.html",
   "/m10ifElse/",
   "/m10ifElse/index.html",
   "/m10ifElse/mAifElse.html",
   "/m10ifElse/mBcodigo.html",
   "/m10ifElse/print.html",
   "/m11multiple/",
   "/m11multiple/index.html",
   "/m11multiple/mAmultiple.html",
   "/m11multiple/mBcodigo.html",
   "/m11multiple/print.html",
   "/m12melse/",
   "/m12melse/index.html",
   "/m12melse/mAmultipleElse.html",
   "/m12melse/mBcodigo.html",
   "/m12melse/print.html",
   "/m13textos/",
   "/m13textos/index.html",
   "/m13textos/mAenteros.html",
   "/m13textos/mBflotantes.html",
   "/m13textos/mCconcatenacion.html",
   "/m13textos/mDasignacion.html",
   "/m13textos/mEplantillas.html",
   "/m13textos/mForden.html",
   "/m13textos/mGordenIgualdad.html",
   "/m13textos/print.html",
   "/m14logicos/",
   "/m14logicos/index.html",
   "/m14logicos/mAopY.html",
   "/m14logicos/mBopO.html",
   "/m14logicos/mCopNo.html",
   "/m14logicos/mDopTernario.html",
   "/m14logicos/print.html",
   "/m15doWhile/",
   "/m15doWhile/index.html",
   "/m15doWhile/mAdoWhile.html",
   "/m15doWhile/mBcodigo.html",
   "/m15doWhile/print.html",
   "/m16numeros/",
   "/m16numeros/index.html",
   "/m16numeros/mAenteros.html",
   "/m16numeros/mBrecta.html",
   "/m16numeros/mCopsNum.html",
   "/m16numeros/mDasignacion.html",
   "/m16numeros/mEincrYDecr.html",
   "/m16numeros/mFigualdad.html",
   "/m16numeros/mGorden.html",
   "/m16numeros/mHordenIgualdad.html",
   "/m16numeros/mIprecedencia.html",
   "/m16numeros/mJexpresiones.html",
   "/m16numeros/print.html",
   "/m17while/",
   "/m17while/index.html",
   "/m17while/mAwhile.html",
   "/m17while/mBpresWhileAsc.html",
   "/m17while/mCpresWhileAsc2.html",
   "/m17while/mDpresWhileDesc.html",
   "/m17while/mEpresWhileDesc2.html",
   "/m17while/mFpresWhileNoEjec.html",
   "/m17while/mGpresWhileDescMal.html",
   "/m17while/mHpresWhileAscMal.html",
   "/m17while/print.html",
   "/m18for/",
   "/m18for/index.html",
   "/m18for/mAfor.html",
   "/m18for/mBcodigo.html",
   "/m18for/print.html",
   "/m19switch/",
   "/m19switch/index.html",
   "/m19switch/mAcodigoSwitch.html",
   "/m19switch/mBcodigoSwitchDefault.html",
   "/m19switch/print.html",
   "/m20funciones/",
   "/m20funciones/index.html",
   "/m20funciones/mAfunciones.html",
   "/m20funciones/mBfuncionesFunciones.html",
   "/m20funciones/mCfuncionesParametros.html",
   "/m20funciones/mDfuncionesParametrosExpresiones.html",
   "/m20funciones/mEfuncionesReturn.html",
   "/m20funciones/mFflecha.html",
   "/m20funciones/mGrecursividad.html",
   "/m20funciones/print.html",
   "/m21clases/",
   "/m21clases/index.html",
   "/m21clases/mAclases.html",
   "/m21clases/mBsetters.html",
   "/m21clases/print.html",
   "/m22herencia/",
   "/m22herencia/index.html",
   "/m22herencia/mAconstructores.html",
   "/m22herencia/mBsobreescritura.html",
   "/m22herencia/print.html",
   "/m23ejemplo/",
   "/m23ejemplo/index.html",
   "/m23ejemplo/mAinstrucciones.html",
   "/m23ejemplo/mBarchivos.html",
   "/m23ejemplo/mCstrings.html",
   "/m23ejemplo/mDactivityMain.html",
   "/m23ejemplo/mEmainActivity.html",
   "/m23ejemplo/mFandroidManifest.html",
   "/m23ejemplo/print.html",
   "/m24formulario/",
   "/m24formulario/index.html",
   "/m24formulario/mAinstrucciones.html",
   "/m24formulario/mBarchivos.html",
   "/m24formulario/mCstrings.html",
   "/m24formulario/mDactivityMain.html",
   "/m24formulario/mEmainActivity.html",
   "/m24formulario/mFandroidManifest.html",
   "/m24formulario/print.html",
   "/m25servicio/",
   "/m25servicio/index.html",
   "/m25servicio/mAinstrucciones.html",
   "/m25servicio/mBarchivos.html",
   "/m25servicio/mCindexPhp.html",
   "/m25servicio/mDstrings.html",
   "/m25servicio/mEactivityMain.html",
   "/m25servicio/mFmainActivity.html",
   "/m25servicio/mGandroidManifest.html",
   "/m25servicio/print.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m05conceptos/1_orden.kt",
   "/src/m06variables/1_variables.kt",
   "/src/m06variables/2_constantes.kt",
   "/src/m06variables/3_duplicados.kt",
   "/src/m06variables/4_no_definida.kt",
   "/src/m06variables/5_prompt.kt",
   "/src/m07comentarios/1_comentarios_una.kt",
   "/src/m07comentarios/2_comentarios_una_o_mas.kt",
   "/src/m07comentarios/3_JsDoc.kt",
   "/src/m08bloques/1_bloques.kt",
   "/src/m08bloques/2_dup_blk.kt",
   "/src/m09if/1_op_igual.kt",
   "/src/m09if/2_op_diferente.kt",
   "/src/m09if/3_if_true.html",
   "/src/m09if/4_if_false.html",
   "/src/m09if/4_if_programa.kt",
   "/src/m10ifElse/1_if_else_true.html",
   "/src/m10ifElse/2_if_else.kt",
   "/src/m10ifElse/2_if_else_false.html",
   "/src/m11multiple/1_m_1_true.html",
   "/src/m11multiple/2_m_2_true.html",
   "/src/m11multiple/3_m_false.html",
   "/src/m11multiple/4_m_.kt",
   "/src/m12melse/1_melse_1_true.html",
   "/src/m12melse/2_melse_2_true.html",
   "/src/m12melse/3_melse_false.html",
   "/src/m12melse/4_melse.kt",
   "/src/m13textos/1_concatenacion.kt",
   "/src/m13textos/2_asignacion.kt",
   "/src/m13textos/3_plantillas.kt",
   "/src/m13textos/4_ops_orden.kt",
   "/src/m13textos/5_ops_orden_igualdad.kt",
   "/src/m14logicos/1_op_y.kt",
   "/src/m14logicos/2_op_o.kt",
   "/src/m14logicos/3_op_no.kt",
   "/src/m14logicos/4_op_ternario.kt",
   "/src/m15doWhile/1_do_while.html",
   "/src/m15doWhile/2_do_while_prog.kt",
   "/src/m16numeros/1_ops_num.kt",
   "/src/m16numeros/2_asignacion_num.kt",
   "/src/m16numeros/3_incr_y_decr.kt",
   "/src/m16numeros/4_op_igual.kt",
   "/src/m16numeros/5_orden.kt",
   "/src/m16numeros/6_op_orden_igual.kt",
   "/src/m17while/1_while_asc.kt",
   "/src/m17while/2_while_asc_2.kt",
   "/src/m17while/3_while_desc.kt",
   "/src/m17while/4_while_desc_2.kt",
   "/src/m17while/5_while_no_ej.kt",
   "/src/m17while/6_while_desc_mal.kt",
   "/src/m17while/7_while_asc_mal.kt",
   "/src/m18for/1_for_asc.kt",
   "/src/m19switch/1_switch.kt",
   "/src/m19switch/2_switch_default.kt",
   "/src/m20funciones/1_funciones.kt",
   "/src/m20funciones/2_funciones_funciones.kt",
   "/src/m20funciones/3_funciones_parametros.kt",
   "/src/m20funciones/4_funciones_parametros_expresiones.kt",
   "/src/m20funciones/5_funciones_return.kt",
   "/src/m20funciones/6_funciones_flecha.kt",
   "/src/m20funciones/7_recursividad.kt",
   "/src/m21clases/a_clase.kt",
   "/src/m21clases/b_getters.kt",
   "/src/m22herencia/a_constructores.kt",
   "/src/m22herencia/b_sobreescritura.kt",
   "/src/m25servicio/index.php" ]

if (self instanceof ServiceWorkerGlobalScope) {
 self.addEventListener("install", installListener)
 self.addEventListener("fetch", fetchListener)
 self.addEventListener("activate", () => console.log("Service Worker activo."))
}

/**
 * @param {ExtendableEvent} evt
 */
function installListener(evt) {
 console.log("Service Worker instalando.")
 evt.waitUntil(cargaCache());
}

/**
 * @param {FetchEvent} evt
 */
function fetchListener(evt) {
 if (evt.request.method === "GET") {
  evt.respondWith(usaCache(evt))
 }
}

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
}

/**
 * @param {FetchEvent} evt
 */
async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}