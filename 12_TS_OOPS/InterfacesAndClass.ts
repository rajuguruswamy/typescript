// interface and class

interface IStudent {
    firstName:string;
    lastName:string;
    age:number;
    course:string;
    
    fullName : () => string;
    biography : () => void;    
}


class Student implements IStudent{
    firstName: string;
    lastName: string;
    age: number;
    course: string;
    
    
    constructor(firstName: string,lastName: string, age: number, course: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
    }

    public fullName():string {
        return `${this.firstName} ${this.lastName} `
    };

    public biography():void {
        let bio:string = `FULL NAME : ${this.fullName()} AGE : ${this.age} COURSE :  ${this.course}`
        console.log(bio);
    };
  
}


let stud1  = new  Student("Raju","Guruswamy",45,"Computer Science");
let stud2  = new  Student("Aaron","SNG",27,"Computer Science");
stud1.biography();
stud2.biography();