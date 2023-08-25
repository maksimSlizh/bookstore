import { Book } from "../../types/interfaces"

export function CardMd({book}: {book: Book}) {
  return (
    <div className="card " style={{ width: '18rem' }}>
      <img src={book.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.subtitle}</p>
        <div className="card-footer d-flex justify-content-between">
          <div className="card-footer-item">{book.price}</div>
          <div className="card-footer-item">Quantity</div>
        </div>
      </div>
    </div>
  )
}
