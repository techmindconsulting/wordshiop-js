import Employee from './Employee.js'

class Manager extends Employee {

    employees = [];
    
    constructor(fullname = "", email = "", department = "common") {
        super(fullname, email, department);
    }

    addEmployees(employees) {
        employees.forEach((employee) => {
            if (employee instanceof Employee) {
                employee.manager = this;
                this.employees.push(employee);
            }
        });   
    }
}

export default Manager;
