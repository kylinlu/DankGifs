import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>🎉 Receive a relevant gif! 🎁</p>
        <ButtonToolbar>
          <Button variant="primary" size="lg">Upload Image 🥳</Button>
        </ButtonToolbar>
      </header>
    </div>
  );
}

export default App;
