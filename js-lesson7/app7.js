let func1 = (x,y,z) => x*(y+z)

console.log(func1(4,5,6));




let a = 4;
let b = 2;
const q = () => {
    return a + b + 10;
}
console.log(q(50,80));      //? CEVAP HER ZAMAN : 106 OLUR.




const cat = {
    name: 'Kitty',
    age: 8,
    whatName() {
        return this.name;
    }
};
console.log(cat.whatName());







//? ASEBENEH DAY7 EXAMPLES: ------------------------------------------------------------


const fullName = (names) => {
    return names;
}
console.log(fullName("Oğuzhan"));




const fullNamex = (firstName, lastName) =>
    firstName + " " + lastName;
console.log(fullNamex("Oğuzhan", "Özcan"));




const addNumbers = (aa,bb) => aa + bb        //? ----->    EN YALIN FONC. HALİ:
console.log(9 + 15);




const areaOfRectangle = (lenght,widht) => lenght * widht;
console.log(areaOfRectangle(20,8));




const cevre = (uzunluk,genislik) => 2 * uzunluk + 2 * genislik
console.log(cevre(15,6));




const volumeOfRectPrism = (lengthx , widthx , heightx) => lengthx * widthx * heightx
console.log(volumeOfRectPrism(5,8,2));




const pi = 3.14;
const areaOfCircle = (yaricap) => pi * yaricap * yaricap
console.log(areaOfCircle(4));




const  circumOfCircle = (r) => 2 * pi * r
console.log(circumOfCircle(5));




const density = (mass,volume) => mass / volume
console.log(density(28,7));




const speed = (distence,time) => distence / time
console.log(speed(600,7));




// const oC = +prompt("Celcius olarak sıcaklığı girin:")
// const oF = () => (oC * 9/5) + 32;
// console.log(oF());





const age = Number(prompt("enter your age"))
if(age>=20){
   let weight = Number(prompt("enter your weight"))
   let height = Number(prompt("enter your height"))
  const bmi = () =>{
     return weight/(height*height);} 
  console.log(bmi());
  if(bmi()<=18.5){
    console.log("underweight");
  }else if(bmi()>18.5 && bmi()<=24.9){
    console.log("Normal weight");
  }else if (bmi() > 24.9 && bmi() <= 29.9) {
    console.log("Overweight");
  }else{
    console.log("obese");
  }
}else{
  console.log("your age is not enough");
}
