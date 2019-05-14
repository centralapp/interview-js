import React from 'react';
import './App.css';
import List from './Component/List.js';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
