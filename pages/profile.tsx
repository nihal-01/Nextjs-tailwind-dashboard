import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const style = {
  container: `max-w-[1700px] mx-auto px-[30px]`,
  coverWrapper: `w-[100%] h-[400px] relative`,
  coverImg: `w-[100%] h-[100%] rounded object-cover`,
  profileWrapper: `absolute bottom-[-50px] left-[50px] w-[180px] h-[180px] rounded-full border-[5px] border-white`,
  profileImg: `rounded-full w-[100%] h-[100%] object-cover`,
  profileName: `absolute bottom-[30px] left-[270px] text-white text-2xl`,
  profileNav: `flex absolute bottom-[30px] right-[50px] gap-[3em]`,
  profileNavItem: `text-base text-[#7d7d83] transition-all hover:text-white cursor-pointer`,
  profileNavItemActive: `text-white`,
  coverOverlay: `absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t from-black to-transparent`,
}

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard: profile</title>
      </Head>
      <main className={style.container}>
        <div className={style.coverWrapper}>
          <img
            src="https://wallpapersmug.com/download/2560x1080/11a3dc/firewatch-game-sunset-artwork.jpg"
            alt="Cover Photo"
            className={style.coverImg}
          />

          <div className={style.coverOverlay}></div>

          <div className={style.profileWrapper}>
            <img
              src="http://polygons.space/lime/theme/assets/images/avatars/avatar3.png"
              alt=""
              className={style.profileImg}
            />
          </div>

          <h3 className={style.profileName}>Dawid Warner</h3>

          <ul className={style.profileNav}>
            <li
              className={`${style.profileNavItem} ${style.profileNavItemActive}`}
            >
              Feed
            </li>
            <li className={`${style.profileNavItem}`}>About</li>
            <li className={`${style.profileNavItem}`}>Friends</li>
            <li className={`${style.profileNavItem}`}>Photos</li>
            <li className={`${style.profileNavItem}`}>Videos</li>
            <li className={`${style.profileNavItem}`}>Music</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage
