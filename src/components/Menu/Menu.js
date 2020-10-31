import React, { useState, useRef } from 'react';
import Icon from '../Icon';
import { useHandleClickOutside } from '../../hooks';

import Container, { CloseButton, MenuOptions } from './styles';

const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useHandleClickOutside(ref, () => {
    setIsOpen(false);
  });
  return (
    <Container ref={ref}>
      <CloseButton
        onClick={() => setIsOpen(!isOpen)}
        {...(isOpen && { open: true })}
      >
        <Icon icon={isOpen ? 'faTimes' : 'faBars'} />
      </CloseButton>
      {isOpen && <MenuOptions>{children}</MenuOptions>}
    </Container>
  );
};

export default Menu;
