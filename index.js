const fs = require("fs");
const inquire = require("inquirer");

// array of questions for user
//see cited.txt
const questions = [
  "What is the project title?",
  "Provide a short description.",
  "Provide a list of all the contents, separated by a comma.",
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
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "contentsString",
      },
      {
        type: "input",
        message: questions[3],
        name: "installation",
      },
      {
        type: "input",
        message: questions[4],
        name: "application",
      },
      {
        type: "list",
        message: questions[5].ask,
        choices: [
          questions[5].a,
          questions[5].b,
          questions[5].c,
          questions[5].d,
          questions[5].e,
        ],
        name: "license",
      },
      {
        type: "input",
        message: questions[6],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[7],
        name: "test",
      },
      {
        type: "input",
        message: questions[8],
        name: "github",
      },
      {
        type: "input",
        message: questions[9],
        name: "email",
      },
    ])
    .then((response) => {
      console.log(response);
    });
}

// function call to initialize program
init();
