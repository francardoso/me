import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
  return (
    <Container>
      <Job
        image={imgs?.mobilizaImg?.childImageSharp?.fixed}
        company="Mobiliza"
        occupation="Programador Web Full Stack"
        period="2016 - Atualmente"
        tasks={[
          {
            description:
              'Desenvolvimento de uma ferramenta de autoria, estilo power-point.',
            techs: ['Jquery', 'Backbone', 'Node'],
          },
          {
            description:
              'Desenvolvimento de uma plataforma de gestão de cursos.',
            techs: ['React', 'Redux', 'Node'],
          },
          {
            description: 'Algumas tarefas de infraestrutura, utilizando AWS.',
            techs: ['EC2', 'S3', 'Route 53', 'EKS', 'ECR'],
          },
        ]}
      />
      <Job
        image={imgs?.ufscImg?.childImageSharp?.fixed}
        company="UFSC"
        period="2015 - 2016"
        occupation="Bolsista de Iniciação Científica"
        tasks={[
          {
            description:
              'Trabalho com ferramenta analítica de Tweets, para ter um senso da opinião popular sobre questões políticas.',
            techs: ['Java', 'Angular', 'Jquery'],
          },
        ]}
      />
    </Container>
  );
};

export default Experience;
