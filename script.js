// let = document.querySelector('');
let iconHamb = document.querySelector('.hamb-icon');
let iconClose= document.querySelector('.close-icon');
let navbarHeight = document.querySelector('.nav');
let hambIcon = document.querySelector('#icon-hamb');
let closeHamb = document.querySelector('#close-hamb');
let posventaClick = document.querySelector('#posventa');
let subMenuPos = document.querySelector('#sub-menu-pos');

let btnCont1 = document.querySelector('#btn-1');
let contList1 = document.querySelector('#contenedor-1');
let btnCont2 = document.querySelector('#btn-2');
let contList2 = document.querySelector('#contenedor-2');
let btnCont3 = document.querySelector('#btn-3');
let contList3 = document.querySelector('#contenedor-3');
let btnCont4 = document.querySelector('#btn-4');
let contList4 = document.querySelector('#contenedor-4');
let subMenuModel = document.querySelector('#sub-menu-model');

//.addEventListener('click', );
iconHamb.addEventListener('click', openMenuMobile);
iconClose.addEventListener('click', closeMenuMobile);
posventaClick.addEventListener('click', openSubPos);

btnCont1.addEventListener('click', chageBtn1);
btnCont2.addEventListener('click', chageBtn2);
btnCont3.addEventListener('click', chageBtn3);
btnCont4.addEventListener('click', chageBtn4);

function openMenuMobile() {
    navbarHeight.classList.remove('altura');
    console.log("funciona");
    hambIcon.classList.add('inactive');
    closeHamb.classList.remove('inactive');
    //iconHamb.classList.remove('hamb-icon');
}

function closeMenuMobile() {
    navbarHeight.classList.add('altura');
    console.log("funciona");
    hambIcon.classList.remove('inactive');
    closeHamb.classList.add('inactive');
    //iconHamb.classList.remove('.inactive');
}

function openSubPos() {
    subMenuPos.classList.remove('inactive');
    console.log("abre");
}

function closeSubPos() {
    subMenuPos.classList.add('inactive');
    console.log("cierra");
}

function chageBtn1() {
    console.log("caja 1");
    contList1.setAttribute('class', 'container-grid');
    contList2.setAttribute('class', 'inactive');
    contList3.setAttribute('class', 'inactive');
    contList4.setAttribute('class', 'inactive');
}
function chageBtn2() {
    console.log("caja 2");
    contList2.setAttribute('class', 'container-grid');
    contList1.setAttribute('class', 'inactive');
    contList3.setAttribute('class', 'inactive');
    contList4.setAttribute('class', 'inactive');
}
function chageBtn3() {
    console.log("caja 3");
    contList3.setAttribute('class', 'container-grid');
    contList1.setAttribute('class', 'inactive');
    contList2.setAttribute('class', 'inactive');
    contList4.setAttribute('class', 'inactive');
}
function chageBtn4() {
    console.log("caja 4");
    contList4.setAttribute('class', 'container-grid');
    contList1.setAttribute('class', 'inactive');
    contList2.setAttribute('class', 'inactive');
    contList3.setAttribute('class', 'inactive');
}

function openSubModel() {
    subMenuModel.classList.remove('inactive');
    console.log("abre");
}
function closeSubModel() {
    subMenuModel.classList.add('inactive');
    console.log("cierra");
}

var acc = document.getElementsByClassName("acordionfooter")
        var i;

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
         this.classList.toggle("active");
         var panelfooter = this.nextElementSibling;
         if (panelfooter.style.maxHeight) {
            panelfooter.style.maxHeight = null;
            } else {
                panelfooter.style.maxHeight = panelfooter.scrollHeight + "px";
            }
        });
}
