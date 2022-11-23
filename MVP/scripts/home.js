function badUserKickout(jwt){
    if(!jwt){
        location.href = '../index.html';
    }
    else{
        return;
    }
}

function setJWT(jwt){
    document.getElementById('jwtspan').innerHTML = jwt;
}

function logout(){
    localStorage.removeItem('foodseek-jwt');
    setTimeout(()=> {
        location.href = '../index.html';
    }, 500
    )
}


function loadHome(){
    let jwt = localStorage.getItem('foodseek-jwt');
    let user_type = localStorage.getItem('foodseek-type');
    let email = localStorage.getItem('foodseek-email');

    console.log(`user data : email:${email}, type: ${user_type}, jwt${jwt}`);

    badUserKickout(jwt);
    setJWT(jwt);

    if(user_type === '1'){
        console.log('Vendor');
        // load vendor page
        // location.href = '../vendor/home.thml'
    }
    else{
        console.log('User');
        // load user page
        // location.href = '../user/home.html'
    }

}