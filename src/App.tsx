import React from 'react';
import './App.scss';
import Cards from './components/Cards';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Form />
    </div>
  );
}

export default App;
