import styled from 'styled-components/macro';
import { lighten } from 'polished';

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
    color: ${props => props?.themeColors?.primary};
  }
  &:hover {
    color: ${props => lighten(0.2, '#000')};
  }
`;
