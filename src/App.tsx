import React from 'react';
import './App.css';
import CounterAction from './CounterAction';
import CounterViewer from './CounterViewer';
import Counter from './CounterViewer';

function App() {
  return (
    <div className="App">
       <h1 style={{textAlign:'center'}}>Welcome to our Counter app</h1>
        <CounterViewer/>
        <CounterAction/>
    </div>
  );
}

export default App;
