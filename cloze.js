var inquirer = require('inquirer');

var ClozeCard = function (question,answer,full) {
    this.partial = question;
    this.cloze = answer;
    this.full = full;
};

inquirer.prompt([
    {
        type: "input",
        name: "cardName",
        message: "Please give this card a name."
    },
    {
        type: "input",
        name: "question",
        message: "Please provide the partial sentence for this card, with an '...' in place of the answer"
    },
    {
        type: "input",
        name: "answer",
        message: "Please provide the answer to the question."
    }
]).then(function(answers){
    var card = new ClozeCard();
    console.log(card.partial);
});

module.exports = ClozeCard;