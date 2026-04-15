import { useState } from "react";
import Masthead from "./masthead/Masthead.jsx";
import ItemCard from "./ItemCard/itemCard.jsx";
import {nanoid} from "nanoid";
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

function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = fossils.filter((fossil) => {
    return fossil.id !== id;
  });
  setFossils(updatedArray);
}
function duplicateCard(id) {
  console.log("duplicate me", id);

  const matchingFossil = fossils.find((fossil) => {
    return fossil.id === id;
  });

  const updatedFossil = { ...matchingFossil, id: nanoid() };

  setFossils([...fossils, updatedFossil]);
}

  return (
    <div className="page">
     <Masthead />
      <div className="collection">
        {fossils.map((fossil) => {
          return (
            <ItemCard key={fossil.id} 
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}{...fossil} />
          )
        })}
      </div>
    </div>
  )
}
export default App;
