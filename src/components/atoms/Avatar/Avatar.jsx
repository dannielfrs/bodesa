import { Avatar as AvatarPrime } from 'primereact/avatar'
import PropTypes from 'prop-types'

export const Avatar = ({
  icon,
  image,
  imageAlt = '', // It specifies an alternate text for an image, if the image cannot be displayed.
  imageFallback, // Defines a fallback image or URL if the main image fails to load. If "default" will fallback to label then icon.
  onImageError, // This event is triggered if an error occurs while loading an image file.
  label,
  size,
  shape,
  className = ''
}) => {
  return (
    <AvatarPrime
      icon={icon}
      image={image}
      imageAlt={imageAlt}
      imageFallback={imageFallback}
      onImageError={onImageError}
      label={label}
      size={size}
      shape={shape}
      className={className}
    />
  )
}

Avatar.propTypes = {
  className: PropTypes.string
}
