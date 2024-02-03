import React from 'react';
import './App.css';
import PollingList from './pages/PollingList/PollingList';
import {PollContextProvider} from './store/usePollStore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PollContextProvider>
          <PollingList />
        </PollContextProvider>
      </header>
    </div>
  );
}

export default App;
