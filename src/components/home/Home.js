import React from 'react';
import Todos from '../todos/Todos';
import Content from '../common/Content';

const Home = () => {
  return (
    <Content>
      <h1>Home</h1>

      <Todos />
    </Content>
  );
};

export default Home;
