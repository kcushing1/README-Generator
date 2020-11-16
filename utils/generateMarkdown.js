// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
  ${data.license}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  ${data.github}
  If you have any additional questions, please send an email to ${data.email}
`;
}

module.exports = generateMarkdown;
