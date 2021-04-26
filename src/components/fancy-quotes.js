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
        graphql`
            query {
                placeholderImage: allFile(
                    filter: { sourceInstanceName: { eq: "images" } }
                ) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                fluid(maxWidth: 1200, quality: 100, duotone: { highlight: "#0066ff", shadow: "#ff6600"})
                                    {
                                    ...
                                GatsbyImageSharpFluid_withWebp
                                }
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
            fluid={image.childImageSharp.fluid}
            backgroundColor={props.bgColor}
        >
            <h2>{props.quote}</h2>
            <cite><strong>{props.author}</strong></cite>
        </BackgroundImage>
    )
}

const StyledBlockquote = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBlockquote

