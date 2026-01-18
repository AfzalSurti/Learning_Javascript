// find misising value in an array of integers from 1 to n
const array=[2,4,8,10];
const min=Math.min(...array);
const max=Math.max(...array);

let actualsum=array.reduce((a,b)=>a+b,0);
let expected_sum=(max-min+1)*(min+max)/2;

missingValue=expected_sum-actualsum;
console.log(missingValue);