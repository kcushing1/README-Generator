const fs = require("fs");
const inquire = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
//see cited.txt for licensing info source
const questions = [
  "What is the project title?",
  "Provide a short description.",
  "What are the installation instructions?",
  "How does one use this application?",
  {
    ask: "Select which license you would like to use:",
    a: "MIT License",
    b: "GNU GPLv3",
    c: "Apache License 2.0s",
    d: "ISC License",
    e: "None of the above",
  },
  "How can someone contribute?",
  "What tests have you made for this app?",
  "What is your GitHub username?",
  "What is your email?",
];

// function to write README file
function writeToFile(readme, data) {
  fs.writeFile(readme + ".md", generateMarkdown(data), {}, (err) =>
    console.log(err)
  );
}

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
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "application",
      },
      {
        type: "list",
        message: questions[4].ask,
        choices: [
          questions[4].a,
          questions[4].b,
          questions[4].c,
          questions[4].d,
          questions[4].e,
        ],
        name: "license",
      },
      {
        type: "input",
        message: questions[5],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[6],
        name: "test",
      },
      {
        type: "input",
        message: questions[7],
        name: "github",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
      },
    ])
    .then((data) => {
      writeToFile("README", data);
    });
}

// function call to initialize program
init();
