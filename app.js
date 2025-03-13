let amigos = [];

const inputAmigo = document.getElementById('amigo');
const resultado = document.getElementById('resultado');
const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);

    inputAmigo.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un amigo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}
