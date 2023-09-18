
function validateForm(){
    // console.log('y');

    let name = document.contactForm.name.value;
   
    if(name === ''){
        document.getElementById("nameErr").innerHTML = 'plase enter your name'
    } else{
        let nameREg = /^[a-zA-Z ]{2,30}$/;

        if(nameREg.test(name)){
            document.getElementById("nameErr").innerHTML = ''
        } else{
            document.getElementById("nameErr").innerHTML = 'plase enter valide name'
        }
       
    }
    console.log(name);

    let email = document.contactForm.email.value;
    if(email === ''){
        document.getElementById("emailErr").innerHTML = 'plase enter your email'
    } else{
        let emailReg =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(emailReg.test(email)){
            document.getElementById("emailErr").innerHTML = ''
        }else{
            document.getElementById("emailErr").innerHTML = 'plase enter valide email'
        }

       
    }
    console.log(email);

    let mobile = document.contactForm.mobile.value;
    if(mobile === ''){
        document.getElementById("mobileErr").innerHTML = 'plase enter your mobile number'
    } else{
        let mobileReg = ^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$

        if(mobileReg.test(mobile)){
            document.getElementById("mobileErr").innerHTML = ''
        }else{
            document.getElementById("mobileErr").innerHTML = 'plase enter valide mobile number'
        }
        
    }
    console.log(mobile);

    let select = document.contactForm.country.value;
    if(select === select){
        document.getElementById("countryErr").innerHTML = 'plase select country'
    } else{
        document.getElementById("countryErr").innerHTML = ''
    }
    console.log(select);
    return false;
}