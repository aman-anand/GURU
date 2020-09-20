/**
 *
 * ArticleCard
 *
 */

import React, { memo } from 'react';
import articleimg from '../../images/articleimg.png';
import { ArticleCardContainer } from './style';

function ArticleCard(props) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const { dataOBJ } = props || {};
  // eslint-disable-next-line no-unused-vars
  const { img, title, _id } = dataOBJ || {};
  const [first] = title.split('');
  return (
    <ArticleCardContainer color={randomColor} className="arcticalCardWrapper">
      <a href={`/articles/${_id}`} className="imageBox" role="button">
        <div className="imgBox">
          <img src={img || articleimg} alt="" title="" />
        </div>
        <div className="bottomBox">
          <div className="icon">{first}</div>
          <div className="content">
            <p>
              <span>{title}</span>
              <span>Click to read</span>
            </p>
          </div>
        </div>
      </a>
    </ArticleCardContainer>
  );
}

ArticleCard.propTypes = {};

export default memo(ArticleCard);
