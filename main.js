console.log("Hello World");

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
	return prompt();
}

function playRound() {
    let comp = getComputerChoice();
    let player = getPlayerChoice();

    switch (player) {
        case 'Rock':
		if (comp == choices[0]) {
    			console.log("It's a tie!");
    			return 'tie';
    		} else if (comp == choices[1]) {
    			console.log("Sorry, Paper beats Rock.");
    			return 'loss';
    		} else {
    			console.log("Nice! Rock beats Scissors");
    			return 'win';
    		}
	case 'Paper':
		if (comp == choices[0]) {
    			console.log("Nice! Paper beats rock");
    			return 'win';
    		} else if (comp == choices[1]) {
    			console.log("It's a tie!");
    			return 'tie';
    		} else {
    			console.log("Sorry, Scissors beats paper");
    			return 'loss';
    		}
	case 'Scissors':
		if (comp == choices[0]) {
    			console.log("Sorry, Rock beats Scissors");
    			return 'loss';
    		} else if (comp == choices[1]) {
    			console.log("Nice! Scissors beats Paper");
    			return 'win';
    		} else {
    			console.log("It's a tie!");
    			return 'tie';
    		}
    }
    return;
}

function playGame() {
    let win = 0;
    let loss = 0;

    while ((win + loss) < 5) {
        result = playRound();
        if (result == 'win') {
            ++win;
            console.log(`Wins: ${win}, Losses: ${loss}`);
        } else if (result == 'loss') {
            ++loss;
            console.log(`Wins: ${win}, Losses: ${loss}`);
        } else {
            console.log(`Wins: ${win}, Losses: ${loss}`);
            continue;
        }
    }

    if (win > loss) {
        console.log("You win!");
    } else {
        console.log("You lost!");
    }
}
