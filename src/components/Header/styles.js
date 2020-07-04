import styled from 'styled-components/macro'

export default styled.header`
  background-color: ${props => props?.themeColors?.primary};
  margin-bottom: 1.45rem;
  #profile-picture-holder {
    border-radius: 50%;
  }
`
