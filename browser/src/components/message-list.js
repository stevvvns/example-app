import { comp, html } from '@stevvvns/incomponent';
import messages from '../messages.js';

comp(function MessageList() {
  return { messages: messages.data };
}).template(
  (el) => html`
    <ol>
      ${el.messages.map(
        (msg) =>
          html`<li>
            <div>${msg.body}</div>
            <small>${msg.poster}</small>
          </li>`,
      )}
    </ol>
  `,
).style(`
div {
  white-space: pre;
}
small {
  color: #ddd;
}
`);
