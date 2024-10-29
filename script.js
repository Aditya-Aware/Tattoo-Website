document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const steps = document.querySelectorAll('.step');

    steps.forEach((step, index) => {
        const stepPosition = step.getBoundingClientRect().top;

        if (stepPosition < window.innerHeight * 0.8) {
            step.style.transform = "translateX(0)";
            step.style.opacity = "1";
        } else {
            step.style.transform = `translateX(-50px)`;
            step.style.opacity = "0.5";
        }
    });
});
document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});