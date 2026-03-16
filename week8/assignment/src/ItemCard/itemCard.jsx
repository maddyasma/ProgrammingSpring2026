import PropTypes from "prop-types";
import "./itemCard.css";
export default function ItemCard({
    name, 
    colors, 
    texture, 
    image, 
    id
    }) {
 return (
    <div className="fossilCard">
    <div className="fossilImage"> 
    <img src={image} alt={name}/>
    </div>
    <div className="cardTitle">{name}</div>
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
}