// si estas se ejecutan antes de dar submit ¿como se acutaliza la propiedad .value?
const formLogin = document.getElementById('login-form');
const userName = document.getElementById('userName');
const password = document.getElementById('pass');

let cuentas = [
    {nombre:'Mali', pass:'1234', saldo:200},
    {nombre:'Gera', pass:'2345', saldo:290},
    {nombre:'Maui', pass:'3456', saldo:67}
];

formLogin.addEventListener('submit', loginSession); 
// Nos pide dos parametros, un evento y una funcion.


function loginSession(e){ 
    // "e" es un pointer event, captura información del evento que se ejecuta
    e.preventDefault();
    let uName = validateCredentials(userName);
    let psw = validateCredentials(password);

    if(uName && psw){
        console.log(uName);
        console.log(psw);
        console.log('acceso correcto');
        return;
    };

    console.log('sin acceso');
    
};

function validateCredentials(element){
    // Validar el userName
    if(element.id === 'userName'){
        if(cuentas.find((uName) => uName.nombre === element.value)){
            return true;
        };
        return false;
    };

    // Validar el password
    if(element.id === 'pass'){
        if(cuentas.find((uName) => uName.pass === element.value)){
            return true;
        };
        return false;
    };

};



// function consultaSaldo(){};
// function ingresarSaldo(){};
// function retirarDinero(){};