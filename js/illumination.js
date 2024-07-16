document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list__link');
    const navIndicator = document.querySelector('.nav-indicator');

    if (navLinks && navIndicator) {
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                const linkRect = e.target.getBoundingClientRect();
                const navRect = e.target.closest('.nav-list').getBoundingClientRect();
                navIndicator.style.left = `${linkRect.left - navRect.left}px`;
                navIndicator.style.width = `${linkRect.width}px`;
            });

            link.addEventListener('mouseleave', () => {
                navIndicator.style.width = '0';
            });
        });
    }
});