import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class ENoEncontradas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Variables no encontradas</h1>
   <div class="lectura">
    <p>
     Cuando tratas de usar una variable o una constante no definida, obtienes
     un mensaje de error y se aborta la ejecución del programa.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Consola</h3>
     <pre><samp><span style="color: red;">Uncaught ReferenceError: bb is not defined</span></samp></pre>
     <p class="noPrint">
      <a target="_blank" href="src/4_no_definida.html">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20b%20%3D%20%22BB%22%3B%0A%20document.write(bb)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
         style="color: #001080;">b</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"BB"</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #001080;">bb</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("e-no-encontradas", ENoEncontradas);