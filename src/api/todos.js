import delay from './delay';

export const getTodos = async () => {
  // TODO network

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
