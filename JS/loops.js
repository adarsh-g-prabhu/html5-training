const arr1=[1,4,0,2,3,7];
for (item of arr1)
{
    console.log(item);
}

console.log("print numbers");
for (var i=1;i<=10;i++)
{
    console.log(i);
    if(i==3)
    {
        continue;
    }
    if(i==8)
    {
        break;
    }
}

console.log("even numbers till 10 \n");
var i=1;
do
{
    if(i%2==0)
       {
        console.log(i);
       } 
       i+=1;
}while(i<=10);


