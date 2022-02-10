const form =document.getElementById("Signupformid");
const signupname =document.getElementById("Signupnameid");
const  signupemail=document.getElementById("Signupemailid");
const signupnumber=document.getElementById("Signupnumberid");
const signupage=document.getElementById("Signupageid");
const  signupgender=document.getElementById("Signupgenderid");
const  signuppassword=document.getElementById("Signuppasswordid");


form.addEventListener("submit",(e)=>{
     e.preventDefault();
     cheakinput()
     console.log(e);
})
   
function cheakinput()
{
       const formdata=
       {
        signupnameValue: signupname.value.trim(),
        signupemailValue: signupemail.value.trim(),
        signupnumberValue: signupnumber.value.trim(),
        signupageValue: signupage.value.trim(),
        signupgenderValue: signupgender.value.trim(),
        signuppasswordValue: signuppassword.value.trim(),
       }
        if( formdata.signupnameValue==="")
        {
            seterrorfor(signupname,"Name is Required");
        }
        else
        {
                setsuccessfor(signupname);
            }
        if( formdata.signupemailValue==="")
        {
            seterrorfor(signupemail,"Email is required");
        }
        else
        {
            setsuccessfor(signupemail);
        }
        if( formdata.signupnumberValue==="")
        {
            seterrorfor(signupnumber,"Phone Number is required");
        }
        else if(formdata.signupnumberValue.length!=10){
            seterrorfor(signupnumber,"Provide a Phone Number");
        }
        else
        {
            setsuccessfor(signupnumber);
        }
        if( formdata.signupageValue==="")
        {
            seterrorfor(signupage,"Age is required");
        }
        else
        {
            setsuccessfor(signupage);
        }
        if( formdata.signupgenderValue===""){
            seterrorfor(signupgender,"Gender is required");
        }
        else{
            setsuccessfor(signupgender);
        }
        if( formdata.signuppasswordValue==="")
        {
            seterrorfor(signuppassword,"Password is required");
        }
        else if(formdata.signuppasswordValue.length <8)
        {
            seterrorfor(signuppassword,"Provide a valid Phone Number");
        }
        else
        {
            setsuccessfor(signuppassword);    
        }
    }
        

   
function seterrorfor(input,message){
    const formdiv=input.parentElement;
    const small =formdiv.querySelector('small');
    small.innerText= message;
    formdiv.className="form-div error"; 
}    

function setsuccessfor(input){
    const formdiv=input.parentElement;
    formdiv.className="form-div success";
}
