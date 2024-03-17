import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottie from 'lottie-react'
import animationData from './assets/valentines.json'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Want to be my valentine?????</h1>
      <div className="card">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setCount((count) => count + 1)} >
          yes 
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setCount((count) => count + 1)} >
          no 
        </button>
        <div class="w-100 h-100 flex justify-center items-center">
          <Lottie animationData={animationData} />
        </div>
      </div>
      
      
     
    </>
  )
}

export default App
