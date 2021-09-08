import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class EOrden extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Orden de ejecución</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Los renglones de instrucciones se ejecutan de arriba para abajo.</p>
     </li>
     <li>
      <p>
       En cada renglón, las instrucciones se ejecutan de izquierda a derecha.
      </p>
     </li>
     <li>
      <p>
       Cada instrucción
       <code
        class="language-javascript"><span
         style="color: #001080;">console</span>.<span
         style="color: #795e26;">log</span></code>
       es un renglón.
      </p>
     <li>
      <p>
       Una <dfn>prueba de escritorio</dfn> es la ejecución detallada y
       paso a paso de un programa.
      </p>
     </li>
     <li>
      <p>
       <dfn>Depurar</dfn> es controlar la realización de una prueba de
       escritorio usando una herramienta de desarrollo.
      </p>
     </li>
     <li>
      <p>
       Usaremos la herramienta
       <a target="_blank"
         href="https://gilpgedit.github.io/">https://gilpgedit.github.io/</a>
       y los navegadores web para depurar los programas.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida.</h2>
     <iframe src="/2_conceptos/src/1_orden.html"></iframe>
     <p class="noPrint">
      <a target="_blank" href="/2_conceptos/src/1_orden.html">Ábrelo en otra pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20document.write(%22p%3Cbr%3E%22)%3B%20document.write(%22a%22)%3B%0A%20document.write(%22u%22)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"p&lt;br&gt;"</span>);&nbsp;<span
         style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"a"</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"u"</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("e-orden", EOrden);