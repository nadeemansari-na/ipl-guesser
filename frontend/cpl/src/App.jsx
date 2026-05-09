import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LandingPage from './pages/Landing'
import './App.css'
import Game from './pages/Game'
import { QuestionProvider } from './context/question'
import { Work_Flow } from './pages/WorkFlow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <QuestionProvider>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/game' element={<Game/>}/>
        <Route path='/How-it-work' element={<Work_Flow/>}/>
      </Routes>

      </QuestionProvider>
      </BrowserRouter>
    </>
  )
}

export default App
