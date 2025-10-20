import { initializer } from '@stevvvns/koa-wsapi/dist/client/worker.js';
import signedMsgpack from '@stevvvns/koa-wsapi/dist/client/transports/signed-msgpack.js';

onconnect = initializer(({ keys }) => {
  return {
    transport: signedMsgpack(keys),
    log: console,
  };
});
