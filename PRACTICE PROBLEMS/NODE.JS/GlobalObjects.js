//this is the global variable
global.x = 35;
console.log(x);

//this is the console variable
console.log("HI I AM THE KING OF MULTIVERSE");


//this is the process variable
console.log(process.pid);


//this is the buffer variable
const buf = Buffer.from('satya');
console.log(buf);

//this __dirname variable
console.log(__dirname);

//this is the __filename variable
console.log(__filename);


//this is the setTimeout varable
setTimeout(() => {
    console.log("I AM THE KING OF MULTIVERSE");
}, 2000);

//this is the setInterval variable
const interval = setInterval(() => {
    console.log("I AM THE KING OF MULTIVERSE");
}, 1000); // Runs every 1000ms (1 second)*/

//this is the clearTimeout variable
const timeout = setTimeout(() => {}, 2000);
clearTimeout(timeout);
console.log("Timeout cleared before execution!!.");

//this is the clearInterval variable
/*const interval = setInterval(() => {},1000);
clearInterval(interval);
console.log("Interval cleared before execution!!.");*/

//this is the AbortController variable
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// To abort the request
controller.abort();


//this is the setImmediate variable
const immediate = setImmediate(() => {
    console.log("I AM THE KING OF MULTIVERSE");
}); // Executes immediately after the current event loop phase


//this is the clearImmediate variable
const immediate = setImmediate(() => {});
clearImmediate(immediate);

//this is the queueMicrotask variable
const microtask = queueMicrotask(() => {});
console.log("Microtask queued and executed after the current operation completes.");

//this is the performance variable
const performance = reqiure('perf_hooks').performance;
const start = performance.now();
//some code to measure
const end = performance.now();
console.log(`Executing time:${end - start} milliseconds`);
