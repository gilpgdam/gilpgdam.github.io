import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Código con <strong>do-while</strong></h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">respuesta</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">""</span>;</div>
     <div>&nbsp;<span style="color: #af00db;">do</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">respuesta</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">prompt</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Selecciona&nbsp;un&nbsp;género&nbsp;musical:</span>
     </div>
     <div><span style="color: #a31515;">&nbsp;1&nbsp;-&nbsp;Pop</span></div>
     <div><span style="color: #a31515;">&nbsp;2&nbsp;-&nbsp;Reguetón&grave;</span>);
     </div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">while</span>&nbsp;(<span
        style="color: #001080;">respuesta</span>&nbsp;!==&nbsp;<span
        style="color: #a31515;">"1"</span></div>
     <div>&nbsp;&nbsp;&amp;&amp;&nbsp;<span
        style="color: #001080;">respuesta</span>&nbsp;!==&nbsp;<span
        style="color: #a31515;">"2"</span>);</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Adios."</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank" href="src/2_do_while_prog.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20respuesta%20%3D%20%22%22%3B%0A%20do%20%7B%0A%20%20respuesta%20%3D%20prompt(%0A%20%20%20%60Selecciona%20un%20g%C3%A9nero%20musical%3A%0A%201%20-%20Pop%0A%202%20-%20Reguet%C3%B3n%60)%3B%0A%20%7D%20while%20(respuesta%20!%3D%3D%20%221%22%0A%20%20%26%26%20respuesta%20!%3D%3D%20%222%22)%3B%0A%20document.write(%22Adios.%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("b-codigo-12", BCodigo);