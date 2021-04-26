import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "../styles/background-image.min.css"

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

const BackgroundSection = ({className}) => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "air-grab.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1200,   quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    if (!data?.image?.childImageSharp?.fluid) {
        return <div>Background image not found</div>
    }

    return (
        <BackgroundImage
            Tag="section"
            className={`bg-img ` + className}
            fluid={data.image.childImageSharp.fluid}
            backgroundColor={`#ffffff`}
        >
            <h2>I see people with talent and all those things, but the one thing they don't have is just that love for the sake of doing it</h2>
        </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection

