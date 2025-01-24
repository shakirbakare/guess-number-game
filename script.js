"use strict";

const userScores = document.querySelector(".guess-game__scores");
const background = document.querySelector(".gusess-game");

const secretNumber = document.querySelector(".guess-game__secret-number");

const randomNum = Math.floor(Math.random() * 20) + 1;

secretNumber.textContent = randomNum;
let scores = 10;
let highScores = 0;

const gameLogic = function () {
  const userInput = Number(document.querySelector(".guess-game__input").value);

  if (!userInput) {
    inputFeedback.textContent = "No number!";
  } else if (userInput === randomNum) {
    inputFeedback.textContent = winMessage;
    if (scores > highScores) {
      userHighScores.textContent = scores;
    }
  } else if (userInput > randomNum) {
    if (scores > 1) {
      inputFeedback.textContent = "Too high";
      scores--;
      userScores.textContent = scores;
    } else {
      inputFeedback.textContent = "You lost the game!";
      userScores.textContent = 0;
    }
  } else if (userInput < randomNum) {
    if (scores > 1) {
      inputFeedback.textContent = "Too low";
      scores--;
      userScores.textContent = scores;
    } else {
      inputFeedback.textContent = "You lost the game!";
      userScores.textContent = 0;
    }
  }
};

const inputFeedback = document.querySelector(".guess-game__feedback");

const winMessage = "You won!";

const userHighScores = document.querySelector(".guess-game__high-scores");

const checkBtn = document.querySelector(".guess-game__button");

checkBtn.addEventListener("click", gameLogic);
