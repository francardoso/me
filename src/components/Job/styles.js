import styled from 'styled-components';
import { darken } from 'polished';

export default styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 20px 0;
  .timeline-item {
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      border-radius: 100%;
      border: 5px solid ${props => props?.theme?.primary?.background};
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
  }
  &:after {
    position: absolute;
    /* content: ''; */
    width: 1px;
    height: 50%;
    bottom: -60px;
    border-right: 2px dashed black;
  }
  &:last-child {
    /* .timeline-item { */
    &:after {
      content: none;
    }
    /* } */
  }
  .job-details {
    width: 100%;
    margin-left: 45px;
    color: ${props => darken(0.5, props?.theme?.primary?.text ?? '#000')};
    h1.period-title {
      font-size: 2em;
      text-align: center;
      margin-bottom: 40px;
      font-weight: bold;
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
      > ul {
        li {
          margin: 10px 0;
        }
      }
      .techs {
        margin-top: 5px;
        display: flex;
        flex-wrap: wrap;
        span {
          font-weight: bold;
          &:not(:first-child) {
            margin-left: 5px;
          }
        }
      }
    }
  }
`;
