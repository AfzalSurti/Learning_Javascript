//union of two arrays
const array1=[1,2,3,4,5];
const array2=[4,5,6,7,8];

const unionArray=[...new Set([...array2,...array1])];
console.log(unionArray);