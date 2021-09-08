import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OpY extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Operador lógico Y</h1>
   <div class="lectura">
    <p>
     <code class="language-javascript">x && y</code>
     es el operador Y en corto circuito.
    </p>
    <p>
     Si
     <code class="language-javascript">x</code>
     se evalúa a
     <code class="language-javascript">false</code>,
     el resultado es
     <code class="language-javascript">x</code>
     y no se evalúa
     <code class="language-javascript">y</code>;
     de lo contrario, el resultado es
     <code class="language-javascript">y</code>.
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0000ff;">false</span>&nbsp;&amp;&amp;&nbsp;<span
        style="color: #0000ff;">true</span>);&nbsp;<span
        style="color: #008000;">//F</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0000ff;">false</span>&nbsp;&amp;&amp;&nbsp;<span
        style="color: #0000ff;">false</span>);<span
        style="color: #008000;">//F</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0000ff;">true</span>&nbsp;&amp;&amp;&nbsp;<span
        style="color: #0000ff;">true</span>);&nbsp;&nbsp;<span
        style="color: #008000;">//T</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0000ff;">true</span>&nbsp;&amp;&amp;&nbsp;<span
        style="color: #0000ff;">false</span>);&nbsp;<span
        style="color: #008000;">//F</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("a-op-y", OpY);