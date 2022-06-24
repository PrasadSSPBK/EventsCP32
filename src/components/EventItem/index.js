import './index.css'

const EventItem = props => {
  const {eventsList, onClickEventItemImg, isActiveTab} = props

  const {imageUrl, name, location, id, registrationStatus} = eventsList

  const activeClassName = isActiveTab ? 'active' : null

  const onClickEventImg = () => {
    onClickEventItemImg(id, registrationStatus)
  }
  return (
    <li className="EventItemContainer">
      <button
        type="button"
        onClick={onClickEventImg}
        className={` btn ${activeClassName}`}
      >
        <img src={imageUrl} alt="event" className="eventImg" />
      </button>
      <p className="eventHeading">{name}</p>
      <p className="eventPara">{location}</p>
    </li>
  )
}
export default EventItem
