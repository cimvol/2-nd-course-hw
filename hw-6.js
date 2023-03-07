/* Exersice 1 
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10)
    break;
} */



/* Exersice 2 
const rut = [1, 5, 4, 10, 0, 3];
rut.forEach((el, index) => {
    console.log(`[${index}] : ${el}`);
}); */


/* Exersice 3 
let uop = [1, 3, 5, 10, 20];
uop = uop.join(' ');
console.log(uop);
*/



/* Exersice 4 
let mas = [];
for (let i = 0; i < 3; i++){
    mas[i] = [];
    for (let j = 0; j < 3; j++){
        mas[i][j] = 1;
}}
console.log(mas);
*/



/* Exersice 5 
let gop = [1, 1, 1];
gop.push(2, 2, 2);
console.log(gop);
*/



/* Exersice 6 
let vnb = [9, 8, 7, 'a', 6, 5];
console.log(vnb);
vnb = vnb.sort();
console.log(vnb);
let vnb1 = vnb.pop();
console.log(vnb);
*/



/* Exersice 7 
const mip = [9, 8, 7, 6, 5];
userNumber = prompt('Enter number');
for (let i = 0; i < mip.length; i++) {
	if (mip[i] == userNumber) 
	console.log(`There is such a value - ${userNumber}`);
} */



/* Exersice 8 
let str = 'abcdef';
str = str.split('');
console.log(str);
str = str.reverse();
console.log(str);
str = str.join('');
console.log(str);
*/



/* Exersice 9 
let mas = [[1, 2, 3,],[4, 5, 6]];
let res = [].concat(...mas);
console.log(res);
*/



/* Exersice 10 
let sum = 0;
const ust = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < ust.length; i++) {
	sum +=i;
    console.log(sum);
}
*/
