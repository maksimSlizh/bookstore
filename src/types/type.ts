import { Book } from "./interfaces"

export type RatingProps = {
  rating?: string
  isbn13?: string
}

export type PropsFavorite = {
  data: Book
}

export type PropsCardL = {
  data: Book,
  onUpdatePrice: Function
}

export type PropsBooksArray = {
  data: Book[]
}

export type CardProps = {
  data: Book
}
