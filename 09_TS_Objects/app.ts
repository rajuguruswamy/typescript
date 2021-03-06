interface Mobile {
    brand: string,
    color: string,
    price: number,
}
let mobile: Mobile = {
    brand: 'Apple',
    color: 'Silver',
    price: 1000
};
console.log(mobile);
console.log(mobile.brand);


// Nested Object

interface Address {
    block: string,
    unit: string,
    level: string,
    streetName: string,
    city: string,
    state: string,
    country: string,
    postalCode: string
}

interface Student {
    name: string,
    age: number,
    course: string,
    address: Address
}

let studentRaju:Student ={
    name: "Raju",
    age: 45,
    course: "MCA",
    address:  {
        block: "132",
        unit: "9",
        level: "12",
        streetName: "Woodlands street12",
        city: "Singapore",
        state: "Singapore",
        country: "Singapore",
        postalCode: "777111"
    }    
}

console.log(studentRaju);
console.log(studentRaju.address);