// Task 1: Create an Employee Class

class Employee{
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getdetails() {
        return `${this.name} - ${this.position}: $${this.salary}`;
    }
};

// Task 2: Create a Department Class

class Department{
    constructor(name){
        this.name = name;
        this.employees = []; } // empty array for employees 

addEmployee(employee){
    this.employees.push(employee); // adds employee into array
}
getDepartmentSalary(){
    return this.employees.reduce((total, employee)=> {return total + employee.salary}, 0)
}            
}; // calculates the salary of the department

 // Task 3: Create a Manager Class that Inherits from Employee

 class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
                
    super(name, salary, position, department);
        this.bonus = bonus; }
        
    getDetails() {
        return `${this.name} manager has $${this.salary} salary, works as a(n) ${this.position} in the ${this.department} department, and has a bonus of $${this.bonus}.`;
        }
}; // Overrides method to include the bonus for manager
