function validateEmail(){
    var newEmail = document.getElementsByClassName('login')[0].value;
    var errors = [];
    var ruleForEmail = /^(?=.*(([a-zA-Zа-яА-я][\_\.\-][0-9]){4,21}@([a-zA-Zа-яА-я][0-9]){2,6}\.([a-zA-Zа-яА-я][0-9]){2,6}\.([a-zA-Zа-яА-я][0-9]){2,6})|(?=.*([a-zA-Zа-яА-я][\_\.\-][0-9]){4,21}@([a-zA-Zа-яА-я][0-9]){2,6}\.([a-zA-Zа-яА-я][0-9]){2,6}))$/;
    
    var name = /[a-zA-Zа-яА-Я0-9.-_]{4,20}/;
    var domainName = /[a-zA-Zа-яА-Я0-9]{2,4}/;

    if (!newEmail.match(ruleForEmail)){
        if (newEmail.split('@')[0].length < 4) {
            errors.push("Your name before '@' in email must be at least 4 characters"); 
        }
        if (newEmail.split('@')[0].length > 20) {
            errors.push("Your name before '@' in email email must be less than 20 characters"); 
        }
        if (!newEmail.split('@')[0].match(name)){
            errors.push("Name before '@' can contain upper and lower case letters of English and Ukrainian alphabet, digits, '.', '-' and '_' only");
        }
        if (newEmail.split('@')[0].split('.')[0].length < 2) {
            errors.push("Domain name should be at least 2 characters");
        }
        if (newEmail.split('@')[0].split('.')[0].length > 5) {
            errors.push("Domain name should be less than 5 characters");
        }
        if (!newEmail.split('@')[0].split('.')[0].match(domainName)) {
            errors.push("Domain name can contain upper and lower case letters of English and Ukrainian alphabet and digits only");
        }
        if (newEmail.split('.')[1].length < 2) {
            errors.push("Domain name should be at least 2 characters");
            }
        if (newEmail.split('.')[1].length > 5) {
            errors.push("Domain name should be less than 5 characters");
        }
        if (!newEmail.split('.')[1].match(domainName)) {
            errors.push("Domain name can contain upper and lower case letters of English and Ukrainian alphabet and digits only");
        }
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }
        if(true){
            validatePassword();
        }
    }
    
    return true;
}


// function validatePassword(){
//     var newPassword = document.getElementsByClassName('password')[0].value;
//     var errors = [];
//     var ruleForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])[a-zA-z0-9!@#$%]{8,21}$/;
    
//     if (newPassword.length < 8) {
//         errors.push("Your password must be at least 8 characters"); 
//     }
//     if (newPassword.length > 20) {
//         errors.push("Your password must be less than 20 characters"); 
//     }  
//     if (newPassword.search(/[a-zа-я]/i) < 0) {
//         errors.push("Your password must contain at least one letter in lower case.");
//     } //укр, не рос
//     if (newPassword.search(/[A-ZА-Я]/i) < 0) {
//         errors.push("Your password must contain at least one letter in upper case.");
//     } 
//     if (newPassword.search(/[!@#$%]/) < 0) {
//         errors.push("Your password must contain at least one of [!@#$%] symbols."); 
//     } 
//     if (newPassword.search(/[0-9]/) < 0) {
//         errors.push("Your password must contain at least one digit."); 
//     } 
//     if (errors.length > 0) {
//         alert(errors.join("\n"));
//         return false;
//     }
//     if(true){
//         redirect();
//     }
//     return true;
// }

// function redirect() {
//     window.location.href = "personal-cabinet.html";
// }
