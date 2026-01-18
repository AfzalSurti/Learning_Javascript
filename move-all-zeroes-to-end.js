//move all zeroes to end of array
const array=[0,1,0,3,12,0,5,0,0,7]; 

const n=array.length;
let count=0;

for(let i=0;i<n;i++){
    if(array[i]==0){
        count++;
        array.splice(i,1);
        i--;
    }
}

for(let i=0;i<count;i++){
    array.push(0);
}

console.log(array); 