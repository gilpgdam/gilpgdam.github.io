import { Diapositiva } from "../../lib/Diapositiva.js";

export class FundamentosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p><a href="/4_conceptos/a_js.html">Kotlin</a></p>
    </li>
    <li>
     <p><a href="/4_conceptos/b_textos.html">Textos</a></p>
    </li>
    <li>
     <p>
      <a href="/4_conceptos/c_string.html">El tipo <strong>string</strong></a>
     </p>
    </li>
    <li>
     <p>
      <a href="/4_conceptos/d_write.html">La instrucción
       <strong>document.write</strong></a>
     </p>
    </li>
    <li>
     <p><a href="/4_conceptos/e_orden.html">Orden de ejecución</a></p>
    </li>
    <li>
     <p><a href="/4_conceptos/f_resumen.html">Resumen</a></p>
    </li>
   </ol>`;
 }
}

customElements.define("conceptos-contenido", FundamentosContenido);