import { Diapositiva } from "../../lib/Diapositiva.js";

export class Resumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>J. Resumen</h1>
   <div class="lectura">
     <p>Se revisaron los siguientes temas:</p>
     <ul>
       <li>
         <p>La recta numérica en JavaScript.</p>
       </li>
       <li>
         <p>Operadores numéricos.</p>
       </li>
       <li>
         <p>Operadores numéricos con asignación.</p>
       </li>
       <li>
         <p>Incrementos y decrementos.</p>
       </li>
       <li>
         <p>Operadores Relacionales.</p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("j-resumen-14", Resumen);