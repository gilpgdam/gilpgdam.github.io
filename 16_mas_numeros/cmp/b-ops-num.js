import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OpsNum extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Operadores numéricos</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #008000;">//&nbsp;Suma</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">5</span>&nbsp;+&nbsp;<span
        style="color: #098658;">2</span>);&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;7</span></div>
     <div>&nbsp;<span style="color: #008000;">//&nbsp;Resta</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">5</span>&nbsp;-&nbsp;<span
        style="color: #098658;">2</span>);&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;3</span></div>
     <div>&nbsp;<span style="color: #008000;">//&nbsp;Multiplicación</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">5</span>&nbsp;*&nbsp;<span
        style="color: #098658;">2</span>);&nbsp;&nbsp;<span
        style="color: #008000;">//10</span></div>
     <div>&nbsp;<span style="color: #008000;">//&nbsp;Potencia</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">5</span>&nbsp;**&nbsp;<span
        style="color: #098658;">2</span>);&nbsp;<span
        style="color: #008000;">//25</span></div>
     <div>&nbsp;<span style="color: #008000;">//&nbsp;División</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">5</span>&nbsp;/&nbsp;<span
        style="color: #098658;">2</span>);&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;2.5</span></div>
     <div>&nbsp;<span
        style="color: #008000;">//&nbsp;Módulo&nbsp;o&nbsp;residuo</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #098658;">5</span>&nbsp;%&nbsp;<span
        style="color: #098658;">2</span>);&nbsp;<span
        style="color: #008000;">//&nbsp;&nbsp;1</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("b-ops-num", OpsNum);