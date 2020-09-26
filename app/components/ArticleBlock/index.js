/**
 *
 * ArticleBlock
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ArticleBlockContainer } from './style';

function ArticleBlock(props) {
  const { data } = props;
  const { title, readingTime, img, data: dataObject } = data || {};
  return (
    <ArticleBlockContainer>
      {title || readingTime ? (
        <div className="arcHeadting">
          <span>{title}</span>
          <span className="_small_text">{readingTime}</span>
        </div>
      ) : null}
      <div className="imgBox">
        {dataObject ? (
          <img src={img} alt="" title="" />
        ) : (
          <p>Do Not have data</p>
        )}
      </div>
    </ArticleBlockContainer>
  );
}

ArticleBlock.propTypes = {
  data: PropTypes.object,
};

export default memo(ArticleBlock);
