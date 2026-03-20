import { renderHeader } from '../components/header.js';
import { renderHero } from '../components/hero.js';
import { renderServices } from '../components/services.js';

/** Used at build time by vite-plugin-prerender-app (ssrLoadModule). */
export function getAppHtml() {
  return `
    ${renderHeader()}
    ${renderHero()}
    ${renderServices()}
  `.trim();
}
