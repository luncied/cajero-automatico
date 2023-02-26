const minBalance = 10;
const maxBalance = 990;

// const checkBtn = document.getElementById('check-blnce-btn');
// const withdrawBtn = document.getElementById('withdraw-blnce-btn');
// const depositBtn = document.getElementById('deposit-btn');
const navbarBtns = document.getElementsByClassName('nav-btn');
const sitesPages = document.getElementsByClassName('section-page');

let contActBtn = [];
// checkBtn.addEventListener('click', changePage)
// withdrawBtn.addEventListener('click', changePage)
// depositBtn.addEventListener('click', changePage)


for (let i = 0; i < navbarBtns.length; i++) {
    navbarBtns[i].addEventListener('click', changePage);
};

// Cambiar el diseño del boton seleccionado

function changePage(e){
    let idActBtn = e.target.id;
    let actBtn = e.target.classList;
    let nameActBtn = e.target.name;
    let actSite = sitesPages.namedItem(nameActBtn).classList;

    if(contActBtn.length != 0){
        // console.log(navbarBtns.namedItem(contActBtn[0]).classList.remove('active-btn'));
        navbarBtns.namedItem(contActBtn[0]).classList.remove('active-btn');
        sitesPages.namedItem(navbarBtns.namedItem(contActBtn[0]).name).classList.remove('active-section');
        contActBtn = [];
    };

    if(!actBtn.contains('active-btn')){
        actBtn.add('active-btn');
        actSite.add('active-section');
        contActBtn.push(idActBtn);
        return;
    };
};
