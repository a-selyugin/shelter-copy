//Логика бургер меню
const burgerMenu = document.querySelector('.burger-menu');

if (burgerMenu) {
    const burgerHeaderBackground = document.querySelector('.burger-header');
    const navList = document.querySelector('.navi-list');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.menu__link');

    function closeMenu() {
        if (burgerMenu.classList.contains('_rotated')){
            burgerMenu.classList.remove('_rotated');
        }
        if (navList.classList.contains('_active')){
            navList.classList.remove('_active');
        }
        if (document.body.classList.contains('_lock')){
            document.body.classList.remove('_lock');
        }
        if (overlay.classList.contains('_active')){
            overlay.classList.remove('_active');
        }
        if (burgerHeaderBackground.classList.contains('_active')) {
            burgerHeaderBackground.classList.remove('_active');
        }
        overlay.removeEventListener("click", closeMenu);
        burgerHeaderLogo.removeEventListener("click", closeMenu);
    }
    //  при нажатии на любой внутренний пункт меню, оно должно скрываться
    burgerMenu.addEventListener("click", () => {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_rotated');
        navList.classList.toggle('_active');
        overlay.classList.toggle('_active');
        burgerHeaderBackground.classList.toggle('_active');
        if (navLinks.length > 0) {       
            navLinks.forEach(navLink =>{
                navLink.addEventListener("click", closeMenu);
            });
        }
        overlay.addEventListener("click", closeMenu);
        burgerHeaderLogo.addEventListener("click", closeMenu);
    });
    const burgerHeaderLogo = burgerHeaderBackground.querySelector('.logo__title');
    // при нажатии на оверлей скрывать меню
  
}