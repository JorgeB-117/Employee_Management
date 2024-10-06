// Task 1: Create an Employee Class

class Employee{
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
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

// Task 4: Handle Bonuses for Managers

calculateTotalSalaryWithBonus() 
{
    return this.employees.reduce((total, emp) => {
        if (emp instanceof Manager) {
            return total + emp.salary + emp.bonus;
        }
        return total + emp.salary;}, 0);
}        
}; // calculates the salary of the department and adds bonuses for Managers

 // Task 3: Create a Manager Class that Inherits from Employee

 class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
                
    super(name, salary, position, department);
        this.bonus = bonus; }
        
    getDetails() {
        return `${this.name} manager has $${this.salary} salary, works as a(n) ${this.position} in the ${this.department} department, and has a bonus of $${this.bonus}.`;
        }
}; // Overrides method to include the bonus for manager

// Task 5: Create and Manage Departments and Employees

const sales = new Department("Sales");
const finance = new Department("Finance");

const Hazel = new Employee("Hazel", 95000, "Representative", "Sales");
const Steven = new Employee("Steven", 80000, "Accountant", "Finance");
const Ricky = new Manager("Ricky", 150000, "Sales Manager", "Sales", 30000);
const Alan = new Manager("Alan", 125000, "Finance Manager", "Finance", 15000);

sales.addEmployee(Hazel);
sales.addEmployee(Ricky);
finance.addEmployee(Steven);
finance.addEmployee(Alan);

console.log(`Total salary for Sales Department: $${sales.getDepartmentSalary()}`);
console.log(`Total salary for Finance Department: $${finance.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Sales Department: $${sales.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary with bonuses for Finance Department: $${finance.calculateTotalSalaryWithBonus()}`);