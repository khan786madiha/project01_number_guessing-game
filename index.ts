#! /usr/bin/env node
import inquirer from "inquirer"

const computer_randomNumber = Math.floor(Math.random() * 10 + 1)
//  console.log(computer_randomNumber);

const answer = await inquirer.prompt([
    {
        name: "your_GuessedNumber",
        type: "number",
        message: "please guess a number:"
    }
])

if (answer.your_GuessedNumber === computer_randomNumber) {
    console.log("congratulations you guessed right number.");
} else {
    console.log("you guessed wrong number, try again");

}
