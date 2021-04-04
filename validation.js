
let error= document.getElementById("error");

function emailvalidate(){
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(email.value)){
      
        error.innerHTML="Valid";
        error.style.color="blue";
        return true;
    }
    else{
        error.innerHTML="Invalid Format";
        error.style.color="red";
        return false;
    }
}
function phonenumbervalidate()
{
  let phonenox = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phonenox.test(phoneno.value))
        {
            error.innerHTML="Valid";
            error.style.color="blue";
      return true;
        }
      else
        {
        error.innerHTML="Invalid Format";
        error.style.color="red";
        return false;
        }
}
function passwordvalidate(){
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (reg.test(pwd.value)){
        
        error.innerHTML="Valid";
        error.style.color="blue";
        return true;
    }
    else{
        error.innerHTML="Invalid Format";
        error.style.color="red";
        return false;
    }
}
