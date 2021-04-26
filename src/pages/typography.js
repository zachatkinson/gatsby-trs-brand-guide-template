import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FontSwatch from "../components/font-swatch"

/*Input Font Family Data Here, if you have multiple families
use multiple constants to hold them */
const mainFonts = [
    {
        name: `Futura Regular`,
    },
    {
        name: `Futura Bold`,
        weight: `700`,
    },
    {
        name: `Futura Italic`,
        italic: `italic`,
    },
    {
        name: `Futura Bold Italic`,
        weight: `700`,
        italic: `italic`
    },
]

const TypePage = () => (
    <Layout>
        <SEO title="Typography"/>
        <h1><strong>Typography</strong></h1>
        <div className={`typography-wrap`}>
            <div className={`typography-description`}>
                <h2><strong>Futura</strong></h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).</p>
            </div>
            <div className={`typography-display`}>
                {mainFonts.map(font => (
                    <FontSwatch name={font.name} weight={font.weight} italic={font.italic}/>
                ))}
            </div>
        </div>
    </Layout>
)

export default TypePage
