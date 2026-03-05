import React from 'react'

interface Props {
  containerClassName?: string
  innerCircleClassName?: string
  middleCircleClassName?: string
  outerCircleClassName?: string
  boxShadow?: string
}

const CirclePattern: React.FC<Props> = ({
  containerClassName,
  innerCircleClassName,
  middleCircleClassName,
  outerCircleClassName,
  boxShadow
}) => {
  return (
    <div className={`${containerClassName} absolute`}>
      <div
        className={`${outerCircleClassName} flex items-center justify-center rounded-full shrink-0`}
        style={{ boxShadow }}
      >
        <div
          className={`${middleCircleClassName} flex items-center justify-center rounded-full shrink-0`}
          style={{ boxShadow }}
        >
          <div
            className={`${innerCircleClassName} content-center rounded-full shrink-0`}
            style={{ boxShadow }}
          />
        </div>
      </div>
    </div>)
}

export default CirclePattern