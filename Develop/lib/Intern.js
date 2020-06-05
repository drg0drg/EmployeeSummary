// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const boxen = require("boxen");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    if (!name || !id || !email || !school) {
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
    return "Intern"; //Employee class has getRole() but is here overridden to output "Intern"
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
