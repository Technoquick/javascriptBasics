

// const User = {
//   userName: "Ankit",
//   price: 100,

//   userMessage: function () {
//     console.log(`${this.userName}, welcome to my website`);
//     // console.log(this);
    
//   },
// };

// User.userMessage()
// User.userName="Sam"
// User.userMessage()

// console.log(this)

// function chai(){
//     let username = "Ankit"
//     console.log(this.username);
    
// }
// chai()


// const chai=function(){
//     let username = "Ankit"
//     console.log(this.username);
    
// }
// chai()

// const chai= () =>{
//     let username = "Ankit"
//     console.log(this.username);
    
// }
// chai()

// const addTwo = (num1 , num2) =>{
//   return num1+num2
// }

// const addTwo = (num1 , num2) =>num1+num2
const addTwo = (num1 , num2) =>(num1+num2)

console.log(addTwo(2,3));
