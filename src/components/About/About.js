import React from 'react';
import { useThemeContext } from '../../libs/ThemeContext';

import Container from './styles';

const About = () => {
  const { colors } = useThemeContext();

  return (
    <Container themeColors={colors}>
      <h1>Um pouco sobre mim</h1>
      <p>
        Sou sociável, tranquilo e adoro uma piada ruim. Aprecio desafios que
        permitam meu crescimento como pessoa e profissional. Cultivo bons
        relacionamentos e trabalho em equipe. Valorizo novos conhecimentos,
        novas amizades, gosto de atividades diversificadas (videogames,
        boardgames, futebol, leitura e TV), e de me aventurar com novos
        projetos. Gosto de ter meus projetos pessoais para aprender novas
        tecnologias.
      </p>
    </Container>
  );
};

export default About;
