let listaAmigos = [];

function agregarAmigo() {
    let ingreso = document.getElementById('amigo');
    let nombre = ingreso.value.trim();

    if (!validarNombre(nombre)) 
        return;

    listaAmigos.push(nombre);
    actualizarLista();
    borrarCampo(ingreso);
}

function validarNombre(nombre) {
    if (!nombre) {
        alert("Por favor, inserte un nombre válido.");
        return false;
    }

    if (listaAmigos.includes(nombre)) {
        alert("El nombre ya existe en la lista.");
        return false;
    }
    return true;
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function borrarCampo(ingreso) {
    ingreso.value = "";
}

function sortearAmigo() {
    let sortear = document.getElementById('resultado');
    
    if (listaAmigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }

    let aleatorio = Math.floor(Math.random() * listaAmigos.length);
    let ganador = listaAmigos[aleatorio];

    sortear.innerText = `El ganador es: ${ganador}`;
}