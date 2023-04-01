import React from 'react';

import {
  Container,
  Image,
  Content,
  Number,
  Title,
  Teaser,
} from '../styles/Article.styles';

interface ArticleProps {
  index: number;
  name: string;
  description: string;
  imageFile: string;
}

function Article({ index, name, description, imageFile }: ArticleProps) {
  return (
    <Container>
      <Image src={`${imageFile}`} alt='' />
      <Content>
        <Title>
          <Number>{String(index).padStart(2, '0')}</Number>
          {name}
        </Title>
        <Teaser>{description}</Teaser>
      </Content>
    </Container>
  );
}

export default Article;
