import Camelid from "./components/Camelid";
import llamaImage from "./components/img/llama.png";
import alpacaImage from "./components/img/alpaca.png";

function App() {
const camelidData = [
  {name: "Llama",
  img: <img src={llamaImage} />, 
  desc: "Llamas are related to camels, and like camels, are used to carry goods over long distances"},

  {name: "Alpaca", 
  img: <img src={alpacaImage} />, 
  desc: "Alpacas are small, domesticated South American camelids and are raised primarily for their soft, hypoallergenic, and warm fleece"},
]
  return(
    <div>
      <h2>Camelids</h2>
      <Camelid name={camelidData[0].name} 
      desc={camelidData[0].desc} 
      img={camelidData[0].img}/>

      <Camelid name={camelidData[1].name} 
      desc={camelidData[1].desc} 
      img={camelidData[1].img}/>

    </div>
  )

}

export default App;
