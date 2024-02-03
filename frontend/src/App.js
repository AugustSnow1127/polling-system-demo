import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  const handleClick = () => {
    axios.get("http://localhost:3001/api")
      .then(response => {
        console.log('response', response);
        const data = response.data;
        setData(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  React.useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>test</button>
        <div>{data || "no data"}</div>
      </header>
    </div>
  );
}

export default App;
