import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const educationSlice = createSlice({
  name: 'educationDatas',
  initialState,
  reducers: {
      setEducationData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setEducationData} = educationSlice.actions

export default educationSlice.reducer