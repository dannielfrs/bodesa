import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Avatar } from '@/components/atoms/Avatar'

export const CardEmployee = ({
  key,
  avatar,
  name,
  jobPosition,
  date,
  location,
  className = ''
}) => {
  return (
    <div className={`${styles.card} ${className}`} key={key}>
      <div>
        <Avatar
          image={avatar}
          imageAlt='profile picture'
          imageFallback='/images/avatar/default_user.jpg'
          shape='circle'
          size='large'
        />
      </div>
      <div>{name}</div>
      <div>{jobPosition}</div>
      <div>{date}</div>
      <div>{location}</div>
    </div>
  )
}

CardEmployee.propTypes = {
  className: PropTypes.string
}
