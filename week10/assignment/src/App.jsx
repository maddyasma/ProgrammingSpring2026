import { Routes, Route } from "react-router-dom";
import { AlbumDetail } from "./views/AlbumDetail.jsx";
import albumData from "./album-data.json";
import { Home } from "./views/Home.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<AlbumDetail data={albumData} />} />
    </Routes>
  )
}
export default App;
