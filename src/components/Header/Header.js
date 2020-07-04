import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import { useThemeContext } from '../../libs/ThemeContext'

import Container from './styles'

const Header = ({ siteTitle }) => {
  const { colors } = useThemeContext()
  console.log('foo theme', colors)
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
  `)
  return (
    <Container themeColors={colors}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div id="profile-picture-holder">
        <Img fixed={imgData?.placeholderImage?.childImageSharp?.fixed} />
      </div>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
