import { renderRoot, html } from '@stevvvns/incomponent';

import './components/app.js';

document.addEventListener('DOMContentLoaded', () => {
  renderRoot(html`<inc-app></inc-app>`);
});
