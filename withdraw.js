//add event handaler withdraw button

document.getElementById('button-withdraw').addEventListener('click',function(){
   //get the withdraw amount from the withdrow field
   const withdrawFeild=document.getElementById('user-feild');
   const newWithdrawAmountString=withdrawFeild.value;

   //make sure the value is convert in number
   const newWithdrawAmount=parseFloat(newWithdrawAmountString);

//get prev withdraw amount

    const WithdrawAmount= document.getElementById('withdraw-total')
    const prevWithdrawAmountString=WithdrawAmount.innerText;
    const prevWithdrawAmount=parseFloat(prevWithdrawAmountString);

    //calculat total withdraw amount
    const currentWithdrawTotal=prevWithdrawAmount + newWithdrawAmount;
    WithdrawAmount.innerText=currentWithdrawTotal;
    //balance total
    const balanceTotal=document.getElementById('balance-total');
    const prevBalanceTotalString=balanceTotal.innerText;
    const prevBalanceTotal=parseFloat(prevBalanceTotalString);
    //calculateNewBalance
    const calculateNewBalance= prevBalanceTotal - newWithdrawAmount;
            balanceTotal.innerText=calculateNewBalance;
    withdrawFeild.value=''
})