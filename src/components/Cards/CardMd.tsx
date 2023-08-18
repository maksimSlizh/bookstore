export function CardMd({books}) {
  return (
    <div className="card " style={{ width: '18rem' }}>
      <img src={books.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{books.title}</h5>
        <p className="card-text">{books.subtitle}</p>
        <div className="card-footer d-flex justify-content-between">
          <div className="card-footer-item">{books.price}</div>
          <div className="card-footer-item">Quantity</div>
        </div>
      </div>
    </div>
  )
}
