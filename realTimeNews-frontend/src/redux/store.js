import { configureStore } from '@reduxjs/toolkit'
import  educationSlice  from './educationSlice'
import  healthSlice  from './healthSlice'
import sportSlice  from './sportSlice'
import technologySlice from './technologySlice'
import travelSlice  from './travelSlice'


export const store = configureStore({
  reducer: {
    educationDatas : educationSlice,
    healthDatas : healthSlice,
    sportDatas : sportSlice,
    technologyDatas : technologySlice,
    travelDatas : travelSlice
  },
})