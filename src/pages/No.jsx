
import Lottie from 'lottie-react'
import animationData from '../assets/valentines.json'
import { useNavigate } from 'react-router-dom';

const Homey = () => {
 
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/yes'); // Redirect to the '/yes' route
  };

  
  
  return (
    <>

        <h1>Whyyyy</h1>
        <div className="card">
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full" onClick={handleYesClick}>
            yes 
          </button>
        
          <button className="bg-red-700 hover:bg-black text-white py-2 px-4 font-bold  rounded-full" >
            no 
          </button>
          <div class="w-100 h-100 flex justify-center items-center">
            <Lottie animationData={animationData} />
          </div>
        </div>
   
         
     
    </>
  )
}

export default Homey
