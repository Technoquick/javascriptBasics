// for loop

for( let index =0; index < 10; index++){
    const element = index;
    if(element === 5){
        // console.log(" 5 is best number")
    }
    // console.log(element);
    
}


for (let i=2; i<=8; i++){
    //console.log(`multiplication of  : ${i}`);
    
    for (let j = 1; j<=10; j++){

        // console.log(`inner value ${j}  And outer loop  ${i}`);
       // console.log(i + '*' + j+ '='+ i*j);
        

    }
}

let myArray = ["flash" , "Batman", " Superman"];

for(let index =0; index <=myArray.length; index++){
    const element = myArray[index];
    // console.log(element);
    
}

// Break and Continue
for (let index = 0; index < 10; index++) {
   if(index == 5){
    // console.log(` detected 5`);
    break;
   } 

//    console.log(` value of i is : ${index}`);
}

//continue : it skip that iteration.
for (let index = 0; index < 10; index++) {
   if(index == 5){
    console.log(` detected 5`);
    continue;
   } 

   console.log(` value of i is : ${index}`);
   
}