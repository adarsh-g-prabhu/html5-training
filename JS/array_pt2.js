let arr=[1,2,3,4,55,44,1,1,1];

const result=arr.filter(num =>num==1);
console.log(result);


let arr2= arr.filter((val,i,array)=>array.indexOf(val)==i);
console.log(arr2);

arr=arr.map(item=>item*2);
console.log(arr);



