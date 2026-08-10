

const userEmail = "";

if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("don't have  user email");
    
}


//  Falsy Value

//  false , 0, - 0 , BigInt 0n,  "", null, undefined , NaN;


// truthy value
// "0" , 'False' ," "  , [] , {}, function(){}, 

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

// const emptyObj ={}

// if(Object.keys(emptyObj).length ===0){
//     console.log("object is empty");
    
// }


//  NULLISH Coalescing Operator (?? ): null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 30

// console.log(val1);


//ternary operator

// condition ?  true : false
// const iceTeaPrice =100;
// iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")