import { Diapositiva } from "../../lib/Diapositiva.js";

export class AJs extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. JavaScript</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        <dfn>JavaScript</dfn>
        es un lenguaje de programación que cumple con las reglas del estándar
        <dfn>ECMAScript</dfn>,
        que está definido en
        <a target="_blank"
          href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">
         https://www.ecma-international.org/publications/standards/Ecma-262.htm</a>.
       </p>
      </li>
      <li>
       <p>
        En 2021, la versión más usada es la edición 6, del año 2015, pero
        algunos navegadores incorporan caracterísiticas más nuevas.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("a-js", AJs);