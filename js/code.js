const minBalance = 10;
const maxBalance = 990;

let cuentas = [
    {nombre:'Mali', pass:'1234', saldo:200},
    {nombre:'Gera', pass:'2345', saldo:290},
    {nombre:'Maui', pass:'3456', saldo:67},
];


let userName = document.getElementById('userName');
let password = document.getElementById('pass');

// && cuentas.find((pswrd) => pswrd.pass === password
// Extraer unicamente el objeto del array "cuentas"
function loginSession(){
    if (cuentas.find((users) => users.nombre == userName) ){
        alert('acceso correcto');
    } else{
        console.log(users);
        console.log(pswrd);
    };
};

// function insertPassword(){};


// function consultaSaldo(){};
// function ingresarSaldo(){};
// function retirarDinero(){};