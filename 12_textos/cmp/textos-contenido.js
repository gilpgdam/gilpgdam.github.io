import { Diapositiva } from "../../lib/Diapositiva.js";

export class TextosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/10_textos/a_number.html">El tipo
        <strong>number</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/10_textos/b_concatenacion.html">Operador de
        concatenación <em>a</em> <strong>+</strong> <em>b</em></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/10_textos/c_asignacion.html">Operador de
        concatenación con asignación
        <em>a</em> <strong>+=</strong> <em>x</em></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/10_textos/d_plantillas.html">Plantillas de texto</a>
      </p>
     </li>
     <li>
      <p><a href="/10_textos/e_orden.html">Operadores de orden</a></p>
     </li>
     <li>
      <p>
       <a href="/10_textos/f_orden_igualdad.html">Operadores
        combinados de orden e igualdad</a>
      </p>
     </li>
     <li>
      <p><a href="/10_textos/g_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("textos-contenido", TextosContenido);