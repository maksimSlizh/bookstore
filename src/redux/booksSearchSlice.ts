import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { requestSearchBooks } from "../services/books"
import { BooksState, Book } from "../types/interfaces"

const fetchBooks = createAsyncThunk("books/fetchBooks", async ({ query = '', page = 0}: {query: string}) => {
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
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false
        state.total = action.payload.total
        state.data = action.payload.books
      })
      .addCase(fetchBooks.rejected, (state, action: unknown) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})


export { fetchBooks }
export const booksSearchReducer = booksSearchSlice.reducer
