import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { GET_BOOKS, booksReducer, getBooksSaga } from './booksSlice'
import { booksSearchReducer } from './booksSearchSlice'
import { bookReducer } from './bookSlice'
// import { cartReducer } from './cartSlice'
// import { favoriteReducer } from './favoriteSlice'

const sagaMiddleware = createSagaMiddleware()

function* sagas() {
  yield takeEvery(GET_BOOKS, getBooksSaga)
}

export const store = configureStore({
  reducer: {
    books: booksReducer,
    booksSearch: booksSearchReducer,
    book: bookReducer,
    // cart: cartReducer,
    // favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)
