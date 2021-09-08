import { Diapositiva } from "../../lib/Diapositiva.js";

export class LogicosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
       <p><a href="/11_logicos/a_op_y.html">Operador lógico Y</a></p>
     </li>
     <li>
       <p><a href="/11_logicos/b_op_o.html">Operador lógico O</a></p>
     </li>
     <li>
       <p><a href="/11_logicos/c_op_no.html">Operador lógico NO</a></p>
     </li>
     <li>
       <p>
         <a href="/11_logicos/d_op_ternario.html">Operador lógico
           ternario</a>
       </p>
     </li>
     <li><p><a href="/11_logicos/e_resumen.html">Resumen</a></p></li>
    </ol>`;
 }
}

customElements.define("logicos-contenido", LogicosContenido);