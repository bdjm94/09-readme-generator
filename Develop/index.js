// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your Email Address:"
    },
    {
        type: "input",
        name: "title",
        message: "Please enter the title of the Project:"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of the Project:"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license from the list:",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "No License"
        ],
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions:"
    },
    {
        type: "input",
        name: "test",
        message: "Please enter the test instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage information for this repo:"
    },
    {
        type: "input",
        name: "contributions",
        message: "Please enter the contribution guidelines:"
    }
];

const userPrompt = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) console.log(err);
        console.log("Successfully genereated a good README.md");
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();