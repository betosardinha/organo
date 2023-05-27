import React from 'react';
import BannerImg from '../../images/banner.svg';
import './Banner.css';

function Banner() {
  return (
    <header className="banner">
      <img src={BannerImg} alt="Organo Banner" />
    </header>
  );
}

export default Banner;
