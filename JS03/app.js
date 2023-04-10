// const num = +prompt("Bir sayı giriniz:")

// if(num > 0) {
//     console.log(`${num}, pozitif sayıdır`);
// }
// else if(num < 0){
//     console.log("sayı negatif");
// }
// else{
//     console.log("sayı sıfırdır");
// }



// const n1 = +prompt("bir sayı gir:")
// const n2 = +prompt("bir sayı gir:")
// const n3 = +prompt("bir sayı gir:")

// if(n1 >= n2 && n1 >= n3){
//     console.log(`${n1} en büyük sayıdır`);
// }
// else if(n2 >= n1 && n2 >= n3){
//     console.log(`${n2} en büyük sayıdır`);
// }
// else if(n3 >= n2 && n3 >= n1){
//     console.log(`${n3} en büyük sayıdır`);
// }


// //* 2.Yontem
// let biggest = n1

// if (n2 >= biggest) {
//   biggest = n2
// }
// if (n3 >= biggest) {
//   biggest = n3
// }
// console.log(`${biggest} is biggest`)



// //* 3.Yontem
// console.log(`The Biggest : ${Math.max(n1, n2, n3)}`)



//------------------------------------------------------------
const years = 11
const kidsCount = 3
const graduate = true
const langCount = 5

const increase = years >=10 && kidsCount >=2 && graduate == true && langCount >=3

if(increase === true){
    console.log("zam alabiilir");
}

//--------------------------------------------------------------
// const num1 = +prompt("birinci sayı:")
// const sign = prompt("+ - * / gir:")
// const num2 = +prompt("ikinci sayı:")

// let sonuc;

// switch (sign) {
//     case "+":
//     sonuc = num1 + num2
//     break;
//     case "-":
//     sonuc = num1 - num2
//     break;
//     case "*":
//     sonuc = num1 * num2
//     break;
//     case "/":
//     sonuc = num1 / num2
//     break;
// }
// console.log(sonuc);



//? Ternary --------------------------------------

const not = +prompt("notunu gir:")
not >= 45 ? console.log("geçtin") : console.log("kaldın");


// age >= 18 && gender ==="male" && healthy === true ? alert("askere git") : alert("askere gitme")


let maas = +prompt("maaşını gir:")
maas < 8000 ? maas = maas * 0.5 + maas : maas = maas * 0.1 + maas
console.log(maas);

const gelir = +prompt("gelir miktarı:")
const gider = +prompt("gider miktarı:")
const bakiye = gelir - gider
const aü = 8000
let kredi = bakiye > 8000 ? "kredi alabilir" : "kredi alamaz"
console.log(kredi);
