const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

console.log(cars.length);

let yaz = "";
for(let i = 0; i < cars.length; i++){
    yaz += cars[i] + "\n"
}
console.log(yaz);




// const num = +prompt("Enter a psitive number:");
// let i, arr;
// for (i = 0, arr =[]; i<num; i++){                       //? BİTMEDİ DEVAMI VAR!!!!!!!!!!!
    
// }




const information = {firstname:"ali", lastname:"ak", age:32, job:"developer"}
let bilgi = "";
for(let ii in information){
    bilgi += information[ii] + "\n"
}
console.log(bilgi);




const numbers = [4,6,7,9,10,11,12,13];
let sum = 0;
for(let i in numbers){
    sum += numbers[i]
    console.log(sum);
}
console.log(sum);




const numbers2= [56,73,38,42,91]

let yazdır1 = "";
numbers2.forEach(benimFonksiyonum);

function benimFonksiyonum(value){
    yazdır1 += value + "\n"
}
console.log(yazdır1);

