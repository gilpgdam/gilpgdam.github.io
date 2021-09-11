import { Diapositiva } from "../../lib/Diapositiva.js";

export class Number extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. El tipo <strong>number</strong></h1>
   <div class="lectura">
    <ul>
    <li>
     <p>El tipo <dfn>number</dfn> representa números en JavaScript.</p>
    </li>
    <li>
     <p>
       Como la cantidad de números reales definidos por las matemáticas es
       infinita en muchos sentidos y no se puede implementar en una
       computadora. La cantidad números es infinita porque no tiene límite
       para los números positivos y negativos, pero además entre 2 números
       hay una cantidad infinita de números.
     </p>
     </li>
     <li>
      <p>
       Para poder usar algo parecido a los números reales, necesitamos un
       modelo que sea totalmente finito en cuanto a la cantidad total de
       números y la cantidad de números entre 2 números.
     </p>
     </li>
     <li>
      <p>
       En JavaScript se usa el estándar
       <dfn>IEEE 754</dfn>
       y en realidad son límites.
     </p>
     </li>
     <li>
      <p>
       Un <dfn>límite</dfn> es un número que se representa a sí mismo, a
       números ligeramente menores y ligeramente mayores; por ejemplo,
       <code class="language-kotlin">1.0</code>
       representa a
       <code class="language-kotlin">1.0</code>,
       así como números muy cercanos,
       como podrían ser
       <code class="language-kotlin">1.000000000000000000000001</code>,
       <code class="language-kotlin">1.000000000000000000000002</code>,
       <code class="language-kotlin">0.999999999999999999999999</code>
       o
       <code class="language-kotlin">0.999999999999999999999998</code>.
     </p>
     </li>
     <li>
      <p>
       Incluyen a los números enteros como
       <code class="language-kotlin">1</code>,
       <code class="language-kotlin">2</code>,
       <code class="language-kotlin">101</code>.
     </p>
     </li>
     <li>
      <p>
       El valor <code class="language-kotlin">0</code> representa a los 
       números cercanos a 0, ya sean positivos o negativos.
     </p>
     </li>
     <li>
      <p>
       El valor <code class="language-kotlin">+0</code> representa a los 
       números positivos cercanos a 0.
     </p>
     </li>
     <li>
      <p>
       El valor <code class="language-kotlin">-0</code> representa a los 
       números negativos cercanos a 0.
     </p>
     </li>
     <li>
      <p>
       El valor
       <code class="language-kotlin">NaN</code>
       representa valores que no son un número; por ejemplo, los resultados
       de
       <code class="language-kotlin">0 / 0</code>
       y
       <code class="language-kotlin">Math.sqrt(-1)</code>
       (la raíz cuadrada de -1).
     </p>
     </li>
     </ul>
      <h2>Temas por Investigar</h2>
     <ul>
       <li>
         <p>Representación de números en notación científica.</p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("a-number", Number);