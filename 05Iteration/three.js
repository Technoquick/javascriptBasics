//for of loop

//["","",""]  //array of string
//[{},{},{}] //array of object

const arr = [1,2,3,4,5,];

for (const val of arr) {
//console.log(`value of arr is ${val}`);
    
}

const greeting = "hello Ankit";
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

// map method

const map = new Map();
map.set("IN", "India")
map.set("Us", "United state Of America")
map.set("CH", "China")
map.set("pk", "Pakistan")


//map does not store duplicate value

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    // console.log(key, ':-' , value);
    
}

const myObj = {
    'game1' : 'NFS',
    'game1' : 'Spider man'
}
// for(const obj of myObj){
//     console.log(obj);
    
// }