// const minBalance = 10;
// const maxBalance = 990;


let cuentas = [
    {nombre:'Mali', pass:'1234', saldo:200},
    {nombre:'Gera', pass:'2345', saldo:290},
    {nombre:'Maui', pass:'3456', saldo:67}
];

// pendiente

const formLogin = document.getElementById('login-form');
const userName = document.getElementById('userName').value;
const password = document.getElementById('pass').value;

// formLogin.addEventListener('submit', function(e){
//     e.preventDefault();
// }); // Nos pide dos parametros, un evento y una funcion.
// // "e" es un pointer event, captura información del evento que se ejecuta

// && cuentas.find((pswrd) => pswrd.pass === password
// Extraer unicamente el objeto del array "cuentas"

// && 
// cuentas.find((userPass) => userPass.pass == password)
// cuentas.find((users) => users.nombre == userName)


function loginSession(e){ 
    e.preventDefault();
    console.log(e.target);
    // if (cuentas.find((userPass) => userPass.pass == password)){
    //     console.log(password);
    //     // alert('acceso correcto');
    // } else{
    //     console.log(userName);
    //     console.log(password);
    // };
};


formLogin.addEventListener('submit', loginSession); // Nos pide dos parametros, un evento y una funcion.

// function insertPassword(){};


// function consultaSaldo(){};
// function ingresarSaldo(){};
// function retirarDinero(){};