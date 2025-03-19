// Random password generator
function generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers, includeSecialChars)
{
    const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
    const numbers="1234567890";
    const specialChars="~@#$%^&*()_+";

    let password="";
    let allowedChars=(includeLowerCase?lowerCaseLetters:"")+
                    (includeUpperCase?upperCaseLetters:"")+
                    (includeNumbers?numbers:"")+
                    (includeSecialChars?specialChars:"");
    for(let i=0;i<passwordLength;i++){
        let index=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[index];
    }
    return password;
}



let passwordLength=10;
let includeUpperCase=true;
let includeLowerCase=true;
let includeNumbers=true;
let includeSecialChars=true;
console.log(generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers, includeSecialChars));