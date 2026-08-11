//arrays
const films= ["Eega", "Bahubali", "Chatrapati"];
console.log(films[0]);

films.push("Ranarangam");   
const last =films.pop(); 

films.unshift("V"); 
films.shift();         

films.splice(1, 1, "Blackpanther"); 
console.log(films);
//Mutator method example
let numbers = [1,2,3,4];

numbers.push('5');
console.log(numbers);

numbers.sort();
console.log(numbers);

//Accessor Method example
let section = ['a','b','c','d'];

//slicing in arrays
let dividedsection = section.slice(0, 1);
console.log(dividedsection);
console.log(section);

//joins in array into clean string
let listStudent = section.join(" and ");
console.log(listStudent);