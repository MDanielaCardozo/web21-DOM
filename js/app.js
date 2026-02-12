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

const eliminarParrafo = () => {
    console.log("desde la funcion eliminar parrafo");
    const parrafo = document.getElementsByTagName("p");
    console.log(parrafo[4]);
    parrafo[4].remove();
    btnAmarillo.classList.add("disabled")
}

const obtenerNombre = (e) => {
    //evitar el comportamiento por defecto que tienen los form de refrescar la pagina
    e.preventDefault()
    console.log(e);
    console.log("desde la funcion obtener nombre");
    //const input = document.querySelector(".form-control")
    const input = document.getElementById("nombre")
    console.log(input.value);
    const parrafo = document.getElementById("idNombre");
    //parrafo.textContent = parrafo.textContent + input.value
    parrafo.textContent += input.value;
    formulario.reset();
}

const cambiarTema = () => {
    const html = document.documentElement;
    const temaActual = html.getAttribute("data-bs-theme");
    console.log(temaActual);
    html.setAttribute("data-bs-theme", temaActual === "dark" ? "light" : "dark")
}

const crearTarea = (e) =>{
    e.preventDefault();
    console.log("desde la funcion crear tarea");
    //1 - tomar la tarea del input
    const inputTarea = document.getElementById("tarea").value.trim();
    //2- crear la card con la tarea que cargue el usuario en el input
    const divcol = document.createElement("div");//<div></div>
    const divcard = document.createElement("div");//<div></div>
    const divcardBody = document.createElement("div")//<div></div>
    const h5 = document.createElement("h5")//<h5></h5>
    const p = document.createElement("p")
    divcol.className = "col-md-4 col-lg-3";
    divcard.className = "card h-100";
    divcardBody.className = "card-body";
    h5.className = "card-title";
    h5.textContent = "Tarea ✅";
    p.className = "card-text";
    p.textContent = inputTarea;

    const row = document.querySelector("#rowTarea");
    row.appendChild(divcol);
    divcol.appendChild(divcard);
    divcard.appendChild(divcardBody);
    divcardBody.appendChild(h5);
    divcardBody.appendChild(p)
    
    formTarea.reset()
}


//Buscar el boton 
const btnRojo = document.querySelector(".btn-danger");
const btnAmarillo = document.querySelector(".btn-warning");
const formulario = document.querySelector("#formNombre");
const btnCambiarTema = document.querySelector(".btn-dark");
const formTarea = document.getElementById("formTareas");

//console.log(btnRojo);
//adicionamos el manejador de eventos 
btnRojo.addEventListener("click", ocultarParrafo);
btnAmarillo.addEventListener("click", eliminarParrafo);
formulario.addEventListener("submit", obtenerNombre);
btnCambiarTema.addEventListener("click", cambiarTema);
formTarea.addEventListener("submit", crearTarea)


