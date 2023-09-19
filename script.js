// let = document.querySelector('');
let iconHamb = document.querySelector('.hamb-icon');
let iconClose= document.querySelector('.close-icon');
let navbarHeight = document.querySelector('.nav');
let hambIcon = document.querySelector('#icon-hamb');
let closeHamb = document.querySelector('#close-hamb');
let posventaClick = document.querySelector('#posventa');
let subMenuPos = document.querySelector('#sub-menu-pos');

//.addEventListener('click', );
iconHamb.addEventListener('click', openMenuMobile);
iconClose.addEventListener('click', closeMenuMobile);
posventaClick.addEventListener('click', openSubPos);

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
