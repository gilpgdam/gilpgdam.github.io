import { Diapositiva } from "../lib/Diapositiva.js";

export class BSw extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
    <dl>
    <dt>Microsoft Edge Chromium</dt>
    <dd>
     <p>
      Ya viene instalado en las computadoras más nuevas, pero si la tuya
      no lo tiene, lo puedes descargar de
      <a href="https://www.microsoft.com/es-es/edge"
        target="_blank">https://www.microsoft.com/es-es/edge</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1Wwsq6D3MaX8CDPpCIu53p9Lvx_42D5ou/view?usp=sharing"
        target="_blank">Video de instalación.</a>
     </p>
    </dd>
    <dt>Mozilla Firefox</dt>
    <dd>
     <p>
      Lo puedes descargar de
      <a href="https://www.mozilla.org"
        target="_blank">https://www.mozilla.org</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1Wr5AZUh1isg2qH0GtzQrz-MwjCfm2ZJC/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
    <dt>Google Chrome</dt>
    <dd>
     <p>
      Lo puedes descargar de
      <a href="https://google.com/chrome"
        target="_blank">https://google.com/chrome</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1DvSCM9GSypdK1GEI7EpBnIp9olPG3zNE/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
     <dt>OpenJDK</dt>
     <dd>
     <p>
      Lo puedes descargar de
      <a href="https://openjdk.java.net/"
        target="_blank">https://openjdk.java.net/</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1RwhOlE7bc36uIbsHE5-QdLqbzOwuFfA5/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
     <dt>IntelliJ IDEA Community</dt>
     <dd>
      <p>
       Lo puedes descargar de
       <a href="https://www.jetbrains.com/es-es/idea/download/"
         target="_blank">https://www.jetbrains.com/es-es/idea/download/</a>.
      </p>
      <p class="noPrint">
       <a href="https://drive.google.com/file/d/18Eb9ZZJ2mLJAjBn1ikUOfqPMg1_34UFi/view?usp=sharing"
         target="_blank">Video de Instalación.</a>
      </p>
      <p>
       Luego de instalar y cerrar IntelliJ, ábrelo, crea y ejecuta un proyecto
       de Kotlin para descargar actualizaciones y asegurarte que la herramienta
       quedó bien instalada.
      </p>
      <p class="noPrint">
       <a href="https://drive.google.com/file/d/1HhHNFbM23rAxNWFGl2KAQesZzUvZcTz7/view?usp=sharing"
         target="_blank">Video sobre como crear un proyecto Kotlin y actualizar
        software.</a>
      </p>
     </dd>
   <dt>
      <a href="https://developer.android.com/studio" target="_blank">Android
       Studio</a>
     </dt>
     <dd>
      <p>
       Lo puedes descargar de
       <a href="https://developer.android.com/studio"
         target="_blank">https://developer.android.com/studio</a>.
      </p>
      <p class="noPrint">
       <a href="https://developer.android.com/studio/install"
         target="_blank">Video de Instalación.</a>
      </p>
     </dd>
    </dl>
   </div>`;
 }
}

customElements.define("b-sw", BSw);