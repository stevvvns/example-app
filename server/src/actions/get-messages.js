import * as t from 'io-ts';
import messages from '../messages.js';

export const arg = t.type({});

export default function getMessages(_, { publicKey }) {
  return { messages };
}
