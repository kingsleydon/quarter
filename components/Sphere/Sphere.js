import React from 'react'
import './Sphere.scss'

export default function Sphere(props) {
  return (
    <div className={`Sphere ${props.pageState ? 'small' : 'large'}`}>
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
