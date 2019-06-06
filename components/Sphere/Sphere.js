import React, {useState, useEffect} from 'react'
import throttle from 'lodash/throttle'
import isNumber from 'lodash/isNumber'
import './Sphere.scss'

export default function Sphere() {
  const [alpha, setAlpha] = useState(0)
  const [beta, setBeta] = useState(60)
  // const [gamma, setGamma] = useState(0)

  const handleRotate = throttle(({alpha, beta, gamma}) => {
    if ([alpha, beta, gamma].every(isNumber)) {
      setAlpha(alpha)
      setBeta(beta)
      // setGamma(gamma)
    }
  }, 16)

  useEffect(() => {
    window.addEventListener('deviceorientation', handleRotate)
    return () => {
      window.removeEventListener('deviceorientation', handleRotate)
    }
  })

  return (
    <div className="Sphere">
      <img
        src="/static/title.png"
        className="Sphere-titleImage"
        style={{
          transform: `rotateX(${beta / 7}deg) rotateY(${-alpha / 7}deg)`,
        }}
      />
      <div
        className="Sphere-rings"
        style={{
          transform: `rotateX(${60 + beta}deg) rotateY(${alpha + 60}deg)`,
        }}
      >
        {Array(16)
          .fill()
          .map((_, index) => (
            <div className="Sphere-ring" key={index} />
          ))}
      </div>
    </div>
  )
}
