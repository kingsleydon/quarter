import React from 'react'
import './Detail.scss'

export default function Sphere() {
  return (
    <div className="Detail">
      <div className="Detail-invite">邀请函</div>
      <div className="Detail-title">
        2015 中国传媒大学
        <br />
        数字媒体艺术（网络媒体设计）专业
      </div>
      <div className="Detail-subtitle">毕业设计展</div>
      <div className="Detail-divider" />
      <div className="Detail-address">
        2019.06.15 - 06.18
        <br />
        中国传媒大学 中国广告博物馆一层
      </div>
      <div className="Detail-contact">
        联系我们：
        <a href="tel:15001238559">15001238559</a>
        <a href="tel:17610223270">17610223270</a>
      </div>

      <div className="Detail-extra">
        <div className="Detail-extraContent">
          <div className="Detail-extraTitle">特别鸣谢</div>
          <div className="Detail-images sponsors">
            <img src="https://audio-tuna.oss-cn-beijing.aliyuncs.com/digitalart/iqiyi.png" />
            <span className="Detail-imagesDivider">|</span>
            <img src="https://audio-tuna.oss-cn-beijing.aliyuncs.com/digitalart/oppo.png" />
          </div>
        </div>
        <div className="Detail-extraContent">
          <div className="Detail-extraTitle">主办单位</div>
          <div className="Detail-images organizer">
            <img src="https://audio-tuna.oss-cn-beijing.aliyuncs.com/digitalart/organizer.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
