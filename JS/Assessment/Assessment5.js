// 5. Arrays
// Objective: Test understanding of arrays, array methods, and iteration.
// Create an array with at least 5 different numbers. Write a function to find the maximum and minimum numbers in the array.
// Write a function that removes duplicates from an array of numbers (e.g., [1, 2, 2, 3, 4, 4, 5] should return [1, 2, 3, 4, 5]).
// Implement a function that returns the sum of all odd numbers in an array.

const array1 = [2,7,9.4,12,5];
maxMin(array1);

function maxMin(array2)
{
//    const min= Math.min(...array2);
//     console.log("Minimum Value : "+min);
//     const max =Math.max(...array2);
//     console.log("Maximum value : "+max);
    let max=array2[0],min=array2[0];
    for (i=1;i<array2.length;i++)
    {
        // if(array2[i]>max)
        // {
        //     max=array2[i];
        // }
        // if(array2[i]<min)
        // {
        //     min=array2[i];
        // }

        arr3=array2.sort();
        min,max=arr3[0],arr3[arr3.length-1];

    }
    console.log("Max value :"+max,`\nMin value : ${min} ` );
}



function duplicate(arr2)
{
    // for (i=0;i<arr2.length;i++)
    // {
    //     for(j=i+1;j<arr2.length;j++)
    //     {
    //         if(arr2[j]==arr2[i])
    //         {
    //             // arr2.splice(j,1);
    //             arr2[j]='dupes';
    //         }
    //     }
    // }
    
    // arr_set=new Set(arr2);
    // arr2=[...arr_set];


    arr2.filter(num=>arr2.includes(num))

    arr2.sort();
    let prev=arr2[0];
    for(i=1;i<arr2.length;i++)
    {
        if (arr2[i]==prev )
        {
            prev=arr2[i];
            arr2.splice(i-1,1);
            i--;
        }
        else{
            prev=arr2[i];
        }
        
    }
    
    console.log(arr2);
    // console.log(arr2.filter(num=>num!='dupes'));
}
const arr1=[3,4,1,1,4,7,8,1,9];
duplicate(arr1);



function oddSum(arr)
{
    let sum=0;
    // let oddArray=[];
    // for(i=0;i<arr.length;i++)
    // {
    //     if(arr[i]%2!=0)
    //     {
    //         sum+=arr[i];
    //         oddArray.push(arr[i]);
    //     }
    // }
    // console.log(`sum of ${oddArray} : ${sum}`);

    sum= arr.reduce((accumalator,i)=>{return i%2!=0 ? accumalator+i : accumalator+0},0);
    console.log(`sum  : ${sum}`);

}
const sumArray = [1,4,5,7,8,10,2,8,9,5];
oddSum(sumArray);

