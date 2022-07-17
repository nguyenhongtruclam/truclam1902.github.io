



const btn_signin =document.querySelector('.card__btn--signin');
const btn_signup =document.querySelector('.card__btn--signup');
const card__signin =document.querySelector('.card__signin');
const card__signup = document.querySelector('.card__signup');

btn_signup.onmouseover = function(){
  btn_signin.classList.remove('active');
  btn_signup.classList.add('active');

  btn_signin.style.color = "#ffffff";
  btn_signup.style.color = "#3864FF";
  btn_signin.style.transition = "0.8s";
  btn_signup.style.transition = "0.8s";
}

btn_signup.onmouseout = function(){
  btn_signin.classList.add('active');
  btn_signup.classList.remove('active');
  btn_signin.style.color = "#3864FF";
  btn_signup.style.color = "#ffffff";

  btn_signin.style.transition = "1.2s";
  btn_signup.style.transition = "1.2s";
}


btn_signin.onclick = function(){
  card__signin.style.display="inline";
  card__signup.style.display="none";
}


btn_signup.onclick = function(){

  card__signin.style.display="none";
  card__signup.style.display="inline";
}

// Validation form login and register

