function passwordValidator(password) {
    let passwordToString = password.toString();
    if (passwordToString.length < 6 || passwordToString.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    let onlyLettersAndDigits = /^[A-Za-z0-9]*$/.test(password)
    let containsAtLeastTwoDigits = /\d{2,}/.test(password)
    
    if (onlyLettersAndDigits === false) {
        console.log("Password must consist only of letters and digits")
    }

    if (containsAtLeastTwoDigits === false) {
        console.log("Password must have at least 2 digits")
    }

    else {
        console.log("Password is valid")
    }
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')