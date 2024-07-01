import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActivePaymentModal: false,
}

export const paymentModalSlice = createSlice({
  name: 'paymentModal',
  initialState,
  reducers: {
    handlePaymentModal: (state) => {
      state.isActivePaymentModal = !state.isActivePaymentModal
    },
  },
})

export const { handlePaymentModal } = paymentModalSlice.actions

export default paymentModalSlice.reducer
