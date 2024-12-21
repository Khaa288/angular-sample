
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-sample/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 518, hash: '8cecb925c5b08208c07b01585ed741093ad639e83f746972f07ccf73c1a0b5d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '10b43b944dcfb0aeb651f56480cc99af90f5c01d11a2580255f6b1f02c377144', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
