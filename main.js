console.log("Hello World");

const choices = ['Rock', 'Paper', 'Scissors'];

const strRbS = " Rock beats Scissors.";
const strPbR = " Paper beats Rock.";
const strSbP = " Scissors beats Paper.";

let wins = 0;
let losses = 0;

const victoryTable = {'Rock': 		{
  											'Rock': ['Tie', ''],
  											'Paper': ['Loss', strPbR],
  											'Scissors': ['Win', strRbS]},
											'Paper':  	{
  											'Rock': ['Win', strPbR],
  											'Paper': ['Tie', ''],
  											'Scissors': ['Loss', strSbP]},
											'Scissors': {
  											'Rock': ['Loss', strRbS],
  											'Paper': ['Win', strSbP],
  											'Scissors': ['Tie', '']}}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn)  => {
  btn.addEventListener('click', () => {
    playRound(btn.id);
  });
});

const output = document.querySelector('#Output');
const counterWins = document.querySelector('#Wins');
const counterLosses = document.querySelector('#Losses');
const messageVictory = document.querySelector('#Victory');

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function roundLogic(play) {
  let outputString = "";
  console.log(`${play[0]}, ${play[1]}`);

  outputString = victoryTable[play[0]][play[1]];
  let outcome = victoryTable[play[0]][play[1]][0];

	output.textContent = outputString;
	console.log(outputString);

	if (outcome == 'Win') {
  	++wins;
  	counterWins.textContent = 'Wins: ' + wins;
	} else if (outcome == 'Loss') {
  	++losses;
  	counterLosses.textContent = 'Losses' + losses;
	} else {}
	console.log(`Wins: ${wins} -- Losses: ${losses}`);

	return;
}

function playRound(player) {
    let comp = getComputerChoice();

		if (messageVictory.textContent != "") {
  		messageVictory.textContent = "";
  		wins = 0;
  		counterWins.textContent = 'Wins: ' + wins;
  		losses = 0;
  		counterLosses.textContent = 'Losses: ' + losses;
		}

		roundLogic([player, comp]);

		if (wins >= 5) {
  		messageVictory.textContent = "You Win!";
		} else if (losses >= 5) {
  		messageVictory.textContent = "Sorry, you lose!";
		} else {}

   return;
}
