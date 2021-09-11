import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Asignacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Operadores con asignación</h1>
   <div class="lectura">
    <p>
     Aparte del operador de asignación
     (<code class="language-kotlin" style="color: #0000ff;">=</code>),
     hay otros operadores que permiten cambiar el valor de una variable.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">b</span>&nbsp;=&nbsp;<span
        style="color: #098658;">4</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">d</span>&nbsp;=&nbsp;<span
        style="color: #098658;">5</span>;</div>
     <div>&nbsp;<span style="color: #001080;">b</span>&nbsp;=&nbsp;<span
        style="color: #0070c1;">d</span>&nbsp;*&nbsp;<span
        style="color: #098658;">2</span>;&nbsp;<span
        style="color: #008000;">//&nbsp;b&nbsp;===&nbsp;10</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>);</div>
     <div>&nbsp;<span style="color: #001080;">b</span>&nbsp;+=&nbsp;<span
        style="color: #0070c1;">d</span>;&nbsp;<span
        style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;+&nbsp;d;&nbsp;b&nbsp;===&nbsp;15</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>);</div>
     <div>&nbsp;<span style="color: #001080;">b</span>&nbsp;-=&nbsp;<span
        style="color: #098658;">2</span>;&nbsp;<span
        style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;-&nbsp;2;&nbsp;b&nbsp;===&nbsp;13</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>);</div>
     <div>&nbsp;<span style="color: #001080;">b</span>&nbsp;*=&nbsp;<span
        style="color: #098658;">3</span>;&nbsp;<span
        style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;*&nbsp;3;&nbsp;b&nbsp;===&nbsp;39</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>);</div>
     <div>&nbsp;<span style="color: #001080;">b</span>&nbsp;/=&nbsp;<span
        style="color: #098658;">3</span>;&nbsp;<span
        style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;/&nbsp;3;&nbsp;b&nbsp;===&nbsp;13</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>);</div>
     <div>&nbsp;<span style="color: #001080;">b</span>&nbsp;%=&nbsp;<span
        style="color: #098658;">5</span>;&nbsp;<span
        style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;%&nbsp;5;&nbsp;b&nbsp;===&nbsp;3</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>);</div>
     <div>&nbsp;<span style="color: #001080;">b</span>&nbsp;**=&nbsp;<span
        style="color: #098658;">2</span>;&nbsp;<span
        style="color: #008000;">//&nbsp;b&nbsp;=&nbsp;b&nbsp;**&nbsp;2;&nbsp;b&nbsp;===&nbsp;9</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">b</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank" href="src/2_asignacion.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20b%20%3D%204%3B%0A%20const%20d%20%3D%205%3B%0A%20b%20%3D%20d%20*%202%3B%20%2F%2F%20b%20%3D%3D%3D%2010%0A%20document.write(b)%3B%0A%20b%20%2B%3D%20d%3B%20%2F%2F%20b%20%3D%20b%20%2B%20d%3B%20b%20%3D%3D%3D%2015%0A%20document.write(b)%3B%0A%20b%20-%3D%202%3B%20%2F%2F%20b%20%3D%20b%20-%202%3B%20b%20%3D%3D%3D%2013%0A%20document.write(b)%3B%0A%20b%20*%3D%203%3B%20%2F%2F%20b%20%3D%20b%20*%203%3B%20b%20%3D%3D%3D%2039%0A%20document.write(b)%3B%0A%20b%20%2F%3D%203%3B%20%2F%2F%20b%20%3D%20b%20%2F%203%3B%20b%20%3D%3D%3D%2013%0A%20document.write(b)%3B%0A%20b%20%25%3D%205%3B%20%2F%2F%20b%20%3D%20b%20%25%205%3B%20b%20%3D%3D%3D%203%0A%20document.write(b)%3B%0A%20b%20**%3D%202%3B%20%2F%2F%20b%20%3D%20b%20**%202%3B%20b%20%3D%3D%3D%209%0A%20document.write(b)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("c-asignacion", Asignacion);