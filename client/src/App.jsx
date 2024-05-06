import { useState } from 'react'
import './App.css'
import Login from './component/login'
import Sidebar from './component/sidebar'
import Dashboard from './component/Dashboard'
function App() {
  const [sidebarToggle,setSidebarToggle] = useState(false)
  return (
    <div >
   <Sidebar sidebarToggle={sidebarToggle}/>
   <Dashboard
   sidebarToggle={sidebarToggle}
   setSidebarToggle={setSidebarToggle}
   />
    </div>
  )
}
export default App
