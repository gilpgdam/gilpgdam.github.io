import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E12Plantillas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Plantillas de Texto</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Las <dfn>plantillas de texto</dfn> son secuencias de caracteres
       delimitadas por el símbolo <dfn>acento invertido</dfn>
       (<code class="language-kotlin">&grave;</code>),
       que se genera con <kbd>Alt&nbsp;Gr+}</kbd> en el teclado latinoamericano.
      </p>
     </li>
     <li>
      <p>
       En su interior puedes poner cualquier caracter, excepto acento
       invertido.
      </p>
     </li>
     <li>
      <p>Puede incluir saltos de línea.</p>
     </li>
     <li>
      <p>
       En su interior puedes poner la secuencia
       <code class="language-kotlin">&dollar;{}</code>,
       que permite poner en el interior de las llaves una expresión,
       cuyo resultado convertido a texto sustituye a toda esta secuencia.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/10_textos/src/3_plantillas.html"></iframe>
     <p class="noPrint">
      <a target="_blank" href="/10_textos/src/3_plantillas.html">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3Cscript%3E%0A%20debugger%3B%0A%20const%20TT%20%3D%20%60bb%60%3B%0A%20const%20T%20%3D%202%3B%0A%20%2F*%20Muestra%3A%20Ejemplo%0A%20de%20bb*%2F%0A%20document.write(%60%3Cpre%3EEjemplo%0Ade%20%24%7BTT%7D%3C%2Fpre%3E%60)%3B%0A%20%2F*%20Muestra%3A%20288%0A%20de%20bb%20yy*%2F%0A%20document.write(%60%3Cpre%3E%24%7BT%20%2B%20%228%22%7D8%0Ade%20%24%7BTT%7D%20yy%3C%2Fpre%3E%60)%3B%0A%3C%2Fscript%3E">
       Revísalo en gilpgedit.
      </a>
     </p>
    </div>
    <muestra-codigo>
     <div>
      <div><span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;<span style="color: #0000ff;">debugger</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">TT</span>&nbsp;=&nbsp;<span
         style="color: #a31515;">&grave;bb&grave;</span>;</div>
      <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">T</span>&nbsp;=&nbsp;<span
         style="color: #098658;">2</span>;</div>
      <div>&nbsp;<span style="color: #008000;">/*&nbsp;Muestra:&nbsp;Ejemplo</span>
      </div>
      <div><span style="color: #008000;">&nbsp;de&nbsp;bb*/</span></div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">&grave;&lt;pre&gt;Ejemplo</span></div>
      <div><span style="color: #a31515;">de&nbsp;</span><span
         style="color: #0000ff;">&dollar;{</span><span
         style="color: #0070c1;">TT</span><span
         style="color: #0000ff;">}</span><span
         style="color: #a31515;">&lt;/pre&gt;&grave;</span>);</div>
      <div>&nbsp;<span style="color: #008000;">/*&nbsp;Muestra:&nbsp;288</span>
      </div>
      <div><span style="color: #008000;">&nbsp;de&nbsp;bb&nbsp;yy*/</span></div>
      <div>&nbsp;<span style="color: #001080;">document</span>.<span
         style="color: #795e26;">write</span>(<span
         style="color: #a31515;">&grave;&lt;pre&gt;</span><span
         style="color: #0000ff;">&dollar;{</span><span
         style="color: #0070c1;">T</span>&nbsp;+&nbsp;<span
         style="color: #a31515;">"8"</span><span
         style="color: #0000ff;">}</span><span style="color: #a31515;">8</span>
      </div>
      <div><span style="color: #a31515;">de&nbsp;</span><span
         style="color: #0000ff;">&dollar;{</span><span
         style="color: #0070c1;">TT</span><span
         style="color: #0000ff;">}</span><span
         style="color: #a31515;">&nbsp;yy&lt;/pre&gt;&grave;</span>);</div>
      <div><span style="color: #800000;">&lt;/script&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("e12-plantillas", E12Plantillas);