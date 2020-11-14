import styled from 'styled-components';
import { darken } from 'polished';

export default styled.div``;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  margin: 20px 20px;
  color: ${props => props?.theme?.primary?.text};
  svg {
    font-size: 2em;
  }
  &:hover {
    svg {
      color: ${props => darken(0.2, props?.theme?.primary?.text ?? '#000')};
    }
  }
`;

export const MenuOptions = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${props => props?.theme?.primary?.background};
  opacity: 0.9;
  height: 100%;
  top: 0px;
  right: 0px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > * {
    margin-top: 60px;
  }
`;
