import "./App.css";
import "./fossilRow";
function App() {
  const coolFossils = [
    {
      name: "Crinoid Fossil #1",
      colors: ["grey", "white"],
      image: "/Rock1.png",
      texture: "rough",
    },
    {
      name: "Smiley fossil",
      colors: ["grey", "white"],
        image: "/Rock2.png",
        texture: "smooth",
    }, 
    {
      name: "Shell fossil",
      colors: ["grey", "white"],
      image: "/Rock3.png",
      texture: "smooth"
    },
    {
      name: "Crinoid Rock #2",
      colors: ["grey", "white"],
      image: "/Rock4.png",
      texture: "rough"
    },
    {
      name: "Coral fossil",
      colors: ["grey", "white"],
      image: "/Rock5.png",
      texture: "rough"

    },
    {
      name: "Mystery fossil",
      colors: ["grey", "black"],
      image: "/Rock6.png",
      texture: "smooth",
    }

  ]
  return (
  <>
  <h1>My Cool Lake Michigan Fossil Collection</h1>
  <p>Show fossils here
  </p>
  <table className="fossil-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Colors</th>
        <th>Image</th>
        </tr>
    </thead>
    <tbody>
      {coolFossils.map((name, index) => {
        return (
        <fossilRow 
        key={name.image}
        name={name.name} 
        colors={name.colors} 
        image={name.image} 
        />
        )
      })}
    </tbody>
  </table>
  </>
  )
}

export default App;