

const isUserLoggedIn = true;
const temrature = 42;

// if(temrature < 50){
//    console.log("temprature is less than 50");
   
// }
// else{
//     console.log("temprature is greater than 50")
// }
// console.log("Execute")

// < (less than) ,<= (less than equal to) , >(greater than) ,
// != (not equal to) 
// === (strict check) 


const score =200;

if(score >= 200){
    const power ="fly";
    // console.log(`user power: ${power}`);
}
// due to scope power is not defined here
// console.log(`User power : ${power}`);


//shorthand Notation

// const balance = 1000;

// // if(balance > 500) console.log("test");

// if(balance <500){
//     console.log("less than");
// }
// else if(balance <750){
//     console.log("less than 750");
    
// } 
// else if (balance <900){
//     console.log("less than 900");
    
// }
//  else {
//     console.log("less than 1200");
    
//  }

const userLoggedIn = true;
const debitCard =true;
const loggedInFromEmail =true;

if (userLoggedIn && debitCard && 2==4){
    console.log("Allow to buy course");
    
}
if(userLoggedIn || loggedInFromEmail  ){
    console.log(" user logged in");
    
}