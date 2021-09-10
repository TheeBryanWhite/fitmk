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
            {children}
        </main>
    </>
  )
}

export default Layout
