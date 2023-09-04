import { CardL } from "../Cards/CardL/index"

export function LongLayout({ data }) {
  console.log(data)
  function renderCards() {
    return data.map((books: Books) => (
      <CardL key={books.isbn13} data={books} />
    ))
  }
  return (
    <div className="d-flex flex-column">
      {renderCards()}
    </div>
  )
}
