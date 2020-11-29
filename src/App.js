import React from 'react';
import { Container } from '@material-ui/core';
import Header from './componets/Header/Header';
import List from './componets/List/List';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Header />
        <List />
      </Container>
    </div>
  );
}

export default App;
