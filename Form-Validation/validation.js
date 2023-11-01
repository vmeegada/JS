/*//lecture -32
const form =document.getElementById("form");
//console.log(form);
const uname =document.getElementById("uname");
//console.dir(uname)//-->value=""
const email =document.getElementById("email");
const password =document.getElementById("password");
const cpassword =document.getElementById("cpassword");
const tandc =document.getElementById("tc")
//  //store values true or false -->turn next page
let isvalidname=false;
let isvalidemail=false;
let isvalidpassword=false;
let isvalidcpassword=false;
let isvalidtccheck=false;


//`in  the form we have submit button
//submit event(se) -->when clicked the submit button se moniter that process
//if we hvae to do any  action for particular se we add event( by addint html or script)
//form has a sumit ,reset ,change are then 
//preventDefault -->is wait for all bolcks are filled later give answer
form.addEventListener("submit",(e)=>
{
    //console.log(e);//--->event name
    e.preventDefault();
    validation()
})
 
//you want to check every character in the any  particular field input we use "keydown"
//for ex:- take  username 



function validation()
 {
  let nameValue=uname.value.trim();
  let emailValue=email.value.trim();
  let passwordValue=password.value.trim();
  let cpasswordValue=cpassword.value.trim();
  //let tandcValue=tc.value.trim();
  //store values true or false -->turn next page
  isvalidname=false;
  isvalidemail=false;
  isvalidpassword=false;
  isvalidcpassword=false;
  isvalidtccheck=false;

  
  
  //user name check
  if(nameValue === "")
  {
    setError(uname,"user can't be empty")
 }
 else if(nameValue.length<3)
 {
    setError(uname,"user name should be minimum 3 character")
 }
 else{
    setsuccess(uname);
    isvalidname=true;
 }
 
 
 
 
 //email check
  if(emailValue=== "")
  {
    setError(email,"email can't be empty")
 }
 else if(!emailCheck(emailValue))
 {
    setError(email,"Enter valid email id")
 }
 else{
    setsuccess(email);
    isvalidemail=true
 }
   

 
 
 //password check
 if(passwordValue === "")
 {
   setError(password,"password can't be empty")
}
else if(passwordValue.length<8)
{
   setError(password,"password should be minimum 8 character")
}
else{
   setsuccess(password);
   isvalidpassword=true
}
  



//conformpassword check
 if(cpasswordValue=== "")
 {
   setError(cpassword,"password can't be empty")
  }
else if(cpasswordValue !== passwordValue)
{
   setError(cpassword,"password doesn't match ")
}
else{
   setsuccess(cpassword);
   isvalidcpassword=true
}



//terms and condition check
if(!tandc.checked)
{
    setError(tc,"cick on agree terms and conditions")
}
else{
    setsuccess(tc);
    isvalidtccheck=true
   }

   if(isvalidname && isvalidemail && isvalidpassword && isvalidcpassword && isvalidtccheck)
   {
     form.submit()
   }
 
 
 
   function setError(input ,message)
 {  //input.parentElement means <div class="field"> userrname div</div>
     let parent=input.parentElement;
     let small=parent.querySelector("small")
     small.innerText = message;
     parent.classList.add('error')
     parent.classList.remove('success')
 }
 
 
 
 function setsuccess(input)
 {  //input.parentElement means <div class="field"> userrname div</div>
     let parent=input.parentElement;
     parent.classList.add('success')
     parent.classList.remove('error')
 }



 function emailCheck(input)
 {
    let emailReg =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let valid =emailReg.test(input);
    console.log(valid);
    return valid
 }
 }

*/
//lecture-33 for samll modification
const form =document.getElementById("form");
const uname =document.getElementById("uname");
const email =document.getElementById("email");
const password =document.getElementById("password");
const cpassword =document.getElementById("cpassword");
const tandc =document.getElementById("tc")
//  //store values true or false -->turn next page
let isvalidname=false;
let isvalidemail=false;
let isvalidpassword=false;
let isvalidcpassword=false;
let isvalidtccheck=false;
//you want to check every character in the any  particular field input we use "keydown" and "keyup"
//keyup-->after enter all charcters its checked(abc)
//keydown-->before enter chacter its checked (ex:-abcd)
//for ex:- take  username 
uname.addEventListener('keyup',checkUserName);
email.addEventListener('keydown',checkEmail);


form.addEventListener("submit",(e)=>
{
    //console.log(e);//--->event name
    e.preventDefault();
    validation()
})
function validation()
 {
   let nameValue=uname.value.trim();
  let emailValue=email.value.trim();
  let passwordValue=password.value.trim();
  let cpasswordValue=cpassword.value.trim();
  
   isvalidname=false;
  isvalidemail=false;
  isvalidpassword=false;
  isvalidcpassword=false;
  isvalidtccheck=false;
  //uname
  checkUserName()
  //email
  checkEmail()
  //password check
  if(passwordValue === "")
  {
    setError(password,"password can't be empty")
 }
 else if(passwordValue.length<8)
 {
    setError(password,"password should be minimum 8 character")
 }
 else{
    setsuccess(password);
    isvalidpassword=true
 }
   
 
 
 
 //conformpassword check
  if(cpasswordValue=== "")
  {
    setError(cpassword,"password can't be empty")
   }
 else if(cpasswordValue !== passwordValue)
 {
    setError(cpassword,"password doesn't match ")
 }
 else{
    setsuccess(cpassword);
    isvalidcpassword=true
 }
 
 
 
 //terms and condition check
 if(!tandc.checked)
 {
     setError(tc,"cick on agree terms and conditions")
 }
 else{
     setsuccess(tc);
     isvalidtccheck=true
    }
 
    if(isvalidname && isvalidemail && isvalidpassword && isvalidcpassword && isvalidtccheck)
    {
      form.submit()
    }
  
 }
 function checkUserName()
 {
   let nameValue=uname.value.trim();
   if(nameValue === "")
   {
     setError(uname,"user can't be empty")
  }
  else if(nameValue.length<3)
  {
     setError(uname,"user name should be minimum 3 character")
  }
  else{
   setsuccess(uname);
     isvalidname=true;
  }
  


 }
 function checkEmail(){
   let emailValue=email.value.trim();
   if(emailValue=== "")
   {
     setError(email,"email can't be empty")
  }
  else if(!emailCheck(emailValue))
  {
     setError(email,"Enter valid email id")
  }
  else{
     setsuccess(email);
     isvalidemail=true
  }
    
 
}
 
 
 function checktc(){
   if(!tandc.checked)
{
    setError(tc,"cick on agree terms and conditions")
}
else{
    setsuccess(tc);
    isvalidtccheck=true
   }
 
   }
 
 function setError(input ,message)
 {  //input.parentt=input.parentElement;
   let parent=input.parentElement;
     let small=parent.querySelector("small")
     small.innerText = message;
     parent.classList.add('error')
     parent.classList.remove('success')
 }
 
 
 
 function setsuccess(input)
 {  //input.parentElement means <div class="field"> userrname div</div>
     let parent=input.parentElement;
     parent.classList.add('success')
     parent.classList.remove('error')
 }



 function emailCheck(input)
 {
    let emailReg =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let valid =emailReg.test(input);
    console.log(valid);
    return valid
 }
