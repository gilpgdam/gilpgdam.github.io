import { Diapositiva } from "../../lib/Diapositiva.js";

export class For extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   C. La estructura de control <strong>switch</strong> con
    <strong>default</strong>
  </h1>
  <div class="lectura">
    <p>
      El <dfn>switch-default</dfn> es una alternativa a la condicional
      múltiple con else, cuyo comportamiento es similar al del
      <code class="language-javascript">switch</code>, donde
      <code class="language-javascript">default</code>,
      es una etiqueta más, que atrae a todos los casos que no correspondan
      a ninguno de los
      <code class="language-javascript">case</code>.
    </p>
    <p>
      Una vez entrado en un caso, el
      <code class="language-javascript">switch</code>
      continúa avanzando sin importar si invade otros casos, hasta
      encontrar la palabra reservada
      <code class="language-javascript">break</code>,
      que nos saca de la estructura de control.
    </p>
    <p>
      La siguiente figura representa el comportamiento de la estructura de
      control <code class="language-javascript">switch-default</code>:
    </p>
    <figure>
      <img src="/17_switch/img/switch-default.svg" alt="switch con default"
        style="max-width: 350px;">
    </figure>
  </div>`;
 }
}

customElements.define("c-17-switch-default", For);