const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: 499,
        category: "Self Help",
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 399,
        category: "Finance",
        rating: 4.7,
        inStock: true
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 699,
        category: "Programming",
        rating: 4.6,
        inStock: false
    },
    {
        id: 4,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        price: 599,
        category: "Programming",
        rating: 4.5,
        inStock: true
    },
    {
        id: 5,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 349,
        category: "Finance",
        rating: 4.4,
        inStock: true
    },
    {
        id: 6,
        title: "Deep Work",
        author: "Cal Newport",
        price: 449,
        category: "Productivity",
        rating: 4.6,
        inStock: false
    },
    {
        id: 7,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        category: "Fiction",
        rating: 4.3,
        inStock: true
    },
    {
        id: 8,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        price: 549,
        category: "Programming",
        rating: 4.7,
        inStock: true
    }
];
// let userBook = books.filter((bk)=> bk.id ===1)
 let userBook = books.filter((bk)=> {
    return bk.category === "Programming" && bk.price >=500
 })

// console.log(userBook);
// console.log();


const myNumber = [1,2,3,4,5,6,7,8,9,9];

// const newNums= myNumber.map((num)=> num+10);

// const newNums=myNumber.forEach((num)=>{
//     if(num>0){
//         // console.log(num);
        
//     }
//     return num
// })


// console.log(newNums);


const newNum = myNumber.
map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
console.log(newNum);
