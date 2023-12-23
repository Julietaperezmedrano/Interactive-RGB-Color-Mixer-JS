const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

//asignarle el valor con el que viene asignado el input
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//sino hay una referencia clara del cambio se puede usar e.target.value;

//actualizar el texto de los parrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Para actualizar red (rojo)
inputRojo.addEventListener("change", () => {
    let rojo = inputRojo.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo, verde, azul);
})

//Actualizar verde
inputVerde.addEventListener("change", () => {
    let verde = inputVerde.value;
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul);
})

//Actualizar azul
inputAzul.addEventListener("change", () => {
    let azul = inputAzul.value;
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul);
})