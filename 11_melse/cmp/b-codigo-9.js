import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Código con condicional múltiple con <strong>else</strong></a></h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">respuesta</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">prompt</span>(</div>
     <div>&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Selecciona&nbsp;un&nbsp;género&nbsp;musical:</span>
     </div>
     <div><span style="color: #a31515;">&nbsp;1&nbsp;-&nbsp;Pop</span></div>
     <div><span style="color: #a31515;">&nbsp;2&nbsp;-&nbsp;Reguetón&grave;</span>);
     </div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">respuesta</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"1"</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Ariana&nbsp;Grande."</span>);</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;<span
        style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">respuesta</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"2"</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Bad&nbsp;Bunny."</span>);</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"Opción&nbsp;incorrecta."</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Adios."</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank" href="src/4_melse.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20respuesta%20%3D%20prompt(%0A%20%20%60Selecciona%20un%20g%C3%A9nero%20musical%3A%0A%201%20-%20Pop%0A%202%20-%20Reguet%C3%B3n%60)%3B%0A%20if%20(respuesta%20%3D%3D%3D%20%221%22)%20%7B%0A%20%20document.write(%22Ariana%20Grande.%22)%3B%0A%20%7D%20else%20if%20(respuesta%20%3D%3D%3D%20%222%22)%20%7B%0A%20%20document.write(%22Bad%20Bunny.%22)%3B%0A%20%7D%20else%20%7B%0A%20%20document.write(%0A%20%20%20%22Opci%C3%B3n%20incorrecta.%22)%3B%0A%20%7D%0A%20document.write(%22Adios.%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("b-codigo-9", BCodigo);