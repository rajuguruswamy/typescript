// Operators
// ============

/*
1. Arithmatic Operators : + , - ,* . / ,%
2. Shorthand Math : += , -=, *= , /=
3. Increment /Decrement operators :  ++ , --
4. Conditional operators : < , > , <= , >=
5. Logical operators : && , || , ^
6. Ternary oprerator : ?:
*/ 

// 1. Arithmatic Operators :
let num1:number = 10;
let num2:number = 20;

console.log(`ADD : ${num1 + num2}`);
console.log(`SUB : ${num1 - num2}`);
console.log(`MUL : ${num1 * num2}`);
console.log(`DIV : ${num1 / num2}`);


//  if number is even or oadd

let digit:number = 18;

if(digit % 2 === 0){
    console.log(`${digit} is an even number`);
}else{
    console.log(`${digit} is an odd number`);
}


// 2. Shorthand Math : += , -=, *= , /=

let value1:number = 10;
let value2:number = 20;
let add:number = 10;

//  add  =add + (value1 * value2);  //  210
 add += (value1 * value2);  //  210
 console.log(add);


//  3. Increment /Decrement operators :  ++ , --
let x :number =10;
x = x+1; //11
x += 1;   //12
x++; //13
console.log(x);

// 4. Conditional operators : < , > , <= , >=

let marks:number = 75;
let result:string ='';


if(marks <= 35){
    result = "You failed the Exam";
}else{
    result = "You cleared the Exam";
}
console.log(result);


// 5. Logical operators : && , || , ^

/*
    && -> T T  => T
    || -> F F => F
    ^  -> diff -> T
*/

let knowBackEnd : boolean= true;
let knowFrontEnd : boolean= false;

if( knowBackEnd && knowFrontEnd){
    console.log("Eligible for fullstack developer");
}
else if( knowFrontEnd && !knowBackEnd){
    console.log("Eligible for frontend developer");
}
else if( !knowFrontEnd && knowBackEnd){
    console.log("Eligible for backend developer");
}else{
    console.log("Not Eligible");
}

// 6. Ternary oprerator : ?:

result =  marks <= 35 ? "Fail" : "Pass";
console.log(`Your score is ${marks} and you ${ result}ed the exam`);