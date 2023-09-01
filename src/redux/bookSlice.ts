import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { requestBook } from "../services/books"
import { BooksState, Book } from "../types/interfaces"

const fetchBook = createAsyncThunk("book/fetchBook", async (isbn13: string) => await requestBook(isbn13))

const initialState: BooksState = {
  loading: false,
  error: null,
  data: []
}

const bookSlice = createSlice({
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
