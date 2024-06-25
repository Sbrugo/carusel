const recordarDiv = document.querySelector(".recordar");
const olvidarDiv = document.querySelector(".olvidar");
const form = document.querySelector("form");
const nombreInput = document.querySelector("#enviarnombre");
const recordarBtn = document.querySelector("#recordarnombre");
const olvidarBtn = document.querySelector("#olvidarnombre");
const saludo = document.querySelector(".saludo");

let swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    breakpoints:{
        991: {
            slidesPerView: 3,
        }
    }

})

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

recordarBtn.addEventListener("click", function () {
    localStorage.setItem("nombre", nombreInput.value);
    mostrarNombreONo();
});

olvidarBtn.addEventListener("click", function () {
    localStorage.removeItem("nombre");
    mostrarNombreONo();
});

function mostrarNombreONo() {
  if (localStorage.getItem("nombre")) {
    let nombre = localStorage.getItem("nombre");
    saludo.textContent =
      "¡Bienvenido a nuestro sitio web, " +
      nombre +
      "! Esperamos que te diviertas mientras estés aquí.";
    olvidarDiv.style.display = "block";
    recordarDiv.style.display = "none";
  } else {
    saludo.textContent =
      "Bienvenido a nuestro sitio web. Esperamos que se diviertas mientras estés aquí.";
    olvidarDiv.style.display = "none";
    recordarDiv.style.display = "block";
  }
}
