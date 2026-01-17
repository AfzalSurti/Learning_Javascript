// convert array to object according to id
const array=[
    {id:1,name:"rahul"},
    {id:2,name:"soni"},
    {id:3,name:"ram"}
]

let obj={};

for(let i of array){
    obj[i.id]=i; 
}
console.log(obj);   

// to access object properties
for(let key in obj){
    console.log(key, obj[key]);
}

// normsl array to object

let obj1={};
for(let i in array){
    obj1[i]=array[i];
}
console.log(obj1);  