// today i learn the evnt loop and macro task and micro task in js
// eent loop - js is a single threaded language means it can execute one task at a time
// but in browser environment there are many things to handle like user events , http requests , timers etc
// so to handle these things js use event loop
// event loop is a mechanism that allows js to perform non blocking operations by offloading tasks to the browser or node api
// event loop has two main components - call stack and task queue
// call stack is where the js code is executed
// task queue is where the tasks are queued when they are offloaded to the browser or node api
// there are two types of tasks - macro tasks and micro tasks
// macro tasks are tasks that are executed after the current stack is empty like setTimeout , setInterval , I/O operations etc
// micro tasks are tasks that are executed after the current stack is empty but before the next macro task like promises , mutation observers etc
// the event loop continuously checks the call stack and task queue and executes the tasks accordingly
console.log("1-start"); // normal log goes to call stack

setTimeout(()=>{  // macro task go to task queue
    console.log("4-setTimeout");
})

Promise.resolve().then(()=>{ // micro task go to micro task queue
    console.log("3-promise");
})

console.log("2-end"); // normal log goes to call stack

