function checkForm() {
   // TODO: Perform input validation 
   let fullnameInput = document.querySelector("#fullName").value.trim()
   let email = document.querySelector("#email").value;
   let password = document.querySelector("#password").value;
   let passwordConfirm = document.querySelector("#passwordConfirm").value;

   let formErrors = document.getElementById('formErrors');
   let inputs = document.querySelectorAll('input');

   let errors = [];

/*  Ensure a full name with a length greater than or equal to 1 was provided
Otherwise, display "Missing full name." */
   if (fullnameInput.length === 0) {
      errors.push ("Missing full name.");
      document.querySelector("#fullName").classList.add('error')
   } else {
      document.querySelector("#fullName").classList.remove('error')
   }

/*Ensure that an email address was provided and that the email address matches the regular expression:
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
Otherwise, display "Invalid or missing email address."*/
   let regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!regEx.test(email)) {
      errors.push ("Invalid or missing email address.");
      document.querySelector("#email").classList.add('error')
   } else {
      document.querySelector("#email").classList.remove('error')
   }
   
/*Ensure the password has 10 to 20 characters
Otherwise, display "Password must be between 10 and 20 characters."*/
   if (password.length < 10 || password.length > 20){
      errors.push("Password must be between 10 and 20 characters.");
      document.querySelector("#password").classList.add('error')
   } else {
      document.querySelector("#password").classList.remove('error')
   }

/*Ensure the password contains at least one lowercase character (use a regular expression)
Otherwise, display "Password must contain at least one lowercase character."*/
   let lowerRegEx = /[a-z]/;
   if (!lowerRegEx.test(password)){
      errors.push("Password must contain at least one lowercase character.")
      document.querySelector("#password").classList.add('error')
   } else {
      document.querySelector("#password").classList.remove('error')
   }

/*Ensure the password contains at least one uppercase character (use a regular expression)
Otherwise, display "Password must contain at least one uppercase character."*/
   let upperRegEx = /[A-Z]/;
   if (!upperRegEx.test(password)){
      errors.push("Password must contain at least one uppercase character.")
      document.querySelector("#password").classList.add('error')
   } else {
      document.querySelector("#password").classList.remove('error')
   }

/*Ensure the password contains at least one digit (use a regular expression)
Otherwise, display "Password must contain at least one digit."*/
   let digitRegEx = /[0-9]/;
   if (!digitRegEx.test(password)){
      errors.push("Password must contain at least one digit.")
      document.querySelector("#password").classList.add('error')
   } else {
      document.querySelector("#password").classList.remove('error')
   }

/*Ensure the password and confirmation password match
Otherwise, display "Password and confirmation password don't match." */
   if (password !== passwordConfirm){
      errors.push("Password and confirmation password don't match.")
      document.querySelector("#passwordConfirm").classList.add('error')
   } else {
      document.querySelector("#passwordConfirm").classList.remove('error')
   }

   if (password.length < 10 || password.length > 20 || !lowerRegEx.test(password) || !upperRegEx.test(password) || !upperRegEx.test(password)){
      document.querySelector("#password").classList.add('error')
   } else {
      document.querySelector("#password").classList.remove('error')
   }

   if (errors.length > 0) {
      let errorList = document.createElement('ul');
      errors.forEach(error => {
         let listItem = document.createElement('li');
         listItem.textContent = error;
         errorList.appendChild(listItem);
      });
      formErrors.innerHTML = '';
      formErrors.appendChild(errorList);
      formErrors.classList.remove('hide');
    } else {
      formErrors.classList.add('hide');
      inputs.forEach(input => input.classList.remove('error'));
    }
   

}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});