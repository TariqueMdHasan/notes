import { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { getUserData, logoutUser } from './utils/auth.api';
import { IoMdHome } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const GlassNavbar = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=> {
    getUserData()
    .then(()=> setIsLoggedIn(true))
    .catch(()=> setIsLoggedIn(false))
  })

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <motion.nav
      style={{ backdropFilter: blur }}
      initial={{opacity:0, y:30}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[90%] max-w-6xl
        z-50
        bg-white/25 dark:bg-black/25
        backdrop-blur-xl
        border border-white/30 dark:border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        rounded-2xl
      "
    >
      <div className="flex items-center justify-between px-6 py-4">
        <h1 
          className="font-semibold text-white cursor-pointer"
          onClick={()=> navigate("/")}
        >
          NoteIt
        </h1>
        
        <div className="flex items-center gap-4">
          


          {!isLoggedIn ? (
            <button
              className="
                px-5 py-2 rounded-lg
                text-white font-medium
                bg-white/20 backdrop-blur-md
                border border-white/30
                hover:bg-white/30
                transition-all duration-300 cursor-pointer
              "
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          ):(
            <button
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                bg-white/20 backdrop-blur-md
                border border-white/30
                text-white 
                hover:bg-white/30 
                transition-all duration-300
                shadow-md cursor-pointer
              "
              onClick={() => navigate("/home")}
              title="Home"
            >
              <IoMdHome size={20} />
            </button>
          )}

          {!isLoggedIn ? (
            <button
              className="
                px-5 py-2 rounded-lg
                font-semibold text-white
                bg-gradient-to-r from-green-500 to-blue-600
                hover:from-green-600 hover:to-green-700
                shadow-lg hover:shadow-xl
                transition-all duration-500 cursor-pointer
              "
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          ) : (
            <>
              <button
                className="
                  flex items-center justify-center
                  w-10 h-10
                  rounded-full text-white
                  bg-green-500 hover:bg-green-600
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  cursor-pointer hover:bg-green-600
                "
                onClick={()=> navigate("/profile")}
              >
                <CgProfile size={20}/>
              </button>
              <button
                className="
                  flex items-center justify-center
                  w-10 h-10
                  rounded-full text-white
                  bg-red-500 hover:bg-red-600
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  cursor-pointer hover:bg-red-600
                "
                onClick={handleLogout}
              >
              <IoMdLogOut size={20}/>
              </button>
            </>
          )}

       </div>

      </div>
    </motion.nav>
  );
};

export default GlassNavbar;
