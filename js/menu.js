const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    const isOpen = sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    
    document.body.classList.toggle("menu-open", isOpen);
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}
