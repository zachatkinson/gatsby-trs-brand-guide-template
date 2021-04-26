/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"


import "./layout.css"
import "../styles/main.min.css"
import "../styles/burger-menu.min.css"

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                    }
                }
            }
        }
    `)

    return (
        <>
            <div id={`outer-container`}>
                <Sidebar menuLinks={data.site.siteMetadata.menuLinks} />
                <div id={`page-wrap`}>
                    <Header siteTitle={data.site.siteMetadata?.title || `Title`}  />
                    <div
                        style={{
                            margin: `0 auto`,
                            maxWidth: 1200,
                            padding: `0 1.0875rem 1.45rem`,
                        }}
                    >
                        <main>{children}</main>

                    </div>
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
