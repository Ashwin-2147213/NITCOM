
let password;

  
validateForm = (event) => {
  event.preventDefault();
  checkEmail();
  checkPassword();
};

checkEmail = () => {
  email = document.getElementById('email');
  let emailval = email.value.trim();
  const emailregx = /([a-z0-9\.\-_]{5,20})@christuniversity.in$/;
  if(emailregx.test(emailval))
  {
    return success(email);
  }
  else {
    return error(email,"johndoe@christuniversity.in ");
  }
}

checkPassword = () => {
  password = document.getElementById("password");
  let passwordVal = password.value.trim();
  let passwordRegex1 = /[a-z]/;
  let passwordRegex2 = /[A-Z]/;
  let passwordRegex3 = /[0-9]/;
  let passwordRegex4 = /[~`!@#$%^&*;:"<>,./?]/;
  let passwordRegex5 = /[-_+={}]/;
  let passwordRegex6 = /[(){}|]/;
  let passwordRegex7 = /[/]/;
  let passwordRegex8 = /[\[\]]/;

  if (
    passwordRegex1.test(passwordVal) &&
    passwordRegex2.test(passwordVal) &&
    passwordRegex3.test(passwordVal) &&
    (passwordRegex4.test(passwordVal) ||
      passwordRegex5.test(passwordVal) ||
      passwordRegex6.test(passwordVal) ||
      passwordRegex7.test(passwordVal) ||
      passwordRegex8.test(passwordVal))
  )
    return success(password);
  else {
    return error(
      password,
      ' min 1 [a-z],min 1 [A-Z]min 1[0-9] min 1(~`!@#$%^&*()-_+={}[]|;:"<>,./?)'
    );
    }
    
};

success = (input) => {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
};

error = (input, message) => {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = message;

  if (document.getElementById("password") === input) {
    formControl.className = "form-control error password";
    //console.log(formControl.className);
  } else if (document.getElementById("password") === input) {
    formControl.className = "form-control error password";
  } else {
    formControl.className = "form-control error";
  }
};
