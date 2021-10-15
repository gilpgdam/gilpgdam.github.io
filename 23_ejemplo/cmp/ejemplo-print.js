import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a23-instrucciones.js";
import "./b23-archivos.js";
import "./ejemplo-index.js";

export class EjemploPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <ejemplo-index></ejemplo-index>
    </section>
    <section>
     <a23-instrucciones></a23-instrucciones>
    </section>
    <section>
     <b23-archivos></b23-archivos>
    </section>`;
 }
}

customElements.define("ejemplo-print", EjemploPrint);