const coding= ["kotlin", "ruby", "java","python"]

// coding.forEach( function (items) {
//     console.log(items)
// } )

// coding.forEach( (val)=> {
//     console.log(val);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach ( (items, index , arr)=>{
//     console.log(items,index,arr);
    
// } )



const myCoding= [
    {
        languageName: "Javascfript",
        languageFileName: ".Js"
    },
    {
        languageName: "Java",
        languageFileName: ".java"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    },
    {
        languageName: "ruby",
        languageFileName: ".rb"
    }
];

myCoding.forEach( (value)=>{
    console.log(value.languageName);
    
} )