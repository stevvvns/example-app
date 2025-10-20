import { comp, html } from '@stevvvns/incomponent';
import messages from '../messages.js';

comp(function Compose() {
  return {
    async post() {
      const ta = this.shadowRoot.querySelector('textarea');
      await messages.post(ta.value);
      ta.value = '';
      messages.refetch();
    },
  };
})
  .init((el) => el.shadowRoot.querySelector('textarea').focus())
  .template(
    (el) => html`<textarea></textarea><button @click=${el.post}>Post</button>`,
  );
