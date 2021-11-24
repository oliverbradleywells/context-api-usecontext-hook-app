import './App.css';
import { useState } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';

function App() {
  const [name, setName] = useState('This is true');


  return (
    <div className="App">
      <h1>Context API</h1>
      <ComponentA name={name} />
      <ComponentB name={name} />
    </div>
  );
}

export default App;
