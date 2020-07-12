import styled from 'styled-components/macro';

export const Job = styled.section`
  display: flex;
  padding: 20px;
  .timeline-item {
    border-radius: 100%;
    border: 5px solid ${props => props?.themeColors?.primary};
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .job-details {
    margin-left: 20px;
    h1.period-title {
      font-size: 2em;
      text-align: center;
    }
    .company-name {
      font-size: 1.4em;
    }
    .job-role {
      font-size: 1.2em;
    }
  }
`;

export default styled.div`
  background-color: ${props => props?.themeColors?.secundary};
  .timeline-item {
    position: relative;
    &:before {
      position: absolute;
      content: '';
      right: 0;
      width: 200px;
      height: 1px;
      background-color: black;
    }
    &:after {
      content: '';
    }
  }
`;
