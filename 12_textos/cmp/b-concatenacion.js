import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Concatenacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   B. Operador de concatenación
   <em>a</em> <strong>+</strong> <em>b</em>
  </h1>
  <div class="lectura">
   <p>
    Cuando uno de los 2 operandos del operador
    <code class="language-javascript">+</code>
    es
    <code class="language-javascript">string</code>,
    se realiza una
    <dfn>concatenación</dfn>,
    que consiste en convertir los 2 operandos en texto y juntarlos.
   </p>
  </div>
  <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/10_textos/src/1_concatenacion.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/10_textos/src/1_concatenacion.html">Ábrelo en otra pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cmeta%20name%3D%22viewport%22%0A%20%20content%3D%22width%3Ddevice-width%22%3E%0A%3Cscript%3E%0A%20debugger%3B%0A%20document.%0A%20%20write(%22ab%22%20%2B%20'%24%20h')%3B%2F%2Fab%24%20h%0A%20document.%0A%20%20write(%22gg%22%20%2B%202)%3B%20%20%20%20%2F%2Fgg2%0A%20document.%0A%20%20write(true%20%2B%20%22gg%22)%3B%20%2F%2Ftruegg%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"ab"</span>&nbsp;+&nbsp;<span
        style="color: #a31515;">'$&nbsp;h'</span>);<span
        style="color: #008000;">//ab$&nbsp;h</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #a31515;">"gg"</span>&nbsp;+&nbsp;<span
        style="color: #098658;">2</span>);&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #008000;">//gg2</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">write</span>(<span
        style="color: #0000ff;">true</span>&nbsp;+&nbsp;<span
        style="color: #a31515;">"gg"</span>);&nbsp;<span
        style="color: #008000;">//truegg</span></div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("b-concatenacion", Concatenacion);