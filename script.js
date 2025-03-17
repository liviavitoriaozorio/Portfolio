document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
window.addEventListener("scroll", function () {
    let menu = document.querySelector(".menu");
    if (window.scrollY > 50) { 
        menu.classList.add("menu-scroll");
    } else {
        menu.classList.remove("menu-scroll");
    }
    ;
});
