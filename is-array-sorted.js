// checked if array is sorted in ascending order
const array=[1,2,3,4,5,6,7,8,9];
let sorted =true;

for (let i=0;i<array.length-1;i++){
    if(array[i]>array[i+1]){
        sorted=false;
        break
    }
}
console.log(sorted);