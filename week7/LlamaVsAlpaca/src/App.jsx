import Camelid from "./components/Camelid";

function App() {
const camelidData = [
  {name: "Llama", hex: "#cc8899", desc: "a color with a hilarious name"},
  {name: "Alpaca", hex: "#2b9c2b", desc: "the color of plants"},
]
  return(
    <div>
      <h2>Camelids</h2>
      <Camelid name={camelidData[0].name} 
      desc={colorData[0].desc} 
      hex={colorData[0].hex}/>

      <Camelid name={camelidData[1].name} 
      desc={colorData[1].desc} 
      hex={colorData[1].hex}/>

    </div>
  )

}

export default App;
