import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   D. Código con <strong>switch</strong> y <strong>default</strong>
  </h1>
  <muestra-codigo>
   <div>
    <div><span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
    <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
       style="color: #001080;">género</span>&nbsp;=&nbsp;<span
       style="color: #795e26;">prompt</span>(</div>
    <div>&nbsp;&nbsp;<span
       style="color: #a31515;">&grave;Selecciona&nbsp;un&nbsp;género&nbsp;musical:</span>
    </div>
    <div><span style="color: #a31515;">&nbsp;1&nbsp;-&nbsp;Pop</span></div>
    <div><span style="color: #a31515;">&nbsp;2&nbsp;-&nbsp;Reguetón</span></div>
    <div><span style="color: #a31515;">&nbsp;3&nbsp;-&nbsp;Balada</span></div>
    <div><span style="color: #a31515;">&nbsp;4&nbsp;-&nbsp;Mariachi</span></div>
    <div><span style="color: #a31515;">&nbsp;5&nbsp;-&nbsp;Cumbia</span></div>
    <div><span style="color: #a31515;">&nbsp;6&nbsp;-&nbsp;Tango&grave;</span>);</div>
    <div>&nbsp;<span style="color: #af00db;">switch</span>&nbsp;(<span
       style="color: #001080;">género</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">case</span>&nbsp;<span
       style="color: #a31515;">"1"</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">"Ariana&nbsp;Grande"</span>);</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">case</span>&nbsp;<span
       style="color: #a31515;">"3"</span>:</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">case</span>&nbsp;<span
       style="color: #a31515;">"4"</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">"Juan&nbsp;Gabriel"</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">break</span>;</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">default</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">"De&nbsp;ese&nbsp;género&nbsp;no&nbsp;conozco."</span>);
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">break</span>;</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">case</span>&nbsp;<span
       style="color: #a31515;">"5"</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">"Selena"</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">break</span>;</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">case</span>&nbsp;<span
       style="color: #a31515;">"2"</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">"Bad&nbsp;Bunny"</span>);</div>
    <div>&nbsp;}</div>
    <div>&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #795e26;">write</span>(<span
       style="color: #a31515;">"Adios."</span>);</div>
    <div><span style="color: #800000;">&lt;/script&gt;</span></div>
   </div>
  </muestra-codigo>
  <div class="lectura noPrint">
   <p class="noPrint">
    <a target="_blank" href="src/2_switch_default.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20g%C3%A9nero%20%3D%20prompt(%0A%20%20%60Selecciona%20un%20g%C3%A9nero%20musical%3A%0A%201%20-%20Pop%0A%202%20-%20Reguet%C3%B3n%0A%203%20-%20Balada%0A%204%20-%20Mariachi%0A%205%20-%20Cumbia%0A%206%20-%20Tango%60)%3B%0A%20switch%20(g%C3%A9nero)%20%7B%0A%20%20case%20%221%22%3A%0A%20%20%20document.write(%22Ariana%20Grande%22)%3B%0A%20%20case%20%223%22%3A%0A%20%20case%20%224%22%3A%0A%20%20%20document.write(%22Juan%20Gabriel%22)%3B%0A%20%20%20break%3B%0A%20%20default%3A%0A%20%20%20document.write(%22De%20ese%20g%C3%A9nero%20no%20conozco.%22)%3B%0A%20%20%20break%3B%0A%20%20case%20%225%22%3A%0A%20%20%20document.write(%22Selena%22)%3B%0A%20%20%20break%3B%0A%20%20case%20%222%22%3A%0A%20%20%20document.write(%22Bad%20Bunny%22)%3B%0A%20%7D%0A%20document.write(%22Adios.%22)%3B%0A%3C%2Fscript%3E">
     Revísalo en gilpgedit.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("d-17-codigo-switch-default", BCodigo);