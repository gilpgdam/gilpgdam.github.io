import { Diapositiva } from "../../lib/Diapositiva.js";

export class EjemploContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p>
      <a href="/23_ejemplo/a_instrucciones.html">Instrucciones</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/23_ejemplo/b_archivos.html">Archivos</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/23_ejemplo/c_activity_main.html">app/res/layout/activity_main.xml</a>
     </p>
    <li>
     <p>
      <a href="/23_ejemplo/d_MainActivity.html">app/java/io.github.gilpgdm/MainActivity.kt</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/23_ejemplo/e_AndroidManifest.html">app/manifest/AndroidManifest.xml</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("ejemplo-contenido", EjemploContenido);