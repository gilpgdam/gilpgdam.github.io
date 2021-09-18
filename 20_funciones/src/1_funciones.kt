fun main() {
 let nombre = "pp";
 saluda(); // invoca a saluda.
 /* Al terminar la primera
  * invocación continúa aquí. */
 nombre = "qk";
 saluda(); // invoca a saluda.
 /* Al terminar la segunda
  * invocación continúa aquí. */
 println("adios");
}
/* Declaración de function saluda.
 * Primero va la palabra fun.
 * Sigue el nombre.
 * Siguen los paréntesis.
 * Finalmente, entre llaves ({})
 * van las instrucciones. */
fun saluda() {
 println(nombre);
}