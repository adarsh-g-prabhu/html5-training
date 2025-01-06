
function operations(enteredValue)
{
    var inputField= document.getElementById('inputField');
    if(inputField.value==0)
    {
        inputField.value=enteredValue;
    }
    else{
        
    inputField.value+=enteredValue;
    console.log(enteredValue);
    }
    
}

function calculate()
{   
    inputField.value= eval(inputField.value);
   
}

function allClear()
{
    // console.log("cleared");
    inputField.value=0;
}

function clearOne()
{
    if(inputField.value.length==1)
    {
        inputField.value=0;
    }
    else
    {
        inputField.value= inputField.value.substring(0,inputField.value.length-1);
    }
}
