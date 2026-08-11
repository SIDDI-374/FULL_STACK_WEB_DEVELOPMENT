// greetings.js (Local Module)
function sayHello(name) {
    return `HI ${name}, Welcome to Node.js!`;
}

function sayBye(name) {
    return `lets meet again ${name}!`;
}


module.exports = {
    sayHello,
    sayBye
};