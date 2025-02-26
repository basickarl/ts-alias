import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Testy, type TestyProps } from '@Testy';
import { Bla } from '@/components/bla';

function App() {
  const hello: TestyProps['title'] = 'hello';

  console.info({ logo });
  console.info(typeof logo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Testy title={hello} />
          <Bla title="bla" />
        </a>
      </header>
    </div>
  );
}

export default App;
