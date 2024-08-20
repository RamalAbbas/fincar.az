import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMobileFilterActive: false,
}

export const mobileMenuFilterSlice = createSlice({
  name: 'mobileMenuFilter',
  initialState,
  reducers: {
    handleMenuFilter: (state) => {
      state.isMobileFilterActive = !state.isMobileFilterActive
    },
  },
})

export const { handleMenuFilter } = mobileMenuFilterSlice.actions

export default mobileMenuFilterSlice.reducer