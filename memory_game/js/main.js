var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("Awesome, you found a match!");
  } else { 
    console.log("Sorry, try again.");
  }};
var flipCard = function(cardId) {
  checkForMatch(); 
  console.log("Player flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);};

  flipCard();
  flipCard(0);
  flipCard(2);