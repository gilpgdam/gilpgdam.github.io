import { Diapositiva } from "../../lib/Diapositiva.js";

export class ComentariosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p><a href="/4_comentarios/a_comentarios.html">Comentarios</a></p>
     </li>
     <li>
      <p>
       <a href="/4_comentarios/b_com_1.html">Comentarios de una línea</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/4_comentarios/c_com_1_o_mas.html">Comentarios de una
         o más líneas</a>
      </p>
     </li>
     <li>
      <p><a href="/4_comentarios/d_JsDoc.html">JsDoc</a></p>
     </li>
     <li>
      <p><a href="/4_comentarios/e_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("comentarios-contenido", ComentariosContenido);