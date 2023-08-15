//deposit method
document.getElementById('deposit-btn').addEventListener('click', function () {
    //deposit input
    const depositInput = document.getElementById('deposit-input');
    const userDepositInputString = depositInput.value;
    const userDepositInput = parseFloat(userDepositInputString);
    depositInput.value = '';

    //previous deposits
    const previousDepositElement = document.getElementById('previous-deposit');
    const previousDeposit = previousDepositElement.innerText;
    const userPreviousDeposit = parseFloat(previousDeposit);

    //balance
    const userBalanceElement = document.getElementById('balance');
    const userBalanceSting = userBalanceElement.innerText;
    const userBalance = parseFloat(userBalanceSting);

    if (isNaN(userDepositInput)) {
        alert('please write a number')
        return;
    }

    //deposit sum method
    const presentDeposit = userDepositInput + userPreviousDeposit;
    previousDepositElement.innerHTML = presentDeposit;

    //balance sum method
    const presentBalance = userDepositInput + userBalance;
    userBalanceElement.innerText = presentBalance;
});

//withdraw method
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const userWithdrawInputString = withdrawInput.value;
    const userWithdrawInput = parseFloat(userWithdrawInputString);
    withdrawInput.value = '';


    //previous deposits
    const previousWithdrawElement = document.getElementById('withdraw');
    const previousWithdraw = previousWithdrawElement.innerText;
    const userPreviousWithdraw = parseFloat(previousWithdraw);

    //balance
    const userBalanceElement = document.getElementById('balance');
    const userBalanceSting = userBalanceElement.innerText;
    const userBalance = parseFloat(userBalanceSting);

    if (userWithdrawInput > userBalance) {
        alert('tor kase atu taka nai  ')
        return;
    }
    else if (isNaN(userWithdrawInput)) {
        alert('please write a number')
        return;
    }

    //deposit sum method
    const presentWithdraw = userWithdrawInput + userPreviousWithdraw;
    previousWithdrawElement.innerHTML = presentWithdraw;

    //balance sum method
    const presentBalance = userBalance - userWithdrawInput;
    userBalanceElement.innerText = presentBalance;

})
