import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'

import Homey from './pages/Homey'
import Yes from './pages/Yes'
import No from './pages/No'

function App() {
  

  return (
    <>
      <Router>
        <div>
            <Routes>
              <Route path="/" element={<Homey />} />
              <Route path="/yes" element={<Yes />} />
              <Route path="/no" element={<No />} />
            </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
