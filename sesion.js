const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validarEntradas();
});

function validarEntradas()
{
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
 
    if(emailValue === '')
    {
        setErrorFor(email,"El email no fue contestado");
    }
    else if(!validarEmail(emailValue))
    {
        setErrorFor(email,"Email no tiene el formato correcto");
    }
    else
    {
        setSuccessFor(email);
    }

    if(passwordValue === '')
    {
        setErrorFor(password, "El password no fue contestado");
    }
    else
    {
        setSuccessFor(password);
    }
}


function validarEmail(email)
{
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function setErrorFor(input,mensaje)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = mensaje;

    formControl.className = 'form-control incorrecto';
}

function setSuccessFor(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control correcto';
}