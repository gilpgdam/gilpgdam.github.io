import { Diapositiva } from "../../lib/Diapositiva.js";

export class ForContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p>
      <a href="/16_for/a_for.html">La estructura de control
       <strong>for</strong></a>
     </p>
    </li>
    <li>
     <p>
       <a href="/16_for/b_pres_for.html">Prueba de escritorio con
         <strong>for</strong></a>
     </p>
    </li>
    <li><p><a href="/16_for/c_resumen.html">Resumen</a></p></li>
   </ol>`;
 }
}

customElements.define("for-contenido", ForContenido);