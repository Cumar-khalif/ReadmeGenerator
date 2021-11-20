// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'Title',
        message: 'What is your project title ?',
    },

    { 
        type: 'input',
        name: 'Description',
        message: 'What is the description for your project ?',
    },
    { 
        type: 'input',
        name: 'GitHub Username',
        message: 'What is your Github UserName?',
    },
    { 
        type: 'input',
        name: 'Email',
        message: 'What is your Email Address?',
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies ?"
        
    },
    {
        type: "input",
        name: "test",
        message: "What command do you use to run tests ?"
        
    },
    {
        type: "input",
        name: "credit",
        message:
          "Please list any collaborators you may have used ?",
    },


    { 
        type: 'list',
        name: 'License',
        message: 'Which license do you want to use ?',
        choices: [
            {
                name: "Apache License",
                value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            },
            {
                name: "MIT License",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "Mozilla License",
                value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            }
            
        ]
    }
];

// TODO: Create a function to write README file

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
       console.log(answers); 

////////////////////////////////////////////
    var template = `# ${answers.Title}
${answers.License}

## Description 
${answers.Description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)


#installation.
You need to have node.js in your VS code to run this command.

#usage
for a professional readme generator you can use this sample. when you run your node, you are met with series of questions that guide you to build a strong readme file. This read me if free of use and if you would like to use it feel free but please mention my Github. Thank you.


#licenses.txt
this read me has 3 different license that can be used. Mozilla, MIT and Apache.







`
///////////////////////////////////////////////////
console.log(template);

fs.writeFile("ReadmeGenerator/output/readme", template, (err, data) => {
    console.log("read me created")
})



    })
}

// Function call to initialize app
init();
