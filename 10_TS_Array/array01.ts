// Array

let colors: string[] = ['Red', 'Green', 'Orange', 'Blue', 'Yellow', 'Silver'];
console.log(colors);


//1. iterate normal for loop
console.log("\nIterate elments in an array using for loop");
for(let i : number =0; i< colors.length; i++ ){
    console.log(colors[i].toUpperCase());
}


//2. for-in loop
console.log("\nIterate elments in an array using for-in loop");
let output:string='';

for (let index in colors){
    output+= `${colors[index].toUpperCase()}\t`;
}
console.log(output);

//3. for-of loop
console.log("\nIterate elments in an array using for-of loop");
output='';

for(let item of colors){
    output+= `${item.toUpperCase()}\t`;
}
console.log(output);

//4. for each function 
console.log("\nIterate elments in an array using for-each function");
output='';
colors.forEach( function(color:string) {
    output+= `${color.toUpperCase()}\t`;
});
console.log(output);

//5. for each function 
console.log("\nIterate elments in an array using for-each arrow function");
output='';
colors.forEach( (color:string) =>{
    output+= `${color.toUpperCase()}\t`; 
} );
console.log(output)

//6. Map function 
console.log("\nIterate elments in an array using Map function");
output='';
colors.map( (color:string) =>{
    output+= `${color.toUpperCase()}\t`; 
} );
console.log(output)
