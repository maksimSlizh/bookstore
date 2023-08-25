import { client } from '../utils/client'
import { newBooksEndpoint, booksEndpoint, searchEndpoint } from '../api'
import { BooksResponse, Books } from '../types/interfaces'

export const requestNewBooks = async (): Promise<BooksResponse> => {
  const { data } = await client.get(newBooksEndpoint)
  return data
}

export const requestSearchBooks = async ({ query = '' }: { query: string }): Promise<Books> => {
  const { data } = await client.get(`${searchEndpoint}${query}`)
  return data
}

