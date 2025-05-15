import React from 'react'
import HomeLetestNewsAnbTec from '../component/HomeLetestNewsAnbTec'
import PupolarNews from '../component/PupolarNews'
import SportEducationHealth from '../component/SportEducationHealth'
import PoliticsTravelInternational from '../component/PoliticsTravelInternational'

const Home = () => {
  return (
    <div>
      <HomeLetestNewsAnbTec/>
      <PupolarNews/>
      <SportEducationHealth/>
      <PoliticsTravelInternational/>
    </div>
  )
}

export default Home