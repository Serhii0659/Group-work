document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const menuList = document.querySelector('.menu-list');

    if (leftButton && rightButton && menuList) {
        leftButton.addEventListener('click', () => {
            menuList.scrollBy({ left: -300, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
            menuList.scrollBy({ left: 300, behavior: 'smooth' });
        });

        // Додатково: Прокрутка при натисканні стрілок на клавіатурі
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                menuList.scrollBy({ left: -300, behavior: 'smooth' });
            } else if (event.key === 'ArrowRight') {
                menuList.scrollBy({ left: 300, behavior: 'smooth' });
            }
        });
    } else {
        console.warn('One or more elements not found for scrolling functionality.');
    }
});



