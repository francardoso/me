import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { useThemeContext } from '../../libs/ThemeContext';

import Container, { Job } from './styles';

const Experience = () => {
  const { colors } = useThemeContext();
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
    <Container themeColors={colors}>
      <Job className="job" themeColors={colors}>
        <div className="timeline-item">
          <Img fixed={imgs?.mobilizaImg?.childImageSharp?.fixed} />
        </div>
        <div className="job-details">
          <h1 className="period-title">2016 - Atualmente</h1>
          <h1 className="company-name">Mobiliza</h1>
          <h3 className="job-role">Programador Web Full Stack</h3>
          <div className="job-description">
            <ul>
              <li>
                Desenvolvimento de uma ferramenta de autoria, estilo
                power-point. Front-end: Jquery, backbone. Backend: Node.
              </li>
              <li>
                Desenvolvimento de uma plataforma de gestão de cursos. Backend:
                Node. Frontend: React/redux.
              </li>
              <li>
                Algumas tarefas de infraestrutura, utilizando AWS (EC2, S3,
                Route 53).
              </li>
            </ul>
          </div>
        </div>
      </Job>
      <Job className="job" themeColors={colors}>
        <div className="timeline-item">
          <Img fixed={imgs?.ufscImg?.childImageSharp?.fixed} />
        </div>
        <div className="job-details">
          <h1 className="period-title">2015 - 2016</h1>
          <h1 className="company-name">UFSC</h1>
          <h3 className="job-role">Bolsista de Iniciação Científica</h3>
          <div className="job-description">
            <ul>
              <li>
                Trabalho com ferramenta analítica de Tweets, para ter um senso
                da opinião popular sobre questões políticas . <br />
                Backend em Java, e frontend Angular + Jquery.
              </li>
            </ul>
          </div>
        </div>
      </Job>
    </Container>
  );
};

export default Experience;
