import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Register from './components/authComponents/register'
import Home from './components/home/home'
import Login from './components/authComponents/login'
import Profile from './components/home/profile'
import DiaryForm from './components/home/diaryform'
import NotePage from './components/home/notePage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/diaryForm' element={<DiaryForm />} />
        <Route path='/note/:id' element={<NotePage/>} />
      </Routes>
    </Router>
  )
}

export default App