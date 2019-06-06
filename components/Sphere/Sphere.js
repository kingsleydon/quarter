import React from 'react'
import './Sphere.scss'

export default function Sphere() {
  return (
    <div className="Sphere">
      <img src="/static/title.png" className="Sphere-titleImage" />
      <div className="Sphere-rings">
        {Array(16)
          .fill()
          .map((_, index) => (
            <div className="Sphere-ring" key={index} />
          ))}
      </div>
    </div>
  )
}
