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

let btnTodos = document.querySelector('#button-1');
let listaTodos = document.querySelector('#lista-modelo-1');
let btnSuv = document.querySelector('#button-2');
let listaSuv = document.querySelector('#lista-modelo-2');
let btnSedanes = document.querySelector('#button-3');
let btnSiete = document.querySelector('#button-4');
let btnPaneles = document.querySelector('#button-5');

let modelosTodos = document.querySelector('#modelo-todos');
let suvModelos = document.querySelector('#modelos-suv');
let compactosModelos = document.querySelector('#modelos-compacto');
let pasajerosModelos = document.querySelector('#modelos-pasajeros');
let panelModelos = document.querySelector('#modelos-panel');

let timer;

//.addEventListener('click', );
iconHamb.addEventListener('click', openMenuMobile);
iconClose.addEventListener('click', closeMenuMobile);
posventaClick.addEventListener('click', openSubPos);

btnCont1.addEventListener('click', chageBtn1);
btnCont2.addEventListener('click', chageBtn2);
btnCont3.addEventListener('click', chageBtn3);
btnCont4.addEventListener('click', chageBtn4);

btnTodos.addEventListener('click', changeCars1);
btnSuv.addEventListener('click', changeCars2);
btnSedanes.addEventListener('click', changeCars3);
btnSiete.addEventListener('click', changeCars4);
btnPaneles.addEventListener('click', changeCars5);


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

// 
function openSubPos() {
    subMenuPos.classList.remove('inactive');
    console.log("abre");
}

function closeSubPos() {
    subMenuPos.classList.add('inactive');
    console.log("cierra");
    
}

// 
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

// 

function openSubModel() {
    subMenuModel.classList.remove('inactive');
    console.log("abre");
    clearTimeout(timer);
    
}

function closeSubModel() { 
    console.log("cierra");
    timer = setTimeout(function () {
        console.log("Mouse fuera del elemento después de un retraso");
        subMenuModel.classList.add('inactive');
    }, 100);
}

// botones cambio de modelos
function changeCars1() {
    btnTodos.classList.add('active');
    modelosTodos.classList.remove('inactive');
    modelosTodos.classList.add('modelo-lista');
    listaTodos.classList.add('active');

    btnSuv.classList.remove('active');
    listaSuv.classList.remove('active');

    suvModelos.setAttribute('class', 'inactive');
    compactosModelos.setAttribute('class', 'inactive');
    panelModelos.setAttribute('class', 'inactive');

    btnSedanes.classList.remove('active');
    btnSiete.classList.remove('active');

    console.log("Todos");
}
function changeCars2() {
    btnTodos.classList.remove('active');
    listaTodos.classList.remove('active');

    suvModelos.removeAttribute('class', 'inactive');
    suvModelos.classList.add('modelo-lista');

    modelosTodos.setAttribute('class', 'inactive');
    compactosModelos.setAttribute('class', 'inactive');
    panelModelos.setAttribute('class', 'inactive');

    btnSuv.classList.add('active');
    listaSuv.classList.add('active');

    btnSedanes.classList.remove('active');
    btnSiete.classList.remove('active');
    btnPaneles.classList.remove('active');

    console.log("suv");
}
function changeCars3() {
    compactosModelos.removeAttribute('class', 'inactive');
    compactosModelos.classList.add('modelo-lista');

    modelosTodos.setAttribute('class', 'inactive');
    suvModelos.setAttribute('class', 'inactive');
    pasajerosModelos.setAttribute('class', 'inactive');
    panelModelos.setAttribute('class', 'inactive');

    btnSedanes.classList.add('active');
    btnTodos.classList.remove('active');
    btnSuv.classList.remove('active');
    btnSiete.classList.remove('active');
    btnPaneles.classList.remove('active');

    console.log("Compactos y Sedanes");
}
function changeCars4() {
    pasajerosModelos.removeAttribute('class', 'inactive');
    pasajerosModelos.classList.add('modelo-lista');

    modelosTodos.setAttribute('class', 'inactive');
    suvModelos.setAttribute('class', 'inactive');
    compactosModelos.setAttribute('class', 'inactive');
    panelModelos.setAttribute('class', 'inactive');

    btnSiete.classList.add('active');
    btnTodos.classList.remove('active');
    btnSuv.classList.remove('active');
    btnSedanes.classList.remove('active');
    btnPaneles.classList.remove('active');

    console.log("7 Pasajeros");
}
function changeCars5() {
    panelModelos.removeAttribute('class', 'inactive');
    panelModelos.classList.add('modelo-lista');

    modelosTodos.setAttribute('class', 'inactive');
    suvModelos.setAttribute('class', 'inactive');
    compactosModelos.setAttribute('class', 'inactive');
    pasajerosModelos.setAttribute('class', 'inactive');

    btnPaneles.classList.add('active');
    btnSiete.classList.remove('active');
    btnTodos.classList.remove('active');
    btnSuv.classList.remove('active');
    btnSedanes.classList.remove('active');
    console.log("Paneles");
}
// 

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

let modelosSuv = [
    { logo: './logo/Vitara4x2-395x130.png',
    price: 27.340,
    image: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009520220526152924/blanco.png',}
];
// modelosSuv.push();

let imgSuv = document.querySelector('#modelo-suv');
let imgSuv2 = document.querySelector('#modelo-suv2');

let logoSuv = document.querySelector('#info-suv');
let precioSuv = document.querySelector('.precio-model');
let modeloSuvImage = document.querySelector('.modelo-car');

// imgSuv.addEventListener('click', openInfoSuv);
// imgSuv.addEventListener('click', changeCars2);
//imgSuv2.addEventListener('click', openInfoSuv)

function openInfoSuv() {   
    logoSuv.setAttribute('src', modelosSuv[0].logo);
    precioSuv.textContent = modelosSuv[0].price;
    modeloSuvImage.setAttribute('src', modelosSuv[0].image);
    console.log("here");
}

// Array de modelos SUV
let suvLista = [
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004020220526152924/VITARA-4X2.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006320220526152924/Vitara4x2-145x45.png'
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000000620220606165654/VITARA-4X4.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000005920220606165654/Vitara4x4-145x45.png'
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004820220526165541/VITARA-TURBO.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007120220526165541/Vitara-Turbo-145x45.png'
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003620220526130732/JIMNY.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005020220526130732/Jimny-145x45.png'
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000007220230309195351/modelo-miniatura.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000007120230309195351/logo-pequen_o.png'
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005520220526144156/SCROSS.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005420220526144156/Scross-145x45.png'
    }
];

// Modelos SUV
//let nuevosLi = [];
suvLista.forEach((suv) => {
    let nuevoLi = document.createElement('li');
    nuevoLi.classList.add('lista');
    
    let figureLi = document.createElement('figure');
    let carImageLi = document.createElement('img');
    carImageLi.classList.add('modelo');
    carImageLi.setAttribute('src', suv.car);

    let figureDosLi = document.createElement('figure');
    let logoCarLi = document.createElement('img');
    logoCarLi.setAttribute('src', suv.logoMini);

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    suvModelos.appendChild(nuevoLi);
});

// Modelos Compactos Y Sedanes
let compactosLista = [
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007520220526165735/2.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005020220526165735/Alto-145x45.png',
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006120220526180806/CELERIO.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006020220526180806/Celerio-145x45.png',
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004120220526175358/SPRESSO.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005620220526175358/Spresso-145x45.png',
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004220220527085542/SWIFT.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000006320220527085542/Swift-145x45.png',
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000015620220527094431/MODELO-MINI.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000010020220527094431/LOGO-MINI.png',
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004820220527095355/DZIRE.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004620220527095355/Dzire-145x45.png',
    }
];

compactosLista.forEach((comap) => {
    let nuevoLi = document.createElement('li');
    nuevoLi.classList.add('lista');
    
    let figureLi = document.createElement('figure');
    let carImageLi = document.createElement('img');
    carImageLi.classList.add('modelo');
    carImageLi.setAttribute('src', comap.car);

    let figureDosLi = document.createElement('figure');
    let logoCarLi = document.createElement('img');
    logoCarLi.setAttribute('src', comap.logoMini);

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    compactosModelos.appendChild(nuevoLi);
});

// 7 Pasajeros
let pasajerosLista = [
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005320220526143828/XL7.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006720220526143828/XL7-145x45.png'
    }
];

pasajerosLista.forEach((seven) => {
    let nuevoLi = document.createElement('li');
    nuevoLi.classList.add('lista');
    
    let figureLi = document.createElement('figure');
    let carImageLi = document.createElement('img');
    carImageLi.classList.add('modelo');
    carImageLi.setAttribute('src', seven.car);

    let figureDosLi = document.createElement('figure');
    let logoCarLi = document.createElement('img');
    logoCarLi.setAttribute('src', seven.logoMini);

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    pasajerosModelos.appendChild(nuevoLi);
});

// Paneles
let panelesList = [
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003920220526173048/APV.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004320220526173048/APV-145x45.png'
    }
];

panelesList.forEach((panel) => {
    let nuevoLi = document.createElement('li');
    nuevoLi.classList.add('lista');
    
    let figureLi = document.createElement('figure');
    let carImageLi = document.createElement('img');
    carImageLi.classList.add('modelo');
    carImageLi.setAttribute('src', panel.car);

    let figureDosLi = document.createElement('figure');
    let logoCarLi = document.createElement('img');
    logoCarLi.setAttribute('src', panel.logoMini);

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    panelModelos.appendChild(nuevoLi);
});

// Todos

let todosModelos = [compactosLista, suvLista, pasajerosLista, panelesList];

let arrayTodos = [];

// for (let arr of todosModelos) {
//     if (arr.length > 0) {
//         arrayTodos.push(arr[0]);
//     }
// }

// for (let arr of todosModelos) {
//     if (arr.length > 0) {
//         for (let elemento of arr) {
//             arrayTodos.push(elemento);
//         }
//     }
// }

for (let arr of todosModelos) {
    if (arr.length > 0) {
        let shufflerArr = arr.slice();
        for (let i = shufflerArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shufflerArr[i], shufflerArr[j], shufflerArr[j], shufflerArr[i]];
        }
        arrayTodos = arrayTodos.concat(shufflerArr);
    }
}

arrayTodos.forEach((todoM) => {
    let nuevoLi = document.createElement('li');
    nuevoLi.classList.add('lista');
    
    let figureLi = document.createElement('figure');
    let carImageLi = document.createElement('img');
    carImageLi.classList.add('modelo');
    carImageLi.setAttribute('src', todoM.car);

    let figureDosLi = document.createElement('figure');
    let logoCarLi = document.createElement('img');
    logoCarLi.setAttribute('src', todoM.logoMini);

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    modelosTodos.appendChild(nuevoLi);
});
