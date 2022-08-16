document.getElementById('deposit-btn').addEventListener('click', function(){
    //Get the deposit field area
    const depositField = document.getElementById('desopit-field');
    //Get the New Deposit amount
    const newDeposit = depositField.value;
    //Convert the new deposit amount from string to float
    const newDepositAmount = parseFloat(newDeposit);
    //Clear the input field after deposit
    depositField.value = '';

    //Error handler for invalid input or less than amount 0
    if(isNaN(newDepositAmount) || newDepositAmount <= 0){
        alert('Please input Valid Amount');
        return;
    }

    //Get the current deposit balance placeholder
    const depositPlaceholder  = document.getElementById('deposit-amount');
    //Get the current deposit amount
    const currentDeposit = depositPlaceholder.innerText;
    //Convert the current deposit amount from string to float
    const currentDepositAmount = parseFloat(currentDeposit);
    //Calculate the Total Deposit amount
    const totalDepositAmount = currentDepositAmount + newDepositAmount;

    //Set the total deposit amount to the deposit placeholder
    depositPlaceholder.innerText = totalDepositAmount;


    //Now add the New deposit amount to the main balance
    //Get the main balance placeholder
    const mainBalancePlaceholder = document.getElementById('balance-amount');
    //Get the current main balance amount
    const currentBalance = mainBalancePlaceholder.innerText;
    //Convert current main balance from string to float
    const currentBalanceAmount = parseFloat(currentBalance);

    //Calculate the total main balance after deposit
    const updatedMainBalance = currentBalanceAmount + newDepositAmount;

    //Set the updated main balance to it's placeholder
    mainBalancePlaceholder.innerText = updatedMainBalance;
})