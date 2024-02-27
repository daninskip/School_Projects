function isStrongPassword(password){
    if (password.length < 8){
        return false;
    }
    if (password.indexOf("password") !== -1) {
        return false;  
     }
     const uppercaseRegex = /[A-Z]/;
     if (!uppercaseRegex.test(password)) {
       return false;
     }
     return true;
  
}