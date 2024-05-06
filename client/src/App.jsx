import { useState } from 'react'
import './App.css'
import Login from './component/login/login'

function App() {

  return (
    <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{"backgroundImage" : "url('src/assets/Spiderman 2099_Batman beyond team up.jpg')"}}>
   <Login/>
    </div>
  )
}
export default App
