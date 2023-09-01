import { configureStore } from '@reduxjs/toolkit'
import createSageMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { GET_BOOKS, booksReducer, getBooksSaga } from './booksSlice'
import { booksSearchReducer } from './booksSearchSlice.ts'
import { bookReducer } from './bookSlice'

const sagaMiddleware = createSageMiddleware()

function* sagas() {
  yield takeEvery(GET_BOOKS, getBooksSaga)
}

export const store = configureStore({
  reducer: {
    books: booksReducer,
    booksSearch: booksSearchReducer,
    book: bookReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)
