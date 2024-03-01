import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Rutas } from './routes/Rutas'

function App() {

  return (
    <div className='atr'>
      <BrowserRouter>
        <Navbar />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
