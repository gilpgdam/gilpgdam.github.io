import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Racionales extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Números racionales (&rationals;)</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Repartir 🎈🎈🎈🎈 🎈🎈🎈🎈 🎈🎈🎈🎈 entre 👼👼👼 para que a todos les
       toque lo mismo.
      </p>
     </li>
     <li>
      <p>👼 🎈🎈🎈🎈<br>👼 🎈🎈🎈🎈<br>👼 🎈🎈🎈🎈</p>
     </li>
     <li>
      <p>O sea 12/3 === 4</p>
     </li>
     <li>
      <p>
       Si repartimos 12 entre 3 dándole la misma cantidad a todos, cada uno le
       tocan 4.
      </p>
     </li>
    </ul>
    <h2>División entera y residuo</h2>
    <ul>
     <li>
      <p>
       Repartir 🎈🎈🎈🎈 🎈🎈🎈🎈 🎈🎈🎈 entre 👼👼👼 para que a todos les
       toque lo mismo.
      </p>
     </li>
     <li>
      <p>👼 🎈🎈🎈<br>👼 🎈🎈🎈<br>👼 🎈🎈🎈<br>y 🎈🎈 no se reparten.</p>
     </li>
     <li>
      <p>11 div 3 === 3.</p>
     </li>
     <li>
      <p>11 % 3 === 2.</p>
     </li>
     <li>
      <p>Si a = ((b)(c)) + d, con 0 &lt; d &lt; c, a div c = b. Al resultado se
       le conoce como <dfn>división entera</dfn>.</p>
      <p>Como 11 = ((3)(3)) + 2 y 0 &lt; 2 &lt; 3, 11 div 3 = 3.</p>
     </li>
     <li>
      <p>
       Si a = ((b)(c)) + d, con 0 &lt; d &lt; c, a % c = d. Al resultado se le
       conoce como <dfn>módulo</dfn> o como <dfn>residuo</dfn>.
      </p>
      <p>Como 11 = 3 * 3 + 2, y 0 &lt; 2 &lt; 3, 11 % 3 = 2 </p>
     </li>
    </ul>
    <h2>División exacta</h2>
    <ul>
     <li>
      <p>
       Repartir 🎈🎈🎈🎈 🎈🎈🎈🎈 🎈🎈🎈 entre 👼👼👼 para que a todos les
       toque lo mismo, pero que no sobre nada.
      </p>
     </li>
     <li>
      <p>
       A cada 👼 le tocan 🎈🎈🎈 y tenemos que partir los 🎈🎈 que sobran de tal
       forma que todos les toque la misma cantidad de 🎈.
      </p>
     </li>
     <li>
      <p>
       11 / 3 === (9/3) + (2/3) === 3+(2/3). A cada 👼 le tocan 🎈🎈🎈 y 2
       partes de lo que resulta de partir 🎈 en 3 pedazos iguales.
      </p>
     </li>
     <li>
      <p>
       2/3 se puede expresar con decimales, obteniendo 0.6666... con una cantidad
       que nunca termina de 6, pero que siempre se repite. A la parte que se
       repite se le llama periodo.
      </p>
     </li>
     <li>
      <p>
       Por lo mismo, 11/3 también se puede expresar como 3.666... o 3.(6),
       poniendo entre paréntesis el periodo.
      </p>
     </li>
     <li>
      <p>Si (a)(b) = c, entonces c/b = a.</p>
     </li>
     <li>
      <p>
       Se pensaba que todos los números se podían expresar como fracciones o como
       números periódicos. Hasta aquí todos eran felices 😁, pero hubo algo que
       les rompió el corazón 😢.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("f-racionales", Racionales);