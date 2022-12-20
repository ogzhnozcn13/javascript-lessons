const numbers = [45, 4, 9, 16, 25];

let txt = "";
for(let x in numbers) {
    txt += numbers[x];
    console.log(txt);
}

console.log(txt);




// const nums = ["ali", "veli", "deli", "selami"];

// let txt2 = "";
// nums.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt2;

// function myFunction(value, index, array) {
//   txt2 += array + "<br>"; 
// }




const cars = ["BMW", "Volvo", "Saab", "Ford"];              //? IF ile ÖRNEK
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}
console.log(text);


const cars2 = ["BMW", "Volvo", "Saab", "Ford"];            //? WHILE ile ÖRNEK
let i2 = 0;
let text2 = "";

while (cars2[i2]) {
  text2 += cars2[i2];
  i2++;
}
console.log(text2);






//? ASABENEH --- DAY6 --- test: -------------------------------------------------------------


//?   1
let n = 0;
while(n<11){
    console.log(n);
    n++;
}


//?   2
for(let m = 10; m > -1 ; m--){
    console.log(m);
}



//?   3
// let sayi = +prompt("Bir sayı giriniz:");
// for(i = 0; i<=sayi; i++){
//     console.log(i);
// }



//?   4
// let q = "";
// for(ii = 0; ii < 7; ii++){            ????

// }




//?   5
for(num1 = 0; num1 <= 10; num1++){
    console.log(`${num1}*${num1}=${num1*num1}`);
}



//?   6
for(let y = 0; y <= 10; y++){
    console.log(`${y}, ${y**2}, ${y**3}`);
}



//?   7
for(a = 0; a <= 100; a += 2){
    console.log(a);
}



//?   8
for(let j = 1; j <= 100; j++){
    if(j %2 == 1){
        console.log(j);
    }
}



//?   9





