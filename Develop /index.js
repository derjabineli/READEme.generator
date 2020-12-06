const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');





// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your project."
    },
    {
        list: "list",
        name: "license",
        message: "What licenses does your project use?",
        choices: ["MIT", "APACHE 2.0", "None"]
    },
    {
        type: "input",
        name: "install",
        message: "What installations are needed for your application"
    },
    {
        type: "input",
        name: "test",
        message: "What command is neeeded to run tests?"
    },
    {
        type: "input",
        name: "use",
        message: "How does your app work?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log("Generating README")
            writeToFile("UserREADME.md", generateMarkdown({ ...inquirerResponses }))
        })
}

// function call to initialize program
init();
