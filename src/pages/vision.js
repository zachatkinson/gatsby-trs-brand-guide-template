import React from "react"
import Layout from "../components/layout"

import StyledBlockquote from "../components/fancy-quotes";
import SEO from "../components/seo"

const VisionPage = () => (
    <Layout>
        <SEO title="Vision Statement"/>
        <h1><strong>Vision Statement</strong></h1>
        <p>For decades, skateboard hardware has been a side product for many brands. These brands offer hardware as a
            way to complement their main product. At Philly’s, our goal is to perfect hardware as much as possible from
            old school to new school.</p>
        <p>We plan to do this by offering the largest selection of colours in the market,
            adding a collectible sticker in each pack (as well as a Philly’s brand sticker) and offering new limited
            edition colour combos each season.</p>
        <p>Our goal is to create the best value for hardware, while also keeping
            skating fresh and exciting. We work hard to keep skating alive, and know what it’s like to be on a budget
            when buying a full new set or deck.</p>
        <StyledBlockquote
            quote={`I see people with talent and all those things, but the one thing they don't have is just that love for the sake of doing it.`}
            author={`Rodney Mullen`}
            filename={`skate-practice.jpg`}
            bgColor={`#0066ff`}
            />
    </Layout>
)

export default VisionPage
