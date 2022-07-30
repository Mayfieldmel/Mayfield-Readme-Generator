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
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username? (Required)",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your github username!');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title? (Required)",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project (Required):",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a brief description!');
        return false;
      }
    }
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
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Is your project licensed?",
    default: false,
  },
];

const licenseQuestion = templateData => {
  return inquirer.prompt([
    {
      type: "list",
      name: "license",
      message: "Please choose a license:",
      choices: ["MIT", "Apache", "GPL", "BSD", "Apache 2"],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please select a license!');
          return false;
        }
      }
    }
  ])
  .then(answer => {
    const dataArr = [templateData];
    dataArr.push(answer);
    return dataArr
    
  })
};

// prompt user with questions from array
const promptUser = () => { 
  return inquirer.prompt(questions)
};

// generate markdown and write file with user input
promptUser()
  .then(answers => {
    console.log(answers);
    if (answers.confirmLicense) {
      return licenseQuestion(answers);
    } else {
      console.log("no license");
      return answers;
    }
  })
  .then((data) => {
    console.log(data);
    return generateMarkdown(data);
  })
  .then(readmeData => {
    return writeToFile(readmeData);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// write README file using promise
function writeToFile(readme) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/readme.md", readme, err => {
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
    console.log("success!");
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
