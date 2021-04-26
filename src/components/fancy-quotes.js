import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "../styles/fancy-quotes.min.css"

import BackgroundImage from 'gatsby-background-image'

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

const BackgroundSection = (props, {className}) => {
    const data = useStaticQuery(
        graphql`{
  placeholderImage: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(
            quality: 100
            transformOptions: {duotone: {highlight: "#0066ff", shadow: "#ff6600"}}
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
}
`
    );
    const image = data.placeholderImage.edges.find(
        ({ node }) => node.relativePath === props.filename
    ).node;
    if (!image) {
        return null;
    }

    return (
        <BackgroundImage
            Tag="blockquote"
            className={`quote-image ` + className}
            fluid={image.childImageSharp.gatsbyImageData}
            backgroundColor={props.bgColor}
        >
            <h2>{props.quote}</h2>
            <cite><strong>{props.author}</strong></cite>
        </BackgroundImage>
    );
}

const StyledBlockquote = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBlockquote

