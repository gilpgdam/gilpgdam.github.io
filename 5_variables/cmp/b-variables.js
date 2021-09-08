import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BVariables extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Variables</h1>
   <div class="lectura">
    <p>
     Una
     <dfn>variable</dfn>
     es un lugar en donde se almacena un datoque puede cambiar durante la
     ejecución de un programa.
    </p>
    <h2>Declaración</h2>
    <p>
     Para usar una variable, primero hay que declararla con una instrucción como
     la siguiente:
    </p>
    <pre><code class="language-javascript"><span style="color: #0000ff;">let</span>&nbsp;<span style="color: #001080;">miNombre</span>&nbsp;=&nbsp;<span style="color: #a31515;">"pp"</span>;</code></pre>
    <ul>
     <li>
      <p>
       Se declaran con
       <code class="language-javascript" style="color: #0000ff;">let</code>
       o con
       <code class="language-javascript" style="color: #0000ff;">var</code>,
       aunque se recomienda usar
       <code class="language-javascript" style="color: #0000ff;">let</code>.
      </p>
     </li>
     <li>
      <p>
       Tienen asociado un
       <dfn>nombre</dfn>,
       con la estructura de un identificador y normalmente empieza con minúscula.
       En este caso, la variable se llama
       <code><span style="color: #001080;">miNombre</span></code>.
      </p>
     </li>
     <li>
      <p>
       Tienen asociado un <dfn>valor</dfn>, que es un dato, el cual puede
       cambiar durante la ejecución del programa. En este caso el valor es
       <code><span style="color: #a31515;">"pp"</span></code>.
      </p>
     </li>
     <li>
      <p>
       El
       <dfn>
        operador de asignación
        (<code class="language-javascript" style="color: #0000ff;">=</code>)
       </dfn>
       sirve para cambiar el valor de una variable, perdiendo el valor anterior.
       El operando del lado izquierdo siempre debe ser una variable.
      </p>
     </li>
     <li>
      <p>
       Cuando el nombre de una variable no aparece a la izquierda del operador de
       asignación, se usa su valor.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/3_variables/src/1_variables.html"></iframe>
     <p class="noPrint">
      <a target="_blank" href="/3_variables/src/1_variables.html">Ábrelo en otra pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20let%20miNombre%20%3D%20%22pp%22%3B%0A%20let%20suNombre%20%3D%20%22tt%22%3B%0A%20document.write(miNombre)%3B%0A%20document.write(suNombre)%3B%0A%20document.write(%22miNombre%22)%3B%0A%20miNombre%20%3D%20%22bb%22%3B%0A%20document.write(miNombre)%3B%0A%20suNombre%20%3D%20miNombre%3B%0A%20document.write(suNombre)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
         style="color: #001080;">miNombre</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"pp"</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
         style="color: #001080;">suNombre</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"tt"</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #001080;">miNombre</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #001080;">suNombre</span>);</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">"miNombre"</span>);</div>
      <div>&nbsp;<span style="color: #001080;">miNombre</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">"bb"</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #001080;">miNombre</span>);</div>
      <div>&nbsp;<span style="color: #001080;">suNombre</span>&nbsp;=&nbsp;<span
         style="color: #001080;">miNombre</span>;</div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #001080;">suNombre</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("b-variables", BVariables);