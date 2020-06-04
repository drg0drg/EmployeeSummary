// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee"); 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"; //Employee class has getRole() but this is overridden to output "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

// Export the Manager class so that it can be required in by other files
module.exports = Manager;
