let menuOpenButton = document.querySelector("#inner-header #menu");
let menuMobile = document.querySelector("#inner-header #mobile-navbar");
menuOpenButton.addEventListener("click", () => {
  menuMobile.classList.add("menu-opened");
});

let menuCloseButton = document.querySelector("#inner-header #mobile-navbar #close-menu");
menuCloseButton.addEventListener("click",()=>{
    menuMobile.classList.remove("menu-opened");
})
