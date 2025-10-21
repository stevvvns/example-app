export const messages = [];
export function post({ body, poster }, pub) {
  messages.push({ body, poster });
  pub('messageUpdates', { body, poster });
}
