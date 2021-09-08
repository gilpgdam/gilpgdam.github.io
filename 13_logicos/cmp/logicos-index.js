import { Diapositiva } from "../../lib/Diapositiva.js";
import "./logicos-contenido.js";

export class LogicosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <textos-contenido></textos-contenido>
    </div>`;
 }
}

customElements.define("logicos-index", LogicosIndex);