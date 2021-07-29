let card1 = `<div class="card" onclick="turnCard(this)"><img class="parrot" src="assets/front.png" /><img class="gif vanish" src="assets/bobrossparrot.gif" /></div>`;
let card2 = `<div class="card" onclick="turnCard(this)"><img class="parrot" src="assets/front.png" /><img class="gif vanish" src="assets/explodyparrot.gif" /></div>`;
let card3 = `<div class="card" onclick="turnCard(this)"><img class="parrot" src="assets/front.png" /><img class="gif vanish" src="assets/fiestaparrot.gif" /></div>`;
let card4 = `<div class="card" onclick="turnCard(this)"><img class="parrot" src="assets/front.png" /><img class="gif vanish" src="assets/metalparrot.gif" /></div>`;
let card5 = `<div class="card" onclick="turnCard(this)"><img class="parrot" src="assets/front.png" /><img class="gif vanish" src="assets/revertitparrot.gif" /></div>`;
let card6 = `<div class="card" onclick="turnCard(this)"><img class="parrot" src="assets/front.png" /><img class="gif vanish" src="assets/tripletsparrot.gif" /></div>`;
let card7 = `<div class="card" onclick="turnCard(this)"><img class="parrot" src="assets/front.png" /><img class="gif vanish" src="assets/unicornparrot.gif" /></div>`;
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
  numberOfPlays++;
  cardSelected.classList.add("selected");
  let parrot = cardSelected.childNodes[0];
  parrot.classList.add("vanish");
  let gif = cardSelected.childNodes[1];
  gif.classList.remove("vanish");
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
      console.log(correctCards);
      if (correctCards.length === numberOfCards) {
        alert(`Você ganhou em ${numberOfPlays} jogadas!`);
        return;
      }
    } else {
      wait = true;
      setTimeout(() => {
        playedCards[0].childNodes[0].classList.remove("vanish");
        playedCards[0].childNodes[1].classList.add("vanish");
        playedCards[0].classList.remove("selected");
        playedCards[1].childNodes[0].classList.remove("vanish");
        playedCards[1].childNodes[1].classList.add("vanish");
        playedCards[1].classList.remove("selected");
        wait = false;
      }, 1000);
    }
  }
}

function shuffle() {
  return Math.random() - 0.5;
}
