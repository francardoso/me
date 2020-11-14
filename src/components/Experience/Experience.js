import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Job from '../Job';
import Container from './styles';

const Experience = () => {
  const imgs = useStaticQuery(graphql`
    query {
      mobilizaImg: file(relativePath: { eq: "mobiliza.png" }) {
        childImageSharp {
          fixed(width: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ufscImg: file(relativePath: { eq: "ufsc.png" }) {
        childImageSharp {
          fixed(width: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { t } = useTranslation();
  return (
    <Container>
      <Job
        image={imgs?.mobilizaImg?.childImageSharp?.fixed}
        company="Mobiliza"
        occupation={t('jobs.mobiliza.occupation')}
        period={t('jobs.mobiliza.period')}
        tasks={[
          {
            description: t('jobs.mobiliza.tasks.0.description'),
            techs: ['Jquery', 'Backbone', 'Node'],
          },
          {
            description: t('jobs.mobiliza.tasks.1.description'),
            techs: ['React', 'Redux', 'Node'],
          },
          {
            description: t('jobs.mobiliza.tasks.2.description'),
            techs: ['EC2', 'S3', 'Route 53', 'EKS', 'ECR'],
          },
        ]}
      />
      <Job
        image={imgs?.ufscImg?.childImageSharp?.fixed}
        company="UFSC"
        period="2015 - 2016"
        occupation={t('jobs.ufsc.occupation')}
        tasks={[
          {
            description: t('jobs.ufsc.tasks.0.description'),
            techs: ['Java', 'Angular', 'Jquery'],
          },
        ]}
      />
    </Container>
  );
};

export default Experience;
