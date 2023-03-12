/* Exersice 1 
let str = 'js';
str = str.toUpperCase();
console.log(str);*/

/* Exersice 2 
let arr = ['Росток', 'АвтО', 'стакан', 'СОК', 'РосТов', 'песок', 'ясень', 'Соковыжималка'];
let str = 'ст';
arr.forEach((arr) => {
if (arr.toLowerCase().includes(str.toLowerCase())) {
    console.log(arr);
}
});*/


/* Exersice 3 
let number = 32.58884;
let numberLess = Math.floor(32.58884);
console.log(numberLess);    
let numberMore = Math.ceil(32.58884);
console.log(numberMore);              
 let numderInteger = Math.round(32.58884);                                    
 console.log(numderInteger); */


/* Exersice 4 
let rew = [52, 53, 49, 77, 21, 32];
let max = Math.max(...rew);
let min = Math.min(...rew);
console.log(`Maximum numbers - ${max}`);
console.log(`Minimum numbers - ${min}`);*/


/* Exersice 5 
let numbers = Math.round(Math.random() * 10);
console.log(`Random number - ${numbers}`);*/


/* Exersice 6 
function makeMassiv(a) {
    let longMassiv = Math.floor(a / 2);
    let max = a;
    let min = 0;
    const arr = [... Array(longMassiv)];
    for (let i = 0; i < arr.length; i ++) { 
        arr[i] =  min + Math.random() * (max + 1 - min);
      }
   return arr;
}
let result = makeMassiv(17)
console.log(result);
*/


/* Exersice 7 
function find (min, max) {
    let value = min + Math.random() * (max + 1 - min);
    return Math.floor(value);
}
result = find(14, 33);
console.log(`Random value - ${result}`);


/* Exersice 8 
let dayToday = new Date ();
console.log(dayToday);
*/


/* Exersice 9 
let myDate = new Date();
console.log(myDate);
myDate.setDate(myDate.getDate() + 73);
console.log(myDate);
*/


/* Exersice 10 
Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
Время: <часы>:<минуты>:<секунды>
Время, которое будет выведено, также хранится в объекте Date.

function calendar(a, b, c) {
    console.log(`Дата: <${a}> <${b}> <${c}>`)
}
calendar(21, 02, 2023);
*/




