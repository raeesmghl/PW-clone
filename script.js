



let hamburgerMenu = document.getElementById('hamburger-menu');
let closeMenu = document.getElementById('close-menu');
let menuMobile = document.getElementById('menu-mobile');




hamburgerMenu.addEventListener('click',()=>{
    menuMobile.classList.remove('hidden');
})
closeMenu.addEventListener('click',()=>{
    menuMobile.classList.add('hidden');
})


