var cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}, {
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, {
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, {
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];
cards.sort(function () { return 0.5 - Math.random() });

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		swal("Congratulations!", "You matched a pair.", "success");
	} else {
		swal("Sorry, try again.", "You did not match a pair.", "info");
	}
};

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank + " " + "of " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i += 1) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();