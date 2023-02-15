#!/usr/bin/env node
import minimist from "minimist";
import rpsls from "../lib.rpsls.js";

let args = minimist(process. argv.slice(2));

if (args.h || args.help) {
    console.log('Usage: node-rps [SHOT]' +
    '\nPlay Rock Paper Scissors (RPS)' +
    '\n\n\t-h, --help      display this help message and exit' +
    '\n\t-r, --rules     display the rules and exit' +
    '\n\nExamples:' +
    '\n\tnode-rps        Return JSON with single player RPS result.' +
                      '\n\t\te.g. {"player":"rock"}'+
    '\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.' +
                      '\n\t\te.g {"player":"rock","opponent":"scissors","result":"win"}');
    process.exit(0);
} else if (args.r || args.rules) {
    console.log('Rules for Rock Paper Scissors:' +
    '\n\n\t- Scissors CUTS Paper' +
    '\n\t- Paper COVERS Rock' +
    '\n\t- Rock CRUSHES Scissors');
    process.exit(0);
} 

var player;
if (args.rock) {
    player = "rock"
} else if (args.scissors) {
    player = "scissors"
} else if (args.paper) {
    player = "paper"
} else {
    console.error("Incorrect argument, please use 'rock, paper, or scissors'.")
}

var opponent = Math.random()
if (opponent < .33) {
    opponent = "rock";
} else if (opponent <= .66) {
    opponent = "paper";
} else if (opponent <= 1) {
    opponent = "scissors"
}

function rps(player, opponent) {
    var result;
    if (player.equals(opponent)) {
        //tie
        result = "tie"
    } else {
        switch (player) {
            case "rock":
                if (opponent.equals("scissors")) {
                    //player wins
                    result = "win"
                } else {
                    result = "lose"
                }
            case "paper":
                if (opponent.equals("rock")) {
                    //player wins
                    result = "win"
                } else {
                    result = "lose"
                }
            case "scissors":
                if (opponent.equals("paper")) {
                    //player wins
                    result = "win"
                } else {
                    result = "lose"
                }
        }
    }

    return JSON.stringify([player, opponent, result]);
}

rps(player, opponent);

//I have no fucking clue what's happening