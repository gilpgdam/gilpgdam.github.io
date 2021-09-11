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
         <p><code class="language-kotlin">+</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">+=</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&grave;&dollar;{}&grave;</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&lt;</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&gt;</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&lt;=</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&gt;=</code></p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("g-resumen-10", Resumen);