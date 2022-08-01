document.getElementById("phone").addEventListener('keyup', telValidation); 

function telValidation() {
 const phone = document.getElementById("phone").value;
const mtn = /^[0]([7-9]{1})([0,1]{1})([0,3,2,4,6]{1})\d{7}$/,
GLO = /^[0]([7-9]{1})[0,1]([1,5,7]{1})\d{7}$/, 
Airtel = /^[0]([7-9]{1})[0]([2,8]{1})\d{7}$/,
Etisalat = /^(\+?([\d]{1,3})?[0]?((([8-9]{1})[0]([9]{1}))|(([9]{1})[0]([8]{1}))|([8][1]([78]{1})))\d{7})$/g;

const logo =document.getElementById("logo");
const logotext=document.getElementById("logo-text");
if(mtn.test(phone)){
logo.src = "image/mtn-logo.jpeg";
logotext.innerHTML="Your Number is an MTN Number";
logotext.style.visibility='visible';
logotext.style.color='gold';

logo.style.visibility='visible';
} else if(GLO.test(phone)){
logotext.innerHTML="Your Number is a GLO Number";
logotext.style.visibility='visible';
logotext.style.color='green';
logo.src="image/glo-logo.jpg";
logo.style.visibility='visible';
} else if(Airtel.test(phone)){
logotext.innerHTML="Your Number is an AIRTEL Number";
logotext.style.visibility='visible';
logotext.style.color='red';
logo.src="image/airtel-logo.jpeg";
logo.style.visibility='visible';
} else if(Etisalat.test(phone)){
logotext.innerHTML="Your Number is a 9MOBILE Number";
logotext.style.visibility='visible';
logotext.style.color='green';
logo.src="image/9mobile-logo.png";
 logo.style.visibility='visible';
  } else {
 logo.src="";
logotext.style.visibility='hidden';
logo.style.visibility='hidden';

}

}