// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ####${data.contentsString.split(",").join(" ####")}
  ## Installation
  ${data.installation}
  ## usage
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
