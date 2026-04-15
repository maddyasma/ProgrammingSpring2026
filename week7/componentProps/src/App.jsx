import Color from "./components/color";

function App() {
const colorData = [
  {name: "Puce", hex: "#cc8899", desc: "a color with a hilarious name"},
  {name: "Green", hex: "#2b9c2b", desc: "the color of plants"},
  {name: "Purple", hex: "#8918ca", desc: "the color of a grape"},
]
  return(
    <div>
      <h2>Colors</h2>
      <Color name={colorData[0].name} 
      desc={colorData[0].desc} 
      hex={colorData[0].hex}/>

      <Color name={colorData[1].name} 
      desc={colorData[1].desc} 
      hex={colorData[1].hex}/>

      <Color name={colorData[2].name} 
      desc={colorData[2].desc} 
      hex={colorData[2].hex}/>
    </div>
  )

}

export default App;
