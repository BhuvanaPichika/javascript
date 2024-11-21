let player_score = 0;
let computer_score = 0;
let total_chance = 5;
let player_n = "";

function roll(choice) {
    let game = document.getElementById("input");
    let computerch = document.getElementById("cc");
    let playerch = document.getElementById("pc");
    const random_num = Math.floor(Math.random() * 3);

    // Display computer's choice
    if (random_num === 0) {
        computerch.innerHTML = "✊";
    } else if (random_num === 1) {
        computerch.innerHTML = "✋";
    } else if (random_num === 2) {
        computerch.innerHTML = "✌";
    }

    // Display player's choice
    if (choice === "✊") {
        playerch.innerHTML = "✊";
    } else if (choice === "✋") {
        playerch.innerHTML = "✋";
    } else if (choice === "✌") {
        playerch.innerHTML = "✌";
    }

    // Determine winner
    if (computerch.innerHTML === playerch.innerHTML) {
        game.innerHTML = "Tie!";
    } else if (
        (computerch.innerHTML === "✊" && playerch.innerHTML === "✌") ||
        (computerch.innerHTML === "✋" && playerch.innerHTML === "✊") ||
        (computerch.innerHTML === "✌" && playerch.innerHTML === "✋")
    ) {
        game.innerHTML = "Computer Wins!";
        computer_score++;
    } else {
        game.innerHTML = "You Wins!"; // Display player's name when they win
        player_score++;
    }

    // Update scores
    document.getElementById("computer_score").innerHTML = `Computer Score: ${computer_score}`;
    document.getElementById("player_score").innerHTML = `Your Score: ${player_score}`;

    // Decrement total chances
    total_chance--;

    // Check if the game is over
    if (total_chance === 0) {
        let res = "";
        if (player_score > computer_score) {
            res = "You Won the Game!";
        } else if (player_score < computer_score) {
            res = "Computer Won the Game!";
        } else {
            res = "It's a Tie!";
        }
        alert(res);
        reset(); // Reset the game after showing the result
    }
}

function reset() {
    let game = document.getElementById("input");
    let computerch = document.getElementById("cc");
    let playerch = document.getElementById("pc");
    game.innerHTML = "Select your Choice to Start the Game";
    playerch.innerHTML = " ";
    computerch.innerHTML = " ";
    player_score = 0;
    computer_score = 0;
    total_chance = 5;
    document.getElementById("player_score").innerHTML = "Your Score: 0";
    document.getElementById("computer_score").innerHTML = "Computer Score: 0";
}


