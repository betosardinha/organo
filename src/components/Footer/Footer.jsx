import React from 'react';
import Translator from '../Translator';
import FacebookIcon from '../../images/facebook.svg';
import TwitterIcon from '../../images/twitter.svg';
import InstagramIcon from '../../images/instagram.svg';
import LogoType from '../../images/logo-type.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={FacebookIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src={TwitterIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={InstagramIcon} alt="" />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src={LogoType} alt="" />
      </section>

      <section>
        <p>
          <Translator path="footer.developed_by" />
        </p>
      </section>
    </footer>
  );
}

export default Footer;
