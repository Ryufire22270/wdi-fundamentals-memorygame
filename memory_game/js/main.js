//variable array for each card's rank, suit, and image
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},

	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},

	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},

	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

var	cardsInPlay = [];

//var checks for a match
var checkForMatch = function() {

//checks if a match had been made
if (cardsInPlay[0] === cardsInPlay[1]) {
		
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}		
};

//function for flipping a card over
var flipCard = function() {
	
	//gets the data-id of a card and logs it
	cardId = this.getAttribute('data-id');
	//logs user flipped and card[cardId].rank value
	console.log("User flipped " + cards[cardId].rank);

	//pushes string and value of rank into cardInPlay array
	cardsInPlay.push(cards[cardId].rank);

	//logs display of image and suit
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//displays the card's image 
	this.setAttribute('src', cards[cardId].cardImage)
	
	//checks to see how many cards have already been played
	if(cardsInPlay.length === 2) {

	//calls checkForMatch	
	checkForMatch();
	
	}
};

//function that creates the board
var createBoard = function() {
	//for loop that goes though your cards array

	for (var i = 0; i < cards.length; i++) {

	//creates and img element to work with 	
	var cardElement = document.createElement('img');

	//sets attribute to display the card flipped
	cardElement.setAttribute('src', "images/back.png")

	cardElement.setAttribute('data-id', i)

	//adds a click event listener to "wait" for a click in order to flip
	cardElement.addEventListener('click', flipCard);

	//appends the card to the board you have created
	document.getElementById('game-board').appendChild(cardElement);	
	}
};

//calls the createBoard function so it can work
createBoard();