import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from './styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div>
        <h1>{t('aLittleAboutMe')}</h1>
      </div>
      <div>
        <p>{t('aLittleAboutMeDetails')}</p>
      </div>
    </Container>
  );
};

export default About;
