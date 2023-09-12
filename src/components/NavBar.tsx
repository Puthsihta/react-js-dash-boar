import React from 'react'
import { RiDashboardLine } from 'react-icons/ri'
import profileImage from '../image/profile.jpg'

const NavBar = ({ toggleSlide, setToggleSlide }: any) => {
  return (
    <div className="h-[5rem] top-0 w-full flex justify-between align-center px-2 lg:px-4">
      <div className="flex items-center">
        <RiDashboardLine
          className="text-2xl lg:text-4xl cursor-pointer"
          onClick={() => setToggleSlide(!toggleSlide)}
        />
        <h1 className="text-lg font-bold lg:text-3xl ml-2 lg:ml-4">
          Dashboard
        </h1>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <h1 className="font-semibold text-md lg:text-lg">Puthsitha Mouern</h1>
          <p className="text-slate-500">Admin</p>
        </div>
        <img
          src={profileImage}
          alt=""
          className="rounded-full object-cover w-10 h-10 lg:w-14 lg:h-14"
        />
      </div>
    </div>
  )
}

export default NavBar
