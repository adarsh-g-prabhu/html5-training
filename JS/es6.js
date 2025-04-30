let first=5;
const second=4;
var third=8;

const sum = ()=> first+second+third;
(() => {
    console.log(first*second*third);
})() ;

console.log(sum());

setTimeout(()=>console.log("Hai world"),3000);

console.log("string text line 1\n" + "string text line 2");
console.log(`string text line 1
string text line 2`);

const tags= mytag`hello world`;

function mytag(strings)
{
    // console.log(strings);
    return(strings[0].toUpperCase());
}
console.log(tags);


function numSum(...nums) {
    let sums = 0;
    console.log(nums.length);
    for (const i of nums) {
      sums += i;
    }
    return sums;
  }
  
  console.log(numSum(1,6,9,4,67));


const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); 
console.log(yellow);
console.log(green); 


const hi=[...foo,"four","five"];
console.log(hi);


function* Generator() {
  yield "Hello";  
  yield "World";  
}

const gen = Generator();
console.log(gen.next().value);  
console.log(gen.next().value); 

export {foo};
