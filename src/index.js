import './styles.css';
import { loadHomepage } from './homepage.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

const nav = document.getElementById('nav');

function initializeNav() {
    const buttons = nav.getElementsByTagName('button');

    buttons[0].addEventListener('click', () => {
        loadHomepage();
    });

    buttons[1].addEventListener('click', () => {
        loadMenu();
    });

    buttons[2].addEventListener('click', () => {
        loadAbout();
    });
}

initializeNav();
loadHomepage();
