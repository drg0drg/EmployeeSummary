// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const boxen = require("boxen");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    if (!name || !id || !email || !officeNumber) {
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
    return "Manager"; //Employee class has getRole() but is here overridden to output "Manager"
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Export the Manager class so that it can be required in by other files
module.exports = Manager;
