import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Spread de objetos para crear "nuevo" y spread de arreglos para crear "todos"
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

const listaReportes = document.querySelector("#reportes");
const tituloCurso = document.querySelector("#curso");

if (tituloCurso) tituloCurso.textContent = `Curso: ${curso}`;

todos.forEach(estudiante => {
  const lineaReporte = reporte(estudiante);
  console.log(lineaReporte);
  
  if (listaReportes) {
    const li = document.createElement("li");
    li.textContent = lineaReporte;
    listaReportes.appendChild(li);
  }
});
// Commit 3
