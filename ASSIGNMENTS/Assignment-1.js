//there are 5 types of inheritance in js
//=====SINGLE INHERITANCE=====//
class Satya{
    constructor(name){
        this.name=name;
    }
    talk(){
        console.log("hello my name is Satya!");
    }
}

class Sravan extends Satya{
    friendTalk(){
        console.log("hello Satya i am your friend");
    }  
}


//=====MULTI-LEVEL INHERITANCE=====//
class Srikar extends Satya{
    friendlaughs(){
        console.log("hello satya i am your friend and i am your motivation");
}
}

//=====HIERARCHICAL INHERITANCE=====//
class Abhishek extends Satya{
    friendsmiles(){
        console.log("hello satya i am your friend that supports you always");
    }
}

//=====MULTIPLE INHERTANCE=====//
const Canread = Base => class extends Base{
    read(){
        console.log("i am reading");
    }
};

const Canwrite = Base => class extends Base{
    write(){
        console.log("i am writing");
    }
};

const Canshow = Base => class extends Base{
    show(){
        console.log("i am showing my skills");
    }
};

class Harsha extends Canread(Canwrite(Canshow(Satya))){
    expertSkills(){
        console.log("i am an expert");
    }
}

//=====HYBRID INHERITANCE=====//
console.log("-----Single-----");
const sr = new Sravan("Somya");
sr.talk();
sr.friendTalk();

console.log("-----Multi-Level-----");
const sk = new Srikar("Dharani");
sk.talk();
sk.friendlaughs();

console.log("-----Hierarchical-----");
const ab = new Abhishek("Srinivas");
ab.talk();
ab.friendsmiles();

console.log("-----Multiple-----");
const hr = new Harsha("Surya");
hr.talk();

console.log("-----Hybrid-----");
const hy = new Harsha("Abhishek");
hy.talk();
