import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <img className="mastheadImg" src={mastheadImg} alt="Taylor Swift Albums"/>

        </div>
    )
    }