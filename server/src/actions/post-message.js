import * as t from 'io-ts';
import messages from '../messages.js';

export const arg = t.type({
  body: t.string,
});

export default function postMessage({ body }, { publicKey }) {
  messages.push({ body, poster: publicKey.toString('base64') });
  return { result: 'ok' };
}
