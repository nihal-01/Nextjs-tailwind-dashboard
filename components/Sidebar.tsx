import Link from 'next/link'
import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { AiOutlineUser, AiOutlineMail, AiOutlineCloud } from 'react-icons/ai'
import { BsCheck2All } from 'react-icons/bs'
import { useRouter } from 'next/router'

const style = {
  overlay: `fixed top-0 left-0 w-[100%] min-h-[100vh] h-[100%]`,
  container: `fixed top-0 left-0 bg-white w-[17em] min-h-[100vh] h-[100%] transition-all translate-x-[-100%] px-[50px] py-[57px] shadow-md`,
  containerActive: `translate-x-0`,
  title: `uppercase text-[#838d91] bold font-medium text-sm`,
  list: `list-none`,
  listItem: `flex items-center gap-[10px] text-[rgba(27,29,93,.5)] my-[10px] transition-all hover:text-[#333]`,
  active: 'text-[#037afc] hover:text-[#037afc]',
}

const links = [
  {
    name: 'Dashboard',
    icon: <MdDashboard />,
    link: '/',
  },
  {
    name: 'Profile',
    icon: <AiOutlineUser />,
    link: '/profile',
  },
  {
    name: 'Mailbox',
    icon: <AiOutlineMail />,
    link: '/mailbox',
  },
  {
    name: 'Todo',
    icon: <BsCheck2All />,
    link: '/todo',
  },
  {
    name: 'File Manager',
    icon: <AiOutlineCloud />,
    link: '/file-manager',
  },
]

function Sidebar({ setIsSidebarOpen, isSidebarOpen }: any) {
  const router = useRouter()

  return (
    <>
      <div
        className={`${isSidebarOpen && `${style.overlay}`}`}
        onClick={() => {
          setIsSidebarOpen(false)
        }}
      ></div>
      <div
        className={`${
          isSidebarOpen
            ? `${style.container} ${style.containerActive}`
            : style.container
        }`}
      >
        <h4 className={style.title}>Apps</h4>
        <ul className={style.list}>
          {links.map((link, index) => {
            return (
              <li
                className={`${style.listItem} ${
                  router.pathname === link.link && style.active
                }`}
                key={index}
                onClick={() => {
                  setIsSidebarOpen(false)
                }}
              >
                <span>{link.icon}</span>
                <Link href={link.link}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
