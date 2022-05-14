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

  let link;
  switch(license[0]){
    case 'MIT':
      link = "https://opensource.org/licenses/MIT)"
      break;
    case 'ISC':
      link = "https://opensource.org/licenses/ISC"
      break;
    case 'Apache license 2.0':
      link = "https://opensource.org/licenses/Apache-2.0"
      break;
    case 'Boost Software License 1.0':
      link = "https://www.boost.org/LICENSE_1_0.txt)"
      break;
    default:
      link = "";
      break
  }
  return link; 
  }
  


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license[0] === "N/A"){
    return '';
  }
  return `
  ## License

  Licensed under the ${license} license;
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      ${renderLicenseLink(license)}

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`

}

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

  ${renderLicenseSection(data.license)}

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
