document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is connected!");
})

function toggleMenu() {
    document.querySelector(".right").classList.toggle("active");
}