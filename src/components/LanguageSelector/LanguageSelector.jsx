import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from '../Flag';
import BrasilFlag from '../../images/brasil-flag.svg';
import EuaFlag from '../../images/eua-flag.svg';
import './LanguageSelector.css';

function LanguageSelector() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;

  return (
    <div className="flags-container">
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
      <Flag
        image={EuaFlag}
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </div>
  );
}

export default LanguageSelector;
