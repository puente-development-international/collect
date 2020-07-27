import axios from 'axios';
import getEnvVars from '../../../environment';

function getTasks() {
  const { taskyUrlApi } = getEnvVars();

  return axios.get(`${taskyUrlApi}/tasks`)
    .then(async (response) => {
      const data = await response.data.tasks;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getTasks };
