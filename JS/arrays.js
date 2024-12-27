const ar=[3,5,1,8,[2,3,5]];
console.log(ar.length);
const cars= new Array("bmw","benz","cadillac","porsche");
console.log(cars);
console.log(cars.join('/'));
console.log(cars.indexOf("cadillac"));
cars.push("bugatti");
console.log(cars);

cars[0]="Jeep";
console.log(cars);
console.log(cars.pop());
console.log(cars.splice(1,1,"mg"));
console.log(cars);

console.log(cars.shift());
for (items of cars)
    {
        console.log(items);
    }

cars.forEach((item,index) => {
    console.log(item , index);
    
});
const cars2=["jaguar","toyota"];
const carbrands= cars.concat(cars2);
console.log(carbrands);

var cars3 =[...cars2];
console.log(cars3);
cars3=cars2.splice();
console.log(cars3);
cars3=Array.from(cars2);
console.log(cars3);

arr2=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2);
console.table(arr2);

const str = 'The quick brown fox jumps over the lazy dog.';
const str_arr=str.split(' ');
console.log(str_arr);

console.log(carbrands.sort());
console.log(carbrands.reverse());