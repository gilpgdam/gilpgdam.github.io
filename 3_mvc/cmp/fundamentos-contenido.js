import { Diapositiva } from "../../lib/Diapositiva.js";

export class FundamentosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/1_fundamentos/a_caracteristicas.html">Características de los
        sistemas operativos de dispositivos móviles</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/b_uso.html">Uso de los sistemas operativos
        móviles</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/c_componentes.html">Componentes de hardware de
        dispositivos móviles</a>
      </p>
     </li>
     <li>
      <p><a href="/1_fundamentos/d_pseudocodigo.html">Pseudocódigo</a></p>
     </li>
     <li>
      <p><a href="/1_fundamentos/e_diagrama.html">Diagrama de flujo</a></p>
     </li>
     <li>
      <p><a href="/1_fundamentos/f_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("fundamentos-contenido", FundamentosContenido);