import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
     <Todos items={['Learn react','learn typescript']}/>
    </div>
  );
}

export default App;
