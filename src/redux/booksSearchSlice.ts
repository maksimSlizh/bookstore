import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { requestSearchBooks } from "../services/books"
import { BooksState, BooksResponse } from "../types/interfaces"

const fetchBooks = createAsyncThunk("books/fetchBooks", async ({ query = '', page = 1}: {query: string, page: number}) => {
  const response = await requestSearchBooks({query, page})
  return response
})

const initialState: BooksState = {
  loading: false,
  error: null,
  page: 1,
  total: 0,
  data: []
}

const booksSearchSlice = createSlice({
  name: "booksSearch",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.loading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<BooksResponse>) => {
        state.loading = false
        state.total = action.payload.total
        state.data = action.payload.books
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})


export { fetchBooks }
export const booksSearchReducer = booksSearchSlice.reducer
