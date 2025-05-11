import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from '../hedar/Header'
import NewsBaner from '../component/newsBaner'

const Main = () => {
  return (
    <>
        <Header/>
        <NewsBaner/>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Main