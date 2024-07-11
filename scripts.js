document.addEventListener("DOMContentLoaded", function () {
  //rutina
  const calcularRutina = (genero, edad) => {
    let rutina = "";
    if (genero === "masculino") {
      if (edad < 30 && edad >= 18) {
        rutina = "Rutina A: Cardio 30 minutos, Pesas 45 minutos.";
      } else if (edad >= 30 && edad <= 50) {
        rutina = "Rutina B: Cardio 20 minutos, Pesas 30 minutos.";
      } else {
        rutina = "Edad invalida";
      }
    } else {
      if (edad < 30 && edad >= 18) {
        rutina = "Rutina A: Cardio 30 minutos, Yoga 45 minutos.";
      } else if (edad >= 30 && edad <= 50) {
        rutina = "Rutina B: Cardio 20 minutos, Yoga 30 minutos.";
      } else {
        rutina = "Edad invalida";
      }
    }
    return rutina;
  };

  var formulario = document.getElementById("formularioRutinas");
  var resultadoRutina = document.getElementById("resultadoRutina");

  var rutinasGuardadas = localStorage.getItem("rutinasGimnasio");
  if (rutinasGuardadas) {
    resultadoRutina.innerHTML = rutinasGuardadas;
  }

  formulario.onsubmit = function (event) {
    event.preventDefault();

    var genero = document.getElementById("genero").value;
    var edad = document.getElementById("edad").value;

    var rutina = calcularRutina(genero, edad);

    resultadoRutina.innerHTML = rutina;

    localStorage.setItem("rutinasGimnasio", rutina);

    formulario.reset();
  };

  //Datos alumna
  const infoIntegrantes = document.getElementById("infoIntegrantes");
  const mostrarInfo = document.getElementById("mostrarInfo");

  mostrarInfo.addEventListener("click", function () {
    if (infoIntegrantes.style.display === "none") {
      infoIntegrantes.style.display = "block";
    } else {
      infoIntegrantes.style.display = "none";
    }
  });
});
