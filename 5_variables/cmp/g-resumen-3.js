import { Diapositiva } from "../../lib/Diapositiva.js";

export class GResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Un <dfn>identificador</dfn> es el nombre que tiene un elemento de un
       programa y que no se puede repetir en ciertas partes del código.
      </p>
     </li>
     <li>
      <p>Un identificador debe cumplir con las siguientes reglas:</p>
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
         – <code class="language-javascript">9</code>).
        </p>
       </li>
      </ul>
     </li>
     <li>
      <p>
       Una
       <dfn>constante</dfn>
       es similar a una variable, pero su valor no puede cambiar una vez
       asignado.
      </p>
     </li>
     <li>
      <p>
       Las variables o constantes declaradas en el mismo espacio no pueden tener
       el mismo nombre.
      </p>
     </li>
     <li>
      <p>
       Cuando tratas de usar una variable o una constante no definida, obtienes
       un mensaje de error y se aborta la ejecución del programa.
      </p>
     </li>
     <li>
      <p>
       La función <dfn>prompt</dfn> sirve para pedir datos.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("g-resumen-3", GResumen);