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
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  
  ${data[0].installation}
  
  ## Usage
  
  ${data[0].usage}

  ## Contributions

  ${data[0].contributions}

  ## Tests

  ${data[0].tests}
  
  ## Credits
  
  ${data[0].credits}

  ## Questions
  
  If you have questions, contact me via email at [${data[0].email}](mailto:${data[0].email}) .

  For more information, checkout my github profile page at github.com/${data[0].github}
  
  ## License
  
  ${data[1].license}
`;
}

// export functions
module.exports = generateMarkdown;
