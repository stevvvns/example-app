import { ref } from '@stevvvns/incomponent';
import api from './api.js';

const messages = (() => {
  const data = ref([]);
  async function refetch() {
    data.value = (await api.getMessages()).messages;
  }
  function post(body) {
    return api.postMessage({ body });
  }
  refetch();
  return { data, refetch, post };
})();

export default messages;
