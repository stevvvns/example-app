import * as t from 'io-ts';
import { messages } from '../messages.js';

export const arg = t.type({});

export default function messageUpdates(_, { publicKey, channels, sock }) {
  channels.connectSocket('messageUpdates', sock);
  return { messages };
}
