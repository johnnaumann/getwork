import { createServer } from 'vite';
import path from 'node:path';

/**
 * Prerenders the same markup as src/js/main.js into <main id="app"> at build time.
 * Uses a short-lived Vite dev server + ssrLoadModule so ?raw SVG and /public image imports resolve like the client bundle.
 */
export function prerenderAppPlugin() {
  /** @type {import('vite').ResolvedConfig | null} */
  let resolvedConfig = null;
  /** @type {string} */
  let prerenderedHtml = '';

  return {
    name: 'prerender-app',
    apply: 'build',
    enforce: 'pre',

    configResolved(config) {
      resolvedConfig = config;
    },

    async buildStart() {
      if (!resolvedConfig) {
        throw new Error('prerender-app: missing resolved Vite config');
      }

      const server = await createServer({
        configFile: false,
        root: resolvedConfig.root,
        base: resolvedConfig.base,
        publicDir: resolvedConfig.publicDir,
        resolve: resolvedConfig.resolve,
        plugins: resolvedConfig.plugins.filter((p) => p && p.name !== 'prerender-app'),
        server: { middlewareMode: true, watch: null, hmr: false },
        appType: 'custom',
        logLevel: 'error',
        optimizeDeps: { noDiscovery: true }
      });

      try {
        await server.pluginContainer.buildStart({});
        const entry = path.resolve(resolvedConfig.root, 'src/prerender/getAppHtml.js');
        const mod = await server.ssrLoadModule(entry);
        if (typeof mod.getAppHtml !== 'function') {
          throw new Error('prerender-app: getAppHtml must be exported from src/prerender/getAppHtml.js');
        }
        prerenderedHtml = mod.getAppHtml();
      } finally {
        await server.close();
      }
    },

    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (!prerenderedHtml) {
          throw new Error('prerender-app: prerendered HTML was not generated');
        }
        const replaced = html.replace(
          /<main id="app"([^>]*)>\s*<\/main>/i,
          `<main id="app"$1>${prerenderedHtml}</main>`
        );
        if (replaced === html) {
          throw new Error(
            'prerender-app: could not find <main id="app"></main> placeholder in index.html'
          );
        }
        return replaced;
      }
    }
  };
}
