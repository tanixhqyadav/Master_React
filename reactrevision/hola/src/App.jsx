import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import HooksDemo from './components/HooksDemo';
import './index.css';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/about' element=<About/> />
        <Route path='/hooks' element=<HooksDemo/> />
      </Routes>
    </>
  )
}

export default App
