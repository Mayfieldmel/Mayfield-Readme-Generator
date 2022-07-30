// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data[0].title}

  ## Description
  
  ${data[0].description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  
  ${data[0].installation}
  
  ## Usage
  
  ${data[0].usage}
  
  ## Credits
  
  ${data[0].credits}
  
  ## License
  
  ${data[1].license}
`;
}

// export functions
module.exports = generateMarkdown;
