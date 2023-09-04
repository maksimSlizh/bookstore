import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const book = action.payload
      const existingBook = state.find(item => item.isbn13 === book.isbn13)
      if (!existingBook) {
        const result = [...state, book]
        localStorage.setItem("basket", JSON.stringify(result))
        console.log(result)
        return result
      }
      return state
    },
    removeFromBasket: (state, action) => {
      const book = action.payload
      const result = state.filter((item) => item.isbn13 !== book.isbn13)
      localStorage.setItem("basket", JSON.stringify(result))
      return result
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions
export const basketReducer = basketSlice.reducer
