const names = "kevin";
const greeting= `greetings, ${names}`;
console.log(greeting);

//concat
const string1="Hello";
const string2=", :> !!!";
console.log(`${string1} world${string2} ${(50*2)}%`);

console.log(string1+" World"+string2);

console.log('"The boy is riding a \' bicycle. "');
num=80;
num=String(num)
console.log(num+" is a "+typeof(num));

//string methods
strings="Good Morning"
console.log(strings + " length : "+strings.length);
console.log(strings[3]);
console.log(strings[strings.length-1]);

if (strings.includes("orn"))
{
    console.log(true);
}
else
{ 
    console.log(false)
}
console.log(strings.startsWith("Good"));
console.log(strings.endsWith("ings"));


const sentence="Dynamic scripting with JavaScript with html"
console.log(sentence.indexOf("with"));

firstwith=sentence.indexOf("with");
secondwith=sentence.indexOf("with",firstwith+1);
console.log(secondwith);
console.log(sentence.slice(2,8));
console.log(sentence.slice(4));

console.log(strings.toLowerCase());
console.log(strings.toUpperCase());
console.log(sentence.replace("i", "e"));