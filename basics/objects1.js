// defining singleton object

// const tinderUser = new Object();
// console.log(tinderUser);

const tinderUser = {};

tinderUser.id = "123acv";
tinderUser.name = "sammi";
tinderUser.loggedIn = false;

// console.log(tinderUser);

const regularuser = {
  email: "some@gmail.com",
  fullName: {
    userFullname: {
      firstName: "Ankit",
      lastName: "Singh",
    },
  },
};

// console.log(regularuser.fullName.userFullname.firstName);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({},obj1,obj2)

// assigning value of object through spread operator (...)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const user = [
  {
    id: 1,
    email: "Ankit@gmail.com",
  },
  {
    id: 1,
    email: "Anit@gmail.com",
  },
  {
    id: 1,
    email: "nkit@gmail.com",
  },
];

user[1].email
// console.log(user[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// to check object hold properties

console.log(tinderUser.hasOwnProperty("loggedIn"));

