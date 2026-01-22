import { useEffect, useState } from "react";
import { getUserData } from "../utils/auth.api";
import {useNavigate} from 'react-router-dom'
import DiaryList from "./diaryList";

function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState();

  useEffect(() => {
    getUserData()
      .then((res) => {
        setUser(res.data.user)
      })
      .catch(() => navigate("/login"));
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center 
       bg-gradient-to-br from-[#0f172a] via-[#020617] to-black">
      <div className="bg-white p-6 rounded-lg shadow text-center w-80 mt-30">
        <h2 className="text-xl font-bold mb-2">
          Welcome, {user.name}
        </h2>
        
      </div>

      <DiaryList />

      <button
        onClick={() => navigate('/diaryForm')}
        className="fixed bottom-16 lg:bottom-4 right-4 z-10 
          w-16 h-16 rounded-full 
          bg-blue-600 text-amber-50 
          flex items-center justify-center cursor-pointer
          shadow-lg hover:bg-blue-700 hover:shadow-2xl
          transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <div className="w-full h-10"></div>
      
    </div>
  );
}

export default Home;
