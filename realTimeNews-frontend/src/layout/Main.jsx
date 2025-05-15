import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from '../hedar/Header'
import NewsBaner from '../component/newsBaner'
import Headline from '../component/Headline'
import Category from '../component/Category'

const Main = () => {
  return (
    <>
        <Header/>
        <NewsBaner/>
        <Navbar/>
        <Category/>
        <Headline/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Main