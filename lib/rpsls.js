export { rps }
export { rpsls }

function rps(move) {
    var opponent = Math.random();
    if (opponent < .33) {
        opponent = "rock";
    } else if (opponent <= .66) {
        opponent = "paper";
    } else if (opponent <= 1) {
        opponent = "scissors";
    }

    if (move === undefined) {
        return {'player': opponent};
    } else {
        move = move.toLowerCase();
    }

    let moves = ['rock', 'paper', 'scissors'];

    if (!moves.includes(move)) {
        return 'error';
    }

    var result;
    if (player.equals(opponent)) {
        //tie
        result = "tie";
    } else {
        switch (player) {
            case "rock":
                if (opponent.equals("scissors")) {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
            case "paper":
                if (opponent.equals("rock")) {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
            case "scissors":
                if (opponent.equals("paper")) {
                    //player wins
                    result = "win";
                } else {
                    result = "lose";
                }
        }
    }

    return {'player': move, 'opponent': opponent, 'result': result};
}

function rpsls(move) {
    //complete rpsls function
    //work on -cli files and getting it to work
}