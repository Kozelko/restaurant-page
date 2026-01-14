import './homepage.js';

const nav = document.getElementById('nav');

function initializeNav() {
    const buttons = nav.getElementsByTagName('button');
    buttons[0].addEventListener('click', () => {
        import('./homepage.js');
    });
    buttons[1].addEventListener('click', () => {
        import('./menu.js');
    });
    buttons[2].addEventListener('click', () => {
        import('./about.js');
    });
}

initializeNav();
