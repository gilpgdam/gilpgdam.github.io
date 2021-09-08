import { Diapositiva } from "../../lib/Diapositiva.js";

export class FundamentosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p><a href="/2_conceptos/a_js.html">JavaScript</a></p>
    </li>
    <li>
     <p><a href="/2_conceptos/b_textos.html">Textos</a></p>
    </li>
    <li>
     <p>
      <a href="/2_conceptos/c_string.html">El tipo <strong>string</strong></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/2_conceptos/d_write.html">La instrucción
       <strong>document.write</strong></a>
     </p>
    </li>
    <li>
     <p><a href="/2_conceptos/e_orden.html">Orden de ejecución</a></p>
    </li>
    <li>
     <p><a href="/2_conceptos/f_resumen.html">Resumen</a></p>
    </li>
   </ol>`;
 }
}

customElements.define("conceptos-contenido", FundamentosContenido);