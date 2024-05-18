#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";


// Display a colorful welcome messgae 
console.log(chalk.yellowBright("*******************************************************************"));
console.log(chalk.yellowBright("==================== WELCOME TO WORD COUNTER APP  ==================="));
console.log(chalk.yellowBright("*******************************************************************"));



let user_answer =  await inquirer.prompt({
    type: "input",
    name: "sentence",
    message: chalk.blue.bold("Please Enter Your Sentence")
});
// .TRIM() METHOD TRIMING THE SENTENCE WITH WHITE SPACES  & .SPLIT() METHOD SENTENCE CONVERT INTO AN ARRAY AND  SAPERATED WORDS STORE IN AN ARRAY'S ELEMENT.
 let word_count = user_answer.sentence.trim().split(" ");    

// Analysis of user input sentence
console.log(chalk.bgGreen("=".repeat(70)));
console.log(chalk.blue.bold(word_count));
console.log( chalk.magenta.bold(`\n YOUR SENTENCE HAS ${chalk.yellow.bold(word_count.length)} WORDS. `));
console.log(chalk.bgGreen("=".repeat(70)));

