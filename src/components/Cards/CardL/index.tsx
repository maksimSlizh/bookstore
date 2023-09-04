import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../../../redux/basketSlice'
export function CardL ({data}) {
  const dispatch = useDispatch()
  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(data))
  }
  return (
    <div className="card">
      <div className="col">
        <img src={data.image} className="card__img" alt="" />
      </div>
      <div className="col">
        <div className="col">
          <h3 className="card__title">{data.title}</h3>
          <p className="card__info">{data.authors} {data.publisher}</p>
          <div className="card__count">
            <button className="card__button">minus</button>
            <span className="card__count-value">0</span>
            <button className="card__button">plus</button>
          </div>
        </div>
        <div className="col">
          <h2 className="card__price">{data.price}</h2>
          <button className="card__button" onClick={handleRemoveFromBasket}>Close</button>
        </div>
      </div>
    </div>
  )
}
