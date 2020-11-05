import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Container, { FlagBtn } from './styles';

const LanguagePicker = () => {
  const {
    brazilFlag: {
      childImageSharp: { fixed: brazilFlagFixed },
    },
    usaFlag: {
      childImageSharp: { fixed: usaFlagFixed },
    },
    spainFlag: {
      childImageSharp: { fixed: spainFlagFixed },
    },
  } = useStaticQuery(graphql`
    query {
      brazilFlag: file(relativePath: { eq: "brazil-flag-round-xs.png" }) {
        childImageSharp {
          fixed(width: 75, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      usaFlag: file(
        relativePath: { eq: "united-states-of-america-flag-round-xs.png" }
      ) {
        childImageSharp {
          fixed(width: 75, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      spainFlag: file(relativePath: { eq: "spain-flag-round-xs.png" }) {
        childImageSharp {
          fixed(width: 75, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { i18n } = useTranslation();

  return (
    <Container>
      <FlagBtn type="button" onClick={() => i18n.changeLanguage('pt')}>
        <Image fixed={brazilFlagFixed} />
      </FlagBtn>
      <FlagBtn type="button" onClick={() => i18n.changeLanguage('en')}>
        <Image fixed={usaFlagFixed} />
      </FlagBtn>
      <FlagBtn type="button" onClick={() => i18n.changeLanguage('es')}>
        <Image fixed={spainFlagFixed} />
      </FlagBtn>
    </Container>
  );
};

export default LanguagePicker;
