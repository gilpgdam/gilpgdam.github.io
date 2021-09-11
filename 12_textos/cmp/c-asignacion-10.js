import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Asignacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   C. Operador de concatenación con asignación
   <em>a</em> <strong>+=</strong> <em>x</em>
  </h1>
  <div class="lectura">
   <ul>
    <li>
     <p>Equivale a</p>
     <pre><code class="language-kotlin">a = a + x;</code></pre>
     <p>pero se ejecuta más rápido.</p>
    </li>
    <li>
     <p>Nota que el primer operando debe ser una variable.</p>
    </li>
   </ul>
   <h2>Ejemplo</h2>
  </div>
  <div class="horizontal">
   <div>
    <h2>Salida</h2>
    <iframe src="/10_textos/src/2_asignacion.html"></iframe>
    <p class="noPrint">
     <a target="_blank" href="/10_textos/src/2_asignacion.html">Ábrelo en otra
      pestaña.</a>
    </p>
    <p class="noPrint">
     <a target="_blank"
       href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20c%20%3D%20%22h%22%3B%0A%20const%20D%20%3D%20%22.%22%3B%0A%20c%20%2B%3D%20%22gg%22%3B%2F%2F%20c%20%E2%9E%9D%20%22hgg%22%0A%20document.write(c)%3B%0A%20c%20%2B%3D%202%3B%20%20%20%2F%2F%20c%20%E2%9E%9D%20%22hgg2%22%0A%20document.write(c)%3B%0A%20c%20%2B%3D%20D%3B%20%20%20%2F%2F%20c%20%E2%9E%9D%20%22hgg2.%22%0A%20document.write(c)%3B%0A%3C%2Fscript%3E">
      Revísalo en gilpgedit.
     </a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">c</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"h"</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">D</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"."</span>;</div>
     <div>&nbsp;<span style="color: #001080;">c</span>&nbsp;+=&nbsp;<span
        style="color: #a31515;">"gg"</span>;<span
        style="color: #008000;">//&nbsp;c&nbsp;➝&nbsp;"hgg"</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">c</span>);</div>
     <div>&nbsp;<span style="color: #001080;">c</span>&nbsp;+=&nbsp;<span
        style="color: #098658;">2</span>;&nbsp;&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;c&nbsp;➝&nbsp;"hgg2"</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">c</span>);</div>
     <div>&nbsp;<span style="color: #001080;">c</span>&nbsp;+=&nbsp;<span
        style="color: #0070c1;">D</span>;&nbsp;&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;c&nbsp;➝&nbsp;"hgg2."</span></div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">c</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
  </div>`;
 }
}

customElements.define("c-asignacion-10", Asignacion);