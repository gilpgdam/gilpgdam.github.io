import { Diapositiva } from "../../lib/Diapositiva.js";

export class FResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       <dfn>JavaScript</dfn>
       es un lenguaje de programación.
      </p>
     </li>
     <li>
      <p>
       Los
       <dfn>caracteres</dfn>
       son los diferentes símbolos de comunicación escrita.
      </p>
     </li>
     <li>
      <p>
       Una
       <dfn>cadena de texto</dfn>
       es un secuencia de caracteres.
      </p>
     </li>
     <li>
      <p>
       La instrucción
       <dfn>
        <code class="language-javascript"><span
          style="color: #001080;">document</span>.<span
          style="color: #795e26;">write</span></code>
       </dfn>
       muestra un texto en una página web.
      </p>
     </li>
     <li>
      <p>Los renglones de instrucciones se ejecutan de arriba para abajo.</p>
     </li>
     <li>
      <p>
       En cada renglón, las instrucciones se ejecutan de izquierda a derecha.
      </p>
     </li>
     <li>
      <p>
       Una <dfn>prueba de escritorio</dfn> es la ejecución detallada y
       paso a paso de un programa.
      </p>
     </li>
     <li>
      <p>
       <dfn>Depurar</dfn> es controlar la realización de una prueba de
       escritorio usando una herramienta de desarrollo.
      </p>
     </li>
     <li>
      <p>
       Usaremos la herramienta
       <a target="_blank"
         href="https://gilpgedit.github.io/">https://gilpgedit.github.io/</a>
         y los navegadores web para depurar los programas.
      </p>
     </li>
    </ul>`;
 }
}

customElements.define("f-resumen-2", FResumen);