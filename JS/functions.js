function alerting()
{
    // alert("hello world");
    console.log("hello world");
}

alerting();

function greetings(name="dude")
{
    console.log(`greetings ${name}`);

}

greetings('manuel');
greetings();

//anonymous func

(function () { console.log("this is anonymous function");}) ();



hello = () => {
    return "Hello World!";
  }
  console.log(hello);

var globe=5;
function sample(){
    var globe = 10;
    const x=4;
    console.log(`inside function : ${globe}`);
}
sample();
console.log(`outside function : ${globe}`);
// console.log(x);

//returning and multi arguments.
function replacement(text,word1,word2){
    return(text.replaceAll(word1,word2));
}
text="this is a okay okay week"
newtext=replacement(text,'okay','happy');
console.log(newtext);

