document.addEventListener("DOMContentLoaded", () => {

    const hamBtn = document.querySelector(".ham-btn");
    const navMenu = document.querySelector(".ham-menu-links");

    console.log("it works!")

    hamBtn.addEventListener('click', () => {
        console.log("Button clicked!");
        const isOpened = hamBtn.getAttribute('aria-expanded') === 'true';
        console.log("Before toggle:", isOpened);

        hamBtn.setAttribute('aria-expanded', isOpened ? 'false' : 'true');
        navMenu.classList.toggle('active');

        console.log("After toggle:", hamBtn.getAttribute('aria-expanded'));

        if (!hamBtn.hasAttribute('aria-expanded')) {
            hamBtn.setAttribute('aria-expanded', 'false');
        }

    })
});

