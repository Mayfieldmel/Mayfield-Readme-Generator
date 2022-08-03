// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
 if (!license) {
   return "";
 }
 return `![licenseBadge](https://img.shields.io/badge/License-${license}-green.svg)`;
};

// function that returns the license link
function renderLicenseLink(license) {
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
   // If there is no license, return an empty string
   return "";
 }
};

// function that returns the license section of README
function renderLicenseSection(license) {
 if (!license) {
   // If there is no license, return an empty string
   return "";
 }

 return `
 ## license

 Licensed under the ${license} license.
 `;
};

// function that returns the license table of contents link
function renderLicenseTOC(license) {
 if (!license) {
   // If there is no license, return an empty string
   return "";
 }

 return `
 * [License](#license)
 `;
};


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
 ${renderLicenseTOC(licenseData.license)}
 
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
 }](https://github.com/${data.github}) .
 
 ${renderLicenseSection(licenseData.license)}
 ${renderLicenseLink(licenseData.license)}

`;
};

// export functions
module.exports = generateMarkdown;
