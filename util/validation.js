function isImpty(value) {
    return !value || value.trim() !== '';
    
}

function userCredentialsAreValid(email,password) {
    return(
        email && email.includes('@') &&
        password && password.trim().length >= 6
    );
    
}

function userDetailsValidation(email, password,name, street, postal , city){
    return(
        userCredentialsAreValid(email, password) &&
        isImpty(name) && isImpty(street) && 
        isImpty(postal) && isImpty(city)
    );
}

function emailValidation(email, confirmEmail) {
    return email=== confirmEmail;
    
}

module.exports = {
    userDetailsValidation:userDetailsValidation,
    emailValidation:emailValidation
};