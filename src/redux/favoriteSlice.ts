import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Book } from "../types/interfaces"

const initialState = localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")!) : []

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Book>) => {
      console.log(state)
      const book = action.payload
      const existingBook = state.find((item: Book)=> item.isbn13 === book.isbn13)
      if (!existingBook) {
        state.push(book)
        localStorage.setItem("favorite", JSON.stringify(state))
      }
    },
    removeFromFavorite: (state, action: PayloadAction<Book>) => {
      const book = action.payload
      const bookId = action.payload.isbn13
      const existingIndex = state.find((item: Book) => item.isbn13 === bookId)
      if (existingIndex) {
        const result = state.filter((item: Book) => item.isbn13 !== book.isbn13)
        localStorage.setItem("favorite", JSON.stringify(result))
        return result
      }
    },
  },
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer
