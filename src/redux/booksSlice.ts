import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects'
import { requestNewBooks } from '../services/books'
import { BooksState, Books, BooksResponse } from '../types/interfaces'

const initialState: BooksState = {
  loading: false,
  error: null,
  data: []
}

export function* getBooksSaga() {
  yield put(setLoading(true))
  try {
    const payload: BooksResponse = yield requestNewBooks()
    yield put(getBooksSuccess(payload.books))
  } catch (error: unknown) {
    yield put(setError(error as string || null))
  }
  yield put(setLoading(false))
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    getBooksSuccess(state, action: PayloadAction<Books[]>) {
      state.data = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    }
  },
})

export const GET_BOOKS = 'books/GET_BOOKS'
export const getBooks = createAction(GET_BOOKS)

export const { setLoading, getBooksSuccess, setError } = booksSlice.actions
export const booksReducer = booksSlice.reducer
