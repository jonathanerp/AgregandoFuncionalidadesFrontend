/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
datosPersona.nombre= prompt("Ingresa tu nombre");

let nacimiento = prompt("Ingresa el año que naciste");
let fechaActual = new Date();
let año = fechaActual.getFullYear();
datosPersona.edad= año-nacimiento;

datosPersona.ciudad= prompt("Ingresa la ciudad donde vives");

datosPersona.interesPorJs= confirm("¿Te interesa JavaScript?");
(datosPersona.interesPorJs == true) ? datosPersona.interesPorJs= "Si" : datosPersona.interesPorJs= "No";
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre=document.getElementById("nombre").innerHTML = datosPersona.nombre;
  let edad=document.getElementById("edad").innerHTML = datosPersona.edad;
  let ciudad=document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
  let interesPorJs=document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  var contenedor = document.getElementById("fila");

  listado.forEach(function(materia) {
    let caja = document.createElement("div");
    caja.classList.add("caja");

    let imagen = document.createElement("img");
    imagen.src = materia.imgUrl;
    imagen.alt = materia.lenguajes;

    let lenguajesParrafo = document.createElement("p");
    lenguajesParrafo.classList.add("lenguajes");
    lenguajesParrafo.textContent = "Lenguajes: "+ materia.lenguajes;

    let bimestreParrafo = document.createElement("p");
    bimestreParrafo.classList.add("bimestre");
    bimestreParrafo.textContent = "Bimestre: "+ materia.bimestre;

    caja.appendChild(imagen);
    caja.appendChild(lenguajesParrafo);
    caja.appendChild(bimestreParrafo);

    contenedor.appendChild(caja);
  });
  materiasBtn.disabled = true;
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", EventoTeclado);
function EventoTeclado(event) {
  if (event.key === "F") {
    var parrafoSobreMi = document.getElementById("sobre-mi");
    parrafoSobreMi.classList.remove("oculto");
  }
}