const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("sign-up");
const error = document.getElementById('error');
const passwordError = document.getElementById('pass-err');

const validEmail = (checkEmail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkEmail) ;
}

function startsWithCapital(word){
    return /[A-Z]/.test(word.charAt(0))
}

function validPassword (myString) {
    const special = '~!@#$%^&*()_+{}|:"<>?';
    let specialCounter = 0;
    for(let i=0;i<myString.length;i++)
     {
         if(special.includes(myString[i]))
            specialCounter ++;
     }
    if(myString.length >= 6 && specialCounter >= 1 && startsWithCapital(myString[0]))
        return true;
    else return false;
}


form.addEventListener('submit',function(e){
    if(!validEmail(email.value)) {
        e.preventDefault();
        let err = document.createElement('p');
        err.textContent = "X Please enter an valid email X" ;
        err.style.color= "red";
        
        error.appendChild(err);
    }
    if(!validPassword(password.value)) {
        e.preventDefault();
        let passErr = document.createElement('p');
        passErr.textContent = "X Password must start with an capital ,contains at least 6 characters and 1 special char X" ;
        passErr.style.color= "red";
        
        passwordError.appendChild(passErr);
    }
});