// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return `![licenseBadge](https://img.shields.io/badge/License-${license}-green.svg)`;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (!license) {
  //   return '';
  //  }

  if (license == "MIT") {
    return `
  click here for [${license} link](https://opensource.org/licenses/MIT) .
  `;
  } else if (license == "Apache") {
    return `
  click here for [${license} link](https://apache.org/licenses/) .
    `;
  } else if (license == "GPL") {
    return `
  click here for [${license} link](https://www.gnu.org/licenses/gpl-3.0.en.html) .
    `;
  } else if (license == "BSD") {
    return `
  click here for [${license} link](https://opensource.org/licenses/BSD-3-Clause) .
    `;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `
  ## license

  Licensed under the ${license} license.
  `;
}

// generate markdown for README
function generateMarkdown(generateData) {
  const [data, licenseData] = generateData;
  return `# ${data.title}
  ${renderLicenseBadge(licenseData.license)}

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
  
  If you have questions, contact me via email at [${data.email}](mailto:${
    data.email
  }) .

  For more information, checkout my github profile page at [github.com/${
    data.github
  }](github.com/${data.github}) .
  
  ${renderLicenseSection(licenseData.license)}
  ${renderLicenseLink(licenseData.license)}

`;
}

// export functions
module.exports = generateMarkdown;
