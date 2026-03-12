import './App.css'
import {useState} from "react";
import llama from './assets/llama.png';
import alpaca from './assets/alpaca.png';

function App() {
  const [animal, setAnimal] = useState(llama);


  return (
    <div className="App">
      <h1>Choose ur fighter</h1>
      <img src={animal} alt="Animal" />
      <div>
      <button onClick={() => setAnimal(llama)}>Show Llama</button>
      <button onClick={() => setAnimal(alpaca)}>Show Alpaca</button>
    </div>
    </div>
  );
}
export default App


