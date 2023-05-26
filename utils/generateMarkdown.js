// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
 let badge='';

  if(license != "None") {
    badge = "![License Badge](https://img.shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink= "";
  // select correct license link for the selected license
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "none":
      licenseLink = "";
      break;
  }
  
  return licenseLink;
  }
 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
  
  return `Application uses the ${license} license.`;
  }
  // If there is no license, return an empty string
  return "";
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n ${renderLicenseBadge(data.license)} \n ## Description\n ${data.description} \n ## Table of Contents
  \n * [Description](#description)
  \n * [Installation](#installation)
  \n * [Usage](#usage)
  \n * [Contributing](#contributing)
  \n * [Tests](#tests)
  \n * [Questions](#questions)
  \n * [License](#license)
  \n ## Installation \n ${data.installation} \n ## Usage \n ${data.usage} \n ## License \n ${renderLicenseSection(data.license)} \n ${renderLicenseLink(data.license)} 
  \n ## Contributing \n ${data.contributing} \n ## Tests \n ${data.tests} \n ## Questions \n Check out my on Github: [${data.username}](https://github.com/${data.username}/)
  \n Or by email @ ${data.email}`;
}


module.exports = generateMarkdown;
