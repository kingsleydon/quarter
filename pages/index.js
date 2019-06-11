import React, {useState} from 'react'
import Sphere from '../components/Sphere'
import Detail from '../components/Detail'
import './index.scss'

function preventWeChatBrowserDefault(e) {
  if (e.cancelable && !e.defaultPrevented) {
    e.preventDefault()
  }
}

export default function App() {
  // 0为第一页，1为详情页
  const [page, setPage] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0)

  const switchState = len => {
    if (Math.abs(len) < 30) {
      return
    }

    if (len >= 30 && page === 1) {
      setPage(0)
    } else if (page === 0) {
      setPage(1)
    }
  }

  const touchStart = e => {
    setTouchStartY(e.touches[0].clientY)
  }

  const touchEnd = e => {
    const touchEndY = e.changedTouches[0].clientY
    const len = touchEndY - touchStartY
    switchState(len)
  }

  return (
    <div
      className="App"
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onTouchMove={preventWeChatBrowserDefault}
    >
      <Sphere size={page === 0 ? 'large' : 'small'} />
      {page === 1 ? (
        <Detail />
      ) : (
        <div className="next">
          <div>滑动查看您的邀请</div>
          <img src="https://audio-tuna.oss-cn-beijing.aliyuncs.com/digitalart/down.svg" />
        </div>
      )}
    </div>
  )
}
