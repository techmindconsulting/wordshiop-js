class Manager extends Employee {
    
    employees = [];
    
    constructor(fullname = "", email = "", department = "common") {
        super(fullname, email, department);
    }

    addEmployees(employees) {
        employees.forEach((employee) => {
            if (employee instanceof Employee) {
                this.employees.push(employee);
            }
        });   
    }
}
