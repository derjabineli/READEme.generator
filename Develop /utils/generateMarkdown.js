function showLicense(license) {
  if (license !== none) {
    return (
      `##License 
      
      This project is licensed under the ${license} license.`
    )
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  *[Usage](#usage)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation

  Run the following command in order to install the necessary dependencies:

  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  ${data.use}

  ## Contributing

  ${data.contributors}

  ## Tests

  Use the following command to run tests:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions or issuse please contact me at ${data.email}. If you'd like to see any more of my work you can find it here: [${data.github}](https://github.com/${data.github}/).


`;
}

module.exports = generateMarkdown;
