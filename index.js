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

const promptUser = () => { 
return inquirer
  .prompt(questions)
  .then((answers) => {
    // console.log(generateMarkdown(answers));
    return generateMarkdown(answers);
  })
  .then(data => {
    return writeToFile(data);
    console.log("success!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
};

promptUser();

// // TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/readme.md", data, err => {
     // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
     if (err) {
      reject(err);
      console.log(err);
      // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
      return;
     }
    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
    resolve({
      ok: true,
      message: 'File created!'
    });
  }); 
  });
};

// const mockData =
// {
//   name: 'Melissa Mayfield',
//   github: 'Mayfieldmel',
//   title: 'Readme-Generator',
//   description: 'generates readmes',
//   installation: 'clone repo and instal npm & inquirer',
//   usage: 'see demo',
//   credits: 'just me',
//   license: 'MIT',
//   contributions: 'email me',
//   tests: 'none'
// }

// writeToFile("readme", mockData) 

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
