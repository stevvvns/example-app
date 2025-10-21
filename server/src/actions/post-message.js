import * as t from 'io-ts';
import { post } from '../messages.js';

export const arg = t.type({
  body: t.string,
});

export default function postMessage({ body }, { publicKey, channels }) {
  post({ body, poster: publicKey.toString('base64') }, channels.pub);
  return { result: 'ok' };
}
