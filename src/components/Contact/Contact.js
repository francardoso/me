import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon';

import Container, { Item, Items } from './styles';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h4>{t('youCanFindMeHere')}</h4>
      <Items>
        <Item href="https://github.com/francardoso" target="_blank">
          <Icon icon="faGithub" />
        </Item>
        <Item
          href="https://www.linkedin.com/in/fran-cardoso-7074b0122"
          target="_blank"
        >
          <Icon icon="faLinkedin" />
        </Item>
        <Item href="mailto:fran.adalid@hotmail.com" target="_blank">
          <Icon icon="faEnvelope" />
        </Item>
      </Items>
    </Container>
  );
};

export default Contact;
