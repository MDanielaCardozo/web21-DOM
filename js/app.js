const cambiarTitulo = () => {
    console.log("Desde la funcion cambiar titulo");
    //getElementByID traemos el titulo por el ID
    const titulo = document.getElementById("titulo-modificable");
    //getElementsByTagName traemos el titulo por etiqueta
    //const titulo = document.getElementsByTagName("h2")
    //getElementsByClassName treamos el titulo por el nombre de clase
    //const titulo = document.getElementsByClassName("display-4")
    //querySelector devuelve el primer elemento que encuentra que encaja con el selector de CSS indicado por parametro
    //const titulo = document.querySelector("#titulo-modificable")
    //querySelectorAll devuelve todos los elementos html que coinciden
    //const titulo = document.querySelectorAll(".titulo")

    console.log(titulo);

    //modificar el color del titulo
    //adicionar una clase ADD
    titulo.classList.add("text-info");
    //quitar una clase
    titulo.classList.remove("display-4")

    //innerHTML interpreta HTML (⚠️ vulnerable a XSS si no se controla, codigo malicioso).
    //titulo.innerHTML = "Hola <b>mundo</b>";

    titulo.textContent = "Hola mundo";
    
}

const cambiarColor = () => {
    const title = document.getElementById("titulo-modificable")

    title.classList.remove("text-info")
}

const ocultarParrafo = () => {
    console.log("Desde ocultar parrafo");
    const parrafo = document.getElementById("parrafo");
    //ocultar el parrafo 
    parrafo.classList.toggle("visually-hidden")
    //cambiar el estado del boton
    if (btnRojo.textContent === "Ocultar parrafo") {
        btnRojo.textContent = "Mostrar parrafo";
        btnRojo.classList.replace("btn-danger", "btn-success");
    } else {
        btnRojo.textContent = "Ocultar parrafo";
        btnRojo.classList.replace("btn-success", "btn-danger");
    }
}

//Buscar el boton 
const btnRojo = document.querySelector(".btn-danger");
//console.log(btnRojo);
//adicionamos el manejador de eventos 
btnRojo.addEventListener("click", ocultarParrafo);

