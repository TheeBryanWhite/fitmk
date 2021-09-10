/** @jsxRuntime classic */
/** @jsx jsx */
import { 
    css,
    jsx
} from '@emotion/react'
import * as React from "preact"
import theme from '../theme'
import { Link } from 'react-scroll'
import { ReactComponent as Spotify } from '../svg/spotify.svg'
import { ReactComponent as ApplePod } from '../svg/apple-podcasts.svg'

const Menu = () => {
    return (
        <nav
            css={css`
                background-color: ${theme.colors.black50};
                border-radius: 50px;
                padding: 5px 15px 5px 25px; 
                position: fixed;
                left: 50%;
                top: 25px;
                transform: translateX(-50%);
                z-index: 5;

                @media all and (min-width: ${theme.breakpoint.mobileLg}) {
                    left: auto;
                    right: 25px;
                    transform: none;
                }
            `}
        >
            <ul
                css={css`
                    align-items: center;
                    display: flex;
                    font-family: ${theme.fonts.noto};
                    width: 100%;

                    svg {
                        height: 30px;
                        width: 30px;

                        @media all and (min-width: ${theme.breakpoint.desktop}) {
                            height: 50px;
                            width: 50px;
                        }
                    }
                `}
            >
                <li
                    css={css`
                            flex: 1 1 auto;
                            margin-right: 15px;
                            text-align: right;
                    `}
                >
                    Subscribe on: 
                </li>
                <li>
                    <a
                        css={css`
                            display: inline-block;
                            flex: 1 1 auto;
                            padding: 10px;
                        `}
                        href="https://open.spotify.com/show/6Tre9YVARzPmKGvKMoesE4?si=toBZQ7SzQCWI_NKLWGXVmQ&dl_branch=1"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <span className="screen-reader-text">Subscribe to Fear is the Mind Killer on Spotify</span>
                        <Spotify />
                    </a>
                </li>
                <li>
                    <a
                        css={css`
                            display: inline-block;
                            flex: 1 1 auto;
                            padding: 10px;
                        `}
                        href="https://podcasts.apple.com/us/podcast/fear-is-the-mind-killer/id1585075153"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <span className="screen-reader-text">Subscribe to Fear is the Mind Killer on Apple Podcasts</span>
                        <ApplePod />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu