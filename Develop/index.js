// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: input,
        name: name,
        message: "What is your name? (Required)"
    },
    {
        type: input,
        name: github,
        message: "What is your Github username? (Required)",
    },
    {
        type: input,
        name: title,
        message: "What is your project title? (Required)",
    },
    {
        type: input,
        name: description,
        message: "Provide a short description of your project:",
    },
    {
        type: input,
        name: installation,
        message: "What are the steps required to install your project?",
    },
    {
        type: input,
        name: usage,
        message: "Provide instructions and examples for use of your project:",
    },
    {
        type: input,
        name: credits,
        message:  "List your collaborators, if any, with links to their GitHub profiles:",
    },
    {
        type: input,
        name: license,
        message: "How is your project licensed? Select one.",
    },
    {
        type: input,
        name: contributions,
        message: "Provide guidelines for contributions to your project:",
    },
    {
        type: input,
        name: tests,
        message:  "Provide test instructions, if any, for running tests on your project:"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
