import Lottie from 'lottie-react'
import animationData from '../assets/1bunny.json'

const Yes = () => {
  return (
    <div>
      <h1>
        Yippeee! 
      </h1>

      <div class="w-100 h-100 flex justify-center items-center">
            <Lottie animationData={animationData} />
        </div>
    </div>
  );
};

export default Yes;
