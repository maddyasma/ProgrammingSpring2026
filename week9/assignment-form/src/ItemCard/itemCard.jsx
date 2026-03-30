import PropTypes from "prop-types";
import "./itemCard.css";
import trash from "../assets/icons/trash.png";
import copy from "../assets/icons/copy.png"; 
export default function ItemCard({
    name, 
    colors,
    era, 
    image, 
    id,
    duplicateFn,
    deleteFn,
    }) {
 return (
    <div className="fossilCard">
    <div className="fossilImage"> 
    <img src={image} alt={name}/>
    </div>
    <div className="cardTitle">{name}</div>
    <div className="cardEra">{era}</div>

  <div className="actions">
    <button onClick={() => deleteFn(id)}>
      <img className="icon" src={trash} alt="Delete fossil" />
    </button>

    <button onClick={() => duplicateFn(id)}>
      <img className="icon" src={copy} alt="Duplicate fossil" />
    </button>
  </div>
</div>
);
}
ItemCard.propTypes = {
    name: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    texture: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func,
}