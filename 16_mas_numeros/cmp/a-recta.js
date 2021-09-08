import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OpY extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Recta numérica</h1>
   <figure>
     <img alt="Imagen de la recta numérica" src="/14_mas_numeros/img/recta.svg">
   </figure>
   <div class="lectura">
     <p>Los números a la izquierda son menores que los de la derecha.</p>
     <dl>
       <dt><dfn><code class="language-javascript">0</code></dfn></dt>
       <dd>
         <p>Es el centro de la recta.</p>
       </dd>
       <dt><dfn><code class="language-javascript">Number.MIN_VALUE</code></dfn>
       </dt>
       <dd>
         <p>
           Es el valor positivo más cercano a 0; aproximadamente 5 ×
           10<sup>-324</sup>
         </p>
       </dd>
       <dt><dfn><code
             class="language-javascript">-Number.MIN_VALUE</code></dfn></dt>
       <dd>
         <p>
           Es el valor negativo más cercano a 0; aproximadamente -5 ×
           10<sup>-324</sup>.
         </p>
       </dd>
       <dt><dfn><code
             class="language-javascript">Number.MAX_SAFE_INTEGER</code></dfn>
       </dt>
       <dd>
         <p>
           El entero más positivo <var>n</var> para el cual n y n + 1 se
           pueden representar como un número exacto. Su valor es
           9007199254740991.
         </p>
       </dd>
       <dt><dfn><code
             class="language-javascript">Number.MIN_SAFE_INTEGER</code></dfn>
       </dt>
       <dd>
         <p>
           El entero más negativo <var>n</var> para el cual n y n - 1 se
           pueden representar como un número exacto. Su valor es
           -9007199254740991.
         </p>
       </dd>
       <dt><dfn><code class="language-javascript">Number.MAX_VALUE</code></dfn>
       </dt>
       <dd>
         <p>
           Es el valor numérico finito más positivo, aproximadamente
           1.7976931348623157 × 10<sup>308</sup>.
         </p>
       </dd>
       <dt><dfn><code
             class="language-javascript">-Number.MAX_VALUE</code></dfn></dt>
       <dd>
         <p>
           Es el valor numérico finito más negativo, aproximadamente
           -1.7976931348623157 × 10<sup>308</sup>.
         </p>
       </dd>
       <dt><dfn><code
             class="language-javascript">Number.POSITIVE_INFINITY</code></dfn>
       </dt>
       <dd>
         <p>
           Representa a todos los valores más positivos que
           <code class="language-javascript">Number.MAX_VALUE</code>.
         </p>
       </dd>
       <dt><dfn><code
             class="language-javascript">Number.NEGATIVE_INFINITY</code></dfn>
       </dt>
       <dd>
         <p>
           Representa a todos los valores más negativos que
           <code class="language-javascript">-Number.MAX_VALUE</code>.
         </p>
       </dd>
     </dl>
   </div>`;
 }
}

customElements.define("a-recta", OpY);