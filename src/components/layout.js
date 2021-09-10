/** @jsxRuntime classic */
/** @jsx jsx */
import { 
  css,
  Global,
  jsx
} from '@emotion/react'
import emotionReset from 'emotion-reset'
import * as React from "preact"
import theme from '../theme'
import Menu from './menu'

const Layout = ({ children }) => {
  return (
    <>
        <Global
            styles={css`
                ${emotionReset}

                *,
                *:before,
                *:after {
                    box-sizing: border-box;
                }

                html {
                    background-color: ${theme.colors.black};
                    color: #fff;
                }

                .gatsby-image-wrapper {
                    height: 100vh;
                    left: 50%;
                    position: absolute;;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                }

                a {
                    color: ${theme.colors.white};
                    transition: color 0.2s linear;

                    &:hover,
                    &:active {
                        color: ${theme.colors.red};
                    }
                }

                .screen-reader-text {
                    border: 0;
                    clip: rect(1px, 1px, 1px, 1px);
                    clip-path: inset(50%);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                    word-wrap: normal !important;
                }
            `}
        />
        <main
            css={css`
                height: 100vh;
                overflow-y: scroll;
                scroll-snap-type: y mandatory;
            `}
            id="main"
        >
            <Menu />
            {children}
        </main>
    </>
  )
}

export default Layout
