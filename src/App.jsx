import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottie from 'lottie-react'
import animationData from './assets/Animation-piramid.json'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Want to be my valentine?????</h1>
      <div className="card">
        
        <div class="w-100 h-100 flex justify-center items-center">
          <Lottie animationData={animationData} />
        </div>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more oTEST
      </p>
     
    </>
  )
}

export default App
