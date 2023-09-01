import { Book } from "../../types/interfaces"

export function Card({ data }: Book) {
  return (
    <>
      <h1>{data.title}</h1>
      <div className="book">
        <div className="book__image">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="book__info">
          <div className="book__value">
            <p>{data.price}</p>
            <p>Raiting</p>
          </div>
          <div className="book__detailse">
            <p>Authors {data.authors}</p>
            <p>Publisher {data.publisher}</p>
            <p>Language English</p>
            <p>Format PDF</p>
            <p>Dropdown</p>
          </div>
          <button>Add to cart</button>
          <a href="#">Preview</a>
        </div>

        <div className="book__toggle">
          <p>{data.desc}</p>
        </div>
      </div>
    </>
  )
}
