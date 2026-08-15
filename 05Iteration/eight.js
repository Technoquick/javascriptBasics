const myNum = [1,2,3,4];

// const myTotal=myNum.reduce(function (acc, curVal){
//   console.log(`acc: ${acc} and curVal is : ${curVal}`);
   
//   return acc+curVal
// },0)

const myTotal = myNum.reduce((acc, curVal)=>(acc+curVal), 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price :2800
    },
    {
        itemName: "dataScience course",
        price :2400
    },
    {
        itemName: "java course",
        price :2300
    }
];

 const priceToPay= shoppingCart.reduce(( acc, items)=> acc+items.price, 0 )
console.log(priceToPay);
