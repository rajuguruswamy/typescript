//  while loop

/*
    while (condition ){
        //statments

        //incr/decr
    }
*/


// print number 0 to 10

let num: number = 0;
let result: string = '';

while (num <= 10) {
    result += `${num} `;
    num++;
}
console.log(result);

// pring 20 to o diff 2

result = '';
num = 20;
while (num >= 0) {
    result += `${num} `;
    num -= 2;
}
console.log(result);


// print stars
result = '';

let i: number = 1;
while (i <= 5) {

    let j: number = 1;
    while (j <= i) {
        result += ' * ';
        j++;
    }
    result += '\n';
    i++;

}
console.log(result);