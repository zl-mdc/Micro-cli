import React, { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import microLogo from '../../assets/micro-cli.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <div>
         <a href="https://github.com/zl-mdc/m-cli" target="_blank">
          {/* <img src={microLogo} className="logo" alt="micro logo" /> */}
        </a>
         <a href="https://vitejs.dev" target="_blank">
          <img src='/vite.svg' className="logo" alt="vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Micro Cli + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;
