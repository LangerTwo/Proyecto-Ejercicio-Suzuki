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

let precioModel = document.querySelector('#price-car .precio .precio-model');
let logoModel = document.querySelector('#logo-car figure img');
let imagenCar = document.querySelector('.car-modelo figure img');


let nombreDelColor = document.querySelector('.color-txt');

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
    pasajerosModelos.classList.add('inactive');

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
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006320220526152924/Vitara4x2-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009520220526152924/blanco.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006420220526152924/Vitara4x2-395x130.png',
     precio: '27.340',
     colores : [
        { blanco: 'blanco',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009520220526152924/blanco.png',
          nameColor: 'Ártico Blanco'},
        { gris: 'gris',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009320220526152924/gris-plata.png',
          nameColor: 'Gris Plata'},
        { negro: 'negro',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000010220220526152924/negro.png',
          nameColor: "Negro"},
        { turquesa: "turquesa",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009420220526152924/turquesa.png',
          nameColor: "Turquesa"},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000010320220526152924/plomo.png',
          nameColor: "Plomo"},
        { amarrilloNegro: "amarrilloNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009620220526152924/terracota.png',
          nameColor: "Terracota/Negro"},
        { turquesaNegro: "turquesaNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000010120220526152924/turquesa-negro.png',
          nameColor: "Turquesa/Negro"},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000010020220526152924/plomo-negro.png',
          nameColor: "Plomo/Negro"},
        { arenaNegro: "arenaNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009720220526152924/savanna-arena.png',
          nameColor: "Arena/Negro"},
        { iceBlue: "iceBlue",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000009820220526152924/ice-blue.png',
          nameColor: "Ice Blue/Negro"}
    ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000000620220606165654/VITARA-4X4.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000005920220606165654/Vitara4x4-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000007920220606165654/blanco.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000006020220606165654/Vitara4x4-395x130.png',
     precio: '33.490',
     colores: [
        { blanco: 'blanco',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000007920220606165654/blanco.png',
          nameColor: 'Ártico Blanco'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000007720220606165654/gris-plata.png',
          nameColor: 'Gris Plata'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000008420220606165654/negro.png',
          nameColor: 'Negro'},
        { amarrilloNegro: "amarrilloNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000007820220606165654/terracota.png',
          nameColor: 'Terracota/Negro'},
        { turquesa: "turquesa",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000008520220606165654/turquesa-negro.png',
          nameColor: 'Turquesa/Negro'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000008020220606165654/plomo-negro.png',
          nameColor: 'Plomo/Negro'},
        { arenaNegro: "arenaNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000008320220606165654/savanna-arena.png',
          nameColor: 'Arena/Negro'},
        { iceBlue: "iceBlue",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220606/imag/foto_0000008220220606165654/ice-blue.png',
          nameColor: 'Ice Blue/Negro'}
    ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004820220526165541/VITARA-TURBO.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007120220526165541/Vitara-Turbo-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011220220526165541/blanco.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007020220526165541/Vitara-Turbo-395x130.png',
     precio: '39.340',
     colores: [
        { blanco: 'blanco',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011220220526165541/blanco.png',
          nameColor: 'Ártico Blanco'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011020220526165541/gris-plata.png',
          nameColor: 'Gris Plata'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011720220526165541/negro.png',
          nameColor: 'Negro'},
        { amarrilloNegro: "amarrilloNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011120220526165541/terracota.png',
          nameColor: 'Terracota/Negro'},
        { turquesa: "turquesa",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011820220526165541/turquesa-negro.png',
          nameColor: 'Turquesa/Negro'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011320220526165541/plomo-negro.png',
          nameColor: 'Plomo/Negro'},
        { arenaNegro: "arenaNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011620220526165541/savanna-arena.png',
          nameColor: 'Arena/Negro'},
        { iceBlue: "iceBlue",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000011520220526165541/ice-blue.png',
          nameColor: 'Ice Blue/Negro'}
     ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003620220526130732/JIMNY.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005020220526130732/Jimny-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007220220526130732/PLOMO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003520220526130732/Jimny-395x130.png',
     precio: '30.840',
     colores: [
        { azul: "azul",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006920220526130732/AZUL.png',
          nameColor: 'Azul'},
        { verde: "verde",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007420220526130732/VERDE.png',
          nameColor: 'Verde'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007220220526130732/PLOMO.png',
          nameColor: 'Plomo'},  
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007320220526130732/NEGRO.png',
          nameColor: 'Negro'},     
        { plata: "plata",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007120220526130732/GRIS-PLATA.png',
          nameColor: 'Plata'},
        { blanco: "blanco",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230925/imag/foto_0000011620230925163349/Blanco.png',
          nameColor: 'Blanco'}        
     ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000007220230309195351/modelo-miniatura.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000007120230309195351/logo-pequen_o.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000008620230309195351/blancogv.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000007020230309195351/logo-grande.png',
     precio: '30.340',
     colores: [
        { blanco: 'blanco',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000008620230309195351/blancogv.png',
          nameColor: 'Blanco'},
        { plata: "plata",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000009320230309195351/plaatagv.png',
          nameColor: 'Plata'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000008920230309195351/plomogv.png',
          nameColor: 'Plomo'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000009020230309195351/negrogv.png',
          nameColor: 'Negro'},
        { azulOscuro: "azulOscuro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000008820230309195351/azul.png',
          nameColor: 'Azul'},
        { rojoOscuro: "rojoOscuro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000009120230309195351/rojogv.png',
          nameColor: 'Rojo'},
        { rojoNegro: "rojoNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000009420230309195351/rojonegrogv.png',
          nameColor: 'Rojo/Negro'},
        { plataNegro: "plataNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000008720230309195351/platanegrogv.png',
          nameColor: 'Plata/Negro'},
        { blancoNegro: "blancoNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20230309/imag/foto_0000009220230309195351/blanconegrogv.png',
          nameColor: 'Blanco/Negro'}
     ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005520220526144156/SCROSS.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005420220526144156/Scross-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004620220526144156/PLOMO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003820220526144156/Scross-395x130.png',
     precio: '33.640',
     colores: [
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004620220526144156/PLOMO.png',
          nameColor: 'Plomo'},
        { blanco: "blanco",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004320220526144156/BLANCO.png',
          nameColor: 'Blanco'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004420220526144156/GRIS-PLATA.png',
          nameColor: 'Gris Plata'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004220220526144156/NEGRO.png',
          nameColor: 'Negro'},
        { azulPerlado: "azulPerlado",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004120220526144156/AZUL.png',
          nameColor: 'Azul Perlado'},
        { rojoPerlado: "rojoPerlado",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004520220526144156/ROJO.png',
          nameColor: 'Rojo Perlado'}
     ]
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

    nuevoLi.addEventListener('click', () => {
        precioModel.textContent = suv.precio;
        logoModel.setAttribute('src', suv.logoMax);
        imagenCar.setAttribute('src', suv.carImage);
        console.log("here");

        crearListaDeColores(suv.colores);
    })

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    suvModelos.appendChild(nuevoLi);
});

function crearListaDeColores(colores) {
    let lista = document.querySelector('.car-color ul');
    let colorName = document.querySelector('.car-color p');
    let colorDelCar = document.querySelector('.car-modelo figure modelo car');
    if (!lista) {
        lista = document.createElement('ul');
        lista.classList.add('car-color');
    } else {
        // Limpia la lista de colores existente si hay alguna
        lista.innerHTML = '';
    }

    colores.forEach((colorObj) => {
        let color = Object.keys(colorObj)[0];
        let carColorImage = colorObj[color];

        let li = document.createElement('li');
        li.style.backgroundColor = color;
        li.className = "color-" + color;
        li.addEventListener('click', () => {
            // Realiza acciones cuando se hace clic en un color
            console.log('Color seleccionado:', color);
            colorName.textContent = colores.nameColor;
            colorDelCar.setAttribute('src', carColor);
            console.log('Hello:', color);
        });

        lista.appendChild(li);
    });

    lista.style.display = 'flex';
    let carColorDiv = document.querySelector('.car-color');
    carColorDiv.appendChild(lista);
}

function nameCarColor(colores) {
  
}

// Modelos Compactos Y Sedanes
let compactosLista = [
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007520220526165735/2.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005020220526165735/Alto-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006520220526165735/BLANCO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003920220526165735/Alto-395x130.png',
     precio: '12,950',
     colores: [
      { blanco: 'blanco',
        carColor:  'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006520220526165735/BLANCO.png',
        nameColor: 'Ártico Blanco'},
      { terracota: "terracota",
        carColor:  'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006220220526165735/TERRACOTA.png',
        nameColor: 'Terracota'},
      { gris: "gris",
        carColor:  'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006420220526165735/GRIS-PLATA.png',
        nameColor: 'Gris Plata'},
      { negro: "negro",
        carColor:  'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006320220526165735/NEGRO.png',
        nameColor: 'Negro'}
    ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006120220526180806/CELERIO.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006020220526180806/Celerio-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007820220526180806/BLANCO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004120220526180806/Celerio-395x130.png',
     precio: '16,490',
     colores: [
        { blanco: "blanco",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007820220526180806/BLANCO.png',
          nameColor: 'Blanco Perlado'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007620220526180806/GRIS-PLATA.png',
          nameColor: 'Gris Plata'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008120220526180806/PLOMO.png',
          nameColor: 'Plomo'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007720220526180806/NEGRO.png',
          nameColor: 'Negro'},
        { azul: "azul",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008220220526180806/AZUL.png',
          nameColor: 'Azul'},
        { cafe: "cafe",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007920220526180806/CAFE.png',
          nameColor: 'Café'}
      ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004120220526175358/SPRESSO.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005620220526175358/Spresso-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007320220526175358/BLANCO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004320220526175358/Spresso-395x130.png',
     precio: '15,990',
     colores: [
        { blanco: "blanco",
          carColor:  'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007320220526175358/BLANCO.png',
          nameColor: 'Ártico Blanco'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007120220526175358/GRIS-PLATA.png',
          nameColor: 'Gris Plata'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007620220526175358/PLOMO.png',
          nameColor: 'Plomo'},
        { naranja: "naranja",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007220220526175358/TERRACOTA.png',
          nameColor: 'Naranja'},
        { rojo: "rojo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007720220526175358/ROJO.png',
          nameColor: 'Rojo'},
        { azul: "azul",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000007420220526175358/AZUL.png',
          nameColor: 'Azul'}
      ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004220220527085542/SWIFT.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000006320220527085542/Swift-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008620220527085542/BLANCO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004320220527085542/Swift-395x130.png',
     precio: '19,290',
     colores: [
        { blanco: "blanco",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008620220527085542/BLANCO.png',
          nameColor: 'Ártico Blanco'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008420220527085542/GRIS-PLATA.png',
          nameColor: 'Gris Plata'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000009020220527085542/PLOMO.png',
          nameColor: 'Plomo'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008520220527085542/NEGRO.png',
          nameColor: 'Negro'},
        { azul: "azul",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000009120220527085542/AZUL.png',
          nameColor: 'Azul'},
        { rojoNegro: "rojoNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008720220527085542/ROJO-NEGRO.png',
          nameColor: 'Rojo/Negro'},
        { azulNegro: "azulNegro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008920220527085542/AZUL-NEGRO.png',
          nameColor: 'Azul/Negro'}
      ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000015620220527094431/MODELO-MINI.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000010020220527094431/LOGO-MINI.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000011320220527094431/BLANCO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000010120220527094431/LOGO-GRANDE.png',
     precio: '20,490',
     colores: [
        { blanco: "blanco",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000011320220527094431/BLANCO.png',
          nameColor: 'Ártico Blanco'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000011220220527094431/PLATA.png',
          nameColor: 'Gris Plata'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000011620220527094431/NEGRO.png',
          nameColor: 'Negro'},
        { rojo: "rojo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000011420220527094431/ROJO.png',
          nameColor: 'Rojo'},
        { azul: "azul",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000011120220527094431/AZUL.png',
          nameColor: 'Azul'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000011520220527094431/PLOMO.png',
          nameColor: 'Plomo'}
      ]
    },
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004820220527095355/DZIRE.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004620220527095355/Dzire-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000007920220527095355/BLANCO.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000004720220527095355/Dzire-395x130.png',
     precio: '17,990',
     colores: [
        { blanco: "blanco",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000007920220527095355/BLANCO.png',
          nameColor: 'Ártico Blanco'},
        { gris: "gris",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000007720220527095355/PLATA.png',
          nameColor: 'Gris Plata'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000007820220527095355/NEGRO.png',
          nameColor: 'Negro'},
        { azul: "azul",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008320220527095355/AZUL.png',
          nameColor: 'Azul'},
        { rojoBrillante: "rojoBrillante",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220527/imag/foto_0000008020220527095355/ROJO.png',
          nameColor: 'Rojo'}
      ]
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

    nuevoLi.addEventListener('click', () => {
        precioModel.textContent = comap.precio;
        logoModel.setAttribute('src', comap.logoMax);
        imagenCar.setAttribute('src', comap.carImage);
        console.log("here");    

        crearListaDeColores(comap.colores);              
    })

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    compactosModelos.appendChild(nuevoLi);
});

function crearListaDeColores(colores) {
    let lista = document.querySelector('.car-color ul');
    if (!lista) {
        lista = document.createElement('ul');
        lista.classList.add('car-color');
    } else {
        // Limpia la lista de colores existente si hay alguna
        lista.innerHTML = '';
    }

    colores.forEach((colorObj) => {
        let color = Object.keys(colorObj)[0];
        let carColorImage = colorObj[color];

        let li = document.createElement('li');
        li.style.backgroundColor = color;
        li.className = "color-" + color;
        li.addEventListener('click', () => {
            // Realiza acciones cuando se hace clic en un color
            console.log('Color seleccionado:', color);
        });

        lista.appendChild(li);
    });

    lista.style.display = 'flex';
    let carColorDiv = document.querySelector('.car-color');
    carColorDiv.appendChild(lista);
}
  
// 7 Pasajeros

let pasajerosLista = [
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005320220526143828/XL7.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000006720220526143828/XL7-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008520220526143828/blanco.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000005220220526143828/XL7-395x130.png',
     precio: '26.340',
     colores: [
        { blanco: 'blanco',
          carColor:  'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008520220526143828/blanco.png',
          nameColor: 'Ártico Blanco'},
        { plomo: "plomo",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008320220526143828/plomo.png',
          nameColor: 'Plomo'},
        { negro: "negro",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008820220526143828/negro.png',
          nameColor: 'Negro'},
        { khaki: "khaki",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008420220526143828/khaki.png',
          nameColor: 'Khaki'},
        { lila: 'lila',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008920220526143828/borgon_a.png',
          nameColor: 'Borgoña Lila'},
        { naranja: "naranja",
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000008620220526143828/terracota.png',
          nameColor: 'Naranja'}  
      ]
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

    nuevoLi.addEventListener('click', () => {
        precioModel.textContent = seven.precio;
        logoModel.setAttribute('src', seven.logoMax);
        imagenCar.setAttribute('src', seven.carImage);
        console.log("here");

        crearListaDeColores(seven.colores);
    })

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    pasajerosModelos.appendChild(nuevoLi);
});

function crearListaDeColores(colores) {
    let lista = document.querySelector('.car-color ul');
    if (!lista) {
        lista = document.createElement('ul');
        lista.classList.add('car-color');
    } else {
        // Limpia la lista de colores existente si hay alguna
        lista.innerHTML = '';
    }

    colores.forEach((colorObj) => {
        let color = Object.keys(colorObj)[0];
        let carColorImage = colorObj[color];

        let li = document.createElement('li');
        li.style.backgroundColor = color;
        li.className = "color-" + color;
        li.addEventListener('click', () => {
            // Realiza acciones cuando se hace clic en un color
            console.log('Color seleccionado:', color);
        });

        lista.appendChild(li);
    });

    lista.style.display = 'flex';
    let carColorDiv = document.querySelector('.car-color');
    carColorDiv.appendChild(lista);
}

// Paneles
let panelesList = [
    {
     car: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003920220526173048/APV.png',
     logoMini: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004320220526173048/APV-145x45.png',
     carImage: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004920220526173048/apv.png',
     logoMax: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000003820220526173048/APV-395x130.png',
     precio: '23.700',
     colores: [
        { blanco: 'blanco',
          carColor: 'https://www.suzuki.cr/suzuki/site/artic/20220526/imag/foto_0000004920220526173048/apv.png',
          nameColor: 'Blanco'}
      ]
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

    nuevoLi.addEventListener('click', () => {
        precioModel.textContent = panel.precio;
        logoModel.setAttribute('src', panel.logoMax);
        imagenCar.setAttribute('src', panel.carImage);
        console.log("here");

        crearListaDeColores(panel.colores); 
    })

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    panelModelos.appendChild(nuevoLi);
});

function crearListaDeColores(colores) {
    let lista = document.querySelector('.car-color ul');
    if (!lista) {
        lista = document.createElement('ul');
        lista.classList.add('car-color');
    } else {
        // Limpia la lista de colores existente si hay alguna
        lista.innerHTML = '';
    }

    colores.forEach((colorObj) => {
        let color = Object.keys(colorObj)[0];
        let carColorImage = colorObj[color];

        let li = document.createElement('li');
        li.style.backgroundColor = color;
        li.className = "color-" + color;
        li.addEventListener('click', () => {
            // Realiza acciones cuando se hace clic en un color
            console.log('Color seleccionado:', color);
        });

        lista.appendChild(li);
    });

    lista.style.display = 'flex';
    let carColorDiv = document.querySelector('.car-color');
    carColorDiv.appendChild(lista);
}

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

    nuevoLi.addEventListener('click', () => {
        precioModel.textContent = todoM.precio;
        logoModel.setAttribute('src', todoM.logoMax);
        imagenCar.setAttribute('src', todoM.carImage);
        console.log("here");

        crearListaDeColores(todoM.colores);
    })

    figureLi.appendChild(carImageLi);
    figureDosLi.appendChild(logoCarLi);

    nuevoLi.appendChild(figureLi);
    nuevoLi.appendChild(figureDosLi);

    modelosTodos.appendChild(nuevoLi);
});

function crearListaDeColores(colores) {
    let lista = document.querySelector('.car-color ul');
    let carName = document.querySelector('.car-color p');
    if (!lista) {
        lista = document.createElement('ul');
        lista.classList.add('car-color');
    } else {
        // Limpia la lista de colores existente si hay alguna
        lista.innerHTML = '';
    }

    colores.forEach((colorObj) => {
        let color = Object.keys(colorObj)[0];
        let carColorImage = colorObj[color];

        let li = document.createElement('li');
        li.style.backgroundColor = color;
        li.className = "color-" + color;
        li.addEventListener('click', () => {
            // Realiza acciones cuando se hace clic en un color
            console.log('Color seleccionado:', color);
            console.log('Hi:', color);
            carName.textContent = colorObj.nameColor;
            imagenCar.setAttribute('src', colorObj.carColor);
        });

        lista.appendChild(li);
    });

    lista.style.display = 'flex';
    let carColorDiv = document.querySelector('.car-color');
    carColorDiv.appendChild(lista);
}