import React from "react"
import Image from "./image";

import "../styles/logo-example.min.css"

const LogoExample = (props) => {
    return (

        <div className={`logo-example`}>
            <div className={`logo-example-image`}>
            <Image src={props.src} alt={props.alt} />
        </div>
            <h4 className={`rule-title`}><strong>{props.rule}</strong></h4>
            <hr className={`rule-hr`} />
            <div classname={`logo-example-description`}>
                {props.desription}
            </div>
        </div>
    );
}
export default LogoExample

