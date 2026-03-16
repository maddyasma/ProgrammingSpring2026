import { useState } from "react";
import Masthead from "./masthead/Masthead.jsx";
import ItemCard from "./ItemCard/itemCard.jsx";
import "./App.css";

function App() {
  const [fossils, setFossils] = useState(
[
    {
      name: "Crinoid Fossil #1",
      colors: ["grey", "white"],
      texture: "rough",
      image: "./Rock1.png",
      id: "1"
      
    },
    {
      name: "Smiley Fossil",
      colors: ["grey", "white"],
      texture: "smooth",  
      image: "./Rock2.png",
      id: "2"
    }, 
    {
      name: "Shell fossil",
      colors: ["grey", "white"],
      texture: "smooth",
      image: "./Rock3.png",
      id: "3"
    },
    {
      name: "Crinoid Fossil #2",
      colors: ["grey", "white"],
      texture: "rough", 
      image: "./Rock4.png",
      id: "4"
    },
    {
      name: "Coral Fossil",
      colors: ["grey", "white"],
      texture: "rough", 
      image: "./Rock5.png",
      id: "5"
    },
    {
      name: "Mystery Fossil",
      colors: ["grey", "black"],
      texture: "smooth",
      image: "./Rock6.png",
      id: "6"
    }
  ]);
  return (
    <div className="page">
     <Masthead />
      <div className="collection">
        {/*rock map goes here*/}
        {/*use ItemCard component in loop*/}
        {fossils.map((fossil) => {
          return (
            <ItemCard key={fossil.id} {...fossil} />
          )
        })}
      </div>
    </div>
  )
}
export default App;