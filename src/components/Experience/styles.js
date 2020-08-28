import styled from 'styled-components/macro';

export const Job = styled.div`
  display: flex;
  padding: 20px;
  .timeline-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      border-radius: 100%;
      border: 5px solid ${props => props?.theme?.primary};
    }
    /* &:before {
      position: absolute;
      content: '';
      right: -25px;
      width: 15px;
      height: 1px;
      border-top: 2px dashed black;
      top: 50%;
      transform: translateX(-50%);
    } */
    &:after {
      position: absolute;
      content: '';
      width: 1px;
      height: 55%;
      top: 78%;
      border-right: 2px dashed black;
    }
  }
  &:last-child {
    .timeline-item {
      &:after {
        content: none;
      }
    }
  }
  .job-details {
    width: 100%;
    margin-left: 45px;
    h1.period-title {
      font-size: 2em;
      text-align: center;
      margin-bottom: 40px;
    }
    .company-name {
      padding: 10px 0;
      font-size: 1.8em;
    }
    .job-role {
      font-size: 1.4em;
      text-decoration: underline;
      margin-bottom: 10px;
    }
    .job-description {
      font-size: 1.2em;
    }
  }
`;

export default styled.div`
  background-color: ${props => props?.theme?.secundary};
`;
