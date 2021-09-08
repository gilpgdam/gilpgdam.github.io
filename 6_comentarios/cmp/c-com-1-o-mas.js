import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class CCom1OMas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Comentarios de una o más líneas</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los
       <dfn>comentarios de una o más líneas</dfn>
       empiezan con el texto
       <code class="language-javascript" style="color: #008000;">/*</code>
       y terminan con
       <code class="language-javascript" style="color: #008000;">*/</code>.
      </p>
     </li>
     <li>
      <p>Usan una o más líneas.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/4_comentarios/src/2_comentarios_una_o_mas.html"></iframe>
     <p class="noPrint">
      <a target="_blank" href="/4_comentarios/src/2_comentarios_una_o_mas.html">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20%2F*%20Muestra%20Hola%20pp.%20*%2F%0A%20document.write(%22Hola%22%2C%20%22pp%22)%3B%0A%20document.write(%22t%22)%3B%2F*Muestra%20t*%2F%0A%20%2F*%20Muestra%0A%20%20*%20bb.%20*%2F%0A%20document.write(%22bb%22)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span
         style="color: #008000;">/*&nbsp;Muestra&nbsp;Hola&nbsp;pp.&nbsp;*/</span>
      </div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"Hola"</span>,&nbsp;<span
         style="color: #a31515;">"pp"</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"t"</span>);<span
         style="color: #008000;">/*Muestra&nbsp;t*/</span></div>
      <div>&nbsp;<span style="color: #008000;">/*&nbsp;Muestra</span></div>
      <div><span style="color: #008000;">&nbsp;&nbsp;*&nbsp;bb.&nbsp;*/</span>
      </div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"bb"</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("c-com-1-o-mas", CCom1OMas);