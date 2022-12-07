import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList

  return (
    <li className="makeFlexItems">
      <div className={className}>
        <div className="tech-head">
          <h1 className="tech-type">{title}</h1>
        </div>
        <div className="tech-para">
          <p className="description">{description}</p>
        </div>
        <div className="logo">
          <img src={imgUrl} alt="logo" />
        </div>
      </div>
    </li>
  )
}

export default CardItem
