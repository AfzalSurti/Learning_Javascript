// check the types of all elemnets of array is same or not
const array=[1,2,3,4,5,6,7,8,"9"];

let sameType=array.every(value=>typeof value==='number');
console.log(sameType);