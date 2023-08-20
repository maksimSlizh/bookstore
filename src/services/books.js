import { client } from '../utils/client'
import { newBooksEndpoint, booksEndpoint, searchEndpoint } from '../api'

export const requestNewBooks = async () => {
  const { data } = await client.get(newBooksEndpoint)
  return data
}
