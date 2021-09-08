import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class DIf extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. La estructura de control <strong>if</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       La estructura de control <dfn>if</dfn> permite usar el resultado de
       una condición lógica para controlar si un grupo de instrucciones debe o
       no ejecutarse.
      </p>
     </li>
     <li>
      <p>
       La siguiente figura representa el comportamiento de la estructura de
       control <code class="language-javascript">if</code>:
      </p>
      <figure>
       <img src="/6_if/img/if.svg" alt="if" style="max-width: 350px;">
      </figure>
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
    </ul>
   </div>`;
 }
}

customElements.define("d-if", DIf);