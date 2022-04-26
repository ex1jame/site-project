//Темная и светлая тема
let switchMode = document.getElementById("switchMode")


switchMode.onclick = function () {
    let theme = document.getElementById("theme")

    if (theme.getAttribute("href") == "style/light-mode.css"){
        theme.href = "style/dark-mode.css"
    }else {
        theme.href = "style/light-mode.css"
    }
}
//Навигационное меню
var prevScrollpos = window.pageXOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.left = "0";
    } else {
        document.getElementById("navbar").style.left = "-200px";
    }
    prevScrollpos = currentScrollPos;
}
//Бургер меню
const iconMenu = document.querySelector('.header__menu_icon')
if (iconMenu){
     const menuBody = document.querySelector('.header__menu')
    iconMenu.addEventListener("click", function (e){
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}