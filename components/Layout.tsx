import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div
      className={`${
        isSidebarOpen ? `translate-x-[17rem]` : `translate-x-0`
      }  transition-all`}
    >
      <Navbar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      {children}
    </div>
  )
}

export default Layout
