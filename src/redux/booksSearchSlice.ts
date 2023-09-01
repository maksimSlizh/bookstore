import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { requestSearchBooks } from "../services/books"
import { BooksState, Book, BooksResponse } from "../types/interfaces"

const fetchBooks = createAsyncThunk("books/fetchBooks", async ({ query = ''}: {query: string}) => {
  const { books } = await requestSearchBooks({query})
  console.log(books)
  return books
})

const initialState: BooksState = {
  loading: false,
  error: null,
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
        state.data = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action: unknown) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})


export { fetchBooks }
export const booksSearchReducer = booksSearchSlice.reducer
