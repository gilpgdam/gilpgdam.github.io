import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class FPrompt extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. La función prompt</h1>
   <div class="lectura">
    <p>
     La función <dfn>prompt</dfn> sirve para pedir datos.
    </p>
    <h2>Ejemplo</h2>
   </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">nombre</span>&nbsp;=&nbsp;<span
         style="color: #795e26;">prompt</span>(<span
         style="color: #a31515;">"Nombre:"</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"Hola&nbsp;"</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #0070c1;">nombre</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">".&nbsp;Lindo&nbsp;día."</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
    <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank" href="src/5_prompt.html">Ábrelo en otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20nombre%20%3D%20prompt(%22Nombre%3A%22)%3B%0A%20document.write(%22Hola%20%22)%3B%0A%20document.write(nombre)%3B%0A%20document.write(%22.%20Lindo%20d%C3%ADa.%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("f-prompt", FPrompt);