import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const travelSlice = createSlice({
  name: 'travelDatas',
  initialState,
  reducers: {
      setTravelData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setTravelData} = travelSlice.actions

export default travelSlice.reducer