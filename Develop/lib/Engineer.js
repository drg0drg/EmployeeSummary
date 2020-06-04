// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (name, id, email, github){
    super (name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";//Employee class has getRole() but this is overridden to output "Engineer"
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;

