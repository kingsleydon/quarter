import React from 'react'
import './Detail.scss'

export default function Sphere() {
  const context = [
    {
      title: '展名',
      content: '一刻 数字媒体艺术（网络媒体设计）毕业设计展',
    },
    {
      title: '时间',
      content: '2019.06.15 - 2019.06.18',
    },
    {
      title: '地点',
      content: '中国广告博物馆一层',
    },
    {
      title: '学院',
      content: '动画数字与艺术学院',
    },
    {
      title: '学校',
      content: '中国传媒大学',
    },
  ]
  return (
    <div className="Detail">
      {context.map(item => (
        <div className="Detail-block" key={item.title}>
          <p className="Detail-title">{item.title}</p>
          <p className="Detail-content">{item.content}</p>
        </div>
      ))}
      <p className="Detail-acknowledgement">特别鸣谢</p>
      <div className="Detail-images sponsors">
        <img src="/static/bilibili.png" />
        <img src="/static/oppo.png" />
      </div>
      <p className="Detail-organizer">主办单位</p>
      <div className="Detail-images organizer">
        {/* <img src="/static/cuc.png" /> */}
        {/* <img src="/static/anima.png" /> */}
        <img src="/static/organizer.png" />
      </div>
    </div>
  )
}
