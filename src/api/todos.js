import delay from './delay';

export const getTodos = async () => {
  // TODO network
  // const todos = await axios.get('/api/todos');

  await delay(1000);

  return [
    {
      id: '1',
      text: 'One'
    },
    {
      id: '2',
      text: 'Two'
    }
  ];
};
