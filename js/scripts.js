let card1 = `<div class="card" onclick="turnCard(this)"><div class="front-face face"><img class="parrot" src="assets/front.png" /></div><div class="back-face face"><img class="gif" src="assets/bobrossparrot.gif" /></div></div>`;
let card2 = `<div class="card" onclick="turnCard(this)"><div class="front-face face"><img class="parrot" src="assets/front.png" /></div><div class="back-face face"><img class="gif" src="assets/explodyparrot.gif" /></div></div>`;
let card3 = `<div class="card" onclick="turnCard(this)"><div class="front-face face"><img class="parrot" src="assets/front.png" /></div><div class="back-face face"><img class="gif" src="assets/fiestaparrot.gif" /></div></div>`;
let card4 = `<div class="card" onclick="turnCard(this)"><div class="front-face face"><img class="parrot" src="assets/front.png" /></div><div class="back-face face"><img class="gif" src="assets/metalparrot.gif" /></div></div>`;
let card5 = `<div class="card" onclick="turnCard(this)"><div class="front-face face"><img class="parrot" src="assets/front.png" /></div><div class="back-face face"><img class="gif" src="assets/revertitparrot.gif" /></div></div>`;
let card6 = `<div class="card" onclick="turnCard(this)"><div class="front-face face"><img class="parrot" src="assets/front.png" /></div><div class="back-face face"><img class="gif" src="assets/tripletsparrot.gif" /></div></div>`;
let card7 = `<div class="card" onclick="turnCard(this)"><div class="front-face face"><img class="parrot" src="assets/front.png" /></div><div class="back-face face"><img class="gif" src="assets/unicornparrot.gif" /></div></div>`;
let cardList = [
  card1,
  card1,
  card2,
  card2,
  card3,
  card3,
  card4,
  card4,
  card5,
  card5,
  card6,
  card6,
  card7,
  card7,
];
let seconds = 0;
let minutes = 0;
let timing;
let countTime = true;
let wait = false;
let numberOfPlays = 0;
let numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));
while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
  numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));
}
cardList.length = numberOfCards;
cardList.sort(shuffle);
for (i = 0; i < numberOfCards; i++) {
  let gameCards = document.querySelector(".container");
  gameCards.innerHTML += cardList[i];
}

function turnCard(cardSelected) {
  if (wait === true) {
    return;
  }
  if (countTime === true) {
    timing = setInterval(clock, 1000);
    countTime = false;
  }
  numberOfPlays++;
  cardSelected.classList.add("selected");
  checkIfCardsMatch();
}

function checkIfCardsMatch() {
  let playedCards = document.querySelectorAll(".selected");
  if (playedCards.length === 2) {
    if (playedCards[0].innerHTML === playedCards[1].innerHTML) {
      playedCards[0].classList.remove("selected");
      playedCards[0].classList.add("completed");
      playedCards[1].classList.remove("selected");
      playedCards[1].classList.add("completed");
      let correctCards = document.querySelectorAll(".completed");
      if (correctCards.length === numberOfCards) {
        setTimeout(finalMessage, 300);
      }
    } else {
      wait = true;
      setTimeout(() => {
        playedCards[0].classList.remove("selected");
        playedCards[1].classList.remove("selected");
        wait = false;
      }, 1000);
    }
  }
}
function clock() {
  if (seconds <= 9) {
    seconds++;
    document.querySelector(".clock").innerHTML = `0${minutes}:0${seconds}`;
  } else if (seconds >= 10 && seconds < 59) {
    seconds++;
    document.querySelector(".clock").innerHTML = `0${minutes}:${seconds}`;
  } else if (seconds >= 59) {
    seconds = 0;
    minutes++;
    document.querySelector(".clock").innerHTML = `0${minutes}:${seconds}`;
  }
}

function shuffle() {
  return Math.random() - 0.5;
}

function newGame() {
  let userWantsToReplay = prompt("Deseja jogar esse jogasso de novo?");
  if (
    userWantsToReplay !== "sim" &&
    userWantsToReplay !== "Sim" &&
    userWantsToReplay !== "S" &&
    userWantsToReplay !== "s"
  ) {
    return;
  }
  document.querySelector(".clock").innerHTML = "00:00";
  document.querySelector(".container").innerHTML = "";
  cardList = [
    card1,
    card1,
    card2,
    card2,
    card3,
    card3,
    card4,
    card4,
    card5,
    card5,
    card6,
    card6,
    card7,
    card7,
  ];
  seconds = 0;
  minutes = 0;
  count = true;
  numberOfPlays = 0;
  numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));

  while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
    numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));
  }
  cardList.length = numberOfCards;
  cardList.sort(shuffle);
  for (i = 0; i < numberOfCards; i++) {
    let gameCards = document.querySelector(".container");
    gameCards.innerHTML += cardList[i];
  }
}

function finalMessage() {
  stopClock();
  countTime = true;
  if (seconds < 10) {
    alert(
      `Você ganhou em ${numberOfPlays} jogadas! Tempo: 0${minutes}:0${seconds}`
    );
  } else {
    alert(
      `Você ganhou em ${numberOfPlays} jogadas! Tempo: 0${minutes}:${seconds}`
    );
  }
  newGame();
}

function stopClock() {
  clearInterval(timing);
}
