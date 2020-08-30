import styled from 'styled-components/macro';
import { darken } from 'polished';

export default styled.div`
  background-color: ${props => props?.theme?.primary?.background};
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    flex: 1 0 45%;
    margin: 20px;
  }
  p {
    font-size: 1.8em;
    color: #4a4a4a;
    color: ${props => props?.theme?.primary?.text};
  }
  h1 {
    font-size: 3.8em;
    color: ${props => darken(0.5, props?.theme?.primary?.text ?? '#000')};
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
