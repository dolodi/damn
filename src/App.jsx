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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setCount((count) => count + 1)} >
          count is {count}
        </button>
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
