import styled from 'styled-components/macro';

export default styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props?.theme?.primary?.background};
  padding: 20px;
  & > * {
    flex: 1 0 50%;
  }
  h4 {
    color: ${props => props?.theme?.primary?.text};
    font-size: 2em;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Item = styled.a`
  svg {
    font-size: 2.5em;
    color: #a4b5b9;
  }
`;
