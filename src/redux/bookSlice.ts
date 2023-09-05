import { createSlice, createAsyncThunk, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit"
import { requestBook } from "../services/books"
import { BookState, Book } from "../types/interfaces"

const fetchBook = createAsyncThunk<Book, string>("book/fetchBook", async (isbn13: string) => await requestBook(isbn13))

const initialState: BookState = {
  loading: false,
  error: null,
  data: []
}

const bookSlice = createSlice<BookState, SliceCaseReducers<BookState>>({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.loading = false
        console.log(action.payload)
        state.data = action.payload
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export { fetchBook }
export const bookReducer = bookSlice.reducer
