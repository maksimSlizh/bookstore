import { AxiosResponse } from 'axios'
import { client } from '../utils/client'
import { newBooksEndpoint, bookEndpoint, searchEndpoint } from '../api'
import { BooksResponse, Book} from '../types/interfaces'

export const requestNewBooks = async (сurrentPage: number): Promise<BooksResponse> => {
  const { data }: AxiosResponse<BooksResponse> = await client.get(newBooksEndpoint)
  return data
}

export const requestSearchBooks = async ({ query = '', page = ''}: { query: string,}): Promise<Book> => {
  const { data }: AxiosResponse<Book> = await client.get(searchEndpoint + query + `/${page}`)
  return data
}

export const requestBook = async (isbn13: string): Promise<Book> => {
  const { data }: AxiosResponse<Book> = await client.get(bookEndpoint + isbn13)
  return data
}

