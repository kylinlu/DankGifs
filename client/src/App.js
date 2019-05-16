import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonToolbar>
          <Button variant="light">Upload Image</Button>
        </ButtonToolbar>
      </header>
    </div>
  );
}

export default App;
