const a = Array()
console.log(a);



const b = ["a", "b", "c", 5, 4, 18, "name", true, false]
console.log(b[2]);
console.log(b[6]);



const c = [23, ["nehir", "ayşe", 6], {name:"mehmet", surname:"yılmaz"}, "naber"];
console.log(c[1][2]);
console.log(c[1][1][2]);
console.log(c[1][1], c[1][0]);
console.log(c[2][0]);



const string = "osmankaya";
console.log(string.split(""));



const names = "ali,veli,deli,haydar";
const list1 = names.split(",");
console.log(list1);



const q = "I like to play football and camping and workout."
const x = q.split(" ");
console.log(x);
console.log(x.length);

const y = x.length-1;
console.log(y);
console.log(x[y]);
console.log(x[x.length-7]);




//? ----------------------------- Konu Başlığı: Modifiying Array Elements: ---------------------------

const country = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];

country[5] = "USA";
console.log(country);

console.log(country [country.length-5]);
country [country.length-5] = "England";
console.log(country);




const xx = Array(5).fill(3);
console.log(xx);




const r = [1,2,3].concat([4,5,6]);
console.log(r);



//?--------------------------------------------------------------------------------------------------
const numbers = [1,2,3,4,5];
console.log(numbers.indexOf(5));
console.log(numbers.indexOf(0));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(7));


const w = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto excepturi reprehenderit maiores necessitatibus, cum molestiae sequi veritatis in. Et cupiditate sunt sapiente. Quidem fugiat doloribus iure autem ad repudiandae?";
const n = w.split(" ");
console.log(n);
console.log(n.indexOf("sunt"));
console.log(n.lastIndexOf("fugiat"));

console.log(n.includes("amet"));
//?-----------------------------------------------------------------------------------------------------



const numaralar = [1,2,3,4,5,6,7,8,"Okul yolu düz gider."];
const strings = numaralar.toString()
console.log(strings);



const  namesx = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const names1 = namesx.join();
console.log(names1);
const names2 = namesx.join(";");
console.log(names2);
const names3 = namesx.join(",abc,");
console.log(names3);
const names4 = namesx.join("#");
console.log(names4);




const nums = [1,2,3,4,5,15,6,7,8,9];
const numsChild = nums.slice(4,9);
console.log(numsChild);



const m1 = ["a", "b", "c", "d", "e", "f"];
const n1 = m1.splice(1, 3, "v", "y", "z", "q");
console.log(m1);
console.log(n1);