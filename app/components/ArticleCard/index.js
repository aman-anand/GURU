/**
 *
 * ArticleCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import articleimg from '../../images/articleimg.png';
import { ArticleCardContainer } from './style';

function ArticleCard() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <ArticleCardContainer color={randomColor}>
      <a href="/" className="imageBox" role="button">
        <div className="imgBox">
          <img src={articleimg} alt="" title="" />
        </div>
        <div className="bottomBox">
          <div className="icon">A</div>
          <div className="content">
            <p>
              <span>Arctile title</span>
              <span>Click to read</span>
            </p>
          </div>
        </div>
      </a>
    </ArticleCardContainer>
  );
}

ArticleCard.propTypes = {};

export default ArticleCard;
