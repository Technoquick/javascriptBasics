//singleton object is created through object function

//literals

const mysym = Symbol("key1");

const jsUser = {
    name: "Ankit",
    "fullName": "Ankit Singh",
    age: 18,
 //inside object symbol is declared in square bracket   
    [mysym]:"my key1",
    email: "ankit@gmail.com",
    isLoggedIn: false ,
    lastLoggedInDays: ["monday", "saturday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(typeof jsUser[mysym]);


//insert into object 

jsUser.email = "raizada@gmail.com";
// console.log(jsUser);

// Object.freeze(jsUser);

jsUser.email="abc@gmail.com";
// console.log(jsUser);
// console.log(typeof jsUser[mysym]);

jsUser.greet =function(){
    console.log("hello js users");
}

jsUser.greetTwo =function(){
    console.log(`hello js users, ${this.name}`);
}

console.log(jsUser.greet());
console.log(jsUser.greetTwo());

