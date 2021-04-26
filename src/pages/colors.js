import React from "react"

import ColorSwatch from "../components/color-swatch";
import Layout from "../components/layout"
import SEO from "../components/seo"

const primaryColors = [
    {
        name: `Phillys Orange`,
        hex: `#ff6600`,
        red: 255,
        green: 102,
        blue: 0,
        cyan: `0%`,
        magenta:`60%`,
        yellow: `100%`,
        black: `0%`,

    },
    {
        name: `Phillys Blue`,
        hex: `#0066ff`,
        red: 0,
        green: 102,
        blue: 255,
        cyan: `100%`,
        magenta:`60%`,
        yellow: `0%`,
        black: `0%`,

    },
    {
        name: `White`,
        hex: `#ffffff`,
        red: 255,
        green: 255,
        blue: 255,
        cyan: `0%`,
        magenta:`0%`,
        yellow: `0%`,
        black: `0%`,

    },
    {
        name: `Black`,
        hex: `#000000`,
        red: 0,
        green: 0,
        blue: 0,
        cyan: `75%`,
        magenta:`68%`,
        yellow: `67%`,
        black: `90%`,

    },

]

const secondaryColors = [
    {
        name: `Tenne`,
        hex: `#bf4d00`,
        red: 191,
        green: 77,
        blue: 0,
        cyan: `0%`,
        magenta:`45%`,
        yellow: `75%`,
        black: `25%`,

    },
    {
        name: `Saddle Brown`,
        hex: `#803300`,
        red: 128,
        green: 51,
        blue: 0,
        cyan: `0%`,
        magenta:`30%`,
        yellow: `50%`,
        black: `50%`,

    },
    {
        name: `Brown`,
        hex: `#401a00`,
        red: 64,
        green: 26,
        blue: 0,
        cyan: `0%`,
        magenta:`15%`,
        yellow: `25%`,
        black: `75%`,

    },
    {
        name: `Persimmon`,
        hex: `#e65c00`,
        red: 230,
        green: 92,
        blue: 0,
        cyan: `0%`,
        magenta:`54%`,
        yellow: `90%`,
        black: `10%`,

    },
    {
        name: `Cobalt`,
        hex: `#004dbf`,
        red: 0,
        green: 77,
        blue: 191,
        cyan: `75%`,
        magenta:`45%`,
        yellow: `0%`,
        black: `25%`,

    },
    {
        name: `Dark Cerulean`,
        hex: `#003380`,
        red: 0,
        green: 51,
        blue: 128,
        cyan: `50%`,
        magenta:`30%`,
        yellow: `0%`,
        black: `50%`,

    },
    {
        name: `Tangaroa`,
        hex: `#001a40`,
        red: 0,
        green: 26,
        blue: 64,
        cyan: `25%`,
        magenta:`15%`,
        yellow: `0%`,
        black: `75%`,

    },
    {
        name: `Navy`,
        hex: `#005ce6`,
        red: 0,
        green: 92,
        blue: 230,
        cyan: `90%`,
        magenta:`54%`,
        yellow: `0%`,
        black: `10%`,

    },

]
const grayScale = [
    {
        name: `Dark Gray`,
        hex: `#332e30`,
        red: 51,
        green: 46,
        blue: 48,
        cyan: `0%`,
        magenta:`2%`,
        yellow: `1%`,
        black: `80%`,

    },
    {
        name: `Light Gray`,
        hex: `#cccccc`,
        red: 204,
        green: 204,
        blue: 204,
        cyan: `0%`,
        magenta:`0%`,
        yellow: `0%`,
        black: `20%`,

    },

]


const ColorsPage = () => (

    <Layout>
        <SEO title="Brand Colors" />
        <h1><strong>Brand Colors</strong></h1>
        <h2 className={`color-header`}><strong>Primary Colors</strong></h2>
        <hr />
        <div className={`swatch-list`}>
            {primaryColors.map(color => (
                <ColorSwatch hex={color.hex} rgb={String(color.red) + ` ` + String(color.green) + ` ` + String(color.blue)} title={color.name} cmyk={`C ` + color.cyan + ` M ` + color.magenta + ` Y ` + color.yellow + ` K ` + color.black} />
                ))}
        </div>
        <h2 className={`color-header`}><strong>Secondary Colors</strong></h2>
        <hr />
        <div className={`swatch-list`}>
        {secondaryColors.map(color => (
            <ColorSwatch hex={color.hex} rgb={String(color.red) + ` ` + String(color.green) + ` ` + String(color.blue)} title={color.name} cmyk={`C ` + color.cyan + ` M ` + color.magenta + ` Y ` + color.yellow + ` K ` + color.black} />
        ))}
        </div>
        <h2 className={`color-header`}><strong>Grayscale</strong></h2>
        <hr />
        <div className={`swatch-list`}>
            {grayScale.map(color => (
                <ColorSwatch hex={color.hex} rgb={String(color.red) + ` ` + String(color.green) + ` ` + String(color.blue)} title={color.name} cmyk={`C ` + color.cyan + ` M ` + color.magenta + ` Y ` + color.yellow + ` K ` + color.black} />
            ))}
        </div>
    </Layout>
)

export default ColorsPage
