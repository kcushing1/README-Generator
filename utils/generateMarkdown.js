// function to generate markdown for README
function generateMarkdown(data) {
  let chosenLicense = chooseLicense(data);
  let shield = licenseShield(data);
  return `# ${data.title}
  ${shield}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.application}
  ## License
  ${chosenLicense}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  https://github.com/${data.github}

  If you have any additional questions, please send an email to ${data.email}
`;
}

//license section wording
function chooseLicense(data) {
  if (data.license === "MIT License") {
    return "This project is licensed with MIT";
  } else if (data.license === "GNU GPLv3") {
    return "This project is licensed with GNU GPLv3";
  } else if (data.license === "Apache License 2.0s") {
    return "This project is licensed with Apache License 2.0s";
  } else if (data.license === "ISC License") {
    return "This project is licensed with ISC";
  } else {
    return "No license has been selected for this project.";
  }
}

//adding a shield icon representing the license
//see cited.txt
function licenseShield(data) {
  if (data.license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "Apache License 2.0s") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "ISC License") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else {
    return " ";
  }
}

module.exports = generateMarkdown;
