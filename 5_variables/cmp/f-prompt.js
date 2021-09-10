import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class FPrompt extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. La función <strong>readLine</strong></h1>
   <div class="lectura">
    <p>
     La función <dfn>readLine</dfn> sirve para pedir datos.
    </p>
    <h2>Ejemplo</h2>
   </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(<span
       style="color: #a31515;">"Nombre:&nbsp;"</span>);</div>
    <div>&nbsp;<span
       style="color: #0000ff;">val</span>&nbsp;nombre&nbsp;=&nbsp;readLine();
    </div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(<span
       style="color: #a31515;">"Hola&nbsp;"</span>);</div>
    <div>&nbsp;<span style="color: #795e26;">print</span>(nombre);</div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">".&nbsp;Saludos."</span>);</div>
    <div>}</div>
   </div>
      </muestra-codigo>
    <div class="lectura noPrint">
    <p class="noPrint">
     <a target="_blank"
       href="https://replit.com/@GilbertoPacheco/readlinekt?v=1">
      Revísalo en Replit.
     </a>
    </p>
   </div>`;
 }
}

customElements.define("f-prompt", FPrompt);