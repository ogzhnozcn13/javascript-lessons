const cola = 20
const gumm = 15
const bisc = 5

const total = cola + gumm + bisc
console.log("total:",total);


const fn = "ahmet"
const ln = "daş"
console.log(fn + " " + ln);

const s1 =7
s2 ="4"
s3 ="ALİ"
console.log(s1+s2);
console.log(s1-s2);

const dif = s1-s3
console.log(dif, typeof NaN);

console.log("**********************");

const birth = 1991
const person = "Ozi"

console.log(person + " is " + (2023 - birth) + " years old");
console.log(person + " is " + (new Date().getFullYear() - birth) + " years old");

console.log("**********************");

console.log(`${person} is ${new Date().getFullYear() - birth} years old.`);


// const pi = 3.14
// const r = +prompt("Enter r:")
// console.log(`Circle: ${Math.trunc(2 * pi * r)} `);
// console.log(pi * r**2);


const random = Math.random()
console.log(random);

const num = Math.floor(Math.random() * 100)
console.log(num);


console.log("******************************");

let a = 5
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);
console.log(a += 6);


console.log("******************************");

// const n = +prompt("Enter number:")
// console.log(n%10);
// console.log(Math.floor(n/10)%10);
// console.log(Math.floor(n/100)%10);

console.log("******************************");

const x = 5
const y = "5"
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);


