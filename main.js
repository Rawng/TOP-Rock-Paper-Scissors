console.log("Hello World");

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
	return prompt();
}

function playGame() {
    let comp = getComputerChoice();
    let player = getPlayerChoice();

    switch (player) {
        case 'Rock':
		if (comp == choices[0]) {
    			console.log("It's a tie!");
    			break;
		} else if (comp == choices[1]) {
    			console.log("Sorry, Paper beats Rock.");
    			break;
		} else {
    			console.log("Nice! Rock beats Scissors");
    			break;
		}
	case 'Paper':
		if (comp == choices[0]) {
    			console.log("Nice! Paper beats rock");
    			break;
		} else if (comp == choices[1]) {
    			console.log("It's a tie!");
    			break;
		} else {
    			console.log("Sorry, Scissors beats paper");
    			break;
		}
	case 'Scissors':
		if (comp == choices[0]) {
    			console.log("Sorry, Rock beats Scissors");
    			break;
		} else if (comp == choices[1]) {
    			console.log("Nice! Scissors beats Paper");
    			break;
		} else {
    			console.log("It's a tie!");
    			break;
		}
    }
    return;
}
