import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const technologySlice = createSlice({
  name: 'technologyDatas',
  initialState,
  reducers: {
      setTechnologyData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setTechnologyData} = technologySlice.actions

export default technologySlice.reducer