import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const healthSlice = createSlice({
  name: 'healthDatas',
  initialState,
  reducers: {
      setHealthData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setHealthData} = healthSlice .actions

export default healthSlice.reducer