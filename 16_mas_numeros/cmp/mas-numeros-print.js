import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-recta.js";
import "./b-ops-num.js";
import "./c-asignacion.js";
import "./d-incr-y-decr.js";
import "./e-igualdad.js";
import "./f-orden-14.js";
import "./g-orden-igualdad.js";
import "./h-precedencia.js";
import "./i-expresiones.js";
import "./j-resumen-14.js";
import "./mas-numeros-index.js";

export class MasNumerosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <mas-numeros-index></mas-numeros-index>
    </section>
    <section>
     <a-recta></a-recta>
    </section>
    <section>
     <b-ops-num></b-ops-num>
    </section>
    <section>
     <c-asignacion></c-asignacion>
    </section>
    <section>
     <d-incr-y-decr></d-incr-y-decr>
    </section>
    <section>
     <e-igualdad></e-igualdad>
    </section>
    <section>
     <f-orden-14></f-orden-14>
    </section>
    <section>
     <g-orden-igualdad></g-orden-igualdad>
    </section>
    <section>
     <h-precedencia></h-precedencia>
    </section>
    <section>
     <i-expresiones></i-expresiones>
    </section>
    <section>
     <j-resumen-14></j-resumen-14>
    </section>`;
 }
}

customElements.define("mas-numeros-print", MasNumerosPrint);