import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class DJsDoc extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. JSDoc</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>comentarios de documentación</dfn>
       o
       <dfn>KDoc</dfn>,
       son comentarios de una o más líneas que empiezan con
       <code class="language-javascript" style="color: #008000;">/**</code>
       y explican la definición de un elemento del código.
      </p>
     </li>
     <li>
      <p>
       Se colocan en la línea inmediatamente antes del texto que
       explican.
      </p>
     </li>
     <li>
      <p>
       Algunas herramientas, como <em>Visual Studio Code</em>, pueden usar
       estos
       comentarios para detectar errores en el código.
      </p>
     </li>
     <li>
      <p>
       El contendo de este tipo de comentarios debe seguir las reglas de
       <a href="https://kotlinlang.org/docs/kotlin-doc.html"
        target="_blank">https://kotlinlang.org/docs/kotlin-doc.html</a>.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
    <div>
     <div><span
        style="color: #008000;">/**&nbsp;Variable&nbsp;numérica&nbsp;cuyo&nbsp;valor&nbsp;inicial&nbsp;es&nbsp;0.</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@type</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{number}</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">e</span>&nbsp;=&nbsp;<span
        style="color: #098658;">0</span>;</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("d-jsdoc", DJsDoc);