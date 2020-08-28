import React from 'react';
import Icon from '../Icon';

import Container, { Item, Items } from './styles';

const Contact = () => (
  <Container>
    <h4>Você pode me encontrar por aqui:</h4>
    <Items>
      <Item href="https://github.com/francardoso">
        <Icon icon="faGithub" />
      </Item>
      <Item href="https://www.linkedin.com/in/fran-cardoso-7074b0122">
        <Icon icon="faLinkedin" />
      </Item>
      <Item href="mailto:fran.adalid@hotmail.com">
        <Icon icon="faEnvelope" />
      </Item>
    </Items>
  </Container>
);

export default Contact;
