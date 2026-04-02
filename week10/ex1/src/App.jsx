import {Link, Route, Routes} from 'react-router-dom'
import {Home} from './views/Home.jsx'
import './App.css'


function App() {

  return (
    <>
    {/*Navigation Here*/}
    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpacas">Alpacas</Link></li>
      </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/llamas" element={<Llamas/>} />
      <Route path="/alpacas" element={<Alpacas />} />
    </Routes>
    </>
  )
}

export default App
