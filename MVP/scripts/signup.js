
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
        

        let signup_request = await fetchWrap('/signup','POST', creds);
        console.log(signup_request);
        if(signup_request.success){
            setTimeout( () => {
                location.href = '../index.html';
                return;
            }, 500)
        }
        else{
            document.getElementById('signupIssues').style.display = "inherit";
            document.getElementById('issuespan').innerHTML = JSON.stringify(signup_request.issues);
            return;
        }
    }

}