import '../styles/tailwind.css';
import { renderHeader } from '../components/header.js';
import { renderHero } from '../components/hero.js';
import { renderServices } from '../components/services.js';

const app = document.getElementById('app');

if (app) {
  app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderServices()}
  `;
}