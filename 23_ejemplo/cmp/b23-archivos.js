import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B23Archivos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Archivos</h1>
    <div class="horizontal">
     <ul>
      <li>
       app
       <ul>
        <li>
         manifest
         <ul>
          <li>
           <a href="/23_ejemplo/e_AndroidManifest.html"
             target="_blank">
            AndroidManifest.xml
           </a>
          </li>
         </Ul>
        </li>
        <li>
         java
         <ul>
          <li>
           io.github.gilpgdam
           <ul>
            <li>
             <a href="/23_ejemplo/d_MainActivity.html"
               target="_blank">
              MainActivity.kt
             </a>
            </li>
           </ul>
         </ul>
        </li>
        <li>
         res
         <ul>
          <li>
           drawable
           <ul>
            <li>ic_launcher_background.xml</li>
            <li>ic_launcher_foreground.xml</li>
           </ul>
          </li>
          <li>
           layout
           <ul>
            <li>
             <a href="/23_ejemplo/c_activity_main.html"
               target="_blank">
              activity_main.xml
             </a>
            </li>
           </ul>
          </li>
          <li>
           mipmap
           <ul>
            <li>ic_launcher</li>
            <li>ic_launcher_round</li>
           </ul>
          </li>
          <li>
           values
           <ul>
            <li>colors.xml</li>
            <li>strings.xml</li>
            <li>themes</li>
           </ul>
          </li>
         </ul>
        </li>
       </ul>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("b23-archivos", B23Archivos);