import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";
import "../g_if_programa/cmp/g-if-programa-contenido.js";

export class IfContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/6_if/a_boolean.html">El tipo <strong>boolean</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_if/b_txt_igualdad.html">Operador de igualdad de
         textos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_if/c_txt_diferente.html">Operador diferente de para
         textos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_if/d_if.html">La estructura de control
        <strong>if</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_if/e_if_true.html">Prueba de escritorio cuando la
        condición de <strong>if</strong> evalúa a
        <strong>true</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/6_if/f_if_false.html">Prueba de escritorio cuando la
        condición de <strong>if</strong> evalúa a
        <strong>false</strong></a>
      </p>
     </li>
     <li>
      <details>
       <summary>
        <h4>
         <a href="/6_if/g_if_programa/index.html">Programa con
          <strong>if</strong></a>
        </h4>
       </summary>
       <g-if-programa-contenido></g-if-programa-contenido>
      </details>
     </li>
     <li>
      <p><a href="/6_if/h_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
   const details = this.querySelector("details");
   if (details && !this.closest("mi-nav")) {
    details.open = true;
   }
 }
}

customElements.define("if-contenido", IfContenido);