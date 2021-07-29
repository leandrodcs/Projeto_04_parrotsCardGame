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
  cardSelected.classList.add("selected");
  let parrot = cardSelected.childNodes[0];
  parrot.classList.add("vanish");
  let gif = cardSelected.childNodes[1];
  gif.classList.remove("vanish");
  checkCard();
}
function checkCard() {
  if (document.querySelectorAll(".selected").length === 2) {
  }
}

function shuffle() {
  return Math.random() - 0.5;
}
