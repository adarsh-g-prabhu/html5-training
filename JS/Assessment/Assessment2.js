// 2. Basic Operators and Conditional Statements
// Objective: Evaluate knowledge of basic operators, comparison operators, and conditional logic.
// Create a function that takes two numbers as input and returns the larger number.
// Use comparison operators to check if the number is positive, negative, or zero and return a corresponding message.
// Implement a function that checks whether a given year is a leap year or not.

function largest(num1,num2)
{
    if (num1>num2)
    {
        largestNum= num1;
    }
    else
    {
        largestNum= num2;
    }
    return(largestNum);
}
number1=71;
number2=8;
l=largest(number1,number2);
console.log(`largest among ${number1} and ${number2} is ${l}`);

function isNumber(num)
{
    if(num>0)
    {
        console.log(num+" is a postive number.");
    }
    else if(num==0)
    {
        console.log("Number is Zero");
    }
    else
    {
        console.log(num+" is negetive number");
    }
}

isNumber(-5);
isNumber(0);
isNumber(15);


function leapYear(year)
{
    if(year%4==0)
    {
        console.log(year+" is a leap year");
    }
    else
    {
        console.log(year+" is not a leap year");
    }
}
leapYear(2004);
leapYear(1995);
