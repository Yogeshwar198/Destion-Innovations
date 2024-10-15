import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Setting from './pages/Setting';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { StoreContext } from './context/store';
import Todo from './pages/Todo';
import Profile from './pages/Profile';
import Report from './pages/Report';

const App = () => {
  const { sidebarToggle,visible } = useContext(StoreContext)
  return (
    <>
      <div className='flex'>
        <div className={`w-full ${visible ? (sidebarToggle ? '' : 'ml-64') : ''}`}>
          <Navbar />
        </div>
        {visible && <Sidebar />} {/* Render Sidebar only if visible is true */}
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/report' element={<Report />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </>
  )
}

export default App