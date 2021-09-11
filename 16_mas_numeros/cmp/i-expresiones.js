import { Diapositiva } from "../../lib/Diapositiva.js";

export class Expresiones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. Expresiones</h1>
   <div class="lectura">
     <p>
       Hay que aprender a estructurar las expresiones matemáticas en el
       lenguaje de programación.
     </p>
     <h2>Ejemplos de expresiones aritméticas expresadas en JavaScript</h2>
     <dl>
       <dt>
         <img src="/14_mas_numeros/img/cuadratica.png"
           alt="x = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a)">
       </dt>
       <dd>
         <p>
           <code
             class="language-kotlin">x = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a)</code>
         </p>
       </dd>
       <dt>
         <img src="/14_mas_numeros/img/recta.png"
           alt="y = ((y2 - y1) / (x2 - x1)) * (x - x1) + y1">
       </dt>
       <dd>
         <p>
           <code
             class="language-kotlin">y = ((y2 - y1) / (x2 - x1)) * (x - x1) + y1</code>
         </p>
       </dd>
     </dl>
     <h2>Temas por Investigar</h2>
     <ul>
       <li>
         <p>
           El objeto
           <code class="language-kotlin">Math</code>.
         </p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("i-expresiones", Expresiones);