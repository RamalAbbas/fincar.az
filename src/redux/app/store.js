import { configureStore } from '@reduxjs/toolkit'
import paymentModalReducer from '../features/paymentModalSlice'
import mobileMenuFilterReducer from '../features/mobileMenuFilterSlice'

export const store = configureStore({
  reducer: {
    paymentModal: paymentModalReducer,
    mobileMenuFilter: mobileMenuFilterReducer,
  },
})
