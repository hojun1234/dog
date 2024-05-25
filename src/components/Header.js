import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="/info" className="mid">
                동물병원/매장
              </a>
            </li>
            <li>
              <a href="/hospital" className="mid">
                질병검색
              </a>
            </li>
            <li>
              <a href="/sns" className="mid">
                SNS
              </a>
            </li>
            <li>
              <a href="/join" className="join">
                회원가입
              </a>
            </li>
            <li>
              <a href="/login" className="login">
                로그인
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="/" className="logo-link">
        <img src="/HomeDog.png" alt="로고" className="logo" />
      </a>
    </header>
  )
}

export default Header
