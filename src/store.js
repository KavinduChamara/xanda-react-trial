import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'

const store = configureStore({
  reducer: {
    cartItems: cartReducer
  },
})

export default store