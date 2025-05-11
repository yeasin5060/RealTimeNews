import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from '../hedar/Header'

const Main = () => {
  return (
    <>
        <Header/>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Main