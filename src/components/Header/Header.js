import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import Container from './styles';

const Header = ({ siteTitle }) => {
  const imgData = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "fran.png" }) {
        childImageSharp {
          fixed(width: 150, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Container>
      <div id="profile-picture-holder">
        <Img fixed={imgData?.placeholderImage?.childImageSharp?.fixed} />
      </div>
      <h1>Oi, eu sou o Fran!</h1>
    </Container>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
