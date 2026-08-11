//fuction 
function sayHello(){
    console.log("Hi Satya!!");
}
sayHello();
//function declaration
Leader("Satya!");

function Leader(name){
    console.log("Hello" + name);
}


//Function Expression
const addNumbers = function(x, y){
    return x + y;
};
console.log(addNumbers(5, 15));

//Arrow Functions
const divide =(a, b) => {
    return a / b;
}
console.log(divide(5,10));
//Anonymouys Functions
const show = function(name){
    return "Hello, " + name + "!";
};
console.log(show("Satya"));





