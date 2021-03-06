// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.toUpperCase() == "MIT") {
        return "https://img.shields.io/badge/License-MIT-red";
    } else if (license.toUpperCase() == "APACHE 2.0") {
        return "https://img.shields.io/badge/License-APACHE%202.0-brightgreen";
    } else if (license.toUpperCase() == "GPL 3.0") {
        return "https://img.shields.io/badge/License-GPL%203.0-blue";
    } else if (license.toUpperCase() == "BSD 3") {
        return "https://img.shields.io/badge/License-BSD%203-orange";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license.toUpperCase() == "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (license.toUpperCase() == "APACHE 2.0") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license.toUpperCase() == "GPL 3.0") {
        return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    } else if (license.toUpperCase() == "BSD 3") {
        return "https://opensource.org/licenses/BSD-3-Clause";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license.toUpperCase() == "MIT") {
        return "MIT License";
    } else if (license.toUpperCase() == "APACHE 2.0") {
        return "Apache 2.0 License";
    } else if (license.toUpperCase() == "GPL 3.0") {
        return "GPL 3.0 License";
    } else if (license.toUpperCase() == "BSD 3") {
        return "BSD-3-Clause License";
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Procedure](#test-procedure)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution Guidelines
  ${data.contributions}

  ## Test Procedure
  ${data.test}

  ## Questions
  If you have any questions, then feel free to contact me on the below:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](${data.email})

`;
}

module.exports = generateMarkdown;