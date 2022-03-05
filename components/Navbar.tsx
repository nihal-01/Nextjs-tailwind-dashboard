import React from 'react'
import {
  HiOutlineDotsVertical,
  HiMenu,
  HiSearch,
  HiArrowNarrowLeft,
  HiOutlineCube,
} from 'react-icons/hi'
import Link from 'next/link'

const style = {
  container: `p-[50px]`,
  header: `flex justify-between items-center`,
  headerLeft: `flex items-center gap-[1em]`,
  menu: `text-xl flex items-center justify-center p-[15px] text-[#7d7d83] transition-all hover:text-[#333]`,
  title: `text-2xl text-[#037afc] font-bold`,
  headerSeacrh: `flex items-center bg-white rounded p-[16px] text-[#838d91] gap-[1em] min-w-[480px] focus-within:shadow-md transition-all`,
  searchIcon: `text-xl cursor-pointer`,
  searchInput: `outline-none border-none w-[100%]`,
  headerRight: `flex items-center gap-[1.5em]`,
  dropDownBtn: `text-xl text-[#7d7d83] transition-all hover:text-[#333]`,
}

function Navbar({ setIsSidebarOpen, isSidebarOpen }: any) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.headerLeft}>
          {isSidebarOpen ? (
            <button
              onClick={() => {
                setIsSidebarOpen(false)
              }}
              className={style.menu}
            >
              <HiArrowNarrowLeft />
            </button>
          ) : (
            <button
              onClick={() => {
                setIsSidebarOpen(true)
              }}
              className={style.menu}
            >
              <HiMenu />
            </button>
          )}
          <Link href="/">
            <a href="" className={style.title}>
              Dashboard
            </a>
          </Link>
        </div>
        <div className={style.headerSeacrh}>
          <HiSearch className={style.searchIcon} />
          <input
            type="text"
            placeholder="search for projects, apps, pages..."
            className={style.searchInput}
          />
        </div>
        <div className={style.headerRight}>
          <button className={style.dropDownBtn}>
            <HiOutlineCube />
          </button>
          <button className={style.dropDownBtn}>
            <HiOutlineDotsVertical />
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
