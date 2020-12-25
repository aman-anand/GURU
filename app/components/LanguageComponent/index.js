/**
 *
 * LanguageComponent
 *
 */

import React, { memo, useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import history from 'utils/history';
import {
  languageString,
  setSessionStoreArry,
} from '../../services/CommonSetterGetter';
import { LanguageComponentContainer } from './style';

function LanguageComponent() {
  const lang = window.sessionStorage.getItem('lang') || 'EN';
  const [language, setLanguage] = useState(lang);

  const updateLanguage = () => {
    setSessionStoreArry([{ lang: language || 'EN' }]);
    history.push('/home');
  };

  return (
    <Fragment>
      <LanguageComponentContainer className="radioWrapper">
        <label htmlFor="HI">
          <input
            type="radio"
            name="language"
            id="HI"
            value="HI"
            checked={['HI'].includes(language)}
            onClick={e => setLanguage(e.target.value)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_hindi')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="EN">
          <input
            type="radio"
            name="language"
            id="EN"
            value="EN"
            checked={['EN'].includes(language)}
            onClick={e => setLanguage(e.target.value)}
          />
          <div className="radioBox">
            <span className="title">English</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="MH">
          <input
            type="radio"
            name="language"
            id="MH"
            value="MH"
            onClick={e => setLanguage(e.target.value)}
            checked={['MH'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_marathi')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="GU">
          <input
            type="radio"
            name="language"
            id="GU"
            value="GU"
            onClick={e => setLanguage(e.target.value)}
            checked={['GU'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_gujrati')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="TA">
          <input
            type="radio"
            name="language"
            id="TA"
            value="TA"
            onClick={e => setLanguage(e.target.value)}
            checked={['TA'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_tamil')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="ML">
          <input
            type="radio"
            name="language"
            id="ML"
            value="ML"
            onClick={e => setLanguage(e.target.value)}
            checked={['ML'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_malyalam')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="TE">
          <input
            type="radio"
            name="language"
            id="TE"
            value="TE"
            onClick={e => setLanguage(e.target.value)}
            checked={['TE'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_telugu')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="BN">
          <input
            type="radio"
            name="language"
            id="BN"
            value="BN"
            onClick={e => setLanguage(e.target.value)}
            checked={['BN'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_bangla')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="OR">
          <input
            type="radio"
            name="language"
            id="OR"
            value="OR"
            onClick={e => setLanguage(e.target.value)}
            checked={['OR'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_oriya')}</span>
            <span className="icon" />
          </div>
        </label>
        <label htmlFor="AS">
          <input
            type="radio"
            name="language"
            id="AS"
            value="AS"
            onClick={e => setLanguage(e.target.value)}
            checked={['AS'].includes(language)}
          />
          <div className="radioBox">
            <span className="title">{languageString('txt_assamese')}</span>
            <span className="icon" />
          </div>
        </label>
      </LanguageComponentContainer>
      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          className="updateButton"
          onClick={() => updateLanguage()}
        >
          {languageString('txt_update_language')}
        </Button>
      </div>
    </Fragment>
  );
}

LanguageComponent.propTypes = {};

export default memo(LanguageComponent);
