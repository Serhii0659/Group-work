document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const menuList = document.querySelector('.menu-list');
    const navLinks = document.querySelectorAll('.nav-list__link');
    const navIndicator = document.querySelector('.nav-indicator');

    if (leftButton && rightButton && menuList) {
        leftButton.addEventListener('click', () => {
            menuList.scrollBy({ left: -300, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
            menuList.scrollBy({ left: 300, behavior: 'smooth' });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                menuList.scrollBy({ left: -300, behavior: 'smooth' });
            } else if (event.key === 'ArrowRight') {
                menuList.scrollBy({ left: 300, behavior: 'smooth' });
            }
        });
    }

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