import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
