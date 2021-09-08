import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Código con <strong>for</strong></h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Hola."</span>);</div>
     <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
        style="color: #0000ff;">var</span>&nbsp;<span
        style="color: #001080;">i</span>&nbsp;=&nbsp;<span
        style="color: #098658;">1</span>,&nbsp;<span
        style="color: #001080;">j</span>&nbsp;=&nbsp;<span
        style="color: #098658;">3</span>;</div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">i</span>&nbsp;&lt;=&nbsp;<span
        style="color: #098658;">3</span>;</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">i</span>++)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">i</span>&nbsp;+&nbsp;<span
        style="color: #001080;">j</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Adios."</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank" href="src/1_for_asc.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20document.write(%22Hola.%22)%3B%0A%20for%20(var%20i%20%3D%201%2C%20j%20%3D%203%3B%0A%20%20i%20%3C%3D%203%3B%0A%20%20i%2B%2B)%20%7B%0A%20%20document.write(i%20%2B%20j)%3B%0A%20%7D%0A%20document.write(%22Adios.%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("b-16-codigo", BCodigo);