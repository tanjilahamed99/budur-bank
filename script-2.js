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

    //deposit sum method
    const presentDeposit = userDepositInput + userPreviousDeposit;
    previousDepositElement.innerHTML = presentDeposit;

    //balance sum method
    const presentBalance = userDepositInput + userBalance;
    userBalanceElement.innerText = presentBalance;
});

//