// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  console.log(license[0])
  let badge;
  switch(license[0]){
    case 'MIT':
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
    case 'ISC':
      badge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
      break;
    case 'Apache license 2.0':
      badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
      break;
    case 'Boost Software License 1.0':
      badge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
      break;
    default:
      badge = "";
      break
  }
  return badge; 
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A'){
    return '';
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)} 
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  
  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  [My Github Profile](https://github.com/${data.github})
  
  Please feel free to contact me at ${data.email}


`;
}

module.exports = generateMarkdown;
