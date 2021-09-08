import { Diapositiva } from "../../lib/Diapositiva.js";

export class Resumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Resumen</h1>
   <div class="lectura">
     <p>Se revisaron los siguientes operadores sobre texto:</p>
     <ul>
       <li>
         <p><code class="language-javascript">+</code></p>
       </li>
       <li>
         <p><code class="language-javascript">+=</code></p>
       </li>
       <li>
         <p><code class="language-javascript">&grave;&dollar;{}&grave;</code></p>
       </li>
       <li>
         <p><code class="language-javascript">&lt;</code></p>
       </li>
       <li>
         <p><code class="language-javascript">&gt;</code></p>
       </li>
       <li>
         <p><code class="language-javascript">&lt;=</code></p>
       </li>
       <li>
         <p><code class="language-javascript">&gt;=</code></p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("g-resumen-10", Resumen);