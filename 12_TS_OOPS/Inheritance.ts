// Inheritance
/*
    1. Resusablity , extends
    class A {} -> super /parent / base class
    class B  extends A {} -> sub / child / derived class    
*/

class BasscCalculator {
    
    public result: number;

    constructor(){
        this.result = 0;
    }

    public Add(a:number, b:number): void {
        this.result = a + b;
        console.log("Calling base class method")
        console.log(`\n${a} + ${b} = ${this.result}`);
    }

    public Sub(a:number, b:number): void {
        this.result = a - b;
        console.log("Calling base class method")
         console.log(`\n${a} - ${b} = ${this.result}`);
    }

}

console.log("\nCalling base class method from base class")
let basicCal:BasscCalculator = new BasscCalculator();
basicCal.Add(10 ,5);
basicCal.Sub(10 ,5);

class  AdvanceCalculator extends BasscCalculator{
    constructor(){
        super();
    }

    // Method Override
    public Add(a:number, b:number): void {
        this.result = a + b + b + a;
        console.log("Calling child class method")
        console.log(`\n${a} + ${b} + ${b} + ${a} = ${this.result}`);
    } 

    public Mul(a:number, b:number): void {
        this.result = a *  b;
        console.log("Calling child class method")
        console.log(`\n${a} *  ${b}  = ${this.result}`);
    } 

    public Div(a:number, b:number): void {
        this.result = a /  b;
        console.log("Calling child class method")
        console.log(`\n${a} /  ${b}  = ${this.result}`);
    } 

}

console.log("\nCalling base class method from child class")
let advCalc = new AdvanceCalculator();
advCalc.Add(10,5);
advCalc.Sub(10 ,5);
advCalc.Mul(10 ,5);
advCalc.Div(10 ,2);
