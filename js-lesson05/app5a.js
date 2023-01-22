


for(let i = 0; i <= 5; i++){
    console.log(i);
}





//? ÇARPIM TABLOSU: -----------------------------------------------

for (let i = 1; i <= 10; i++){
    for(let b = 1 ; b <= 10 ; b++){
       console.log(`${i} * ${b} = ${i * b}`);
    }
}




const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr);




const x = [1,2,3,4,5];
let y = [];
for(let i = 0; i < x.length; i++){
    y = x[i]*3;
    console.log(y);
}
console.log(y);