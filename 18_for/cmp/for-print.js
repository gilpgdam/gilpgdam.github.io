import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-16-for.js";
import "./b-16-codigo.js";
import "./c-16-resumen.js";
import "./for-index.js";

export class ForPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <for-index></for-index>
    </section>
    <section>
     <a-16-for></a-16-for>
    </section>
    <section>
     <b-16-codigo></b-16-codigo>
    </section>
    <section>
     <c-16-resumen></c-16-resumen>
    </section>`;
 }
}

customElements.define("for-print", ForPrint);