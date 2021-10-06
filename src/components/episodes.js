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

            h2 {
                background-color: ${theme.colors.black};
                font-size: 24px;
                line-height: 32px;
                padding: 0 10px 20px;

                @media all and (min-width: ${theme.breakpoint.tablet}) {
                    padding: 0 10px;
                    position: absolute;
                    top: -14px;
                }
            }
        `}
        id="episodes"
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
                <h2>Trailer</h2>
                <iframe src="https://open.spotify.com/embed/episode/78L5LeOWvJJNH43inTE5bx" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Fear is the Mind Killer trailer"></iframe>
            </div>
            <div
                css={css`
                    border: 1px solid ${theme.colors.white};
                    border-radius: 5px;
                    margin-top: 40px;
                    padding: 20px;
                    position: relative;
                `}
            >
                <h2>Episode 1: Sarah Elizabeth and Scopophobia</h2>
                <iframe src="https://open.spotify.com/embed/episode/5puXg43g2y3lykstyNeAuK" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Fear is the Mind Killer episode 1 with guest Sarah Elizabeth"></iframe>
            </div>
            <div
                css={css`
                    border: 1px solid ${theme.colors.white};
                    border-radius: 5px;
                    margin-top: 40px;
                    padding: 20px;
                    position: relative;
                `}
            >
                <h2>Episode 2: Peter Bebergal and the Power of Signs and Symbols</h2>
                <iframe src="https://open.spotify.com/embed/episode/1jlu9f5adZtw3VBgqdog91" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="encrypted-media" title="Episode 2: Peter Bebergal and the Power of Signs and Symbols"></iframe>
            </div>
        </div>
    </section>
)

export default Episodes