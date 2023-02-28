const minBalance = 10;
const maxBalance = 990;
const navbarBtns = document.getElementsByClassName('nav-btn');
const sitesPages = document.getElementsByClassName('section-page');
const balanceTag = document.getElementsByClassName('current-blnce-page');
const blueBtn = document.getElementsByClassName('action-btn');
const logout = document.getElementById('logout');
const uNameSession = JSON.parse(localStorage.getItem('user'));
const amountToWithdraw = document.getElementById('blnc-to-withdraw');
const amountToDeposit = document.getElementById('blnc-to-deposit');
let uNameData = cuentas.filter(uName => uName.nombre === uNameSession);
let actBtn;
let actSite;
let contActBtn = [];
let saldo;


for (let i = 0; i < navbarBtns.length; i++) {
    navbarBtns[i].addEventListener('click', changePage);
};

logout.addEventListener('click', logoutSession);
// Carga el saldo disponible

loadBalance();
// Cambiar el diseño del boton seleccionado
function changePage(e){
    hideBalance(e);
    actBtn = e.target;
    actSite = sitesPages.namedItem(actBtn.name);

    if(contActBtn.length != 0){
        navbarBtns.namedItem(contActBtn[0]).classList.remove('active-btn');
        sitesPages.namedItem(navbarBtns.namedItem(contActBtn[0]).name).classList.remove('active-section');
        contActBtn = [];
    };

    if(!actBtn.classList.contains('active-btn')){
        actBtn.classList.add('active-btn');
        actSite.classList.add('active-section');
        contActBtn.push(actBtn.id);
    };


};

function loadBalance(){
    for(let i = 0; i<balanceTag.length; i++) {
        balanceTag[i].textContent = `Saldo disponible: $${uNameData[0].saldo}`;
    };

};

function hideBalance(e){
    actSite = sitesPages.namedItem(e.target.name);
    if(actSite.id === 'check-blnce-main'){
        document.querySelector('#visible-blnce').classList.remove('visible-blnce');
        document.querySelector('#visible-blnce').classList.add('hidden-section');
        return;
    };

    if(actSite.id !== 'check-blnce-main'){
        document.querySelector('#visible-blnce').classList.add('visible-blnce');
    };
};

// Funcionalidad de los botones de acción
for (let i=0; i<blueBtn.length; i++){
    blueBtn[i].addEventListener('click', btnFunction)
}

function btnFunction(e) {
    e.preventDefault();
    if(e.target.id === 'deposit-btn'){
        depositBalance(e);
        return;
    }
    if(e.target.id === 'withdraw-btn'){
        withdrawBalance(e);
        return;
    }
}

function depositBalance(e){
    saldo = uNameData[0].saldo + parseInt(amountToDeposit.value);

    if (saldo < minBalance || saldo > maxBalance) {
        balanceError(e);
        return;
    };

    uNameData[0].saldo = saldo;
    loadBalance();
};

function withdrawBalance(e){
    saldo = uNameData[0].saldo - parseInt(amountToWithdraw.value);

    if (saldo < minBalance || saldo > maxBalance) {
        balanceError(e);
        return;
    };

    uNameData[0].saldo = saldo;
    loadBalance();

};

function balanceError(e){
    const balanceNot = document.createElement('div');

    balanceNot.textContent = `No puedes tener en tu cuenta más de ${maxBalance} o menos de ${minBalance}`;
    balanceNot.classList.add('error');

    e.target.parentElement.parentElement.parentElement.appendChild(balanceNot);
};

function logoutSession(e){
    e.preventDefault();
    localStorage.clear();
    location.assign('./loginForm.html');
    noReturn();
};


function noReturn(){
    if(localStorage.getItem('auth') === '1'){
        window.onhashchange = function(){window.location.hash='no-back-button'};
        return;
    };
};