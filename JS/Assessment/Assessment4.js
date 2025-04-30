// 4. Functions
// Objective: Evaluate understanding of functions, return values, and parameters.
// Create a function that takes a string as input and returns it reversed.
// Implement a function that calculates the sum of all numbers in an array (e.g., [1, 2, 3, 4] should return 10).
// Write a function that checks if a number is prime or not.

function stringReverse(string1)
{   
    // let reversed="";
    // for (i=(string1.length -1);i>=0;i--)
    // {
    //     reversed+=string1[i];
    // }
    // return reversed;
    reversed=string1.split('').reverse().join('');
    return reversed
}

const string="xavier";
const reverse=stringReverse(string);
console.log(`reversed string of ${string} is  ${reverse}`);


function sumOfArray(array2)
{   
    let sum=0;
    for (i of array2)
    {
        sum+=i;
    }
    return sum;
}
array1=[1,8,3,5,11,2];
sum=sumOfArray(array1);
console.log("sum of "+array1," = ", sum);


function isPrime(num)
{   
    let flag=0;
    for(i=2;i<num;i++)
    {
        
        if(num%i==0){
            return false;
            flag=1;
        }
       
    }
    if (flag==0)
        {
            return true
        }
}

const num1=98;
if(isPrime(num1))
{
    console.log(`${num1} is prime`);
}
else
{
    console.log(`${num1} is not prime`)
}


