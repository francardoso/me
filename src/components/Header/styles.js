import styled from 'styled-components/macro';

export default styled.header`
  background-color: ${props => props?.theme?.secundary?.background};
  color: ${props => props?.theme?.secundary?.text};
  margin-bottom: 1.45rem;
  display: flex;
  align-items: center;
  margin: 0;
  #profile-picture-holder {
    border-radius: 100%;
    background-color: ${props => props?.theme?.primary?.background};
    width: 250px;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  h1 {
    font-size: 3em;
    color: #fff;
    margin-left: 10px;
  }
`;
