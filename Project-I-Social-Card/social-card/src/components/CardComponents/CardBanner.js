import React from 'react';
import './Card.css';

export default function CardBanner() {
  return (
    <div>
      <a className="banner-container wrapper" href="https://reactjs.org">
          <img 
            src="https://ibin.co/3wnC6SgIOJud.png" 
            className="banner-img" 
            alt="react logo"
          />
      </a>
    </div>
  )
}
