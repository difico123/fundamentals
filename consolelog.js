const foo   = {    name: 'tom',     age: 30, nervuos: false};
const bar   = {    name: 'dick',    age: 40, nervuos: false};
const baz   = {    name: 'harry',   age: 50, nervuos: true};


console.log('%c bad code 💩', 'color: orange; font-weight: bold;');
// you do not see these variable

console.log(bar);
console.log(foo);
console.log(baz);

console.log('%c good code ✔️', 'color: green; font-weight: bold;');
// you see these variable

console.log({foo, bar, baz});
console.table([foo, bar, baz]);
console.log({foo})

// 'console.time'

console.log('console.time');

console.time('looper')
let i = 0;
while(i < 100000) {i++;}

console.timeEnd('looper')

// to estimate the time in console.time

//stack trace logs

const deleteMe = () => console.trace('bye bye databases');

deleteMe();