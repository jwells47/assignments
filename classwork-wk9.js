//classwork-wk9
console.log("hello");
var person = function(fname) {
  this.firstname = fname; 
    
};
person.prototype.sayhello = function() {
    console.log( "Hello I am a " + this.firstname);
      
//    console.log('instance created');
};
//var person1 = new person(' seminole ');
//var person2 = new person(' gator ');
//var helloFunction = person1.sayhello;
//person1.firstname="John";
//console.log(person1.firstname);
//console.log('person1 is' + person1.firstname);
//console.log('person2 is' + person2.firstname);

//person1.sayhello();
//person2.sayhello();
//helloFunction();

//onsole.log(helloFunction === person.prototype.sayhello);
//onsole.log(helloFunction === person.sayhello);

//helloFunction.call(person1);

person.prototype.walk = function(){
    console.log("i am walking!");
};

function student(firstname, subject) {
    person.call(this, firstname);
    
   this.subject = subject;
};

student.prototype = Object.create(person.prototype);

student.prototype.constructor = student;

student.prototype.sayhello = function(){
    console.log(" Hello, I'm " + this.firstname + " I am studying "+ this.subject +".");
    
};

student.prototype.sayGoodBye = function() {
    console.log("GoodBye");
};

var student1 = new student("Janet", " Applied Physics");
student1.sayhello();
student1.walk();
student1.sayGoodBye();