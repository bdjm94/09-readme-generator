// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.toUpperCase() == "MIT") {
        return "https://img.shields.io/badge/License-MIT-red";
    } else if (license.toUpperCase() == "APACHE") {
        return "https://img.shields.io/badge/License-APACHE%202.0-brightgreen";
    } else if (license.toUpperCase() == "GPL") {
        return "https://img.shields.io/badge/License-GPL%203.0-blue";
    } else if (license.toUpperCase() == "BSD") {
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
    } else if (license.toUpperCase() == "APACHE") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license.toUpperCase() == "GPL") {
        return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    } else if (license.toUpperCase() == "BSD") {
        return "https://opensource.org/licenses/BSD-3-Clause";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;