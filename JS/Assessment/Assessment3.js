// 3. Loops
// Objective: Check understanding of loops and iteration.
// Write a function that prints numbers from 1 to 10 using a for loop.
// Modify the function to print only even numbers from 1 to 10.
// Write a while loop to calculate the factorial of a given number (e.g., 5! = 5 * 4 * 3 * 2 * 1).

function numbers(i,j)
{
    for (;i<=j;i++)
    {
        console.log(i);
    }
}
numbers(1,10);


console.log("Even numbers only:");

function evenNumbers(i,j)
{
    for (;i<=j;i++)
    {
        if(i%2==0)
        {
            console.log(i);
        }
    }
}
evenNumbers(1,10);


function factorial(Num)
{   
    var factNum=1;
    while(Num>0){
       
        factNum=factNum *Num;
        Num--;
       
    }
    return factNum;
}
const fact_num=5;
const fact = factorial(fact_num);
console.log("Factorial of ",fact_num ," : ",fact );