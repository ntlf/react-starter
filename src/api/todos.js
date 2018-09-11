import axios from 'axios';

export const getTodos = async () => {
  const response = await axios.get(
    'https://wt-a339e6290d2b75021e179abd37d83555-0.sandbox.auth0-extend.com/react-ws/'
  );

  return response.data;
};

export const postTodo = async todo => {
  await axios.post(
    'https://wt-a339e6290d2b75021e179abd37d83555-0.sandbox.auth0-extend.com/react-ws/',
    todo
  );
};
