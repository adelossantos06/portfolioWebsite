const hamBtn = document.querySelector(".ham-btn");
const navMenu = document.querySelector(".ham-menu-links");

hamBtn.addEventListener('click', () => {
    const isOpened = hamBtn.getAttribute('aria-expanded') === 'true';

    hamBtn.setAttribute('aria-expanded', isOpened ? 'false' : 'true');
    navMenu.classList.toggle('active');

    if (!hamBtn.hasAttribute('aria-expanded')) {
        hamBtn.setAttribute('aria-expanded', 'false');
    }

})