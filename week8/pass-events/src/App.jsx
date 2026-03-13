import { useState } from 'react'

import './App.css'
import TsAlbumComponent from './TsAlbumComponant';

function App() {
  const [headline, setHeadline] = useState('Taylor Swift Albums');
  const [TsAlbums, setTsAlbums] = useState(["Taylor Swift", "Fearless", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore", "Midnights", "TTPD","Life of a Showgirl",]);

function deleteAlbum(albumName) {
  const updatedArray = TsAlbums.filter((album) => 
    album !== albumName);
setTsAlbums(updatedArray);
}
function focusAlbum(albumName) {
  setHeadline(albumName);
}

return (
    <>
    <h1>{headline}</h1>
    {TsAlbums.map((album) => {
     return <TsAlbumComponent 
     key={album} 
     albumName={album} 
     deleteFn = {deleteAlbum}
     focusFn = {focusAlbum}/>
     
    })}
    </>
)
}
export default App
