import { Diapositiva } from "../../lib/Diapositiva.js";

export class AIdentificadores extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Identificadores</h1>
   <div class="lectura">
    <p>
     Un <dfn>identificador</dfn> es el nombre que tiene un elemento de un
     programa y que no se puede repetir en ciertas partes del código.
    </p>
    <h2>Reglas que debe cumplir un identificador</h2>
    <ul>
     <li>
      <p>
       Empezar con una letra 
       (<code class="language-javascript">a</code>
       –
       <code class="language-javascript">z</code>
       o
       <code class="language-javascript">A</code>
       –
       <code class="language-javascript">Z</code>)
       con o sin acentos (á, ñ, por ejemplo),
       guion bajo (<code class="language-javascript">_</code>)
       o
       <code class="language-javascript">$</code>.
      </p>
     </li>
     <li>
      <p>
       Los caracteres siguientes pueden ser cualquiera de los
       anteriores o dígitos (<code class="language-javascript">0</code>
       –
       <code class="language-javascript">9</code>).
      </p>
     </li>
    </ul>
    <h2>Ejemplos</h2>
    <ul>
     <li><code class="language-javascript">_nombre</code></li>
     <li><code class="language-javascript">__nombre</code></li>
     <li><code class="language-javascript">Nombre24</code></li>
     <li><code class="language-javascript">_</code></li>
     <li><code class="language-javascript">$</code></li>
     <li><code class="language-javascript">n123k_$K</code></li>
     <li><code class="language-javascript">TaChido</code></li>
     <li><code class="language-javascript">serenoMoreno</code></li>
     <li><code class="language-javascript">$priv</code></li>
     <li><code class="language-javascript">$123</code></li>
     <li><code class="language-javascript">h54</code></li>
    </ul>
    <h2>Camel case</h2>
    <p>
     Aunque no es obligatorio, normalmente en JavaScript los
     identificadores se escriben en <dfn>Camel Case</dfn>, donde las
     mayúsculas se usan para simular el inicio de una palabra. Por ejemplo:
    </p>
    <p><code class="language-javascript">estasSonCuatroPalabras</code>.</p>
   </div>`;
 }
}

customElements.define("a-identificadores", AIdentificadores);