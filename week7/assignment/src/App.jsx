import "./App.css";
import { FossilRow } from "./fossilRow.jsx";
function App() {
  const coolFossils = [
    {
      name: "Crinoid Fossil #1",
      colors: ["grey", "white"],
      texture: "rough",
      image: "/Rock1.png",
      
    },
    {
      name: "Smiley fossil",
      colors: ["grey", "white"],
      texture: "smooth",  
      image: "/Rock2.png",
        
    }, 
    {
      name: "Shell fossil",
      colors: ["grey", "white"],
      texture: "smooth",
      image: "/Rock3.png",
    },
    {
      name: "Crinoid Rock #2",
      colors: ["grey", "white"],
      texture: "rough", 
      image: "/Rock4.png",
    },
    {
      name: "Coral fossil",
      colors: ["grey", "white"],
      texture: "rough", 
      image: "/Rock5.png",
    },
    {
      name: "Mystery fossil",
      colors: ["grey", "black"],
      texture: "smooth",
      image: "/Rock6.png",
    }
  ]
  return (
  <>
  <h1>My Cool Lake Michigan Fossil Collection</h1>
  <p>Show fossils here</p>
  <table className="fossil-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Colors</th>
        <th>Texture</th>
        <th>Image</th>
        </tr>
    </thead>
    <tbody>
      {coolFossils.map((fossil, index) => {
        return (
        <FossilRow 
        key={fossil.image}
        name={fossil.name} 
        colors={fossil.colors} 
        texture={fossil.texture}  
        image={fossil.image} 
        odd={index % 2 === 1}
        />
        )
      })}
    </tbody>
  </table>
  </>
  )
}
export default App;