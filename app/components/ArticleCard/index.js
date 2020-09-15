/**
 *
 * ArticleCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import articleimg from '../../images/articleimg.png';
import { ArticleCardContainer } from './style';

function ArticleCard(props) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const { dataOBJ } = props || {};
  const { img, title } = dataOBJ || {};
  const [first] = title.split('');
  return (
    <ArticleCardContainer color={randomColor}>
      <a href="/" className="imageBox" role="button">
        <div className="imgBox">
          <img src={img} alt="" title="" />
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

export default ArticleCard;
