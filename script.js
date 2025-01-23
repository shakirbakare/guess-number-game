"use strict";

const secretNumber = document.querySelector(".guess-game__secret-number");

const randomNum = Math.floor(Math.random() * 20) + 1;

secretNumber.textContent = randomNum;

const inputFeedback = document.querySelector(".guess-game__feedback");

const userScores = document.querySelector(".guess-game__scores");

const winMessage = "You won!";

const userHighScores = document.querySelector(".guess-game__high-scores");

const checkBtn = document.querySelector(".guess-game__button");

checkBtn.addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess-game__input").value);

  if (!userInput) {
    inputFeedback.textContent = "No number!";
  } else if (userInput > randomNum) {
    inputFeedback.textContent = "Too high";
  } else if (userInput < randomNum) {
    inputFeedback.textContent = "Too low";
  } else if (userInput === randomNum) {
    inputFeedback.textContent = winMessage;
  }
});
