var car={ color:'red' , price:'5000' , type:'sedan'};
console.log(car.price);

const person={
    names:["abhi","salim","charles"], 
    age: 20, greetings: function(){ return("Good morning")},favourite: {
        food: "Biriyani",
        sport:"cricket"
    }
};

console.log(person.greetings());
console.log(person.favourite.sport);
console.log(person["favourite"]["food"]);

function dude(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
const kevin= new dude("kevin");
kevin.introduceSelf();

class bike{
    name;

    constructor(name)
    {
        this.name=name;
    }
    bikeIs() {
        return(this.name);
        
    }
}
const ninja=new bike("ninja");
console.log(`my bike is ${ninja.bikeIs()}`);

class A{
    age;
    #name;
    constructor(name,age)
    {
        this.#name=name;
        this.age=age;
    }
    display(){
        console.log(this.age , this.#name)
    }
}
class B extends A{
    display2()
    {
        console.log(this.name);
        console.log(this.age);

    }
}
// const jomy=new A();
const travis=new B("jomy",19);
travis.display2();
travis.display();
