// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    { 
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title for your project!');
          return false;
        }
      }
    },
    { 
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project (Required)',
        validate: descInput => {
          if (descInput) {
            return true;
          } else {
            console.log('Please enter a description for your project!');
            return false;
          }
        }
      },
      { 
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter installation instructions!');
            return false;
          }
        }
      },
      { 
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information (Optional)',
      },
      { 
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines (Optional)',
      },
      { 
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions (Optional)',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please enter a license for your application',
        choices: ['N/A', 'MIT', 'ISC', 'Apache license 2.0', 'Boost Software License 1.0']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your your email (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('The README has been created');
})
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data =>{
    console.log(data);
    return generateMarkdown(data);
  })
  .then(markDown => {
    writeToFile('./dist/README.md', markDown)
  })
  .catch(err => {
    console.log(err)
  })
}

// Function call to initialize app
init();
