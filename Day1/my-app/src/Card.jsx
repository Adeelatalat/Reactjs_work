import avatar from './assets/avatar.jpg'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={avatar} alt="profile Pic" className='card-image' />
      <h2 className='title'>{props.title} {props.isStudent ? "yes" : "No"} </h2>
      <p className='text'>I am Adeela Talat and I want to become Mern Developer </p>
    </div>
  )
}
Card.ProtoTypes = {
  name : PropTypes.string,
  isStudent : PropTypes.boolean
}
Card.defaultProps = {
  title : "Adeela",
  isStudent : true
}

export default Card
