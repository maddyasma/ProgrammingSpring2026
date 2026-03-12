import './App.css'
import {useState} from "react";
import llama from './assets/llama.png';
import alpaca from './assets/alpaca.png';

function App() {
  const [animal, setAnimal] = useState(llama);
  const handleClick = () => {
    setAnimal(alpaca);
  }

  return (
    <div className="App">
      <h1>Click the button to change animals</h1>
      <img src={animal} alt="Animal" />
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
export default App


