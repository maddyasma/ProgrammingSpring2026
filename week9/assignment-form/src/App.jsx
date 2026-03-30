import { useState } from "react";
import  { useForm } from "react-hook-form";
import Masthead from "./Masthead/Masthead.jsx";
import ItemCard from "./itemCard/itemCard.jsx";
import {nanoid} from "nanoid";
import rock1 from "./assets/Rock1.png";
import rock2 from "./assets/Rock2.png";
import rock3 from "./assets/Rock3.png";
import rock4 from "./assets/Rock4.png";
import rock5 from "./assets/Rock5.png";
import rock6 from "./assets/Rock6.png";


import "./App.css";

function App() {
  const { register, handleSubmit,formState: { errors } } = useForm();

  const [fossils, setFossils] = useState(
[
    {
      name: "Crinoid Fossil #1",
      colors: ["grey", "white"],
      era: "Paleozoic Era",
      image: rock1,
      id: "1"
      
    },
    {
      name: "Smiley Fossil",
      colors: ["grey", "white"],
      era: "Mesozoic Era",
      image: rock2,
      id: "2"
    }, 
    {
      name: "Shell fossil",
      colors: ["grey", "white"],
      era: "Cenozoic Era",
      image: rock3,
      id: "3"
    },
    {
      name: "Crinoid Fossil #2",
      colors: ["grey", "white"],
      era: "Paleozoic Era",
      image: rock4,
      id: "4"
    },
    {
      name: "Coral Fossil",
      colors: ["grey", "white"],
      era: "Mesozoic Era",
      image: rock5,
      id: "5"
    },
    {
      name: "Mystery Fossil",
      colors: ["grey", "black"],
      era: "Cenozoic Era",
      image: rock6,
      id: "6"
    }

  ]);

  function addFossil(data) {
    const newId = nanoid(6);
    const newFossil = {
      ...data, id: newId};
      console.log(newFossil);
      setFossils([...fossils, newFossil]);
    }
  


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
      <div>
          <form onSubmit={handleSubmit(addFossil)}>
          <div className="formGroup">
            <label>Fossil Name</label>
            <input {...register("name", { required: true })} />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input {...register("image", { required: true })} />
              {errors.image && (<p className="error">Image is required</p>)}
            </div>
            <div className="form-group">
            <p>Fossil Era</p>
            <label><input value="Paleozoic Era" type="checkbox" {...register("era")} /> Paleozoic Era</label>
            <label><input value="Mesozoic Era" type="checkbox" {...register("era")} /> Mesozoic Era</label>
            <label><input value="Cenozoic Era" type="checkbox" {...register("era")} /> Cenozoic Era</label>
            </div>
            <button type="submit">Add Fossil</button>
          </form>
        </div>
    </div>
  )
}
export default App;
