document.getElementById("button-submit").addEventListener('click',function(){
    const emailField=document.getElementById('user-feild');
    const email=emailField.value;
  
    const passField=document.getElementById('user-pass');
    const pass=passField.value;
    console.log(email,pass)
    if(email=="badon@don.com" && pass=="12345"){
     window.location.href="bank.html"
    }else{
        alert('invalid user')
    }
})