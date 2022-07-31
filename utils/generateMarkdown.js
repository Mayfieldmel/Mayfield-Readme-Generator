// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
   return '';
  }

  // return ![licenseBadge](./images/license-MIT-green.svg);
  //  return ![licenseBadge](https://img.shields.io/badge/License-MIT-green.svg);
 
 };
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
   }
  
    return `
    [license link](#)
    `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (!license) {
  return '';
 }

  return `
  ## license

  Licensed under the ${license} license.
  `;
}

// generate markdown for README
function generateMarkdown(generateData) {
  const [data] = generateData;
  return `# ${data.title}
  // ${renderLicenseBadge(generateData[1].license)}

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

  For more information, checkout my github profile page at [github.com/${data.github}](github.com/${data.github}) .
  
  ${renderLicenseSection(generateData[1].license)}
  ${renderLicenseLink(generateData[1].license)}

`;
}

// export functions
module.exports = generateMarkdown;
