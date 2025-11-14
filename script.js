// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active section while scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = "";

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = sec.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});
