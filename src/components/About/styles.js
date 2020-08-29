import styled from 'styled-components/macro';
import { darken } from 'polished';

export default styled.div`
  background-color: ${props => props?.theme?.primary?.background};
  display: flex;
  & > * {
    flex: 1;
  }
  p {
    font-size: 1.8em;
    color: #4a4a4a;
    padding: 30px;
    color: ${props => props?.theme?.primary?.text};
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.8em;
    color: ${props => darken(0.5, props?.theme?.primary?.text ?? '#000')};
  }
`;
