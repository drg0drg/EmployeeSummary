// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const boxen = require("boxen");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    if (!name || !id || !email || !github) {
      throw Error(
        boxen(
          "You may have missed a field \nPlease provide all the required information\nPlease follow through and add a new member",
          {
            margin: 1,
            padding: 1,
            borderColor: "red",
          }
        )
      );
    }
  }

  getRole() {
    return "Engineer"; //Employee class has getRole() but is here overridden to output "Engineer"
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
