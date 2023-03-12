/* Exersice 1 
function summator (arr, callback) {
    const sum = arr.reduce((acc, number) => acc + number);
    const result = arr.reduce((sum, elem) => sum * elem);
    console.log(`Summa all numbers massiv 'arr' = ${sum}`);
    console.log(`Product all numbers massiv 'arr' = ${result}`);
    callback();
    }
function end() {
    console.log('Сalculation made!!!');
}
let arr = [ 2, 2, 4, 7, 16];
summator(arr, end);
 */


/* Exersice 2 
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
]; 
users.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(users);
*/


 /* Exersice 3 
function each(arr, callback) {
arr.reverse();
console.log(arr);
callback();
}
function description () {
    console.log('We reverse massiv "arr" - done')
}
function skan() {
   for(let i = 0; i <arr.length; i++) {
    if(isNaN(arr[i]) == false) {
        console.log(arr[i]);
    }
   }
}
function show (result, callback) {
    console.log(result);
    callback();
}
const arr = [1, '4', 9, 'two'];
 let result = each (arr, description);
 skan(result, skan);
 */


/* Exersice 4 
const time = (dayToday) => {
    const idInterval =  setInterval(() => { 
    console.log (dayToday); }, 3000);
    setTimeout(() => {
        clearInterval(idInterval);
        console.log('30 sekond end!');
    }, 30000);
};
time(new Date());
*/ 
   

/* Exersice 5 
function calling() {
    console.log('Звоню!')
};

function beeps(talk) {
    setTimeout(() => {
        console.log('Идут гудки...')
        talk();
    }, 1000);   
}

function talk() {
    console.log('Разговор')
   }
  
calling();
beeps(talk);
*/
