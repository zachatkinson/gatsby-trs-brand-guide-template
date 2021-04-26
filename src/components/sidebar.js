import React from "react"
import { push as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import Logo from "../svg/logo.inline.svg"
import Icon from "../svg/menu.inline.svg"

const SideBar = ({menuLinks}) => {
    return(
        <Menu customBurgerIcon={<Icon />}  pageWrapId={ `page-wrap` } outerContainerId={ `outer-container` }>
            <Logo className={`logo-test`}/>
            {menuLinks.map( link => (
                <Link className={`nav-link`} to={link.link}>
                    {link.name}
                </Link>
            ))}
        </Menu>
    )
}


export default SideBar