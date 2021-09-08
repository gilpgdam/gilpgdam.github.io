import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class IncrYDecr extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Incremento y decremento</h1>
   <div class="lectura">
    <p>
     También hay operadores de incremento y decremento en 1, pero son algo
     truculentos; es mejor usarlos solos, sin combinarlos con otros
     operadores.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">z</span>&nbsp;=&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">z</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;0</span></div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Incremento.&nbsp;Aumenta&nbsp;z&nbsp;en&nbsp;1.</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">z</span>++;</div>
     <div>&nbsp;<span style="color: #008000;">//&nbsp;z&nbsp;===&nbsp;1</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">z</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;1</span></div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Decremento.&nbsp;Disminuye&nbsp;z&nbsp;en&nbsp;1.</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">z</span>--;</div>
     <div>&nbsp;<span style="color: #008000;">//&nbsp;z&nbsp;===&nbsp;0</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">z</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;0</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank" href="src/3_incr_y_decr.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20z%20%3D%200%3B%0A%20document.write(z)%3B%20%2F%2F%200%0A%20%2F%2F%20Incremento.%20Aumenta%20z%20en%201.%0A%20z%2B%2B%3B%0A%20%2F%2F%20z%20%3D%3D%3D%201%0A%20document.write(z)%3B%20%2F%2F%201%0A%20%2F%2F%20Decremento.%20Disminuye%20z%20en%201.%0A%20z--%3B%0A%20%2F%2F%20z%20%3D%3D%3D%200%0A%20document.write(z)%3B%20%2F%2F%200%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("d-incr-y-decr", IncrYDecr);