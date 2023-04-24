
import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';
import NinjaDisplay from './Components/NinjaDisplay.jsx';
import NinjaForm from './Components/NinjaForm.jsx';

import { useState } from 'react';
function App() {
  const [boxColorArray, setBoxColorArray] = useState([])
  const [ninjaBoxArray, setNinjaBoxArray] = useState([])
  return (
    <div className="App">
      <h1>Standard Assignment</h1>
        <Form boxColorArray={ boxColorArray } setBoxColorArray={setBoxColorArray}/>
        <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Assignment</h1>
        <NinjaForm ninjaBoxArray={ ninjaBoxArray } setNinjaBoxArray={setNinjaBoxArray}/>
        <NinjaDisplay ninjaBoxArray={ ninjaBoxArray }/>    
    </div>
  );
}

export default App;
