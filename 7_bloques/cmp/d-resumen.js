import { Diapositiva } from "../../lib/Diapositiva.js";

export class DResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los <dfn>bloques</dfn> son listas de 0 o más instrucciones
       encerradas
       entre llaves (<code class="language-javascript">{}</code>).
      </p>
     </li>
     <li>
      <p>
       Los bloques se ejecutan siguiendo el mismo orden de ejecución de
       JavaScript.
      </p>
     </li>
     <li>
      <p>
       Cuando en su interior se declara una variable con
       <code class="language-javascript">const</code>
       o con
       <code class="language-javascript">let</code>,
       solo existe dentro del bloque donde se declara.
      </p>
     </li>
     <li>
      <p>
       Una vez terminada la ejecución del bloque, todas las variables declaradas
       con
       <code class="language-javascript">const</code>
       o con
       <code class="language-javascript">let</code>
       en su interior, son eliminadas.
      </p>
     </li>
     <li>
      <p>
       Los bloques usan las variables o constantes declaradas fuera del
       bloque.
      </p>
     </li>
     <li>
      <p>
       Las variables declaradas con
       <code class="language-javascript">const</code>
       o con
       <code class="language-javascript">let</code>
       dentro de un bloque ocultan a otras con el mismo nombre que estén
       declaradas fuera del bloque.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("d-resumen", DResumen);