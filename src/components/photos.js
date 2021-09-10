/** @jsxRuntime classic */
/** @jsx jsx */
import { 
    css,
    jsx
} from '@emotion/react'
import * as React from "preact"
import { useStaticQuery, graphql } from 'gatsby'
import theme from '../theme'

const Photos = () => {
    const data = useStaticQuery(graphql`
        query FooterTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    const theDate = new Date()
    const theYear = theDate.getFullYear()
    
    return (
        <section
            css={css`
            background-color: ${theme.colors.black};
            font-family: ${theme.fonts.noto};
            height: 100vh;
            position: relative;
            scroll-snap-align: start;
        `}
        >
            <div
                css={css`
                left: 50%;
                max-width: 1440px;
                padding: 0 2rem;
                position: absolute;
                top: 45%;
                transform: translate(-50%, -50%);
                width: 100%;
            `}
            >
                <h2
                    css={css`
                        border-bottom: 1px solid ${theme.colors.white};
                        font-size: 10vw;
                        line-height: 13vw;
                        margin: 40px 0 20px;
                        padding-bottom: 15px;
                        text-align: center;

                        @media all and (min-width: ${theme.breakpoint.tablet}) {
                            font-size: 7vw;
                            line-height: 10vw;
                        }

                        @media all and (min-width: ${theme.breakpoint.desktop}) {
                            font-size: 5vw;
                            line-height: 5vw;
                        }
                    `}
                >
                    Photo Credits
                </h2>
                <ul
                    css={css`
                    text-align: center;
                    
                    li {
                        font-size: 4vw;
                        line-height: 4vw;
                        margin-top: 20px;

                        @media all and (min-width: ${theme.breakpoint.tablet}) {
                            font-size: 3vw;
                        }

                        @media all and (min-width: ${theme.breakpoint.desktop}) {
                            font-size: 2vw;
                            line-height: 3vw;
                        }
                    }
                `}
                >
                    <li>Terrifying clown child by <a href="https://unsplash.com/@zacharykadolph" target="_blank" rel="nofollow noopener noreferrer">Zachary Kadolph</a></li>
                    <li>Spooky girls in mist by <a href="https://unsplash.com/@kmitchhodge" target="_blank" rel="nofollow noopener noreferrer">K. Mitch Hodge</a></li>
                    <li>Hanging from a cliff by <a href="https://unsplash.com/@dallehj" target="_blank" rel="nofollow noopener noreferrer">Daniel Jensen</a></li>
                    <li>Haunted house by <a href="https://unsplash.com/@janjakubnanista" target="_blank" rel="nofollow noopener noreferrer">Ján Jakub Naništa</a></li>
                    <li>Silhouette by <a href="https://unsplash.com/@stefanopollio" target="_blank" rel="nofollow noopener noreferrer">Stefano Pollio</a></li>
                </ul>
                <p
                    css={css`
                    font-size: 4vw;
                    line-height: 8vw;
                    margin-top: 40px;
                    text-align: center;

                    @media all and (min-width: ${theme.breakpoint.tablet}) {
                        font-size: 3vw;
                        line-height: 6vw;
                    }

                    @media all and (min-width: ${theme.breakpoint.desktop}) {
                        font-size: 2vw;
                        line-height: 3vw;
                    }
                `}
                >
                    Photos available on <a href="https://unsplash.com/" target="_blank" rel="nofollow noopener noreferrer">Unsplash</a> because stock photos suck.
                </p>
            </div>
            <div
                css={css`
                background-color: ${theme.colors.red};
                bottom: 0;
                color; ${theme.colors.white};
                padding: 20px 0;
                position: absolute;
                text-align: center;
                width: 100%;
            `}
            >
                <p>{`© ${theYear} // ${data.site.siteMetadata.title} // All rights reserved`}</p>
            </div>
        </section>
    )
}

export default Photos