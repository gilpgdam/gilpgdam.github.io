import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class d23MainActivity extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. app/java/io.github.gilpgdm/MainActivity.kt</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">package</span> io.github.gilpgdam</div>
   <br>
   <div><span style="color: #0000ff;">import</span>
    androidx.appcompat.app.AppCompatActivity</div>
   <div><span style="color: #0000ff;">import</span> android.os.Bundle</div><br>
   <div><span style="color: #0000ff;">class</span> <span
      style="color: #267f99;">MainActivity</span> : <span
      style="color: #267f99;">AppCompatActivity</span>() {</div>
   <div>&nbsp;<span style="color: #0000ff;">override</span> <span
      style="color: #0000ff;">fun</span> <span
      style="color: #795e26;">onCreate</span>(<span
      style="color: #001080;">savedInstanceState</span>: <span
      style="color: #267f99;">Bundle?</span>) {</div>
   <div>&nbsp; <span
      style="color: #0000ff;">super</span>.onCreate(savedInstanceState)</div>
   <div>&nbsp; setContentView(<span
      style="color: #267f99;">R</span>.layout.activity_main)</div>
   <div>&nbsp;}</div>
   <div>}</div>
  </div>
     </muestra-codigo>`;
 }
}

customElements.define("d23-main-activity", d23MainActivity);