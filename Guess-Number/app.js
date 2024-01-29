// Tu código JavaScript va aquí
let resetButtom_visible = false;
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Intentos anteriores: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    lastResult.style.borderRadius = "5px"
    lastResult.style.textAlign = "center"
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!Fin del juego!!!";
    lastResult.style.borderRadius = "5px"
    lastResult.style.textAlign = "center"
    lowOrHi.textContent = "";
    setGameOver();
  } else if(userGuess !== Number) {
    lastResult.textContent = "¡No es un numero!";
    lastResult.style.backgroundColor = "red";
    lastResult.style.borderRadius = "5px"
    lastResult.style.textAlign = "center"
    lowOrHi.textContent
  } else {
    lastResult.textContent = "¡Incorrecto!";
    lastResult.style.backgroundColor = "red";
    lastResult.style.borderRadius = "5px"
    lastResult.style.textAlign = "center"
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "¡El número es muy bajo!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "¡El número es muy grande!";
    }
  }

  guessCount++;
  guessField.value = "";
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.getElementById('reset');
  if(resetButtom_visible === false) {
    resetButton.style.display = 'block';
    resetButtom_visible = true;
  }
  else{
    resetButton.style.display = 'none';
    resetButtom_visible = false;
  }
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  //resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  resetButton = document.getElementById('reset');
  resetButton.style.display = 'none';
  resetButtom_visible = false;
  lastResult.style.backgroundColor = "#252525";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}