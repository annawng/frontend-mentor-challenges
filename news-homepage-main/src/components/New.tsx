import React from 'react';

import { Container, Heading, Title, Teaser, Line } from '../styles/New.styles';

function New() {
  return (
    <Container>
      <Heading>New</Heading>
      <article>
        <Title>Hydrogen VS Electric Cars</Title>
        <Teaser>Will hydrogen-fueled cars ever catch up to EVs?</Teaser>
      </article>
      <Line />
      <article>
        <Title>The Downsides of AI Artistry</Title>
        <Teaser>
          What are the possible adverse effects of on-demand AI image
          generation?
        </Teaser>
      </article>
      <Line />
      <article>
        <Title>Is VC Funding Drying Up?</Title>
        <Teaser>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </Teaser>
      </article>
    </Container>
  );
}

export default New;
