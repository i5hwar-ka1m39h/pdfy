
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home.page'
import Flowpage from './pages/Flow.page'

function App() {
 
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/flow/:id" element={<Flowpage/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
