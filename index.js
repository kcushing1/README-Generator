const fs = require("fs");
const inquire = require("inquirer");

// array of questions for user
//see cited.txt
const questions = [
  "What is the project title?",
  "Provide a short description.",
  "Provide a list of all the contents.",
  "What are the installation directions?",
  "What is the practical application?",
  {
    ask: "Select which license you would like to use:",
    a: "MIT License - a safe, standard choice",
    b: "GNU GPLv3 - lets you share quite far except for closed source versions",
    c:
      "Apache License 2.0 - for Apache, Cloud Native Computing Foundation, and others",
    d: "ISC License - for sharing far and wide",
    e: "Something else, not listied here - to be added later",
  },
  "How can someone contribute?",
  "How can someone test this project?",
  "What is your GitHub username?",
  "What is your email?",
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  console.log("init ftn connected");
  inquire
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
    ])
    .then((response) => {
      console.log(response);
    });
}

// function call to initialize program
init();
