import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class DDuplicadas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Variables Duplicadas</h1>
   <div class="lectura">
    <p>
     Las variables o constantes declaradas en el mismo espacio no pueden
     tener el mismo nombre.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <pre><samp><span style="color: red;">Uncaught SyntaxError: Identifier 'a' has already been declared</span></samp></pre>
     <p class="noPrint">
      <a target="_blank" href="src/3_duplicados.html">Ábrelo en otra pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20a%20%3D%20%22Q1%22%3B%0A%20document.write(a)%3B%0A%20const%20a%20%3D%20%22Q2%22%3B%0A%20document.write(a)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
     <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">a</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"Q1"</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">a</span>);</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">a</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"Q2"</span>;</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">write</span>(<span
        style="color: #001080;">a</span>);</div>
     <div><span style="color: #800000;">&lt;/script&gt;</span></div>
    </div>
   </muestra-codigo>
   </div>`;
 }
}

customElements.define("d-duplicadas", DDuplicadas);