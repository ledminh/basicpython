document.getElementById('login_button').addEventListener("click", function(){
    document.getElementById('loginPanel').classList.add('loginPanelShow'); 
    document.getElementById('loginPanel').classList.remove('loginPanelHidden'); 
    document.getElementById('signupPanel').classList.add('signupPanelHidden'); 
    document.getElementById('signupPanel').classList.remove('signupPanelShow');
    console.log(document.getElementById('loginPanel').classList);
    console.log(document.getElementById('signupPanel').classList);
});

document.getElementById('signup_button').addEventListener("click", function(){
    document.getElementById('loginPanel').classList.add('loginPanelHidden'); 
    document.getElementById('loginPanel').classList.remove('loginPanelShow'); 
    document.getElementById('signupPanel').classList.add('signupPanelShow'); 
    document.getElementById('signupPanel').classList.remove('signupPanelHidden');

    console.log(document.getElementById('loginPanel').classList);
    console.log(document.getElementById('signupPanel').classList);
});

