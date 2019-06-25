import React from 'react';
import '../partials/footer.scss';
import twitter from '../images/twitter.png';
import flickr from '../images/flickr.png';
import vimeo from '../images/vimeo.png';
import pinterest from '../images/pinterest.png';

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <span>Copyright 2019 | All rights Reserved. - Restaurant & Wine</span>
        <div className="images">
          <img src={twitter} alt="twit"/>
          <img src={flickr} alt="flick"/>
          <img src={vimeo} alt="vim"/>
          <img src={pinterest} alt="pint"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;