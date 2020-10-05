import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { FormType2 } from './components/FormType2';
import UseState from './components/UseState';

function App() {
  const [state, updateState] = useState('red');
  console.log("app")
  return (
    <div className="App">
    <FormType2/>
    <Form></Form>
      {/* <button onClick={() => updateState('black')}> test useMemo </button>
      <label>{state}</label> */}

      {/* <Home/>
       */}
       {/* <UseState name={state}/>
        */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
