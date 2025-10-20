import start from '@stevvvns/koa-wsapi/dist/client/index.js';
import { sign } from 'tweetnacl';

function toB64(u8) {
  return btoa(u8.reduce((data, byte) => data + String.fromCharCode(byte), ''));
}

function toU8(b64) {
  return new Uint8Array(
    atob(b64)
      .split('')
      .map((ch) => ch.charCodeAt(0)),
  );
}

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
