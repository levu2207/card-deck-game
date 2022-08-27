const cardNumber = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const cardType = ["hearts", "diamonds", "clubs", "spades"];

let initCard = [
  {
    number: "og",
    type: "hearts",
  },
  {
    number: "og",
    type: "diamonds",
  },
  {
    number: "og",
    type: "clubs",
  },
  {
    point: "",
  },
];

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function randomCard() {
  const ranCardNumber1 = random(0, 12);
  const ranCardNumber2 = random(0, 12);
  const ranCardNumber3 = random(0, 12);
  const ranCardType1 = random(0, 3);
  const ranCardType2 = random(0, 3);
  const ranCardType3 = random(0, 3);

  initCard[0].number = `${cardNumber[ranCardNumber1]}`;
  initCard[0].type = `${cardType[ranCardType1]}`;

  initCard[1].number = `${cardNumber[ranCardNumber2]}`;
  initCard[1].type = `${cardType[ranCardType2]}`;

  initCard[2].number = `${cardNumber[ranCardNumber3]}`;
  initCard[2].type = `${cardType[ranCardType3]}`;

  initCard[3].point = calcPoint(ranCardNumber1, ranCardNumber2, ranCardNumber3);

  return initCard;
}

function calcPoint(card1, card2, card3) {
  let point1 = card1 + 1;
  let point2 = card2 + 1;
  let point3 = card3 + 1;

  let point = 0;

  if (point1 > 10 && point2 > 10 && point3 > 10) return (point = "Ba Cào");

  if (point1 > 10) point1 = 10;
  if (point2 > 10) point2 = 10;
  if (point3 > 10) point3 = 10;

  point = (point1 + point2 + point3).toString().slice(-1);

  if (point === "0") point = "Bù";

  return point;
}

function displayCard(initCard) {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");

  if (!card1 || !card2 || !card3) return;

  card1.src = `./52-card_deck/${initCard[0].number}_of_${initCard[0].type}.png`;
  card2.src = `./52-card_deck/${initCard[1].number}_of_${initCard[1].type}.png`;
  card3.src = `./52-card_deck/${initCard[2].number}_of_${initCard[2].type}.png`;

  // render point
  const cardPoint = document.getElementById("point");
  cardPoint.textContent = `Point: ${initCard[3].point}`;
}

function isCardEqual(object1, object2) {
  return object1.number === object2.number && object1.type === object2.type;
}

function renderCard(initCard) {
  while (
    isCardEqual(initCard[0], initCard[1]) ||
    isCardEqual(initCard[0], initCard[2]) ||
    isCardEqual(initCard[1], initCard[2])
  ) {
    randomCard();
  }

  displayCard(initCard);
}

function handlePlayButton() {
  randomCard();
  renderCard(initCard);
}

function main() {
  renderCard(initCard);

  const playGame = document.getElementById("play");
  playGame.addEventListener("click", () => {
    handlePlayButton();
  });
}

main();
