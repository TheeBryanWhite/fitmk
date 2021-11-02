/** @jsxRuntime classic */
/** @jsx jsx */
import { 
    css,
    jsx
} from '@emotion/react'
import * as React from "preact"
import theme from '../theme'
import { useStaticQuery, graphql } from 'gatsby'
import { Image1 } from '../components/fitmk'

const Hero = () => {
    const data = useStaticQuery(graphql`
        query HeroTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <section
            css={css`
                height: 100vh;
                position: relative;
            `}
        >
            <Image1 />
            <h1
                css={css`
                    color: white;
                    font-family: ${theme.fonts.youmurderer};
                    font-size: 15vw;
                    left: 50%;
                    padding: 0 10%;
                    position: absolute;
                    text-align: center;
                    text-transform: lowercase;
                    bottom: 10%;
                    transform: translateX(-50%);
                    width: 100%;
                    z-index: 1;

                    @media all and (min-width: ${theme.breakpoint.tablet}) {
                        font-size: 12vw;
                    }

                    @media all and (min-width: ${theme.breakpoint.desktop}) {
                        font-size: 8vw;
                    }
                `}
            >
                {data.site.siteMetadata.title}
            </h1>
        </section>
    )
}

export default Hero