import Koa from 'koa';
import helmet from 'koa-helmet';
import serve from 'koa-static';
import path from 'node:path';
import { existsSync } from 'node:fs';
import attachActions from '@stevvvns/koa-wsapi';
import * as signedMsgpack from '@stevvvns/koa-wsapi/src/transports/signed-msgpack.js';

function resolve(relative) {
  return path.resolve(import.meta.dirname, relative);
}

const app = new Koa();

app.use(helmet());
await attachActions({
  app,
  path: resolve('actions'),
  log: console,
  transport: signedMsgpack,
});

const assets = resolve('../../browser/dist');
if (!existsSync(assets)) {
  throw new Error(
    `${assets} does not exist, be sure to \`npm run build\` in the browser path first`,
  );
}
app.use(serve(assets));

const port = process.env.NODE_PORT ?? 3333;
console.log(`http://localhost:${port}`);

app.listen(port).on('clientError', (error, socket) => {
  if (error.code === 'ERR_HTTP_REQUEST_TIMEOUT' && socket.ignoreTimeout) {
    return;
  }

  console.warn(`client error:`, error);
  socket.destroy();
});
