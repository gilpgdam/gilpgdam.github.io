import { Diapositiva } from "../../lib/Diapositiva.js";

export class SwitchContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
   <li>
   <p>
    <a href="/17_switch/a_switch.html">La estructura de control
     <strong>switch</strong></a>
   </p>
  </li>
  <li>
   <p>
    <a href="/17_switch/b_codigo_switch.html">Código con
     <strong>switch</strong></a>
   </p>
  </li>
  <li>
   <p>
    <a href="/17_switch/c_switch_default.html">La estructura de
     control <strong>switch</strong> con <strong>default</strong></a>
   </p>
  </li>
  <li>
    <p>
    <a href="/17_switch/d_codigo_switch_default.html">Código con
     <strong>switch</strong> y <strong>default</strong></a>
    </p>
  </li>
  <li><p><a href="/17_switch/e_resumen.html">Resumen</a></p></li>
</ol>`;
 }
}

customElements.define("switch-contenido", SwitchContenido);