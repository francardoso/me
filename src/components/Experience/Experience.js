import React from 'react';

import { useThemeContext } from '../../libs/ThemeContext';

const Experience = () => {
  const { colors } = useThemeContext();
  return (
    <div>
      <section>
        <h1>Mobiliza</h1>
        <h3>Programador Web Full Stack</h3>
        <div>
          <ul>
            <li>
              Desenvolvimento de uma ferramenta de autoria, estilo power-point.
              Front-end: Jquery, backbone. Backend: Node.
            </li>
            <li>
              Desenvolvimento de uma plataforma de gestão de cursos. Backend:
              Node. Frontend: React/redux.
            </li>
            <li>
              Algumas tarefas de infraestrutura, utilizando AWS (EC2, S3, Route
              53).
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;
