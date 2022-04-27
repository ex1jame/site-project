
// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

})
//Swiper
const swiper = new Swiper('.image-slider', {

    slidesPerView:1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
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

