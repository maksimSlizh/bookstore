import { client } from '../utils/client'
import { newBooksEndpoint, bookEndpoint, searchEndpoint } from '../api'
import { BooksResponse, Book, Books } from '../types/interfaces'

export const requestNewBooks = async (): Promise<BooksResponse> => {
  const { data } = await client.get(newBooksEndpoint)
  return data
}

export const requestSearchBooks = async ({ query = ''}: { query: string}): Promise<Books> => {
  const { data } = await client.get(searchEndpoint + query)
  return data
}

export const requestBook = async (isbn13: string): Promise<Book> => {
  const { data } = await client.get(bookEndpoint + isbn13)
  return data
}

