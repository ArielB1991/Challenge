//Creamos un array vacío para guardar los nombres de los amigos
let listaAmigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo() {
    //Obtenemos el valor del input
    let ingreso = document.getElementById('amigo');
    //El valor ingreso se le quita los espacios en blanco al inicio y al final
    let nombre = ingreso.value.trim();
    // Si el nombre no es válido, se retorna
    if (!validarNombre(nombre)) 
        return;
    //Se agrega el nombre a la lista de amigos  
    listaAmigos.push(nombre);
    //Se actualiza la lista de amigos
    actualizarLista();
    //Se verifica si se puede sortear
    verificarBoton()
    //Se borra el campo de ingreso
    borrarCampo(ingreso);
    
}

//Función para validar el nombre
function validarNombre(nombre) {
    //Si el nombre no es válido, se muestra un mensaje de alerta
    if (!nombre) {
        alert("Por favor, inserte un nombre válido.");
        return false;
    }
    //Si el nombre ya existe en la lista, se muestra un mensaje de alerta
    if (listaAmigos.includes(nombre)) {
        alert("El nombre ya existe en la lista.");
        return false;
    }
    return true;
}
//Función para actualizar la lista de amigos
function actualizarLista() {
    //Se obtiene el elemento con el id listaAmigos
    let lista = document.getElementById('listaAmigos');
    //Se limpia la lista
    lista.innerHTML = "";
    //Se recorre la lista de amigos y se crea un elemento li por cada amigo
    listaAmigos.forEach(amigo => {
        //Se crea un elemento li
        let li = document.createElement("li");
        //Se le asigna el texto del amigo
        li.textContent = amigo;
        //Se agrega el elemento li a la lista
        lista.appendChild(li);
    });
    verificarBoton();
}
//Función para borrar el campo de ingreso
function borrarCampo(ingreso) {
    ingreso.value = "";
}
//Función para sortear un amigo
function sortearAmigo() {
    //Se obtiene el elemento con el id resultado
    let sortear = document.getElementById('resultado');
    //Si la lista de amigos tiene menos de dos amigos, se muestra un mensaje de alerta
    if (listaAmigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }
    //Se obtiene un número aleatorio entre 0 y la cantidad de amigos
    let aleatorio = Math.floor(Math.random() * listaAmigos.length);
    //Se obtiene el amigo ganador
    let ganador = listaAmigos[aleatorio];
    //Se muestra el amigo ganador
    sortear.innerText = `El amigo secreto es: ${ganador}`;
}
//Función para verificar si se puede sortear
function verificarBoton() {
    const boton = document.getElementById('sortearBtn');
    boton.disabled = listaAmigos.length < 2; // Habilita o deshabilita el botón según la cantidad de amigos
}
