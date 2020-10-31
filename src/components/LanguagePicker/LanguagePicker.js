import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
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
  return (
    <Container>
      <FlagBtn type="button">
        <Image fixed={brazilFlagFixed} />
      </FlagBtn>
      <FlagBtn type="button">
        <Image fixed={usaFlagFixed} />
      </FlagBtn>
      <FlagBtn type="button">
        <Image fixed={spainFlagFixed} />
      </FlagBtn>
    </Container>
  );
};

export default LanguagePicker;
