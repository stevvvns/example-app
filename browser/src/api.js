import start, { toB64, toU8 } from '@stevvvns/koa-wsapi/dist/client/index.js';
import { sign } from 'tweetnacl';

let keys;
try {
  const keyB64 = localStorage.getItem('key');
  keys = sign.keyPair.fromSecretKey(toU8(keyB64));
} catch (ex) {
  keys = sign.keyPair();
  localStorage.setItem('key', toB64(keys.secretKey));
}

const api = start({ log: console, initMsg: { keys } });
export default api;
