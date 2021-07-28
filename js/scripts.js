let numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));

while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
  numberOfCards = Number(prompt("Com quantas cartas quer jogar?"));
}

for (i = 0; i < numberOfCards; i++) {
  addCards();
}

function addCards() {
  let cards = document.querySelector(".container");
  cards.innerHTML =
    cards.innerHTML +
    `      <div class="card">
  <img
    src="assets/front.png"
    alt="Seu navegador não pode carregar a imagem"
  />
</div>`;
}
