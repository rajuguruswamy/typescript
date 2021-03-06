/*
     DataTypes in TypeScript
     =======================
     string
     number
     boolean
     null
     undefined
     object
     array
     void
     enum     
     any
*/

// string
let employeeName: string = "Government Technology Agency";
console.log(`My Employee Name is ${employeeName}`);

// number
let employeeAge: number = 45;
console.log(`My Employee employeeAge is ${employeeAge}`);

// boolean
let isManager: boolean = true;
console.log(`My Employee a Manager ${isManager}`);

// null
let test: null = null;
console.log(`is test null ${test}`);

// Undefined
let testVar: undefined = undefined;
console.log(`is testVar undefined ${testVar}`);


// obejct
let mobile: object = {
    brand: "galaxy",
    colour: "gray",
    price: "850"
}

console.log(mobile);

// array
let colours:string[] = ["RED","GREEN","BLUE"];
console.log(colours);

//void 
let greeting = (name:string):void => {
    console.log(`Hello ${name}!`);
};

greeting('Raju Guruswamy');

// enum
enum Month {
        JAN="January",
        FEB="February",
        MAR="March",
        APR="April",
        MAY="May",
        JUN="June",
        JUL="July",
        AUG="August",
        SEP="Sep",
        OCT="October",
        NOV="November",
        DEC="December"
}

console.log(Month.JAN); //January

// any -> store any datatype
let myVar:any ='Test';
myVar =10;
myVar=false;
myVar = {};
