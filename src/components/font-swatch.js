import React from "react"


import "../styles/font-swatch.min.css"

const FontSwatch = (props) => {
    const fontStyling = {
        fontWeight: props.weight,
        fontStyle: props.italic,
        fontFamily: props.font,
    }
    return (

        <div className={`font-swatch`}>
            <h2 className={`font-title`}>
                <strong>{props.name}</strong>
            </h2>
            <hr/>
            <p className={`typography-sample`} style={fontStyling}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a
                b c d e f g h i j k l m n o p q r s t u v w x y z 1 2 3 4 5 6 7 8 9 0 ( ! ? & % $ . , ; : )
            </p>
            <p className={`typography-sample`} style={fontStyling}>The quick brown fox jumps over the lazy dog.</p>
        </div>
    );
}
export default FontSwatch

FontSwatch.defaultProps = {
    weight: `400`,
    italic: null,
    font: `inherit`,
}