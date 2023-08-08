import { StyledFooter } from '../styles/Footer.styles';

import logo from '../assets/logo.svg';
import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';
import instagramIcon from '../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} />
      <div>
        <h3>Features</h3>
        <ul>
          <li>
            <a>Link Shortening</a>
          </li>
          <li>
            <a>Branded Links</a>
          </li>
          <li>
            <a>Analytics</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Developers</a>
          </li>
          <li>
            <a>Support</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <img src={facebookIcon} alt='' />
        <img src={twitterIcon} alt='' />
        <img src={pinterestIcon} alt='' />
        <img src={instagramIcon} alt='' />
      </div>
    </StyledFooter>
  );
};

export default Footer;
