import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OrdenIgualdad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Operadores combinados de orden e Igualdad</h1>
   <div class="lectura">
    <p>En el ejemplo que sigue, el orden natural es:</p>
    <p>0 &lt; 3 &lt; 8</p>
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
        style="color: #098658;">3</span>&nbsp;&lt;=&nbsp;<span
        style="color: #098658;">0</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;false</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">3</span>&nbsp;&lt;=&nbsp;<span
        style="color: #098658;">3</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;true</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">3</span>&nbsp;&lt;=&nbsp;<span
        style="color: #098658;">8</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;true</span></div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Mayor&nbsp;o&nbsp;igual&nbsp;que&nbsp;(&gt;=)</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #098658;">3</span>&nbsp;&gt;=&nbsp;<span
        style="color: #098658;">0</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;true</span></div>
     <div>&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #098658;">3</span>&nbsp;&gt;=&nbsp;<span
        style="color: #098658;">3</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;true</span></div>
     <div>&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #098658;">3</span>&nbsp;&gt;=&nbsp;<span
        style="color: #098658;">8</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;false</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("g-orden-igualdad", OrdenIgualdad);