// packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name? (Required)",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username? (Required)",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title? (Required)",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use of your project:",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles:",
  },
  {
    type: "list",
    name: "license",
    message: "How is your project licensed? Select one.",
    choices: ["MIT", "Apache", "GPL", "lgpl_2_1", "ppl1.3c"]
  },
  {
    type: "input",
    name: "contributions",
    message: "Provide guidelines for contributions to your project:",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Provide test instructions, if any, for running tests on your project:",
  },
];

// const promptUser = () => { 
// return 
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    return generateMarkdown();
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// };

// promptUser();
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
