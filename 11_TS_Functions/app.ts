// functions


let greetUser = (user:string):void => {
    let msg:string = `Hello ${user}`;
    console.log(msg);
};
greetUser("Raju Guruswamy");


// function with return type
let add  =  (a:number,b:number) : number => {
    let result  = a +b;
    return result;
};

console.log(add(10,15));


// function with an object type as parameter
console.log("==============function with an object type as parameter===================");
interface Mobile {
    brand : string,
    color : string,
    price : number
}

let printMobile = (mobile:Mobile):void => {
    console.log(JSON.stringify(mobile));
};
let mobile1:Mobile ={
    brand : "Apple",
    color : "silver",
    price : 1000
};

printMobile(mobile1);
printMobile( {brand:"Samsung Galaxy", color:"Black", price:1200});