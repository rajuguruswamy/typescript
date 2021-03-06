// Array of custom type

// Object Array

interface Employee {
    sno: string,
    name: string,
    age: number,
    description: string,
    location: string
}

let employees: Employee[] = [
    { sno: "A001", name: "Raju", age: 45, description: "Software Engineer", location: "Singapore" },
    { sno: "A002", name: "Peter", age: 30, description: "Solution Architect", location: "USA" },
    { sno: "A003", name: "John", age: 26, description: "Software Engineer", location: "Singapore" },
    { sno: "A004", name: "David", age: 20, description: "Software Engineer", location: "UK" },
    { sno: "A005", name: "Angel", age: 45, description: "Quality Engineer", location: "Singapore" },
    { sno: "A006", name: "Martin", age: 35, description: "Software Engineer", location: "USA" },
    { sno: "A007", name: "Aaron", age: 45, description: "Product Manager", location: "USA" }

];
console.log("=================list all employee====================");
console.log(employees);

// list junior employee
console.log("=================list junior employee====================");

let juniorEmployees: Employee[] = [] as Employee[];

for (let employee of employees) {
    if (employee.age <= 30) {
        juniorEmployees.push(employee);
    }
}

console.log(juniorEmployees);
console.log("=================list junior employee using filter function====================");
let jrEmployee:Employee[] = employees.filter(employee => employee.age <=30);
console.log(jrEmployee);