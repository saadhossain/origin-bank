document.getElementById('login-btn').addEventListener('click', function(){
    //Get the email field 
    const emailField = document.getElementById('email-field');
    //Get the email address from the email input field
    const emailFieldText = emailField.value;
    //Get the password field
    const passField = document.getElementById('pass-field');
    //Get the password from the password input field
    const passFieldText = passField.value;

    //Condition to login confirmation
    if(emailFieldText === 'admin@origin.com' && passFieldText === 'Origin'){
        //Redirect the user to the dashboard page if username and password is correct
        window.location.href = 'dashboard.html';
    }
    else{
        alert('Please Enter Valid user and Password');
    }
}
)