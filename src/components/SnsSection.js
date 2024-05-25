import React from 'react'
import './SnsSection.css'

function SnsSection() {
  return (
    <section id="sns" className="sns-section">
      
      <div className="container">
        <h2 className='SNS'>SNS</h2>
        <img src="/Sns.png" alt="로고" className="Sns-logo" />
        <ul>
          <li>강아지 건강검진 사전예약 개시</li>
          <li>병원 후기 이벤트</li>
          <li>새로운 병원 위치 안내</li>
          <li>다양한 할인 쿠폰 제공</li>
          <li>애완동물 건강 관리 팁</li>
        </ul>      
      </div>
    </section>
    
  )
}

export default SnsSection
