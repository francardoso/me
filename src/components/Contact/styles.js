import styled from 'styled-components/macro';

export default styled.div`
  display: flex;
  background-color: ${props => props.theme.primary};
  & > * {
    flex: 1 0 50%;
  }
  h4 {
    font-size: 2em;
  }
`;

export const Items = styled.div`
  display: flex;
`;

export const Item = styled.a`
  svg {
    font-size: 2em;
    color: #a4b5b9;
  }
`;
