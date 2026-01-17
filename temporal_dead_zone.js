// temporal dead zone example 
// what is a  temparal dead zone?
// The temporal dead zone (TDZ) is a behavior in JavaScript that occurs when using the let and const keywords for variable declarations. 
// It refers to the period between the start of a block and the point where the variable is declared, during which the variable cannot be accessed. 
// Attempting to access the variable before its declaration will result in a ReferenceError.
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x=10;