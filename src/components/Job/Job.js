import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import StyledJob from './styles';

const Job = ({ image, period, company, occupation, tasks }) => (
  <StyledJob>
    <div className="timeline-item">
      <Img fixed={image} />
    </div>
    <div className="job-details">
      <h1 className="period-title">{period}</h1>
      <h1 className="company-name">{company}</h1>
      <h3 className="job-role">{occupation}</h3>
      <div className="job-description">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <p>{task?.description}</p>
              <div className="techs">
                {task?.techs?.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </StyledJob>
);

Job.defaultProps = {
  tasks: [],
};

Job.propTypes = {
  image: PropTypes.string,
  period: PropTypes.string,
  company: PropTypes.string,
  occupation: PropTypes.string,
  tasks: PropTypes.array,
};

export default Job;
