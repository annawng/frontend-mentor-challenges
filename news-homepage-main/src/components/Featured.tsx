import React from 'react';

import {
  Article,
  Image,
  Content,
  Div,
  Title,
  Teaser,
  Button,
} from '../styles/Featured.styles';
import { HiddenH2 } from '../styles/GlobalStyles';

function Featured() {
  return (
    <>
      <HiddenH2>Featured</HiddenH2>
      <Article>
        <Image />
        <Content>
          <Title>The Bright Future of Web 3.0?</Title>
          <Div>
            <Teaser>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </Teaser>
            <Button>Read more</Button>
          </Div>
        </Content>
      </Article>
    </>
  );
}

export default Featured;
