function isStrongPassword(password){
    if (password.length >= 8 && !password.includes("password") && password !== password.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
//  