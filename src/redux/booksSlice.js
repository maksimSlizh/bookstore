import { createSlice, createAction } from '@reduxjs/toolkit'
import { put, select } from 'redux-saga/effects'
import { requestNewBooks } from '../services/books'

export function* getBooksSaga() {
  yield put(setLoading(true))
  try {
    const payload = yield requestNewBooks()
    yield put(getBooksSuccess(payload))
  } catch (error) {
    yield put(setError(error))
  }
  yield put(setLoading(false))
}

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    limit: 6,
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
    getBooksSuccess(state, action) {
      state.data = action.payload.books
    },
    setError(state, action) {
      state.error = action.payload
    }
  },
})

export const GET_BOOKS = 'books/GET_BOOKS'
export const getBooks = createAction(GET_BOOKS)

export const { setLoading, getBooksSuccess, setError } = booksSlice.actions
export const booksReducer = booksSlice.reducer
