import {Link, Route, Routes} from 'react-router-dom'
import {Home} from './views/Home.jsx'
import './App.css'
import {Llamas} from './views/Llamas.jsx'
import {Alpacas} from './views/Alpacas.jsx'
function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpacas">Alpacas</Link></li>
      </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/llamas" element={<Llamas/>} />
      <Route path="/alpacas" element={<Alpacas />} />
    </Routes>
    </>
  )
}

export default App
