const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
async function emailValidationApi(){
  try{ return await fetch(`https://api.eva.pingutil.com/email?email=${inputEmail.value}`, requestOptions)
    .then(response => response.text())
}
catch(err){
}}
function  reactionToEmailValidation(){
emailValidationApi().then(res=>{console.log(res)
if (res.webmail==true || res.deliverable==true){
    return true
}
return false
})
}
function printingUserPage(){
    if(reactionToEmailValidation==true){
        
    }
    return alert("email isn't valid")
}
