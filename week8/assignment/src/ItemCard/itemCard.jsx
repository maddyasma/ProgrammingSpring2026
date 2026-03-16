import PropTypes from "prop-types";
import "./itemCard.css";
import trash from "../assets/icons/trash.svg";
import copy from "../assets/icons/copy.svg"; 
export default function ItemCard({
    name, 
    colors, 
    texture, 
    image, 
    id,
    duplicateFn,
    deleteFn
    }) {
 return (
    <div className="fossilCard">
    <div className="fossilImage"> 
    <img src={image} alt={name}/>
    </div>
    <div className="cardTitle">{name}</div>
    <div className="actions"><a href="">
        <img src={trash} alt="Delete" />
        </a><a href="">
        <img src={copy} alt="Duplicate" />
        </a></div>
    <div className="cardTexture">{texture}</div>
    {colors.map((color) => {
        return <div key={color}/> 
    })} 
    </div>
   )   
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