import React from 'react'
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai"
import { AiFillHome } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"
import { FaBookReader } from "react-icons/fa";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaBookReader />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Me',
    path: '/contactus',
    icon: <BiSupport />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/mywork',
    icon: <BiSupport />,
    cName: 'nav-text'
  },
]