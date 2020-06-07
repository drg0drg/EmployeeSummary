const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const boxen = require("boxen");
//Creating the "output" folder location where the final html page is generated
const OUTPUT_DIR = path.resolve(__dirname, "output");
//Creating the final "team.html" in "output" folder location file when app is run
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const writeFileAsync = util.promisify(fs.writeFile);
employees = [];
//Function to generate the team organisation chart
async function generateTeam() {
  try {
    if (!fs.existsSync("output")) {
      fs.mkdirSync("output");
    }
    let { teamName } = await inquirer.prompt([
      {
        message: "Enter Team's name:",
        name: "teamName",
      },
    ]);
    await pickEmployeeType();
    const renderHTML = render(employees, teamName);
    writeFileAsync(outputPath, renderHTML);
  } catch (error) {
    console.log(error);
  }
}
generateTeam();
// function to determine what type of team member is next
//it follows through with the corresponding questions for each type
async function pickEmployeeType() {
  try {
    let continueAddingMember = await inquirer.prompt([
      {
        type: "list",
        message: "Would you like to add another member ?",
        name: "addOrQuit",
        choices: ["Yes", "No"],
      },
    ]);
    //<while> loop to ask for new member type and follow through with corresponding questions
    //This loops until user answers "No" to the question thus breaking the loop
    while (continueAddingMember.addOrQuit === "Yes") {
      let { employeeType } = await inquirer.prompt([
        {
          type: "list",
          message: "What type of employee is next ?",
          name: "employeeType",
          choices: ["Manager", "Engineer", "Intern"],
        },
      ]);

      if (employeeType === "Manager") {
        await promptManager();
      } else if (employeeType === "Engineer") {
        await promptEngineer();
      } else if (employeeType === "Intern") {
        await promptIntern();
      }
      //prompt the question again to give user opportunity to quit the loop by selecting "No"
      continueAddingMember = await inquirer.prompt([
        {
          type: "list",
          message: "Would you like to add another member ?",
          name: "addOrQuit",
          choices: ["Yes", "No"],
        },
      ]);
    }
  } catch (error) {
    console.log(error);
  }
}

// // function to prompt questions on Manager role
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
        //validate if the user input is an actual mail format
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            console.log("  valid email");
            return true;
          } else {
            console.log("\n Please enter a valid email");
            return false;
          }
        },
      },
      {
        message: "Enter Manager's officeNumber:",
        name: "officeNumber",
      },
    ]);
    //new "manager" object created from the parent class "Manager"
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
        //validate if the user input is an actual mail format
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            console.log("  valid email");
            return true;
          } else {
            console.log("\n Please enter a valid email");
            return false;
          }
        },
      },
      {
        message: "Enter Engineer's github:",
        name: "github",
        validate: function (github) {
          valid = /github.com/.test(github);
          if (valid) {
            console.log("  valid account");
            return true;
          } else {
            console.log("\n Please enter a valid github account");
            return false;
          }
        },
      },
    ]);
    //new "engineer" object created from the parent class "Engineer"
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
        //validate if the user input is an actual mail format
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            console.log("  valid email");
            return true;
          } else {
            console.log("\n Please enter a valid email");
            return false;
          }
        },
      },
      {
        message: "Enter Intern's school:",
        name: "school",
      },
    ]);
    //new "intern" object created from the parent class "Intern"
    const intern = new Intern(
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
