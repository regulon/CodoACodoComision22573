const navContent = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid nav">
      <a class="navbar-brand" href="#">
        
        Conf Bs As
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end text-nowrap" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html#conferencia">La conferencia</a>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Los oradores
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="nav-item">
                <a class="dropdown-item" href="index.html#steve">Steve Jobs</a>
                <a class="dropdown-item" href="index.html#gates">Bill Gates</a>
                <a class="dropdown-item" href="index.html#ada">Ada Lovelace</a>
              </li>
            </ul>
          <li class="nav-item">
            <a class="nav-link" onclick="lugarYFecha()">El lugar y la fecha</a>
          <li class="nav-item">
            <a class="nav-link" href="index.html#orador">Conviértete en orador</a>
          <li class="nav-item">
            <a class="nav-link" id="color" href="/ticket.html">Comprar tickets</a>
        </ul>
      </div>
    </div>
</nav>`;
    
document.getElementById('insertnav').innerHTML = navContent;

const cardContent =`
<div class="container d-flex flex-wrap justify-content-center mt-4 mb-1 gap-1">
    <div class="card border-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Estudiante</h5>
        <p class="card-text">Tiene un descuento</p>
        <p class="card-text">80%</p>
        <p class="card-text text-muted">* Presentar documetación</p>
      </div>
    </div>
    <div class="card border-primary mb-3">
      <div class="card-body">
      <h5 class="card-title">Trainee</h5>
      <p class="card-text">Tiene un descuento</p>
      <p class="card-text">50%</p>
      <p class="card-text text-muted">* Presentar documetación</p>
      </div>
    </div>
    <div class="card border-warning mb-3">
      <div class="card-body">
      <h5 class="card-title">Junior</h5>
      <p class="card-text">Tiene un descuento</p>
      <p class="card-text">15%</p>
      <p class="card-text text-muted">* Presentar documetación</p>
      </div>
    </div>
</div>`;
  
document.getElementById('insertcard').innerHTML = cardContent;

const formDatos = `

<div class="texto mb-4">
    <h6>VENTA</h6>
    <h1>VALOR DE TICKET $ 200</h1>
</div>
<form action="" method="get" id="miForm">
  <div class="container formulario col-lg-6 col-lg-offset-3">
    <div class="row justify-content-center align-items-center mb-2">
      <div class="d-flex">
          <div class="form-group me-2 w-100">
            <input type="text" class="form-control" placeholder="Nombre">
          </div>
          <div class="form-group w-100">
            <input type="text" class="form-control" placeholder="Apellido">
          </div>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="datos mt-3 mb-2">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Correo">
        </div>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
  <div class="d-flex mb-4">
      <div class="form-group me-2 w-100">
        <label for="cantidad">&nbsp;Cantidad</label>
        <input type="number" class="form-control" id="cantidad" placeholder="Cantidad">
      </div>
      <div class="form-group w-100">
        <label for="categoria">&nbsp;Categoría</label>
        <select class="form-control text-muted" id="categoria">
          <option selected>Seleccione categoría</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Trainee">Trainee</option>
          <option value="Junior">Junior</option>
        </select
      </div>
  </div>
</div>
<div class="row justify-content-center align-items-center d-flex mb-3">
  <div class="text-start">
    <div class="form-group" id="escribir">
      Total a pagar $
    </div>
  </div>
</div>
<div class="btn-group mb-2" role="group">
  <button type="button" class="btn btn-secondary me-2 boton1" onclick="limpiarFormulario()">Borrar</button>
  <button type="button" class="btn btn-secondary boton2" onclick="capturar()">Resumen</button>
</div>`;

document.getElementById('insertForm').innerHTML = formDatos;

const footer = `
<footer>
    <div class="container-fluid bar pt-3 pb-3 pe-5 ps-5">
      <div class="row justify-content-evenly linea">
        <div class="col-lg-1">
          <a href="">Preguntas frecuentes</a>
        </div>
        <div class="col-lg-1">
          <a href="">Contáctanos</a>
        </div>
        <div class="col-lg-1">
          <a href="">Prensa</a>
        </div>
        <div class="col-lg-1">
          <a href="">Conferencia</a>
        </div>
        <div class="col-lg-1">
          <a href="">Términos y condiciones</a>
        </div>
        <div class="col-lg-1">
          <a href="">Privacidad</a>
        </div>
        <div class="col-lg-1">
          <a href="">Estudiantes</a>
        </div>
      </div>
    </div>
  </footer>`;

document.getElementById('insertFooter').innerHTML = footer;

function capturar() {
    let lstNumero = document.getElementsByClassName("form-control"), arrayGuardar = [];
    for (var i = 0; i < lstNumero.length; i++) {
        arrayGuardar[i] = lstNumero[i].value;
        console.log(lstNumero[i].value);
    }
    document.getElementById("escribir").innerHTML = `<h6><b><i>**Detalle de la compra**</i></b></h6><b>Nombre: </b> ${lstNumero[0].value} ${lstNumero[1].value} \n <br> <b>Correo:</b> ${lstNumero[2].value} \n <br><b> Cantidad: </b> ${lstNumero[3].value} tickets\n <br><b>Categoria: </b> ${lstNumero[4].value}`;

    if ((lstNumero[4].value) == "Estudiante") {
        var descuento1 = 0.20;
        var descuentoDato1 = 80;

    } else if (lstNumero[4].value === "Trainee") {
        var descuento1 = 0.50;
        var descuentoDato1 = 50;

    } else {
        var descuento1 = 0.85;
        var descuentoDato1 = 15;

    }
    const m1 = 200;
    let total = parseInt(lstNumero[3].value) * m1 * descuento1;

    document.getElementById("escribir").innerHTML += `\n <br> <b>Descuento según categoría:</b> ${descuentoDato1}% \n <br> <b>Total a pagar: </b> $ ${total}`;
    console.log(total);
}

function limpiarFormulario() {
  document.getElementById("miForm").reset();
  document.getElementById("escribir").innerHTML = "Total a pagar $";
} 

function lugarYFecha(){
  alert("Lugar: Sala de Conferencia Codo a Codo, Nivel PB.\nFecha: 29/10/2022.\nHora: 14:30.");
}