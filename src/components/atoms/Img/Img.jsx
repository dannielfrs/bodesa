import Image from 'next/image'
import PropTypes from 'prop-types'

export const Img = ({
  src,
  alt = '',
  width,
  height,
  loading = 'lazy',
  onClick,
  onError,
  priority,
  style,
  className = ''
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      onClick={onClick}
      onError={onError}
      priority={priority}
      style={style}
      className={className}
    />
  )
}

Img.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string
}
