import { ref } from '@stevvvns/incomponent';
import api from './api.js';

const messages = (() => {
  const data = ref([]);
  (async () => {
    console.log('call sub');
    const [current] = api.messageUpdates.subscribe({}, (newMsg) => {
      data.mut((draft) => {
        draft.push(newMsg);
      });
    });
    data.value = (await current).messages;
  })();
  function post(body) {
    return api.postMessage({ body });
  }
  return { data, post };
})();

export default messages;
