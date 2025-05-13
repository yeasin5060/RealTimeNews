import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from '../hedar/Header'
import NewsBaner from '../component/newsBaner'
import Headline from '../component/Headline'

const Main = () => {
  return (
    <>
        <Header/>
        <NewsBaner/>
        <Navbar/>
        <Headline/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Main