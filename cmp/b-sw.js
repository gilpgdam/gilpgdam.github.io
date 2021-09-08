import { Diapositiva } from "../lib/Diapositiva.js";

export class BSw extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
    <dl>
     <dt>
      <a href="https://www.microsoft.com/es-es/edge"
        target="_blank">Microsoft Edge Chromium</a>
     </dt>
     <dd>
      <p>
       Ya viene instalado en las computadoras más nuevas, pero si la tuya
       no lo tiene, lo puedes descargar en el enlace de arriba y seguir las
       instrucciones del siguiente
       <a href="https://drive.google.com/file/d/1Wwsq6D3MaX8CDPpCIu53p9Lvx_42D5ou/view?usp=sharing"
         target="_blank">video de instalación.</a>
      </p>
     </dd>
     <dt>
      <a href="https://www.mozilla.org" target="_blank">Mozilla
       Firefox</a>
     </dt>
     <dd>
      <p>
       <a href="https://drive.google.com/file/d/1Wr5AZUh1isg2qH0GtzQrz-MwjCfm2ZJC/view?usp=sharing"
         target="_blank">Video de Instalación.</a>
      </p>
     </dd>
     <dt>
      <a href="https://google.com/chrome" target="_blank">Google
       Chrome</a>
     </dt>
     <dd>
      <p>
       <a href="https://drive.google.com/file/d/1DvSCM9GSypdK1GEI7EpBnIp9olPG3zNE/view?usp=sharing"
         target="_blank">Video de Instalación.</a>
      </p>
     </dd>
     <dt>
      <a href="https://nodejs.org/" target="_blank">JavaJDK</a>
     </dt>
     <!-- <dd>
           <p>
             <a href="https://drive.google.com/file/d/1s_3a4dEOOhTWhhCFv8J5bEevktGSaS3n/view?usp=sharing"
               target="_blank">Video de Instalación.</a>
           </p>
         </dd> -->
     <dt>
      <a href="https://www.jetbrains.com/es-es/idea/download/#section=windows"
        target="_blank">IntelliJ IDEA Community</a>
     </dt>
     <!-- <dd>
           <p>
             <a href="https://drive.google.com/file/d/1s_3a4dEOOhTWhhCFv8J5bEevktGSaS3n/view?usp=sharing"
               target="_blank">Video de Instalación.</a>
           </p>
         </dd> -->
     <dt>
      <a href="https://developer.android.com/studio" target="_blank">Android
       Studio</a>
     </dt>
     <dd>
      <p>
       <a href="https://developer.android.com/studio/install"
         target="_blank">Video de Instalación.</a>
      </p>
     </dd>
    </dl>
   </div>`;
 }
}

customElements.define("b-sw", BSw);