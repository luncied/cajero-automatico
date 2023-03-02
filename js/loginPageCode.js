// si estas se ejecutan antes de dar submit ¿como se acutaliza la propiedad .value?
const formLogin = document.getElementById('login-form');
const userName = document.getElementById('userName');
const password = document.getElementById('pass');
const userLog = [];
let user;

// noReturn();
formLogin.addEventListener('submit', loginSession); 
// Nos pide dos parametros, un evento y una funcion.

// función a ejecutar cuando apretamos el boton submit
function loginSession(e){ 
    e.preventDefault();
    // "e" es un pointer event, captura información del evento que se ejecuta
    let uName = validateCredentials(userName);
    let psw = validateCredentials(password);

    if(uName && psw){
        // console.log(uName);
        // console.log(psw);
        // console.log('acceso correcto');
        addLocalStorage();
        validateSessionLogin();
        return;
    };

    e.preventDefault();
    console.log('sin acceso');
    
};

// Función que se engarga de checar que el username y el password coincidan con la bd
function validateCredentials(element){
    // Validar el userName
    if(element.id === 'userName'){
        if(cuentas.find((uName) => uName.nombre === element.value)){
            user = cuentas.filter((uName) => uName.nombre === element.value);
            return true;
        };
        userLog.pop();
        return false;
    };

    // Validar el password
    if(element.id === 'pass'){
        if(user.find((uName) => uName.pass === element.value)){
            return true;
        };
        userLog.pop();
        return false;
    };
};

// Función que limpia el localstorage y añadde dos valores:
//      el nombre de usuario
//      valor de auth para poder cambiar de pagina
function addLocalStorage (){
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(user[0].nombre));
    localStorage.setItem('auth', 1);
};

// Función que valida si el valor de auth es 1.
// Si auth = 1 pasamos a la pagina del usuario
function validateSessionLogin (){
    const auth = parseInt(localStorage.getItem('auth'));
    if (auth !== 1) {
        window.location.replace('#');
        return;
    }
    location.assign('./userPage.html')
}

function noReturn(){
    if(!localStorage.getItem('auth')){
        location.assign('./loginForm.html');
        return;
    };
};