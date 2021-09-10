/** @jsxRuntime classic */
/** @jsx jsx */
import { 
    css,
    jsx
} from '@emotion/react'
import * as React from "preact"
import theme from '../theme'

const Episodes = () => (
    <section
        css={css`
            background-color: ${theme.colors.black};
            font-family: ${theme.fonts.noto};
            min-height: 100vh;
            padding: 40px 0;
            position: relative;
            scroll-snap-align: start;
        `}
    >
        <div
            css={css`
                margin: 0 auto;
                max-width: 1440px;
                padding: 0 2rem;
            `}
        >
            <h1
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
                        line-height: 7vw;
                        margin: 40px 0;
                    }
                `}
            >
                Episodes
            </h1>

            <div
                css={css`
                    border: 1px solid ${theme.colors.white};
                    border-radius: 5px;
                    padding: 20px;
                    position: relative;
                `}
            >
                <h1
                    css={css`
                        background-color: ${theme.colors.black};
                        font-size: 24px;
                        padding: 0 10px;
                        position: absolute;
                        top: -14px;
                    `}
                >
                    Trailer
                </h1>
                <iframe src="https://open.spotify.com/embed/episode/78L5LeOWvJJNH43inTE5bx" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Fear is the Mind Killer trailer"></iframe>
            </div>
            {/* 
            <ul
                css={css`
                    li {
                        margin-top: 40px;
                    }
                `}
            >
                <li><iframe src="https://open.spotify.com/embed/episode/78L5LeOWvJJNH43inTE5bx" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
            </ul> */}
        </div>
    </section>
)

export default Episodes