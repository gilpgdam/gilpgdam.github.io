import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-number.js";
import "./b-concatenacion.js";
import "./c-asignacion-10.js";
import "./d-plantillas.js";
import "./e-orden-10.js";
import "./f-orden-igualdad.js";
import "./g-resumen-10.js";
import "./textos-index.js";

export class TextosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <textos-index></textos-index>
    </section>
    <section>
     <a-number></a-number>
    </section>
    <section>
     <b-concatenacion></b-concatenacion>
    </section>
    <section>
     <c-asignacion-10></c-asignacion-10>
    </section>
    <section>
     <d-plantillas></d-plantillas>
    </section>
    <section>
     <e-orden-10></e-orden-10>
    </section>
    <section>
     <f-orden-igualdad></f-orden-igualdad>
    </section>
    <section>
     <g-resumen-10></g-resumen-10>
    </section>`;
 }
}

customElements.define("textos-print", TextosPrint);