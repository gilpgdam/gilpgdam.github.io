import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G12OrdenIgualdad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Operadores Combinados de Orden e Igualdad</h1>
   <div class="lectura">
    <p>En el ejemplo que sigue, el orden natural es:</p>
    <p>"aa" &lt; "ah" &lt; "ai"</p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Menor&nbsp;o&nbsp;igual&nbsp;que&nbsp;(&lt;=)</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ah"</span>&nbsp;&lt;=&nbsp;<span
        style="color: #a31515;">"aa"</span>);&nbsp;<span
        style="color: #008000;">//F</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ah"</span>&nbsp;&lt;=&nbsp;<span
        style="color: #a31515;">"ah"</span>);&nbsp;<span
        style="color: #008000;">//T</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ah"</span>&nbsp;&lt;=&nbsp;<span
        style="color: #a31515;">"ai"</span>);&nbsp;<span
        style="color: #008000;">//T</span></div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Mayor&nbsp;o&nbsp;igual&nbsp;que&nbsp;(&gt;=)</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ah"</span>&nbsp;&gt;=&nbsp;<span
        style="color: #a31515;">"aa"</span>);&nbsp;<span
        style="color: #008000;">//T</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ah"</span>&nbsp;&gt;=&nbsp;<span
        style="color: #a31515;">"ah"</span>);&nbsp;<span
        style="color: #008000;">//T</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ah"</span>&nbsp;&gt;=&nbsp;<span
        style="color: #a31515;">"ai"</span>);&nbsp;<span
        style="color: #008000;">//F</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("g12-orden-igualdad", G12OrdenIgualdad);