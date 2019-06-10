import React from 'react'
import Sphere from '../components/Sphere'
import Detail from '../components/Detail'
import './index.scss'

export default function App(props) {
  function preventWeChatBowserDefault(e) {
    if (e.cancelable) {
      if (!e.defaultPrevented) {
        e.preventDefault()
      }
    }
  }
  return (
    <div
      className="App"
      onTouchStart={props.touchStart}
      onTouchEnd={props.touchEnd}
      onTouchMove={preventWeChatBowserDefault}
    >
      <Sphere pageState={props.pageState} />
      {props.pageState ? (
        <Detail />
      ) : (
        <div className="next">
          <p>滑动查看您的邀请</p>
          <img src="/static/down.svg" />
        </div>
      )}
    </div>
  )
}
