import PropTypes from "prop-types";
import "./itemCard.css";
import trash from "../assets/icons/trash.svg";
import copy from "../assets/icons/copy.svg"; 
export default function ItemCard({
    name, 
    genre,
    song,
    image, 
    id,
    duplicateFn,
    deleteFn,
    }) {
 return (
    <div className="albumCard">
    <div className="albumImage"> 
    <img src={image} alt={name}/>
    </div>
    <div className="cardTitle">{name}</div>
    <div className="cardGenre">{genre}</div>
    <div className="cardSong">{song}</div>

  <div className="actions">
    <button onClick={() => deleteFn(id)}>
      <img src={trash} alt="Delete album" />
    </button>

    <button onClick={() => duplicateFn(id)}>
      <img src={copy} alt="Duplicate album" />
    </button>
  </div>
    </div>
  );
}
ItemCard.propTypes = {
    name: PropTypes.string,
    genre: PropTypes.string,
    song: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func,
}