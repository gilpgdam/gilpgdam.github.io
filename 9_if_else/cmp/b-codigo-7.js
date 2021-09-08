import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Código</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">respuesta</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">prompt</span>(</div>
     <div>&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Agua&nbsp;pasa&nbsp;por&nbsp;mi&nbsp;casa</span>
     </div>
     <div><span style="color: #a31515;">cate&nbsp;de&nbsp;mi&nbsp;corazón.</span>
     </div>
     <div><span style="color: #a31515;">¿Qué&nbsp;es?&grave;</span>);</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">respuesta</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"el&nbsp;aguacate"</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Bien."</span>);</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Mal."</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"Adios."</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank" href="src/2_if_else.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20respuesta%20%3D%20prompt(%0A%20%20%60Agua%20pasa%20por%20mi%20casa%0Acate%20de%20mi%20coraz%C3%B3n.%0A%C2%BFQu%C3%A9%20es%3F%60)%3B%0A%20if%20(respuesta%20%3D%3D%3D%20%22el%20aguacate%22)%20%7B%0A%20%20document.write(%22Bien.%22)%3B%0A%20%7D%20else%20%7B%0A%20%20document.write(%22Mal.%22)%3B%0A%20%7D%0A%20document.write(%22Adios.%22)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("b-codigo-7", BCodigo);