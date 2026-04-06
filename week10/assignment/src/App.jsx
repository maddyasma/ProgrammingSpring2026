import { useState } from "react";
import Masthead from "./masthead/Masthead.jsx";
import ItemCard from "./ItemCard/itemCard.jsx";
import {nanoid} from "nanoid";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState(
[
    {
      name: "Debut",
      genre: "Country",
      song: "Best Song: Our Song",
      image: "./TaylorSwift_TaylorSwift.png",
      id: "1"
      
    },
    {
      name: "Fearless",
      genre: "Country",
      song: "Best Song: White Horse",
      image: "./TaylorSwift_Fearless.png",
      id: "2"
    }, 
    {
      name: "Speak Now",
      genre: "Country",
      song: "Best Song: Back to December",
      image: "./TaylorSwift_SpeakNow.png",
      id: "3"
    },
    {
      name: "Red",
      genre: "Country",
      song: "Best Song: All Too Well",
      image: "./TaylorSwift_Red.png",
      id: "4"
    },
    {
      name: "1989",
      genre: "Pop",
      song: "Best Song: Out of the Woods",
      image: "./TaylorSwift_1989.png",
      id: "5"
    },
    {
      name: "reputation",
      genre: "Pop",
      song: "Best Song: Don't Blame Me",
      image: "./TaylorSwift_Reputation.png",
      id: "6"
    },
    {
      name: "Lover",
      genre: "Pop",
      song: "Best Song: Cornelia Street",
      image: "./TaylorSwift_Lover.png",
      id: "7"
    },
    {
      name: "Folklore",
      genre: "Pop",
      song: "Best Song: the lakes",
      image: "./TaylorSwift_Folklore.png",
      id: "8"
    },
    {
      name: "Evermore",
      genre: "Pop",
      song: "Best Song: cowboy like me",
      image: "./TaylorSwift_Evermore.png",
      id: "9"
    },
    {
      name: "Midnights",
      genre: "Pop",
      song: "Best Song: Anti-Hero",
      image: "./TaylorSwift_Midnights.png",
      id: "10"
    },
    {
      name: "The Tortured Poets Department",
      genre: "Pop",
      song: "Best Song: Peter",
      image: "./TaylorSwift_TheTorturedPoetsDepartment.png",
      id: "11"
    },
    {
      name: "Life of a Showgirl",
      genre: "Pop",
      song: "Best Song: Honey",
      image: "./TaylorSwift_TheLifeofaShowgirl.png",
      id: "12"
    },

  ]);

function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = albums.filter((album) => {
    return album.id !== id;
  });
  setAlbums(updatedArray);
}
function duplicateCard(id) {
  console.log("duplicate me", id);

  const matchingAlbum = albums.find((album) => {
    return album.id === id;
  });

  const updatedAlbum = { ...matchingAlbum, id: nanoid() };

  setAlbums([...albums, updatedAlbum]);
}

  return (
    <div className="page">
     <Masthead />
      <div className="collection">
        {albums.map((album) => {
          return (
            <ItemCard key={album.id} 
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}{...album} />
          )
        })}
      </div>
    </div>
  )
}
export default App;
