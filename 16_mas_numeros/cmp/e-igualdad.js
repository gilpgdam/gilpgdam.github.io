import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Igualdad extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Operadores de igualdad</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Igual&nbsp;que&nbsp;(===)</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">3</span>&nbsp;===&nbsp;<span
        style="color: #098658;">3</span>);&nbsp;&nbsp;<span
        style="color: #008000;">//true</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">3</span>&nbsp;===&nbsp;-<span
        style="color: #098658;">3</span>);&nbsp;<span
        style="color: #008000;">//false</span></div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Diferente&nbsp;de&nbsp;(!==)</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">3</span>&nbsp;!==&nbsp;<span
        style="color: #098658;">3</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;false</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">3</span>&nbsp;!==&nbsp;<span
        style="color: #098658;">8</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;true</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("e-igualdad", Igualdad);