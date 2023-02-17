const minBalance = 10;
const maxBalance = 990;

let cuentas = [
    {nombre:'Mali', saldo:200},
    {nombre:'Gera', saldo:290},
    {nombre:'Maui', saldo:67},
];



// Añadir nuevos usuarios o cuentas
// Eliminar cuentas pidiendo la contraseña (asegurate de retirar tu dinero o introduce una CLABE para transferir tu dinero a otra cuenta)
// Si el password es incorrecto, notificar al usuario e intentarlo nuevamente

    // $990 > cuenta > $10

// Consultar Saldo
// Ingresar Monto
// Retirar Monto


function createAccount(newName, balance=0, eMail, password){
    cuentas.push(
        {
            nombre:newName, 
            saldo:balance, 
            correo:eMail, 
            contraseña:password
        }
    );
};

// Extraer unicamente el objeto del array "cuentas"
function loginSession(){
    currentSession
};

// Esta de aqui se puede cambiar y usar el objeto creado en loginSession()
function deleteAccount(nameToDelete){
    let userToDelete = cuentas.filter(user => user.nombre === nameToDelete);
    cuentas.unshift(userToDelete);
};

function insertPassword(){};
function changePassword(){};


function consultaSaldo(){};
function ingresarSaldo(){};
function retirarDinero(){};