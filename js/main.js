const buttonDarkMode = document.querySelector(".dark-mode-button");

//1. Check dark mode in system settings
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    buttonDarkMode.classList.add("dark-mode-button--active");
    document.body.classList.add('dark');
}

//2. Check dark mode in local storage
if (localStorage.getItem('darkMode') === 'dark') {
    buttonDarkMode.classList.add("dark-mode-button--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    buttonDarkMode.classList.remove("dark-mode-button--active");
    document.body.classList.remove('dark');
}

// //If system settings have been changed
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
//     const newColorScheme = event.matches ? "dark" : "light";

//     if (newColorScheme === "dark") {
//         buttonDarkMode.classList.add("dark-mode-button--active");
//         document.body.classList.add('dark');
//         localStorage.setItem('darkMode', 'dark');
//     } else {
//         buttonDarkMode.classList.remove("dark-mode-button--active");
//         document.body.classList.remove('dark');
//         localStorage.setItem('darkMode', 'light');
//     }
// })

//Enable dark mode by button
buttonDarkMode.onclick = function () {
    console.log('Dark mode toggle');
    buttonDarkMode.classList.toggle("dark-mode-button--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
        console.log('Dark mode enables');
    } else {
        localStorage.setItem('darkMode', 'light');
        console.log('Dark mode disabled');
    }
}