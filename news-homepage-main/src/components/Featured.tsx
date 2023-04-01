import React from 'react';

import { Article, Title, Teaser, Button } from '../styles/Featured.styles';
import mobileImage from '../assets/image-web-3-mobile.jpg';
import { HiddenH2 } from '../styles/GlobalStyles';

function Featured() {
  return (
    <>
      <HiddenH2>Featured</HiddenH2>
      <Article>
        <img src={mobileImage} alt='' />
        <Title>The Bright Future of Web 3.0?</Title>
        <Teaser>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </Teaser>
        <Button>Read more</Button>
      </Article>
    </>
  );
}

export default Featured;
