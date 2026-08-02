const marvel_heroes = ["thor","ironman" , "spiderMan"];
const dc_heroes = [ "America ", "superman", "Gamora"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1])

//concat method combine two or more array and return a new array.
// const newArr=marvel_heroes.concat(dc_heroes);
// console.log(newArr);



//joining array using spread operator

// const myNewArr= [...marvel_heroes,...dc_heroes]
// console.log(myNewArr)


// const another_array = [1,2,2, [1,2,3,],4,9,[4,5,6,[7,8]]];
// // flat methods give new array with all sub array element concatenated to specified depth.
// const newAnother_Arr= another_array.flat(Infinity)
// console.log(newAnother_Arr);

// console.log(another_array);

// console.log(Array.isArray("Hitesh"))

// //from create an array from iterable object.
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"Ankit"})) //interesting this give a empty aaray

let score =100;
let score2 =200;
let score3 =300;

//of method return a new array from a set of element
console.log(Array.of(score,score2,score3));