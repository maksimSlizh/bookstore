import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../types/interfaces'

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')!) : []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      const book = action.payload
      const existingBook = state.find((item: Book) => item.isbn13 === book.isbn13)
      if (!existingBook) {
        const result = [...state, book]
        localStorage.setItem('cart', JSON.stringify(result))
        return result
      }
      return state
    },
    removeFromCart: (state, action) => {
      const book = action.payload
      const result = state.filter((item: Book) => item.isbn13 !== book.isbn13)
      localStorage.setItem('cart', JSON.stringify(result))
      return result
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
