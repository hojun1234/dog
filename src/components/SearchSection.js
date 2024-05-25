import React from 'react';
import './SearchSection.css';

function SearchSection() {
  return (
    <section id="search" className="search-section">
      <div className="container">
        <h2>질병 검색</h2>
        <div className="search-box">
          <div className="search-item">반려견</div>
          <div className="search-item">반려묘</div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;