import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-17-switch.js";
import "./b-17-codigo-switch.js";
import "./c-17-switch-default.js";
import "./d-17-codigo-switch-default.js";
import "./e-17-resumen.js";
import "./switch-index.js";

export class SwitchPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <switch-index></switch-index>
    </section>
    <section>
     <a-17-switch></a-17-switch>
    </section>
    <section>
     <b-17-codigo-switch></b-17-codigo-switch>
    </section>
    <section>
     <c-17-switch-default></c-17-switch-default>
    </section>
    <section>
     <d-17-codigo-switch-default></d-17-codigo-switch-default>
    </section>
    <section>
     <e-17-resumen></e-17-resumen>
    </section>`;
 }
}

customElements.define("switch-print", SwitchPrint);