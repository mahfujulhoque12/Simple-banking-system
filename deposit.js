document.getElementById('button-deposit').addEventListener('click',function(){
  const depositFeild=document.getElementById("deposit-feild");
  const newDepositAmountString=depositFeild.value;
  const newDepositAmount=parseFloat(newDepositAmountString);

  console.log(typeof newDepositAmount)

 const dipositTotal=document.getElementById('deposit-total');
 const prevDepositTotalString=dipositTotal.innerText;
const prevDepositTotal=parseFloat(prevDepositTotalString)

 const currentDepositTotal=prevDepositTotal + newDepositAmount;
 dipositTotal.innerText=currentDepositTotal;

//step 5 : get balanc current total
const balanceTotal=document.getElementById('balance-total');
const prevBlanceTotalString=balanceTotal.innerText;
const prevBlanceTotal=parseFloat(prevBlanceTotalString);

//culcalute current total balance
const currnetBalanceTotal=prevBlanceTotal + newDepositAmount;

//set the balance total
balanceTotal.innerText=currnetBalanceTotal;


 depositFeild.value=''
})