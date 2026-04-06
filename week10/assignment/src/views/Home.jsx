import Masthead from "../masthead/Masthead";
import ItemCard from "../ItemCard/itemCard.jsx";
import {nanoid} from "nanoid";
import albumData from "../album-data.json";
import { useState } from "react";
export function Home() {
const [albums, setAlbums] = useState(albumData.albums);

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
return(
 
    <div className="page">
     <Masthead />
      <div className="collection">
        {albums.map((album) => {
          return (
            <ItemCard
              key={album.id}
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...album}
            />
          )
        })}
      </div>
    </div>
  )


}