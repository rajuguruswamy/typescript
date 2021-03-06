// Object oriented programming
//Create object using javascript way
console.log("=====================Create object using javascript way=====================");
interface MobileObject {
    brand: string,
    color: string,
    price: number
};

let mobilex: MobileObject = {
    brand: "Apple",
    color: "black",
    price: 1000
};

console.log(mobilex);
console.log(mobilex.brand);

console.log("=====================Create object using type script=====================");
// create object using type script

class Mobile {
    private brand: string;
    private color: string;
    private price: number;

    constructor(brand: string, color: string, price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    // getter and setter
    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void  {
        this.brand = brand;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void  {
        this.color = color;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void  {
        this.price = price;
    }

}


// Create object 

let mobileObject = new Mobile("Apple", "Black", 1200);
console.log(mobileObject);


console.log(mobileObject.getBrand());
console.log(mobileObject.getColor());
console.log(mobileObject.getPrice());

mobileObject.setBrand("Lenovo");
mobileObject.setColor("Green");
mobileObject.setPrice(1500);

console.log("\nMobile obeject bvalue after usng Settor method\n");
console.log(mobileObject.getBrand());
console.log(mobileObject.getColor());
console.log(mobileObject.getPrice());

