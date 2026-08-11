/*class BankAccount{
    #balance = 0;

    constructor(owner){
      this.owner = owner; 
    }

    deposit(amount){
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }


}

const myAccount = new BankAccount("Satya");
myAccount.deposit(100000);
console.log(myAccount.getBalance());
console.log(`The balance is: ${myAccount.getBalance()}`);*/

class Animal{
    construtor(name){
        this.name = Dog;
    }
    eat() {
        console.log(`${this.name} eats leaves.`);
    }
}

class Dog extends Animal{
    bark() {
        console.log("bow! bow!");
    }
}

const MyDog= new Dog("Chitti");
MyDog.eat();
MyDog.bark();


