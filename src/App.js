import React from 'react';
import './App.css';
import Comp from './components/Comp';

function App() {
  return (
    <div className="d-flex">
      <Comp abc="divisiva" age="234"/>
      <Comp abc="shankarn" />
      <Comp abc="vishnu"/>
    </div>
  );
}

export default App;
