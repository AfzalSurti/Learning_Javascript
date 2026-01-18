// remove element from array
const array=[1,2,3,4,5,6,7,8,9];
const remove=5;

const index=array.indexOf(remove);
if(index>-1){
    array.splice(index,1); //  here before i write slice instaed of splice but it not give me error why? - ans: slice does not modify the original array, splice does. It returns a new array containing the removed elements.
}                          //  so what does slice does - ans: slice creates a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(array);

arr1=array.slice(2,5); // it will give elements from index 2 to index 4
console.log(arr1);