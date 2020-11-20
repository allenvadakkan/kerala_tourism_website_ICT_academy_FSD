var flag1=1;
var flag2=1;
var flag3=1;
var flag4=1;
var flag5=1;
var flag6=1;





var x=document.getElementById("msg");

let regexp = /^([0-9]{3})([-. ])?([0-9]{3})([-. ])?([0-9]{4})$/;
let reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})+(.[a-z]{2,3})?$/;

function validate()
{
    var eme=document.getElementById("ema").value;
    var pwd=document.getElementById("pwd");
    var x=document.getElementById("msg");
    if(eme==""&&pwd.value=="")
    {
        x.innerText="Fields are empty !!!";
        return false;
    }
    else if(pwd.value=="")
    {
        x.innerText="Please Enter your Password !!!";
        return false;
    }
    else if(eme=="")
    {
        x.innerText="Please Enter your Email !!!";
        return false;
    }
    else if(!(reg.test(eme)))
    {
        x.innerText="Invalid email !!!";
        return false;
    }

    else
    {
        x.innerText="";
        return true;
    }
}


function svalidate()
{
    firstname();
    secondname();
    emailv();
    phoneno();
    check_pass();

    if(flag1==1||flag2==1||flag3==1||flag5==1||flag6==1||flag4==1)
    {
        return false;
    }
    else
    {
        return true;
    }

    
}


function firstname(){
    var first=document.getElementById("first");
    if(first.value=="")
{
    fnn.innerText="Field is empty !!!";
    flag1=1;

}
else
{
    fnn.innerText="";
    flag1=0;
}

}
function secondname(){
    var last=document.getElementById("last");
    if(last.value=="")
{
    lnn.innerText="Field is empty !!!";
    flag2=1;
}
else
{
    lnn.innerText="";
    flag2=0;
}

}
function emailv(){
    var ema=document.getElementById("emai").value;
    if (ema==""){
        eml.innerText="Field is empty !!!";
        flag3=1;
    }
    else if(!(reg.test(ema)))
    {
        eml.innerText="Wrong email format!!!";
        flag3=1;
    }
    else
    {
        eml.innerText="";
        flag3=0;
    }

}

function password2(){
    var pwd1=document.getElementById("pwd1").value;
    var pwd2=document.getElementById("pwd2").value;
    
    if((pwd1.localeCompare(pwd2)))
    {
        
        pw2.innerText="Passwords dont match !!!";
        flag5=1;
      
    }
    else
    {
        pw2.innerText="";
        flag5=0;
    }
}

function phoneno(){
    var ph=document.getElementById("ph").value;
    
if(!(regexp.test(ph)))
{

    tl.innerText="phone number invalid";
    flag6=1;
    
}
else
{
    tl.innerText= "";
    flag6=0;
}


    

}
















function check_pass()
{
 var val=document.getElementById("pwd1").value;
 var meter=document.getElementById("meter");
 var no=0;
 if(val!="")
 
 {
  if(val.length<=8)no=1;

  if(val.length>8 && (val.match(/[a-z]/) || val.match(/\d+/) || val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))no=2;

  if(val.length>8 && ((val.match(/[a-z]/) && val.match(/\d+/)) || (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))no=3;

  if(val.length>8 && val.match(/[a-z]/) && val.match(/\d+/) && val.match(/[A-Z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))no=4;

  if(no==1)
  {
   meter.setAttribute("style","background-color:rgb(219, 20, 20)");
   document.getElementById("pass_type").innerHTML="Very Weak";
   flag4=1;
   pw1.innerText=" Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
   
  }

  if(no==2)
  {
    meter.setAttribute("style","background-color:#F5BCA9");
   document.getElementById("pass_type").innerHTML="Weak ";
   flag4=1;
   pw1.innerText=" Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
  }

  if(no==3)
  {
    meter.setAttribute("style","background-color:#FF8000");
   document.getElementById("pass_type").innerHTML="Good";
   flag4=1;
   pw1.innerText=" Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
  }

  if(no==4)
  {
    meter.setAttribute("style","background-color:#00FF40");
    document.getElementById("pass_type").innerHTML="Strong";   
    flag4=0;
    pw1.innerText="";
  }
 }

 else
 {
    meter.setAttribute("style","background-color:# rgb(255, 255, 255);");
    document.getElementById("pass_type").innerHTML="Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
    pw1.innerHTML="Field is empty !!!";
 }
}


