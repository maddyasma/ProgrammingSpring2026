import "./Camelid.css";
function Camelid({name, desc, img}){
    console.log(name);
    return (
        <div className="camelidCard">
            <h1>{name}</h1>
            <p>{desc}</p>
            <div>{img} </div>
        </div>
    );

}
export default Camelid;