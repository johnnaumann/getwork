import '../styles/tailwind.css';
import { renderHeader } from '../components/header.js';
import { renderHero } from '../components/hero.js';
import { renderServices } from '../components/services.js';

const app = document.getElementById('app');

// Production builds inject markup via vite-plugin-prerender-app; skip CSR when already present.
if (app && app.childElementCount === 0) {
  app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderServices()}
  `;
}