//  do while loop

/*
    do {
        //statments

        //incr/decr
    }
    while (condition );
 
*/


// print number 0 to 10
let num:number = 0;
let result:string = '';

do{
    result += `${num} `;
    num++;
}
while (num <= 10);
console.log(result);

// pring 20 to o diff 2

result = '';
num = 20;
do{
    result += `${num} `;
    num -= 2;

}
while (num >= 0) ;
console.log(result);


// print stars
result = '';

let i: number = 1;
do{

    let j: number = 1;
    while (j <= i) {
        result += ' * ';
        j++;
    }
    result += '\n';
    i++;

}
while (i <= 5) ;
console.log(result);


// print numbers
result = '';

i = 1;
do{

    let j: number = 1;
    while (j <= i) {
        result += `${i} `;
        j++;
    }
    result += '\n';
    i++;

}
while (i <= 5) ;
console.log(result);
