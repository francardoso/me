import styled from 'styled-components/macro';

export default styled.div`
  background-color: ${props => props?.themeColors?.primary};
  display: flex;
  & > * {
    flex: 1;
  }
  p {
    font-size: 1.8em;
    color: #4a4a4a;
    padding: 30px;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.8em;
  }
`;
