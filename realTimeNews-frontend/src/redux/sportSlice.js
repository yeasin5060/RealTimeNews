import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const sportSlice = createSlice({
  name: 'sportDatas',
  initialState,
  reducers: {
      setSportData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSportData} = sportSlice.actions

export default sportSlice.reducer