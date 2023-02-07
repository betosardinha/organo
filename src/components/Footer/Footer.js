import FacebookIcon from '../../images/facebook.png';
import TwitterIcon from '../../images/twitter.png';
import InstagramIcon from '../../images/instagram.png';
import Logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
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
        <img src={Logo} alt="" />
      </section>

      <section>
        <p> Desenvolvido por Alberto Sardinha. </p>
      </section>
    </footer>
  );
}

export default Footer;