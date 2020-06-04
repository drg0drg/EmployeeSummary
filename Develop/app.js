const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
employees = [];

// function that creates team template
async function generateTeam() {
  try {
    const userInput = await promptAllQuestions();
  } catch (error) {
    console.log(error);
  }
}
generateTeam();

//function to prompt all questions
async function promptAllQuestions() {
  try {
    await promptTeam();
    await promptManager();
    await pickEmployeeType();
  } catch (error) {
    console.log(error);
  }
}

//function to prompt questions on the specific team
function promptTeam() {
  return inquirer.prompt([
    {
      message: "Enter Team's name:",
      name: "name",
    },
  ]);
}

// function to determine if the next team member is either an Engineer or an Intern
async function pickEmployeeType() {
  try {
    let { employeeType } = await inquirer.prompt([
      {
        type: "list",
        message: "What type of employee is next ?",
        name: "employeeType",
        choices: ["Engineer", "Intern"],
      },
    ]);

    if (employeeType === "Engineer") {
      promptEngineer();
    } else if (employeeType === "Intern") {
      promptIntern();
    }
  } catch (error) {
    console.log(error);
  }
}

// function to prompt questions on Manager role
async function promptManager() {
  try {
    const managerDetails = await inquirer.prompt([
      {
        message: "Enter Manager's name:",
        name: "name",
      },
      {
        message: "Enter Manager's id:",
        name: "id",
      },
      {
        message: "Enter Manager's email:",
        name: "email",
      },
      {
        message: "Enter Manager's officeNumber:",
        name: "officeNumber",
      },
    ]);
    const manager = new Manager(
      managerDetails.name,
      managerDetails.id,
      managerDetails.email,
      managerDetails.officeNumber
    );
    employees.push(manager);
  } catch (error) {
    console.log(error);
  }
}
// promptManager();

// function to prompt questions on Engineer
async function promptEngineer() {
  try {
    const engineerDetails = await inquirer.prompt([
      {
        message: "Enter Engineer's name:",
        name: "name",
      },
      {
        message: "Enter Engineer's id:",
        name: "id",
      },
      {
        message: "Enter Engineer's email:",
        name: "email",
      },
      {
        message: "Enter Engineer's github:",
        name: "github",
      },
    ]);
    const engineer = new Engineer(
      engineerDetails.name,
      engineerDetails.id,
      engineerDetails.email,
      engineerDetails.github
    );
    employees.push(engineer);
  } catch (error) {
    console.log(error);
  }
}

// function to prompt questions on Intern
async function promptIntern() {
  try {
    const internDetails = await inquirer.prompt([
      {
        message: "Enter Intern's name:",
        name: "name",
      },
      {
        message: "Enter Intern's id:",
        name: "id",
      },
      {
        message: "Enter Intern's email:",
        name: "email",
      },
      {
        message: "Enter Intern's school:",
        name: "school",
      },
    ]);
    const intern = new Engineer(
      internDetails.name,
      internDetails.id,
      internDetails.email,
      internDetails.school
    );
    employees.push(intern);
  } catch (error) {
    console.log(error);
  }
}
