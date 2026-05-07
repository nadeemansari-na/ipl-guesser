import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LandingPage from './pages/Landing'
import './App.css'
import Game from './pages/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/game' element={<Game/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
