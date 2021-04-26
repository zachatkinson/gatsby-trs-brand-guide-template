import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import StyledBlockquote from "../components/fancy-quotes";

const MissionPage = () => (
    <Layout>
        <SEO title="Mission Statement"/>
        <h1><strong>Mission Statement</strong></h1>
        <p>Being skaters ourselves, we know that the customization of a complete skateboard is what truly identifies us
            from others. With never ending colours, brands and graphics available in decks, wheels, trucks, bearings,
            and even grip tape, it seemed one thing was missing from the complete set up, Hardware. Here at Philly’s we
            offer a large amount of coloured hardware in both Allen and Philips head without a large cost. We believe a
            custom set up should be completely unique and the hardware you choose should be no exception.</p>
        <StyledBlockquote
            quote={`All skateboarding is, is putting ideas into action.`}
            author={`Marc Johnson`}
            filename={`air-grab.jpg`}
            bgColor={`#0066ff`}
        />

    </Layout>
)

export default MissionPage
