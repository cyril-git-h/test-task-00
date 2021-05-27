import React, { useState } from 'react';
import './App.scss';
import Cards from './components/Cards';
import FormSection from './components/FormSection';
import Header from './components/Header';

function App() {
  let [loginActive, setLoginActive] = useState<boolean>(false)
  let [requested, setRequested] = useState<boolean>(false)
  return (
    <div className="App">
      <Header loginActive={loginActive} setLoginActive={setLoginActive} requested={requested} setRequested={setRequested} />
      <Cards />
      <FormSection requested={requested} setRequested={setRequested} />
      <footer className="footer">
        Copyright 2021
      </footer>
    </div>
  );
}

export default App;
