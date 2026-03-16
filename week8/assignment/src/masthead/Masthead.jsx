import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";
import winkyRough from "https://fonts.googleapis.com/css2?family=Winky+Rough:ital,wght@0,300..900;1,300..900&display=swap";
export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="fossil collection"/>
        <h1>My Lake Michigan Fossil Collection</h1>
        </div>
    )
    }