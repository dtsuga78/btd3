const btn = document.getElementById("revealBtn");
const secret = document.getElementById("secret");

if(btn && secret){
    btn.addEventListener("click", () => {
        secret.classList.add("show");
        btn.style.opacity = "0";
        setTimeout(()=>btn.style.display="none",400);
    });
}
