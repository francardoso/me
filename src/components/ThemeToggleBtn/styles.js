import styled from 'styled-components/macro';
import { darken } from 'polished';

export default styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
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
