const array=[1,2,2,2,3,3,4,3,4,5,5,5,6,7,8,8,9];

const unique=[];

for (let n in array){
    if(!unique.includes(array[n])){
        unique.push(array[n]);
    }
}

console.log(unique);