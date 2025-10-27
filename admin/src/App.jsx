import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import Login from './components/Login'
  import { ToastContainer} from 'react-toastify';

 export const backendURL=import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token, setToken] = React.useState("");

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {
        token===""?<Login setToken={setToken}/> :  <>
        <Navbar />
        <hr className='text-gray-400'/>
        <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add />} />
              <Route path='/list' element={<List />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
          </div>
        </div>
      </>
      }
     
    </div>
  )
}

export default App
