import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p2>
          <strong>개인정보처리방침</strong>
        </p2>
       <p2>
        이메일추출방지정책
       </p2>
        <div className="contact-details">
          <p>
            <strong>대표:</strong> 신명진
          </p>
          <p>
            <short>|</short> 전화: 031.xxxx.xxxx
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
