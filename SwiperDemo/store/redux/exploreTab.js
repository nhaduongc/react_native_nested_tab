import { createSlice } from '@reduxjs/toolkit'

export const exploreTabSlice = createSlice({
  name: 'exploreTab',
  initialState: {
    focusTabIndex: 0
  },
  reducers: {
    setFocusTabIndex: (state, action) => {
      state.focusTabIndex = action.payload.index
    },
  }
})

export const { setFocusTabIndex } = exploreTabSlice.actions

export default exploreTabSlice.reducer