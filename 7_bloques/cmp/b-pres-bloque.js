import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BPresBloque extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Depura bloques</h1>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/5_bloques/src/1_bloques.html"></iframe>
     <p class="noPrint">
      <a target="_blank" href="/5_bloques/src/1_bloques.html">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20y%20%3D%20%22z%22%3B%0A%20document.write(%22p%22)%3B%0A%20document.write(y)%3B%0A%20%7B%0A%20%20const%20x%20%3D%20%22gg%22%3B%0A%20%20document.write(x)%3B%0A%20%20document.write(y)%3B%0A%20%7D%0A%20document.write(y)%3B%0A%20document.write(%22a%22)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">y</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"z"</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"p"</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">y</span>);</div>
      <div>&nbsp;{</div>
      <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">x</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"gg"</span>;</div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">x</span>);</div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">y</span>);</div>
      <div>&nbsp;}</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">y</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"a"</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("b-pres-bloque", BPresBloque);