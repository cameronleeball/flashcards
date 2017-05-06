var inquirer = require('inquirer');

var BasicCard = function (question,answer) {
    this.front = question;
    this.back = answer;
};



module.exports = BasicCard;