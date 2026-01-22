import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()
  return (
    <div className='lg:w-96 flex items-center flex-col'>
        <motion.h1
            className='text-6xl font-bold text-center text-amber-50'
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.4}}
        >
            Think, Note and <span className='text-blue-900'>organise</span> your great ideas
        </motion.h1>
        <motion.p
            className='text-blue-100 p-5 mt-5 text-xl lg:w-3xl text-center'
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.9, delay:0.7}}
        >
            Transform the way you capture, organize, and find your notes. 
            Our smart note-taking app syncs across all devices and helps you 
            stay productive wherever inspiration strikes.
        </motion.p>
        <motion.div 
            className="flex items-center gap-4"
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.9, delay:1}}
        >
          <button
            onClick={()=>navigate('/signup')}
            className="
              px-8 py-4 rounded-lg
              font-semibold text-white
              bg-gradient-to-r from-blue-500 to-indigo-600
              hover:from-blue-600 hover:to-indigo-700
              shadow-lg hover:shadow-xl
              transition-all duration-300 cursor-pointer
            "
          >
            Get Started
          </button>
       </motion.div>
    </div>
  )
}

export default Hero