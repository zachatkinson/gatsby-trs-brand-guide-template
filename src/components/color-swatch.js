import React from "react"


import "../styles/color-swatch.min.css"

const ColorSwatch = (props) => {
    return (

        <div className={`color-swatch`}>
            <div className={`color-visual`} style={{backgroundColor: props.hex}}></div>
            <div className={`color-title`}>
                <strong><em>{props.title}</em></strong>
            </div>
            <div className={`color-hex`}>
                <span className={`light-text`} >HEX: </span>
                {props.hex}
            </div>
            <div className={`color-rgb`}>
                <span className={`light-text`} >RGB: </span>
                {props.rgb}
            </div>
            <div className={`color-cmyk`}>
                <span className={`light-text`} >CMYK: </span>
                {props.cmyk}
            </div>
        </div>
    )
}
export default ColorSwatch