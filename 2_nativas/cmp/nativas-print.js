import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-2-nativa.js";
import "./b-2-multiplataforma.js";
import "./c-2-diferencias.js";
import "./d-2-ventajas-nativas.js";
import "./e-2-desventajas-nativas.js";
import "./f-2-ventajas-multi.js";
import "./g-2-desventajas-multi.js";
import "./h-2-uso-nativas.js";
import "./i-2-uso-multi.js";
import "./nativas-index.js";

export class NativasPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <nativas-index></nativas-index>
    </section>
    <section>
     <a-2-nativa></a-2-nativa>
    </section>
    <section>
     <b-2-multiplataforma></b-2-multiplataforma>
    </section>
    <section>
     <c-2-diferencias></c-2-diferencias>
    </section>
    <section>
     <d-2-ventajas-nativas></d-2-ventajas-nativas>
    </section>
    <section>
     <e-2-desventajas-nativas></e-2-desventajas-nativas>
    </section>
    <section>
     <f-2-ventajas-multi></f-2-ventajas-multi>
    </section>
    <section>
     <g-2-desventajas-multi></g-2-desventajas-multi>
    </section>
    <section>
     <h-2-uso-nativas></h-2-uso-nativas>
    </section>
    <section>
     <i-2-uso-multi></i-2-uso-multi>
    </section>`;
 }
}

customElements.define("nativas-print", NativasPrint);