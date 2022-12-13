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