//  for loop

/*
    for (initialization, condition , ibncr/decr){
        statments
    }
*/
let result: string = '';
for (let i: number = 0; i <= 10; i++) {
    result += `${i} `;
}
console.log(result);

result = '';
for (let i: number = 20; i >= 0; i -= 2) {
    result += `${i} `;
}
console.log(result);


result = '';
for (let i: number = 1; i <= 5; i++) {

    for (let j: number = 1; j <= i; j++) {
        result += `* `;
    }
    result += `\n`;
}
console.log(result);

result = '';
for (let i: number = 1; i <= 5; i++) {

    for (let j: number = 1; j <= i; j++) {
        result += `${i} `;
    }
    result += `\n`;
}
console.log(result);