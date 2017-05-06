var inquirer = require('inquirer');
var colors = require('colors');


inquirer.prompt([
    {
        type: "confirm",
        name: "start",
        message: "Welcome to Flashcards...\n Do you wante to create a new set of cards?",
        default: true
    },
    {
        type: "input",
        name: "number",
        message: "How many cards are you planning to make?"
    },
    {
        type: "list",
        name: "cardType",
        message: "What type of card would you like to create?",
        choices: [
            {
                name: "Basic",
                description: "Traditional format with Questions on front and Answers on back.",
                value: "basic"
            },
            {
                name: "Cloze Deletion",
                description: "Think 'Fill in the Blank'... these cards contain a partial sentence for you to complete.",
                value: "cloze"
            }],
        default: 0
    }
]).then(function (answers) {
    var BasicCard = require('./basic.js');
    var ClozeCard = require('./cloze.js');
    var count = answers.number;
    if (cardType === "basic") {
        BasicCard();
    }
    else { 4
        ClozeCard();
    }
});