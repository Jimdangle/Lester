
function validatePass(){
    let pass = document.getElementById('pass');
    let rePass = document.getElementById('rePass');
    //console.log(rePass.value);
    if ( pass.value === rePass.value ){
        rePass.setAttribute('class', 'matchedPass');
        document.getElementById('badPasswordMatch').style.display = "none";
        return true;
    }
    else{
        rePass.setAttribute('class', 'nonMatchedPass');
        document.getElementById('badPasswordMatch').style.display = "inherit";
        return false;
    }
}


async function signupRequest(){
    if(validatePass()){
        let email = document.getElementById('email').value;
        let pass  = document.getElementById('pass').value;
        let vendor = document.getElementById('userTypeList').value;
        vendor = (vendor === "Vendor") ? 1 : 0;
        console.log(vendor);

        let creds = {email:email,pass:pass,vendor:vendor};
        console.log(creds);

        let signup_request = fetchWrap('/signup','POST', creds);

        if(signup_request.success){
            alert('Created new account');
            return;
        }
        else{
            alert('Couldnt make account');
            return;
        }
    }

}