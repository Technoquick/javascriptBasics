// primitive data types 

// 7 types => String, Number , Boolean , null , undefined, symbol, BigInt

// const score=100;
// const scoreValue = 100.3;

// const isLoggedin = false;
// const outSideTemp = null;
// let userEmail;

// const id =Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);

// const bigNumber = 34566288n;



//rference (non -primitive)
//Array ,Object ,Functions

// const heroes =["Shaktiman", "naagraj", "doga"];

// let myObj = {
//     name:"Ankit",
//     age:22,

// }
// const myfunction = function(){
//     console.log("hello users");
// }
// console.log(typeof heroes);
// console.log(heroes);
// console.log(myObj);

// ****************************************

//Stack (primitive) , provides A copy of value 
// heap memory (non-primitive) ,provide reference

// let myYoutubeName ="LearnWith@Ankit";
// let anotherName = "ChaiAurCode";
// anotherName="myyoutubeName";
// console.log(myYoutubeName);
// console.log(anotherName);


//Example of refernce of a variable in js
//direct access through reference and modified the original.
//this happens only in heap memory with non primitive types.

let userOne = {
    email:"userone@gmail.com",
    upiId:'user@ybl',
}

let userTwo =userOne;
userTwo.email = "Ankit@gmail.com";


console.log(userOne.email);
console.log(userTwo.email);













