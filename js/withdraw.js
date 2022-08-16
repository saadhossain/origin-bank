//Add event listener to the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //Get the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    //Get the withdraw amount from the input field
    const newWithdraw = withdrawField.value;
    //Convert withdraw amount from string to float
    const newWithdrawAmount = parseFloat(newWithdraw);
    //Clear the withdraw input field
    withdrawField.value = '';

    //Error handler for invalid input
    if(isNaN(newWithdrawAmount)){
        alert('Please input Valid Amount');
        return;
    }
    
    //Get the current withdraw amount placeholder
    const withdrawPlaceholder = document.getElementById('withdraw-amount');
    //Get the current withdraw amount from the withdraw placeholder
    const currentWithdraw = withdrawPlaceholder.innerText;
    //Convert current withdraw amount from string to float
    const currentWithdrawAmount = parseFloat(currentWithdraw);

    //Calculate the total withdraw amount
    const totalWithdrawAmount = currentWithdrawAmount + newWithdrawAmount;
    //Error handler, if withdraw amount is large than current balance
    /*--------------------------
    if(newWithdraw > currentBalance){
        alert('Sorry! You dont have enough money!');
        return;
    }
    -------------------------*/
    //Set the total Withdraw amount to the withdraw amount placeholder
    withdrawPlaceholder.innerText = totalWithdrawAmount;
    //Now reduce/ deduct the main balance based on withdraw amount
    //Get the main balance placeholder
    const mainBalancePlaceholder = document.getElementById('balance-amount');
    //Get the current main balance amount
    const currentBalance = mainBalancePlaceholder.innerText;
    //Convert current main balance from string to float
    const currentBalanceAmount = parseFloat(currentBalance);

    //Calculate the total main balance after deposit
    const updatedMainBalance = currentBalanceAmount - newWithdrawAmount;
    //Set the updated main balance to it's placeholder
    mainBalancePlaceholder.innerText = updatedMainBalance;
})