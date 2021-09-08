import { Diapositiva } from "../../lib/Diapositiva.js";

export class HResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Resumen</h1>
   <div class="lectura">
     <ul>
       <li>
         <p>
           El tipo de datos <dfn>boolean</dfn> representa la lógica de
           valores verdaderos
           (<code class="language-javascript">true</code>)
           y falsos
           (<code class="language-javascript">false</code>).
         </p>
       </li>
       <li>
        <p>Se revisaron los siguientes operadores sobre texto:</p>
        <ul>
          <li>
            <p><code class="language-javascript">===</code></p>
          </li>
          <li>
            <p><code class="language-javascript">!==</code></p>
          </li>
        </ul>
       </li>
       <li>
        <p>
         La estructura de control <dfn>if</dfn> permite usar el resultado de
         una condición lógica para controlar si un grupo de instrucciones
         debe o no ejecutarse.
        </p>
        </li>
        <li>
          <p>
           Si la condición evalúa a
           <code class="language-javascript">true</code>,
           el grupo de instrucciones se ejecuta.
         </p>
        </li>
        <li>
          <p>
           Si la condición evalúa a
           <code class="language-javascript">false</code>,
           el grupo de instrucciones no se ejecuta.
         </p>
       </li>
       <li>
         <p>
           Antes de empezar a programar, recuerda estudiar bien el problema,
           diseñar algunos escenarios y la solución. Puedes usar pseudocódigo o
           diagramas de flujo.
         </p>
       </li>
       <li>
         <p>
           Cuando pruebes una aplicación, recuerda verificar los escenarios.
         </p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("h-resumen", HResumen);