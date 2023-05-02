import React from 'react';

import Article from './Article';
import { HiddenH2 } from '../styles/GlobalStyles';

interface ArticleInfo {
  name: string;
  description: string;
  imageFile: string;
}

const articleList: ArticleInfo[] = [
  {
    name: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
    imageFile: 'image-retro-pcs.jpg',
  },
  {
    name: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
    imageFile: 'image-top-laptops.jpg',
  },
  {
    name: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
    imageFile: 'image-gaming-growth.jpg',
  },
];

function Articles() {
  return (
    <>
      <HiddenH2>Articles</HiddenH2>
      {articleList.map((article: ArticleInfo, index: number) => (
        <Article
          key={index + 1}
          index={index + 1}
          name={article.name}
          description={article.description}
          imageFile={article.imageFile}
        />
      ))}
    </>
  );
}

export default Articles;
