import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OpTernario extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Operador lógico ternario</h1>
   <div class="lectura">
    <p>
     <code class="language-javascript">x ? y : z</code></dt>
     es el operador ternario.
    </p>
    <p>
     Si
     <code class="language-javascript">x</code>
     se evalúa a
     <code class="language-javascript">true</code>,
     el resultado es
     <code class="language-javascript">y</code>;
     de lo contrario, el resultado es
     <code class="language-javascript">z</code>.
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0000ff;">true</span>&nbsp;?&nbsp;<span
        style="color: #098658;">3</span>&nbsp;:&nbsp;<span
        style="color: #098658;">8</span>);&nbsp;<span
        style="color: #008000;">//3</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #0000ff;">false</span>&nbsp;?&nbsp;<span
        style="color: #098658;">3</span>&nbsp;:&nbsp;<span
        style="color: #098658;">8</span>);<span
        style="color: #008000;">//8</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("d-op-ternario", OpTernario);