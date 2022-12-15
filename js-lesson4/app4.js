const x = ["a", "b", "c"];

x.push("d");
console.log(x);

x.pop();
console.log(x);

x.shift();
console.log(x);

x.unshift("a");
console.log(x);

x.reverse();
console.log(x);


const a = ["VELİ", "ALİ", "SELAMİ", "HAYDAR", 75, 43, 26, 8, 4, 199];
a.sort();
console.log(a);


const arr1 = [1,4,8,9,10];
const arr2 = [15,34,32,12];
const newarr = [arr1,arr2];
console.log(newarr);
console.log(newarr[0]);
console.log(newarr[1]);




//? Exercise: -------------------------------------------------------------------

const empty = Array();

const empty5 = Array(5);
console.log(empty5.length);

const aar = [1,3,5,7,9];
console.log(aar[0], aar[2], aar[4]);

const m = ["hello", 1, 7, {name:"john", surname:"black"}, [3,7,19], true, []];
console.log(m);

const IT = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
console.log(IT);
console.log(IT.length);
console.log(IT[0], IT[3], IT[6]);

console.log(IT[0].toUpperCase());
console.log(IT[1].toUpperCase());
console.log(IT[2].toUpperCase());
console.log(IT[3].toUpperCase());
console.log(IT[4].toUpperCase());
console.log(IT[5].toUpperCase());
console.log(IT[6].toUpperCase());

console.log(IT.toString());

console.log(`${IT.toString()} are big IT Companies.`);

console.log(IT.indexOf("Apple"));
console.log(IT.indexOf("Windows"));

console.log(IT);


//? 1.yol: -----------------------------------------------------------
// const ask = prompt("Enter a company:");
// if(IT.indexOf(ask) >= 0 ){
//     console.log("Bu şirket var.");
// }
// else{
//     console.log("Not found.");
// }

//? 2.yol: -----------------------------------------------------------
// const companie = prompt("Enter a company:");
// const xyz = IT.includes(companie);
// if(xyz){
//     console.log(`${companie} is here.`);
// }
// else{
//     console.log(`${companie} is not found.`);
// }

//?-----------
// const IT2 = IT.toString();
// console.log(IT2);
// const IT3 = IT2.split("");
// console.log(IT3);
//?-----------



console.log(IT.sort());


console.log(IT.reverse());


console.log(IT.slice(0,3));


console.log(IT.slice(4));


console.log(IT.slice(2,4));


IT.shift();
console.log(IT);


IT.splice(2,1);
console.log(IT);


IT.pop();
console.log(IT);


IT.splice(0);
console.log(IT);



//? Level-2: ----------------------------

const c1 = ["a", "b", "c"]
const c2 = ["d", "e", "f"]
const cc = [c1, c2];
console.log(cc);