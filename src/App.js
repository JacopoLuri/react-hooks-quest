import React, { useState } from 'react';
import './App.css';

const App = () => {
  let [counter, plusOne] = useState(0)

  // plusOne = () => counter + 1;
   
  return (
    <>
     <p>Counter: {counter}</p>
     <button onClick={() => plusOne(counter + 1)}>Plus one</button>
     {/* <button onClick={plusOne}>Plus one</button> */}
    </>
  );
}

export default App;
