// group array items according to a property
const array=[
    {name:"rahul",city:"delhi"},
    {name:"soni",city:"mumbai"},
    {name:"ram",city:"delhi"},
    {name:"shyam",city:"mumbai"},
    {name:"ajay",city:"bangalore"}
]

const groupedObj=array.reduce((acco,array)=>{ // here is i only write acc or i use another variable also? -answer: you can use any variable name instead of acc
    (acco[array.city]=acco[array.city]||[]).push(array);
    return acco;
},{})

console.log(groupedObj);