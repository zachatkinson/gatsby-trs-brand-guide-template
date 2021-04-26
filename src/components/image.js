import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({src, ...rest}) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {internal: {}, dir: {regex: "/images/"}}) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
      () => data.images.edges.find(({node}) => src === node.relativePath),
      [data, src]
  )

  if (!match) {
    return null
  }
  const { node: { childImageSharp, publicURL, extension } = {} } = match
  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} {...rest} alt={``} />
  }
  return <Img fluid={childImageSharp.fluid} {...rest} />
}
export default Image


Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
Image.defaultProps = {
  src: `placeholder-1200.png`,
  alt: ``,
}