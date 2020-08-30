import styled from 'styled-components/macro';
import { darken } from 'polished';

export default styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px 10px 0;
  svg {
    font-size: 2em;
    color: ${props => props?.theme?.primary?.text};
  }
  &:hover {
    svg {
      color: ${props => darken(0.2, props?.theme?.primary?.text ?? '#000')};
    }
  }
`;
