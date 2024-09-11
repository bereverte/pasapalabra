const screens = document.querySelectorAll(".screen")
const start_btn = document.getElementById("start-btn")
const correct_btn = document.getElementById("correct-btn")
const wrong_btn = document.getElementById("wrong-btn")
const image = document.getElementById("festival-tickets")

const words = {
  A: "Animal que vuela y tiene plumas.",
  B: "País de Sudamérica famoso por su carnaval en Río de Janeiro.",
  C: "Espacio azul que vemos sobre nosotros durante el día.",
  D: "Moneda oficial de los Estados Unidos.",
  E: "Animal terrestre de gran tamaño con trompa.",
  F: "Elemento necesario para encender una hoguera.",
  G: "Animal doméstico que maúlla.",
  H: "Postre frío que se suele comer en verano.",
  I: "Porción de tierra rodeada completamente por agua.",
  J: "Animal alto con un largo cuello que vive en la sabana.",
  L: "Felino conocido como el rey de la selva.",
  M: "Gran elevación natural de terreno, más alta que una colina.",
  N: "Masa blanca formada por cristales de agua que flota en el cielo.",
  O: "Animal grande que vive en el bosque y hiberna en invierno.",
  P: "Animal que es conocido como el mejor amigo del hombre.",
  Q: "Alimento hecho a base de leche, común en pizzas y ensaladas.",
  R: "Corriente natural de agua que fluye hacia el mar.",
  S: "Estrella que ilumina y calienta la Tierra.",
  T: "Animal felino de rayas que es el más grande de su especie.",
  U: "Conjunto de planetas, estrellas y galaxias.",
  V: "Corriente de aire que se siente en días ventosos.",
  X: "Instrumento musical que se toca golpeando teclas.",
  Y: "Embarcación de lujo, generalmente utilizada para recreo.",
  Z: "Animal salvaje con rayas blancas y negras.",
}

const letters = Object.keys(words)
let currentLetter = letters[0]
let correctAnswers = []

let currentScreen = 0

start_btn.addEventListener("click", () => {
  screens[0].classList.remove("active")
  screens[1].classList.add("active")
  screens[1].style.backgroundColor = "rgb(176, 215, 240)"
  displayDefs()
})

function displayDefs() {
  document.getElementById("letter-display").innerText = currentLetter
  document.getElementById("definition-display").innerText = words[currentLetter]
}

correct_btn.addEventListener("click", () => {
  correctAnswers.push(currentLetter)
  if (correctAnswers.length === Object.keys(words).length) {
    endGame()
  } else {
    nextLetter()
    displayDefs()
  }
})

wrong_btn.addEventListener("click", () => {
  nextLetter()
  displayDefs()
})

function nextLetter() {
  let nextIndex = (letters.indexOf(currentLetter) + 1) % letters.length
  while (correctAnswers.includes(letters[nextIndex])) {
    nextIndex = (nextIndex + 1) % letters.length
  }
  currentLetter = letters[nextIndex]
}

function endGame() {
  screens[1].classList.remove("active")
  screens[2].classList.add("active")
}
