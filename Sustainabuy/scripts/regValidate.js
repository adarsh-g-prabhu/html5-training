const form=document.querySelector('form');
form.addEventListener('submit',
(event)=>{event.preventDefault();
validate(event);})
function validate(event)
{
    const username=document.getElementById('username').value;
    console.log(username);
    const password=document.getElementById('password').value;
    const firstName=document.getElementById('first_name').value;
    const lastName=document.getElementById('last_name').value;
    const gender=document.querySelector('input[name="gender"]:checked');
    const dob=document.getElementById('dob').value;
    const phone=document.getElementById('phone').value;
    const confirmPass=document.getElementById('confirm_password').value;
    const address=document.getElementById('address').value;


    
   

    if(username.trim()=="")
    {   

        alert("username/email should not be blank");
        return false;
        
    }
    const patternEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!patternEmail.test(username))
    {
        alert("the email pattern is not correct");
        return false;
    }
    if(password.trim()=="")
    {   
        
        alert("password should not be blank");
        return false;
        
    }
    const passPattern=/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d$!@%&]{8,}$/;
    if(!passPattern.test(password))
    {
        alert("Password Should contain atleast 8 characters,1 uppercase,1 lowercase. Only numbers,characters and special characters allowed");
        return false;
    }

    
    if(firstName.trim()=="")
        {   
    
            alert("first name should not be blank");
            return false;
            
        }
    
    if(lastName.trim()=="")
            {   
                alert("last name should not be blank");
                return false;   
            }
    
    if(!gender)
        {
            alert("please select  gender");
            return false;
        }
       
    const phonePattern=/^\d{10}$/;
    
    if(!phonePattern.test(phone))
    {
        alert("Enter valid Mobile number");
        return false;
    }
    
    
    if(address.trim()=="")
        {   
    
            alert("address should not be blank");
            return false;
        }
    
    if(confirmPass.trim()=="")
        {   
    
            alert("confirm password should not be blank");
            return false;
            
        }
    if(!passPattern.test(confirmPass))
        {
            alert("Password Should contain atleast 8 characters,1 uppercase,1 lowercase. Only numbers,characters and special characters allowed");
            return false;
        }
    if(password!=confirmPass)
    {
        alert("confirm password should match the password");
        return false;
    }


    if(dob.trim()=='')
    {
        alert('please select date of birth');
        return false;
    }

    const userDetails = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        gender: gender.value,
        dob: dob,
        phone: phone,
        address: address,};

    console.log(userDetails);
    jsonData=JSON.stringify(userDetails)
    localStorage.setItem('userDetails', jsonData);
    alert("Registration successful.");
    sessionStorage.setItem('username',username);
    window.location.href = "./index.html";

}