const minBalance = 10;
const maxBalance = 990;

let cuentas = [
    {nombre:'Mali', pass:'1234', saldo:200},
    {nombre:'Gera', pass:'2345', saldo:290},
    {nombre:'Maui', pass:'3456', saldo:67}
];

// pendiente
let userName = document.getElementById('userName').value;
let password = document.getElementById('pass').value;

// && cuentas.find((pswrd) => pswrd.pass === password
// Extraer unicamente el objeto del array "cuentas"
function loginSession(e){ 
    e.preventDefault();
    if (cuentas.find((users) => users.nombre == userName) ){
        alert('acceso correcto');
    } else{
        alert(pswrd);
        alert(users);
    };
};

// function insertPassword(){};


// function consultaSaldo(){};
// function ingresarSaldo(){};
// function retirarDinero(){};