import PropTypes from "prop-types";
import "./itemCard.css";
import { Link } from "react-router-dom";
import trash from "../assets/icons/trash.svg";
import copy from "../assets/icons/copy.svg"; 
export default function ItemCard({
   title,
   genre,
   image,
   cover,
   releaseDate,
   id,
   duplicateFn,
   deleteFn,
   }) {
 return (
   <div className="albumCard">
   <div className="albumImage"> 
   <img src={image || cover} alt={title}/>
    </div>
    <div className="cardTitle"><Link to={`${id}`}>{title}</Link>
    </div>
    <div className="cardGenre">{genre}</div>
    <div className="cardDate">{releaseDate}</div>

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
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func,
}