import "./Camelid.css";
function Camelid({name, desc, hex}){
    console.log(name);
    return (
        <div className="camelidCard">
            <h1>{name}</h1>
            <p>{desc}</p>
            <div style={{
                width: "25px",
                height: "25px",
                backgroundColor: hex,
            }}></div>
        </div>
    );

}
export default Camelid;