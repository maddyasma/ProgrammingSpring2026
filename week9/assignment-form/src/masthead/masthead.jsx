import mastheadImg from "../assets/masthead.png";
import "./masthead/masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="fossil collection"/>
        <h1>My Lake Michigan Fossil Collection</h1>
        </div>
    )
    }
