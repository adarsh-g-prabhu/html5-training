function person(name,age)
{
    this.name=name;
    this.age=age;
    this.greetings=function(){
        console.log("my name is "+this.name+" and i am "+this.age+"years old");
    };
}

const persons= new person("rahul",19);
persons.greetings();

const newPersons= persons;
newPersons.age=30;
persons.greetings();
person.prototype.age=22;

const persons2= new person("babu");

persons2.greetings();

persons.interest="sports";
console.log(persons.interest);

let text ="";
for (let [person, value] of Object.entries(persons)) {
    text += person + ": " + value ;
  }
  console.log(text)
  

delete persons.interest;
console.log(persons.interest);



