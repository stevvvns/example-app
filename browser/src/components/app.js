import { comp, html } from '@stevvvns/incomponent';

import './compose';
import './message-list';

comp('App').template(
  html`<inc-message-list></inc-message-list><inc-compose></inc-compose>`,
);
