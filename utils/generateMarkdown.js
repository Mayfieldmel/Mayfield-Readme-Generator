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
function generateMarkdown(generateData) {
  const [data] = generateData;
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions
  
  If you have questions, contact me via email at [${data.email}](mailto:${data.email}) .

  For more information, checkout my github profile page at github.com/${data.github} .
  
  ## License
  
  ${generateData[1].license}
`;
}

// export functions
module.exports = generateMarkdown;
