let arr = [1, 2, 4,5,3];
arr.push(4);
console.log(arr.pop());
console.log(arr.shift());
arr.unshift(9);
console.log(arr);

let newArr = arr.slice(1, 3);
newArr[0]=8;
console.log(newArr , arr);
arr.splice(1,2,0,7);
console.log(arr)

arr.forEach(num => console.log(num));
let newArr1 = arr.map(num => Math.floor(num / 2));
console.log(newArr1);

const even = arr.filter(num => num % 2 === 0);
console.log(even);

arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a,b)=>(b-a));
console.log(arr);

console.log(arr.find(num => (num/5==0)));

console.log(arr.filter((num,i,array) => array.indexOf(num)==i));

console.log(arr.includes(5));

let str1 = " Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result);

console.log(result.replace("Hello"," hi"));

console.log(result.trim());

const txt =document.getElementById('txtField');
const disp=document.getElementsByClassName('display')[0];
const submit=document.getElementById('btnSubmit');
submit.addEventListener('click',(event)=> {
    event.preventDefault();
    disp.innerHTML= `<p> ${txt.value.toUpperCase()}</p>`;})



let arr1=[1,2,4,5,6,7,8];
let arr2=[2,3,4,5,7,1,2];
let sum1= arr1.reduce((accumulator,current_val)=> accumulator+current_val,0);
let sum2= arr2.reduce((accumulator,current_val) => accumulator+current_val,sum1);

console.log("sum1:",sum1);
console.log("sum2:",sum2);
sum1=0;
arr3=[...arr1 ,...arr2];
sum1= arr3.reduce((accumulator,current_val)=> accumulator+current_val,0);
console.log("sum1:",sum1);


