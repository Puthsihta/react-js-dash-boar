import React, { useEffect, useState } from 'react'
import './App.css'
import SlideBar from './components/SlideBar'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './components/dashBoard/DashBoard'
import Icome from './components/icome/Icome'

const getWidth = () => {
  return (
    window.innerWidth ||
    document.body.clientWidth ||
    document.documentElement.clientWidth
  )
}

function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth())

  useEffect(() => {
    let timeout: any = null
    const resizeEvent = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setWidth(getWidth())
      }, 150)
    }

    window.addEventListener('resize', resizeEvent)
    return () => window.removeEventListener('resize', resizeEvent)
  }, [])
  return width
}

function App() {
  const [toggleSlide, setToggleSlide] = useState(false)
  let width = useCurrentWidth()

  useEffect(() => {
    if (width > 1024) {
      setToggleSlide(false)
    } else {
      setToggleSlide(true)
    }
  }, [width])

  // console.log('Width : ', width)

  return (
    <>
      <div className="flex overflow-hidden h-screen">
        <SlideBar toggleSlide={toggleSlide} setToggleSlide={setToggleSlide} />
        <div className="w-full">
          <NavBar toggleSlide={toggleSlide} setToggleSlide={setToggleSlide} />
          <div className="overflow-auto h-full">
            <Routes>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/income" element={<Icome />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
