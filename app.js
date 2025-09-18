let amigos =[];

function registrarAmigo() {
    let ingresarAmigo = document.getElementById("amigo").value;

    if (ingresarAmigo.trim() === "") {
        alert("Por favor, insertar un nombre para agregar al sorteo del Amigo Secreto");
    } else { 
        amigos.push(ingresarAmigo);
        document.querySelector("#amigo").value = "";
        mostrarListaAmigos();
    }
    return;
}


function mostrarListaAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
    }
    return;
}

function sortearAmigo() {
    let cantidadDeAmigos = amigos.length;
    if (cantidadDeAmigos === 0) {
        alert("Por favor, inserta un nombre antes de sortear");
    } else {
        let indiceAmigo = (Math.floor(Math.random()) * cantidadDeAmigos);
        let resultadoHTML = document.querySelector('#resultado');
        resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
    return;
}


